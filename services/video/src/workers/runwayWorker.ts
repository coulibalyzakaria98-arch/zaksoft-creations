import { Worker } from 'bullmq';
import IORedis from 'ioredis';

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

const runwayWorker = new Worker('video-generation', async (job) => {
  const { prompt, userId, engine } = job.data;
  
  console.log(`Processing video for user ${userId} with engine: ${engine}`);
  console.log(`Prompt: ${prompt}`);
  
  // Simulation de génération
  await new Promise(resolve => setTimeout(resolve, 30000));
  
  const mockVideoUrl = `https://storage.zaksoft.com/videos/${job.id}.mp4`;
  
  // Mise à jour du statut dans la DB
  await fetch(`${process.env.API_GATEWAY_URL}/internal/videos/${job.id}/complete`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: mockVideoUrl, duration: 5 })
  });
  
  return { url: mockVideoUrl };
}, { connection: redis });

runwayWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully`);
});
