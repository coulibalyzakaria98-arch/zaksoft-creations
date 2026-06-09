import * as Sentry from "@sentry/node";
import { Worker } from 'bullmq';
import axios from 'axios';
import IORedis from 'ioredis';
import { storageService } from '@zaksoft/storage';
import { PrismaClient, CreditType } from '@zaksoft/database';

const prisma = new PrismaClient();
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null
});

const REPLICATE_API_KEY = process.env.REPLICATE_API_KEY;
const REPLICATE_API = 'https://api.replicate.com/v1';

// Coût en crédits par génération
const CREDITS_COST = 1;

class SDWorker {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  async generateImage(jobId: string, prompt: string, options?: {
    negative_prompt?: string;
    width?: number;
    height?: number;
    seed?: number;
  }): Promise<string> {
    // 1. Mettre à jour le statut du job
    await prisma.job.update({
      where: { id: jobId },
      data: { status: 'PROCESSING', progress: 10 },
    });

    // 2. Déclencher le modèle SDXL
    const response = await axios.post(
      `${REPLICATE_API}/predictions`,
      {
        version: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        input: {
          prompt: prompt,
          negative_prompt: options?.negative_prompt || '',
          width: options?.width || 1024,
          height: options?.height || 1024,
          num_outputs: 1,
          scheduler: "K_EULER",
          num_inference_steps: 25,
          guidance_scale: 7.5,
          seed: options?.seed
        },
      },
      {
        headers: {
          'Authorization': `Token ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    let prediction = response.data;
    await prisma.job.update({
      where: { id: jobId },
      data: { progress: 20 },
    });
    
    // 3. Polling du résultat
    let attempts = 0;
    const maxAttempts = 60;
    while (prediction.status !== 'succeeded' && prediction.status !== 'failed' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      attempts++;
      
      const progress = Math.min(20 + Math.floor((attempts / maxAttempts) * 70), 90);
      await prisma.job.update({
        where: { id: jobId },
        data: { progress },
      });

      const statusRes = await axios.get(`${REPLICATE_API}/predictions/${prediction.id}`, {
        headers: { 'Authorization': `Token ${this.apiKey}` },
      });
      prediction = statusRes.data;
    }
    
    if (prediction.status === 'failed') {
      throw new Error(prediction.error || 'SD XL Generation failed');
    }
    
    return prediction.output[0];
  }
}

export const sdBridgeWorker = new Worker(
  'image-generation',
  async (job) => {
    return Sentry.withMonitor("sd-worker", async () => {
      const { jobId, userId, prompt, options } = job.data;
      const replicateKey = process.env.REPLICATE_API_KEY;
      if (!replicateKey) throw new Error('REPLICATE_API_KEY is not set');
      
      console.log(`🎨 [Job ${jobId}] Génération d'image pour user ${userId}`);

      try {
        const worker = new SDWorker(replicateKey);
        const imageUrl = await worker.generateImage(jobId, prompt, options);
        
        // 4. Télécharger l'image vers S3
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const s3Key = `images/${userId || 'anonymous'}/${jobId}.png`;
        const s3Url = await storageService.uploadFile(Buffer.from(imageResponse.data), s3Key, 'image/png');
        
        console.log(`Uploaded image to S3: ${s3Url}`);
        
        // 5. Sauvegarde en base de données (TRANSACTION)
        const result_data = await prisma.$transaction(async (tx) => {
          // 5a. Créer l'entrée image
          const image = await tx.image.create({
            data: {
              userId,
              jobId,
              prompt,
              negativePrompt: options?.negative_prompt,
              resolution: `${options?.width || 1024}x${options?.height || 1024}`,
              imageUrl: s3Url,
              storageKey: s3Key,
              status: 'COMPLETED',
            },
          });
          
          // 5b. Mettre à jour le job
          await tx.job.update({
            where: { id: jobId },
            data: {
              status: 'COMPLETED',
              progress: 100,
              output: { imageUrl: s3Url, storageKey: s3Key },
              completedAt: new Date(),
            },
          });
          
          // 5c. DÉBITER LES CRÉDITS
          const user = await tx.user.findUnique({
            where: { id: userId },
            select: { credits: true },
          });
          
          if (!user) throw new Error('Utilisateur non trouvé');
          if (user.credits < CREDITS_COST) throw new Error('Crédits insuffisants');
          
          await tx.user.update({
            where: { id: userId },
            data: {
              credits: { decrement: CREDITS_COST },
            },
          });
          
          // 5d. Enregistrer la transaction
          await tx.creditTransaction.create({
            data: {
              userId,
              amount: -CREDITS_COST,
              type: CreditType.GENERATION,
              referenceId: jobId,
              description: `Génération d'image: ${prompt.substring(0, 50)}...`,
            },
          });
          
          return image;
        });

        console.log(`✅ [Job ${jobId}] Image générée et crédits débités.`);
        
        return { url: result_data.imageUrl };
      } catch (error) {
        Sentry.captureException(error, {
          extra: { jobId, userId, prompt }
        });
        throw error;
      }
    });
  },
  { 
    connection: redis,
    concurrency: 5
  }
);

