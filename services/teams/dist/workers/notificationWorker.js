"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationWorker = void 0;
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const connection = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
exports.notificationWorker = new bullmq_1.Worker('team-notifications', async (job) => {
    const { type, userId, teamId, metadata } = job.data;
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true }
    });
    if (!user)
        return;
    console.log(`[NOTIFICATION MOCK] Notify ${user.email} - Type: ${type}`);
    // Logic for WebPush, In-app or SMS
    return { notified: true };
}, { connection });
console.log('Notification worker started');
