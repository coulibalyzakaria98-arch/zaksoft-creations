"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const metrics_1 = require("./metrics");
const auth_1 = require("./middleware/auth");
// Charger les variables d'environnement
dotenv_1.default.config();
const app = (0, express_1.default)();
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
// Health check (avant auth)
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'web-gen' });
});
// Monter les métriques
app.use(metrics_1.metricsApp);
// Sécurisation
app.use('/web', auth_1.authenticate);
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
        const job = await webGenQueue.add('generate', {
            prompt,
            siteConfig,
            userId
        });
        console.log(`[WebGen] Job ${job.id} ajouté pour l'utilisateur ${userId}`);
        res.status(202).json({ jobId: job.id, status: 'queued' });
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
        const job = await webGenQueue.getJob(jobId);
        if (!job) {
            return res.status(404).json({ error: 'Job non trouvé' });
        }
        const state = await job.getState();
        const result = job.returnvalue;
        res.json({
            id: job.id,
            status: state,
            url: result?.url || null,
            error: state === 'failed' ? job.failedReason : null
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Erreur' });
    }
});
app.listen(port, () => {
    console.log(`Web Gen service running on port ${port}`);
});
