import express from 'express';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import cors from 'cors';
import dotenv from 'dotenv';
import { metricsApp } from './metrics';
import { authenticate, AuthRequest } from './middleware/auth';

// Charger les variables d'environnement
dotenv.config();

const app = express();
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

app.use(cors());
app.use(express.json());

// Health check (avant auth)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'web-gen' });
});

// Monter les métriques
app.use(metricsApp);

// Sécurisation
app.use('/web', authenticate);

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

    const job = await webGenQueue.add('generate', { 
      prompt, 
      siteConfig,
      userId 
    });
    
    console.log(`[WebGen] Job ${job.id} ajouté pour l'utilisateur ${userId}`);
    
    res.status(202).json({ jobId: job.id, status: 'queued' });
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
  } catch (error) {
    res.status(500).json({ error: 'Erreur' });
  }
});

app.listen(port, () => {
  console.log(`Web Gen service running on port ${port}`);
});
