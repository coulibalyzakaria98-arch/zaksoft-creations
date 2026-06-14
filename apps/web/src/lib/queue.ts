import { Queue } from 'bullmq';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

const imageQueue = new Queue('image-generation', { connection: redis });

export async function addToQueue(queueName: string, data: any) {
  if (queueName === 'image-generation') {
    return await imageQueue.add('generate', data);
  }
  throw new Error(`Queue ${queueName} not supported`);
}
