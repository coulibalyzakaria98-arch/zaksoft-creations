import express from 'express';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import cors from 'cors';
import dotenv from 'dotenv';
import { metricsApp } from './metrics';
import { authenticate, AuthRequest } from './middleware/auth';

dotenv.config();

const app = express();
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

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'video' });
});

app.use(metricsApp);

// Sécurisation des routes
app.use('/video', authenticate);

app.post('/video/generate', async (req: AuthRequest, res) => {
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
  } catch (error) {
    console.error('Erreur vidéo generate:', error);
    res.status(500).json({ error: 'Erreur interne' });
  }
});

app.get('/video/status/:jobId', async (req, res) => {
  try {
    const { jobId } = req.params;
    const job = await videoQueue.getJob(jobId);
    
    if (!job) return res.status(404).json({ error: 'Job non trouvé' });

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
  console.log(`Video service running on port ${port}`);
});
