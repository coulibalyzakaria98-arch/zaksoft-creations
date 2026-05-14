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
const port = process.env.PORT || 3003;
// Configuration Redis
const redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
// File d'attente BullMQ
const imageQueue = new bullmq_1.Queue('image-generation', {
    connection: redis,
    defaultJobOptions: {
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 1000
        },
        removeOnComplete: true
    }
});
// Initialiser les métriques BullMQ
(0, metrics_1.setupBullMQMetrics)(imageQueue);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check (avant auth)
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'design' });
});
// Monter les métriques (avant auth pour le monitoring)
app.use(metrics_1.metricsApp);
// Normaliser les requêtes Vercel sous /_/design pour que l'Express route correctement
app.use((req, res, next) => {
    if (req.url.startsWith('/_/design')) {
        req.url = req.url.replace('/_/design', '');
    }
    next();
});
// Appliquer l'authentification sur les routes de génération
app.use('/image', auth_1.authenticate);
/**
 * POST /image/generate
 * Déclenche une génération d'image via IA
 */
app.post('/image/generate', async (req, res) => {
    try {
        const { prompt, options } = req.body;
        const userId = req.user?.userId;
        if (!prompt) {
            return res.status(400).json({ error: 'Le prompt est requis' });
        }
        const job = await imageQueue.add('generate', {
            prompt,
            options,
            userId,
            timestamp: new Date().toISOString()
        });
        res.status(202).json({
            jobId: job.id,
            status: 'queued',
            message: 'Demande de génération enregistrée'
        });
    }
    catch (error) {
        console.error('Erreur génération image:', error);
        res.status(500).json({ error: 'Erreur lors de la mise en file d\'attente du job' });
    }
});
/**
 * GET /image/status/:jobId
 * Récupère le statut et le résultat d'un job
 */
app.get('/image/status/:jobId', async (req, res) => {
    try {
        const { jobId } = req.params;
        const job = await imageQueue.getJob(jobId);
        if (!job) {
            return res.status(404).json({ error: 'Job non trouvé' });
        }
        const state = await job.getState();
        const result = job.returnvalue;
        const progress = job.progress;
        res.json({
            id: job.id,
            status: state,
            progress,
            url: result?.url || null,
            error: state === 'failed' ? job.failedReason : null
        });
    }
    catch (error) {
        console.error('Erreur récupération statut:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
    }
});
app.listen(port, () => {
    console.log(`Design service running on port ${port}`);
});
