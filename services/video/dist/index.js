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
const health_1 = require("@zaksoft/health");
const logging_1 = __importDefault(require("@zaksoft/logging"));
const database_1 = require("@zaksoft/database");
const prisma = new database_1.PrismaClient();
const app = (0, express_1.default)();
// The request handler must be the first middleware on the app
Sentry.setupExpressErrorHandler(app);
const port = process.env.PORT || 3002;
const redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
const videoQueue = new bullmq_1.Queue('video-generation', {
    connection: redis,
    defaultJobOptions: {
        attempts: 2,
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: true
    }
});
// Initialiser les métriques BullMQ
(0, metrics_1.setupBullMQMetrics)(videoQueue);
const corsOriginRaw = process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:3001,https://zaksoft-creations.vercel.app,https://*.vercel.app';
const allowedOrigins = corsOriginRaw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .map((origin) => {
    if (origin === '*') {
        return origin;
    }
    if (origin.startsWith('/') && origin.endsWith('/')) {
        return new RegExp(origin.slice(1, -1));
    }
    if (origin.includes('*')) {
        const escaped = origin
            .split('*')
            .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('.*');
        return new RegExp(`^${escaped}$`);
    }
    return origin;
});
app.use((0, cors_1.default)({ origin: allowedOrigins, credentials: true }));
app.use(express_1.default.json());
app.get('/health', (req, res) => {
    res.json((0, health_1.healthCheck)('video', '1.0.0'));
});
app.use(metrics_1.metricsApp);
// Sécurisation des routes
app.use('/video', auth_1.authenticate);
const CREDITS_COST = 5;
app.post('/video/generate', async (req, res) => {
    try {
        const { prompt, imageUrl, engine, options } = req.body;
        const userId = req.user?.userId;
        if (!prompt && !imageUrl) {
            return res.status(400).json({ error: 'Prompt ou ImageUrl requis' });
        }
        if (!userId) {
            return res.status(401).json({ error: 'Utilisateur non identifié' });
        }
        // 1. Vérifier les crédits
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { credits: true }
        });
        if (!user || user.credits < CREDITS_COST) {
            return res.status(402).json({ error: 'Crédits insuffisants' });
        }
        // 2. Créer le job en base
        const dbJob = await prisma.job.create({
            data: {
                type: 'VIDEO',
                userId,
                status: 'PENDING',
                input: { prompt, imageUrl, engine, options },
                creditsCost: CREDITS_COST,
            }
        });
        // 3. Ajouter à la file BullMQ
        await videoQueue.add('generate', {
            jobId: dbJob.id,
            prompt,
            imageUrl,
            engine: engine || 'runway',
            options,
            userId
        }, {
            jobId: dbJob.id
        });
        res.status(202).json({ jobId: dbJob.id, status: 'queued' });
    }
    catch (error) {
        logging_1.default.error('Erreur vidéo generate:', { error });
        res.status(500).json({ error: 'Erreur interne lors du lancement de la vidéo' });
    }
});
app.get('/video/status/:jobId', async (req, res) => {
    try {
        const { jobId } = req.params;
        const dbJob = await prisma.job.findUnique({
            where: { id: jobId },
            include: { video: true }
        });
        if (!dbJob)
            return res.status(404).json({ error: 'Job non trouvé' });
        if (dbJob.status === 'COMPLETED') {
            return res.json({
                id: dbJob.id,
                status: 'completed',
                url: dbJob.video?.videoUrl || null
            });
        }
        if (dbJob.status === 'FAILED') {
            return res.json({
                id: dbJob.id,
                status: 'failed',
                error: dbJob.error
            });
        }
        const bullJob = await videoQueue.getJob(jobId);
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
    logging_1.default.info('Video service started', { port });
});
