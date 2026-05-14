"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitationWorker = void 0;
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const connection = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
exports.invitationWorker = new bullmq_1.Worker('team-invitations', async (job) => {
    const { invitationId } = job.data;
    const invitation = await prisma.invitation.findUnique({
        where: { id: invitationId },
        include: {
            team: { select: { name: true } },
            inviter: { select: { email: true } }
        }
    });
    if (!invitation) {
        console.error(`Invitation ${invitationId} not found`);
        return;
    }
    console.log(`[EMAIL MOCK] Sending invitation to ${invitation.email}`);
    console.log(`[EMAIL MOCK] Team: ${invitation.team.name}`);
    console.log(`[EMAIL MOCK] Link: https://zaksoft-creations.com/invite/${invitation.token}`);
    // Here you would integrate with SendGrid, Mailgun, etc.
    return { sent: true, to: invitation.email };
}, { connection });
console.log('Invitation worker started');
