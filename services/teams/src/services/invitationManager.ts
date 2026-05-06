import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

export class InvitationManager {
  
  async createInvitation(data: {
    email: string;
    teamId: string;
    invitedBy: string;
    role: string;
  }) {
    const token = randomBytes(32).toString('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Expire dans 7 jours
    
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    });
    
    if (existingUser) {
      const existingMember = await prisma.membership.findUnique({
        where: {
          userId_teamId: {
            teamId: data.teamId,
            userId: existingUser.id
          }
        }
      });
      
      if (existingMember) {
        throw new Error('User is already a member of this team');
      }
    }
    
    const invitation = await prisma.invitation.create({
      data: {
        email: data.email,
        teamId: data.teamId,
        invitedBy: data.invitedBy,
        role: data.role as any,
        token,
        expiresAt
      }
    });
    
    return invitation;
  }
  
  async acceptInvitation(token: string, userId: string) {
    const invitation = await prisma.invitation.findUnique({
      where: { token },
      include: { team: true }
    });
    
    if (!invitation) {
      throw new Error('Invitation not found');
    }
    
    if (invitation.status !== 'PENDING') {
      throw new Error('Invitation is no longer valid');
    }
    
    if (invitation.expiresAt < new Date()) {
      await prisma.invitation.update({
        where: { id: invitation.id },
        data: { status: 'EXPIRED' }
      });
      throw new Error('Invitation has expired');
    }
    
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user?.email !== invitation.email) {
      throw new Error('This invitation is for a different email address');
    }
    
    await prisma.$transaction(async (tx) => {
      await tx.membership.create({
        data: {
          teamId: invitation.teamId,
          userId,
          role: invitation.role
        }
      });
      
      await tx.invitation.update({
        where: { id: invitation.id },
        data: {
          status: 'ACCEPTED',
          acceptedAt: new Date()
        }
      });
    });
    
    return { teamId: invitation.teamId, teamName: invitation.team.name };
  }
}

export const invitationManager = new InvitationManager();
