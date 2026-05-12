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

app.use(cors());
app.use(express.json());

// Health check (avant auth)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'design' });
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

/**
 * POST /image/generate
 * Déclenche une génération d'image via IA
 */
app.post('/image/generate', async (req: AuthRequest, res) => {
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
  } catch (error) {
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
  } catch (error) {
    console.error('Erreur récupération statut:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
  }
});

app.listen(port, () => {
  console.log(`Design service running on port ${port}`);
});
