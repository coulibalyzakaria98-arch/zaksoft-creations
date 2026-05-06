import express from 'express';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import { templateManager } from './services/templateManager';
import { searchEngine } from './services/searchEngine';
import { authenticate, AuthRequest } from './middleware/auth';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const redisOptions = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
};
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);

const importQueue = new Queue('template-import', { 
  connection: redis,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: true
  }
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Health check (avant auth)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'marketplace' });
});

// ============ ENDPOINTS PUBLICS ============

app.get('/templates', async (req, res) => {
  const { page = 1, limit = 20, type, sort = 'popular', search, category } = req.query;
  
  try {
    const templates = await searchEngine.search({
      page: Number(page),
      limit: Number(limit),
      type: type as string,
      sort: sort as string,
      search: search as string,
      category: category as string
    });
    
    res.json(templates);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/templates/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const template = await templateManager.getTemplate(id);
    if (!template) return res.status(404).json({ error: 'Template not found' });
    res.json(template);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: { _count: { select: { templates: true } } }
    });
    res.json(categories);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// ============ ENDPOINTS PRIVÉS (Authentifiés) ============

app.post('/templates', authenticate, async (req: AuthRequest, res) => {
  try {
    const { name, description, type, config, thumbnail, isPublic = true, price = 0 } = req.body;
    const userId = req.user?.userId;
    
    if (!userId) return res.status(401).json({ error: "Utilisateur non identifié" });
    if (!name || !type || !config) {
      return res.status(400).json({ error: "Nom, type et config requis" });
    }

    const template = await templateManager.createTemplate({
      name,
      description,
      type,
      config,
      thumbnail,
      isPublic,
      price,
      authorId: userId
    });
    
    console.log(`[Marketplace] Nouveau template créé : ${template.id} par ${userId}`);
    res.status(201).json(template);
  } catch (error: any) {
    console.error('Erreur création template:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/templates/:id/import', authenticate, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.userId;
    
    if (!userId) return res.status(401).json({ error: "Utilisateur non identifié" });

    const job = await importQueue.add('import', { templateId: id, userId });
    
    res.json({ 
      jobId: job.id, 
      status: 'queued',
      message: 'Import du template en cours'
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Marketplace service running on port ${PORT}`));
