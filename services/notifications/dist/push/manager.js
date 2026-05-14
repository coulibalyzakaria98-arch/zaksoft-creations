"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationManager = void 0;
const client_1 = require("@prisma/client");
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const prisma = new client_1.PrismaClient();
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
const notificationQueue = new bullmq_1.Queue('notifications', { connection: redis });
class PushNotificationManager {
    static async sendToUser(params) {
        const devices = await prisma.pushDevice.findMany({
            where: { userId: params.userId, isActive: true }
        });
        if (devices.length === 0)
            return null;
        const notification = await prisma.userNotification.create({
            data: {
                userId: params.userId,
                type: params.type,
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
exports.PushNotificationManager = PushNotificationManager;
