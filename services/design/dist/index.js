import * as Sentry from "@sentry/node";
import express from 'express';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import cors from 'cors';
import dotenv from 'dotenv';
// Charger les variables d'environnement
dotenv.config();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV || 'development',
});
import { metricsApp, setupBullMQMetrics } from './metrics';
import { authenticate } from './middleware/auth';
import { healthCheck } from '@zaksoft/health';
import logger from '@zaksoft/logging';
import { PrismaClient } from '@zaksoft/database';
const prisma = new PrismaClient();
const app = express();
// The request handler must be the first middleware on the app
Sentry.setupExpressErrorHandler(app);
const port = process.env.PORT || 3003;
// Configuration Redis
const redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
// File d'attente BullMQ
const imageQueue = new Queue('image-generation', {
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
setupBullMQMetrics(imageQueue);
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
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
// Health check (avant auth)
app.get('/health', (req, res) => {
    res.json(healthCheck('design', '1.0.0'));
});
// Monter les métriques (avant auth pour le monitoring)
app.use(metricsApp);
// Normaliser les requêtes Vercel sous /_/design pour que l'Express route correctement
app.use((req, res, next) => {
    if (req.url.startsWith('/_/design')) {
        req.url = req.url.replace('/_/design', '');
    }
    next();
});
// Appliquer l'authentification sur les routes de génération
app.use('/image', authenticate);
const CREDITS_COST = 1;
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
                type: 'IMAGE',
                userId,
                status: 'PENDING',
                input: { prompt, options },
                creditsCost: CREDITS_COST,
            }
        });
        // 3. Ajouter à la file BullMQ
        await imageQueue.add('generate', {
            jobId: dbJob.id,
            prompt,
            options,
            userId,
            timestamp: new Date().toISOString()
        }, {
            jobId: dbJob.id // Use same ID for tracking
        });
        res.status(202).json({
            jobId: dbJob.id,
            status: 'queued',
            message: 'Demande de génération enregistrée'
        });
    }
    catch (error) {
        logger.error('Erreur génération image:', { error });
        res.status(500).json({ error: 'Erreur lors du traitement de la demande' });
    }
});
/**
 * GET /image/status/:jobId
 * Récupère le statut et le résultat d'un job
 */
app.get('/image/status/:jobId', async (req, res) => {
    try {
        const { jobId } = req.params;
        // Priorité à la base de données pour le statut final
        const dbJob = await prisma.job.findUnique({
            where: { id: jobId },
            include: { image: true }
        });
        if (!dbJob) {
            return res.status(404).json({ error: 'Job non trouvé' });
        }
        if (dbJob.status === 'COMPLETED') {
            return res.json({
                id: dbJob.id,
                status: 'completed',
                progress: 100,
                url: dbJob.image?.imageUrl || null
            });
        }
        if (dbJob.status === 'FAILED') {
            return res.json({
                id: dbJob.id,
                status: 'failed',
                error: dbJob.error
            });
        }
        // Si pas terminé, on peut checker BullMQ pour la progression temps réel
        const bullJob = await imageQueue.getJob(jobId);
        res.json({
            id: dbJob.id,
            status: dbJob.status.toLowerCase(),
            progress: bullJob?.progress || dbJob.progress,
            url: null
        });
    }
    catch (error) {
        logger.error('Erreur récupération statut:', { error });
        res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
    }
});
app.listen(port, () => {
    logger.info('Design service started', { port });
});
