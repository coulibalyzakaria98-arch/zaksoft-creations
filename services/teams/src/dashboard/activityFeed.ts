import { PrismaClient } from '@prisma/client';
import { EventEmitter } from 'events';

const prisma = new PrismaClient();
export const activityEmitter = new EventEmitter();

export class ActivityFeed {
  
  async logTeamActivity(teamId: string, userId: string, action: string, details?: any) {
    const activity = await prisma.teamActivity.create({
      data: {
        teamId,
        userId,
        action,
        details,
        createdAt: new Date()
      },
      include: {
        user: { select: { email: true, id: true } }
      }
    });
    
    activityEmitter.emit('team:activity', activity);
    return activity;
  }
  
  async getTeamActivityFeed(teamId: string, limit: number = 50, cursor?: string) {
    return prisma.teamActivity.findMany({
      where: { teamId },
      include: {
        user: { select: { email: true, id: true } }
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      ...(cursor && { cursor: { id: cursor }, skip: 1 })
    });
  }
}

export const activityFeed = new ActivityFeed();
