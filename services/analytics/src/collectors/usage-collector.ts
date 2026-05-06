import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UsageCollector {
  static async collectEvent(data: {
    userId: string;
    teamId?: string;
    service: string;
    operation: string;
    cost: number;
    credits: number;
    duration: number;
    status: string;
  }) {
    const event = await prisma.usageEvent.create({
      data: {
        userId: data.userId,
        teamId: data.teamId,
        service: data.service as any,
        operation: data.operation,
        cost: data.cost,
        credits: data.credits,
        duration: data.duration,
        status: data.status
      }
    });

    const date = new Date();
    date.setHours(0, 0, 0, 0);

    await prisma.dailyUsage.upsert({
      where: {
        userId_date_service: {
          userId: data.userId,
          date,
          service: data.service as any
        }
      },
      update: {
        operations: { increment: 1 },
        totalCost: { increment: data.cost },
        totalCredits: { increment: data.credits }
      },
      create: {
        userId: data.userId,
        teamId: data.teamId,
        date,
        service: data.service as any,
        operations: 1,
        totalCost: data.cost,
        totalCredits: data.credits,
        avgDuration: data.duration
      }
    });

    return event;
  }
}
