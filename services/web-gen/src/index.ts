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
import { PrismaClient } from '@zaksoft/database';

const prisma = new PrismaClient();
const app = express();

// The request handler must be the first middleware on the app
Sentry.setupExpressErrorHandler(app);

const port = process.env.PORT || 3004;

const redisOptions = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
};
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);

const webGenQueue = new Queue('web-generation', { 
  connection: redis,
  defaultJobOptions: {
    attempts: 2,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: true
  }
});

// Initialiser les métriques BullMQ
setupBullMQMetrics(webGenQueue);

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'web-gen' });
});

// Monter les métriques
app.use(metricsApp);

// Sécurisation
app.use('/web', authenticate);

const CREDITS_COST = 15;

/**
 * POST /web/generate
 */
app.post('/web/generate', async (req: AuthRequest, res) => {
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
  } catch (error) {
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
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
  }
});

app.listen(port, () => {
  console.log(`Web Gen service running on port ${port}`);
});
