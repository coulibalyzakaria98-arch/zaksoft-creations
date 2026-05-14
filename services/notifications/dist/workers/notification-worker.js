"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationWorker = void 0;
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const expo_server_sdk_1 = require("expo-server-sdk");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
const expo = new expo_server_sdk_1.Expo();
exports.notificationWorker = new bullmq_1.Worker('notifications', async (job) => {
    const { notificationId, token, title, body, data } = job.data;
    if (!expo_server_sdk_1.Expo.isExpoPushToken(token)) {
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
    }
    catch (error) {
        await prisma.userNotification.update({
            where: { id: notificationId },
            data: { status: 'FAILED', error: error.message }
        });
    }
}, { connection: redis });
