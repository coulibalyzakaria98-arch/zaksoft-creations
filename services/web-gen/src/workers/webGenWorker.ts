import { Worker } from 'bullmq';
import IORedis from 'ioredis';

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

export const webGenWorker = new Worker(
  'web-generation',
  async (job) => {
    const { prompt, siteConfig } = job.data;
    
    console.log(`Starting web generation for: ${prompt}`);
    
    // Simulating web generation process
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const siteUrl = `https://generated-sites.zaksoft.com/${job.id}/index.html`;
    
    console.log(`Web site generated: ${siteUrl}`);
    
    return { url: siteUrl };
  },
  { connection: redis }
);
