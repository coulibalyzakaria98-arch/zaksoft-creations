import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

export const invitationWorker = new Worker(
  'team-invitations',
  async (job) => {
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
  },
  { connection }
);

console.log('Invitation worker started');
