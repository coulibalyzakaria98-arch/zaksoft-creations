import { PrismaClient } from '@prisma/client';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';

const prisma = new PrismaClient();
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const notificationQueue = new Queue('notifications', { connection: redis });

export class PushNotificationManager {
  static async sendToUser(params: {
    userId: string;
    type: string;
    title: string;
    body: string;
    data?: any;
  }) {
    const devices = await prisma.pushDevice.findMany({
      where: { userId: params.userId, isActive: true }
    });

    if (devices.length === 0) return null;

    const notification = await prisma.userNotification.create({
      data: {
        userId: params.userId,
        type: params.type as any,
        title: params.title,
        body: params.body,
        data: params.data || {},
        status: 'PENDING'
      }
    });

    for (const device of devices) {
      await notificationQueue.add('send-push', {
        notificationId: notification.id,
        token: device.token,
        platform: device.platform,
        title: params.title,
        body: params.body,
        data: params.data
      });
    }

    return notification;
  }
}
