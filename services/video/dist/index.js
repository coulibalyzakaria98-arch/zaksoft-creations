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
dotenv_1.default.config();
const app = (0, express_1.default)();
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
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'video' });
});
app.use(metrics_1.metricsApp);
// Sécurisation des routes
app.use('/video', auth_1.authenticate);
app.post('/video/generate', async (req, res) => {
    try {
        const { prompt, imageUrl, engine, options } = req.body;
        const userId = req.user?.userId;
        if (!prompt && !imageUrl) {
            return res.status(400).json({ error: 'Prompt ou ImageUrl requis' });
        }
        const job = await videoQueue.add('generate', {
            prompt,
            imageUrl,
            engine: engine || 'runway',
            options,
            userId
        });
        res.status(202).json({ jobId: job.id, status: 'queued' });
    }
    catch (error) {
        console.error('Erreur vidéo generate:', error);
        res.status(500).json({ error: 'Erreur interne' });
    }
});
app.get('/video/status/:jobId', async (req, res) => {
    try {
        const { jobId } = req.params;
        const job = await videoQueue.getJob(jobId);
        if (!job)
            return res.status(404).json({ error: 'Job non trouvé' });
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
    console.log(`Video service running on port ${port}`);
});
