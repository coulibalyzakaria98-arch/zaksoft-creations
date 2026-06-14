import { Worker } from 'bullmq';
import Redis from 'ioredis';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

const HF_API_TOKEN = process.env.HF_API_TOKEN;
const HF_API_URL = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0';

const worker = new Worker('image-generation', async (job) => {
  const { userId, prompt, resolution, negativePrompt } = job.data;
  
  console.log(`🎨 [Job ${job.id}] Génération d'image: ${prompt.substring(0, 50)}...`);
  
  try {
    // 1. Créer le job en BDD
    const imageJob = await prisma.job.create({
      data: {
        type: 'IMAGE',
        userId,
        status: 'PROCESSING',
        input: { prompt, resolution, negativePrompt },
        creditsCost: 1,
      },
    });
    
    // 2. Appel à Hugging Face
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: negativePrompt ? `${prompt}. Évitez: ${negativePrompt}` : prompt,
        parameters: {
          negative_prompt: negativePrompt,
          width: parseInt(resolution.split('x')[0]),
          height: parseInt(resolution.split('x')[1]),
          num_inference_steps: 25,
          guidance_scale: 7.5,
        }
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Hugging Face API error: ${JSON.stringify(error)}`);
    }
    
    // 3. Récupérer l'image (buffer)
    const imageBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;
    
    // 4. Sauvegarder en BDD (transaction)
    await prisma.$transaction(async (tx) => {
      await tx.image.create({
        data: {
          userId,
          jobId: imageJob.id,
          prompt,
          resolution,
          imageUrl,
          storageKey: `users/${userId}/images/${Date.now()}.png`,
          status: 'COMPLETED',
        },
      });
      
      await tx.job.update({
        where: { id: imageJob.id },
        data: { status: 'COMPLETED', output: { imageUrl }, completedAt: new Date() },
      });
      
      await tx.user.update({
        where: { id: userId },
        data: { credits: { decrement: 1 } },
      });
      
      await tx.creditTransaction.create({
        data: {
          userId,
          amount: -1,
          type: 'GENERATION',
          description: `Génération d'image: ${prompt.substring(0, 50)}...`,
        },
      });
    });
    
    console.log(`✅ [Job ${job.id}] Image générée avec succès`);
    return { success: true, imageUrl };
    
  } catch (error) {
    console.error(`❌ [Job ${job.id}] Erreur:`, error);
    
    // Note: imageJob isn't available here due to scope, 
    // but the worker should probably have access to the job ID 
    // to update status properly.
    
    throw error;
  }
}, { connection: redis });

console.log('🚀 Design worker (Hugging Face SDXL) démarré');
