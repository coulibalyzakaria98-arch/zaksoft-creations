import { Worker } from 'bullmq';
import axios from 'axios';
import IORedis from 'ioredis';
import dotenv from 'dotenv';
import { storageService } from '@zaksoft/storage';
import { PrismaClient } from '@zaksoft/database';

dotenv.config();

const prisma = new PrismaClient();
const redisOptions = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
};
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);

interface SVDBridgeConfig {
  url: string; // ex: http://svd-local:7860
}

// Coût en crédits par génération vidéo SVD
const CREDITS_COST = 5;

class SVDWorker {
  private config: SVDBridgeConfig;
  
  constructor(config: SVDBridgeConfig) {
    this.config = config;
  }
  
  async generateVideoFromImage(jobId: string, imageUrl: string, options?: {
    fps?: number;
    frames?: number;
    seed?: number;
  }): Promise<string> {
    try {
      // 1. Mettre à jour le statut
      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'PROCESSING', progress: 10 },
      });

      // Étape 1 : Soumission du job au Bridge Python
      const response = await axios.post(`${this.config.url}/generate`, {
        image_url: imageUrl,
        fps: options?.fps || 6,
        frames: options?.frames || 25,
        seed: options?.seed
      }, { timeout: 15000 });
      
      const { job_id: externalJobId } = response.data;
      if (!externalJobId) throw new Error('Aucun job_id reçu du SVD Bridge');
      
      await prisma.job.update({
        where: { id: jobId },
        data: { progress: 20 },
      });

      // Étape 2 : Polling jusqu'à complétion
      let videoUrl = null;
      const MAX_POLLS = 60; 
      const POLL_INTERVAL = 3000;

      for (let i = 0; i < MAX_POLLS; i++) {
        await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
        
        const statusRes = await axios.get(`${this.config.url}/status/${externalJobId}`, { timeout: 5000 });
        const { status, video_url, error } = statusRes.data;

        const progress = Math.min(20 + Math.floor((i / MAX_POLLS) * 70), 90);
        await prisma.job.update({
          where: { id: jobId },
          data: { progress },
        });

        if (status === 'completed') {
          videoUrl = `${this.config.url}${video_url}`;
          break;
        } else if (status === 'failed') {
          throw new Error(`Génération SVD échouée : ${error || 'Erreur inconnue'}`);
        }
      }
      
      if (!videoUrl) throw new Error('Timeout de génération SVD');
      return videoUrl;
    } catch (error) {
      throw error;
    }
  }
}

// Worker BullMQ
export const svdBridgeWorker = new Worker(
  'svd-generation',
  async (job) => {
    const { jobId, imageUrl, options, userId } = job.data;
    const svdUrl = process.env.SVD_BRIDGE_URL || 'http://localhost:7860';
    
    console.log(`🎬 [Job ${jobId}] Début génération SVD pour l'utilisateur ${userId}`);
    
    try {
      // 1. Vérifier les crédits
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { credits: true },
      });
      
      if (!user || user.credits < CREDITS_COST) throw new Error('Crédits insuffisants');

      const worker = new SVDWorker({ url: svdUrl });
      const videoUrl = await worker.generateVideoFromImage(jobId, imageUrl, options);
      
      // 2. Téléchargement et stockage S3
      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const s3Key = `videos/${userId || 'anonymous'}/${jobId}.mp4`;
      const s3Url = await storageService.uploadFile(Buffer.from(response.data), s3Key, 'video/mp4');
      
      // 3. Sauvegarde BDD + TRANSACTION
      await prisma.$transaction(async (tx) => {
        await tx.video.create({
          data: {
            userId,
            jobId,
            prompt: `SVD from ${imageUrl}`,
            duration: 5, // SVD par défaut
            aspectRatio: '1:1',
            videoUrl: s3Url,
            storageKey: s3Key,
            status: 'COMPLETED',
          },
        });
        
        await tx.job.update({
          where: { id: jobId },
          data: {
            status: 'COMPLETED',
            progress: 100,
            output: { videoUrl: s3Url, storageKey: s3Key },
            completedAt: new Date(),
          },
        });
        
        await tx.user.update({
          where: { id: userId },
          data: { credits: { decrement: CREDITS_COST } },
        });

        await tx.creditTransaction.create({
          data: {
            userId,
            amount: -CREDITS_COST,
            type: 'GENERATION',
            referenceId: jobId,
            description: `Génération SVD (Vidéo depuis image)`,
          },
        });
      });

      console.log(`✅ [Job ${jobId}] SVD terminée et uploadée : ${s3Url}`);
      
      return { url: s3Url };

    } catch (error) {
      console.error(`❌ [Job ${jobId}] Erreur SVD:`, error);
      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'FAILED', error: String(error) },
      });
      throw error;
    }
  },
  { connection: redis }
);
