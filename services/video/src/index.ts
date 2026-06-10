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
import { authenticate, AuthRequest } from './middleware/auth';
import { healthCheck } from '@zaksoft/health';
import logger from '@zaksoft/logging';
import { PrismaClient } from '@zaksoft/database';

const prisma = new PrismaClient();
const app = express();

// The request handler must be the first middleware on the app
Sentry.setupExpressErrorHandler(app);

const port = process.env.PORT || 3002;

const redisOptions = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
};
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);

const videoQueue = new Queue('video-generation', { 
  connection: redis,
  defaultJobOptions: {
    attempts: 2,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: true
  }
});

// Initialiser les métriques BullMQ
setupBullMQMetrics(videoQueue);

const corsOriginRaw = process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:3001,https://zaksoft-creations.vercel.app,https://*.vercel.app';

const allowedOrigins: Array<string | RegExp> = corsOriginRaw
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

app.get('/health', (req, res) => {
  res.json(healthCheck('video', '1.0.0'));
});

app.use(metricsApp);

// Sécurisation des routes
app.use('/video', authenticate);

const CREDITS_COST = 5;

app.post('/video/generate', async (req: AuthRequest, res) => {
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
  } catch (error) {
    logger.error('Erreur vidéo generate:', { error });
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
    
    if (!dbJob) return res.status(404).json({ error: 'Job non trouvé' });

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
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
  }
});

app.listen(port, () => {
  logger.info('Video service started', { port });
});
