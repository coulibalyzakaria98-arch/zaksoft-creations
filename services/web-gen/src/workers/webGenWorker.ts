import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { storageService } from '@zaksoft/storage';

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

export const webGenWorker = new Worker(
  'web-generation',
  async (job) => {
    const { prompt, siteConfig } = job.data;
    
    console.log(`Starting web generation for: ${prompt}`);
    
    // Simulating web generation process
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const htmlContent = `<html><body><h1>Generated Site for: ${prompt}</h1></body></html>`;
    const s3Key = `sites/${job.id}/index.html`;
    
    const s3Url = await storageService.uploadFile(htmlContent, s3Key, 'text/html');
    
    console.log(`Web site generated and uploaded: ${s3Url}`);
    
    return { url: s3Url };
  },
  { connection: redis }
);
