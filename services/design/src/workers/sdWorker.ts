import { Worker } from 'bullmq';
import axios from 'axios';
import IORedis from 'ioredis';
import { storageService } from '@zaksoft/storage';

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

interface SDBridgeConfig {
  url: string; // http://sd-local:7861
}

class SDWorker {
  private config: SDBridgeConfig;
  
  constructor(config: SDBridgeConfig) {
    this.config = config;
  }
  
  async generateImage(prompt: string, options?: {
    negative_prompt?: string;
    width?: number;
    height?: number;
    seed?: number;
  }): Promise<string> {
    const response = await axios.post(`${this.config.url}/generate`, {
      prompt,
      negative_prompt: options?.negative_prompt,
      width: options?.width || 1024,
      height: options?.height || 1024,
      seed: options?.seed
    });
    
    const { job_id } = response.data;
    
    // Polling
    let imageUrl = null;
    for (let i = 0; i < 60; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const statusRes = await axios.get(`${this.config.url}/status/${job_id}`);
      if (statusRes.data.status === 'completed') {
        imageUrl = `${this.config.url}${statusRes.data.image_url}`;
        break;
      }
    }
    
    if (!imageUrl) throw new Error('SD Generation timeout');
    return imageUrl;
  }
}

export const sdBridgeWorker = new Worker(
  'image-generation',
  async (job) => {
    const { prompt, options } = job.data;
    const sdUrl = process.env.SD_BRIDGE_URL || 'http://localhost:7861';
    const worker = new SDWorker({ url: sdUrl });
    
    const imageUrl = await worker.generateImage(prompt, options);
    
    // Stockage S3 Réel
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const s3Key = `images/${job.id}.png`;
    
    const s3Url = await storageService.uploadFile(Buffer.from(imageResponse.data), s3Key, 'image/png');
    
    console.log(`Uploaded image to S3: ${s3Url}`);
    
    return { url: s3Url };
  },
  { connection: redis }
);
