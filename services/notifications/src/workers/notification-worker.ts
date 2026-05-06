import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { Expo } from 'expo-server-sdk';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const expo = new Expo();

export const notificationWorker = new Worker('notifications', async (job) => {
  const { notificationId, token, title, body, data } = job.data;

  if (!Expo.isExpoPushToken(token)) {
    throw new Error('Invalid Expo push token');
  }

  const messages = [{
    to: token,
    sound: 'default',
    title,
    body,
    data,
  }];

  try {
    const chunks = expo.chunkPushNotifications(messages);
    for (const chunk of chunks) {
      await expo.sendPushNotificationsAsync(chunk);
    }
    
    await prisma.userNotification.update({
      where: { id: notificationId },
      data: { status: 'SENT', sentAt: new Date() }
    });
  } catch (error: any) {
    await prisma.userNotification.update({
      where: { id: notificationId },
      data: { status: 'FAILED', error: error.message }
    });
  }
}, { connection: redis });
