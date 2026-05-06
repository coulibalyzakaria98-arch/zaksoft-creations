import { PrismaClient } from '@prisma/client';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';

export const prisma = new PrismaClient();
export const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
export const deploymentQueue = new Queue('website-deployment', { connection: redis });
