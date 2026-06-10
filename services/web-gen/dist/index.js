"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = __importStar(require("@sentry/node"));
const express_1 = __importDefault(require("express"));
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Charger les variables d'environnement
dotenv_1.default.config();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV || 'development',
});
const metrics_1 = require("./metrics");
const auth_1 = require("./middleware/auth");
const database_1 = require("@zaksoft/database");
const prisma = new database_1.PrismaClient();
const app = (0, express_1.default)();
// The request handler must be the first middleware on the app
Sentry.setupExpressErrorHandler(app);
const port = process.env.PORT || 3004;
const redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
const webGenQueue = new bullmq_1.Queue('web-generation', {
    connection: redis,
    defaultJobOptions: {
        attempts: 2,
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: true
    }
});
// Initialiser les métriques BullMQ
(0, metrics_1.setupBullMQMetrics)(webGenQueue);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'web-gen' });
});
// Monter les métriques
app.use(metrics_1.metricsApp);
// Sécurisation
app.use('/web', auth_1.authenticate);
const CREDITS_COST = 15;
/**
 * POST /web/generate
 */
app.post('/web/generate', async (req, res) => {
    try {
        const { prompt, siteConfig } = req.body;
        const userId = req.user?.userId;
        if (!prompt) {
            return res.status(400).json({ error: 'Le prompt est requis' });
        }
        if (!userId) {
            return res.status(401).json({ error: 'Utilisateur non authentifié' });
        }
        // 1. Vérifier les crédits
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { credits: true }
        });
        if (!user || user.credits < CREDITS_COST) {
            return res.status(402).json({ error: 'Crédits insuffisants' });
        }
        // 2. Créer le job en BDD
        const dbJob = await prisma.job.create({
            data: {
                type: 'WEBSITE',
                userId,
                status: 'PENDING',
                input: { prompt, siteConfig },
                creditsCost: CREDITS_COST,
            }
        });
        // 3. Ajouter à la file
        await webGenQueue.add('generate', {
            jobId: dbJob.id,
            prompt,
            siteConfig,
            userId
        }, {
            jobId: dbJob.id
        });
        console.log(`[WebGen] Job ${dbJob.id} ajouté pour l'utilisateur ${userId}`);
        res.status(202).json({ jobId: dbJob.id, status: 'queued' });
    }
    catch (error) {
        console.error('Erreur WebGen generate:', error);
        res.status(500).json({ error: 'Erreur interne' });
    }
});
/**
 * GET /web/status/:jobId
 */
app.get('/web/status/:jobId', async (req, res) => {
    try {
        const { jobId } = req.params;
        const dbJob = await prisma.job.findUnique({
            where: { id: jobId },
            include: { website: true }
        });
        if (!dbJob) {
            return res.status(404).json({ error: 'Job non trouvé' });
        }
        if (dbJob.status === 'COMPLETED') {
            return res.json({
                id: dbJob.id,
                status: 'completed',
                url: dbJob.website?.previewUrl || null,
                websiteId: dbJob.website?.id,
                code: dbJob.website?.code
            });
        }
        if (dbJob.status === 'FAILED') {
            return res.json({
                id: dbJob.id,
                status: 'failed',
                error: dbJob.error
            });
        }
        const bullJob = await webGenQueue.getJob(jobId);
        res.json({
            id: dbJob.id,
            status: dbJob.status.toLowerCase(),
            progress: bullJob?.progress || dbJob.progress,
            url: null
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
    }
});
app.listen(port, () => {
    console.log(`Web Gen service running on port ${port}`);
});
