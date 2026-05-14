"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCollector = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UsageCollector {
    static async collectEvent(data) {
        const event = await prisma.usageEvent.create({
            data: {
                userId: data.userId,
                teamId: data.teamId,
                service: data.service,
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
                    service: data.service
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
                service: data.service,
                operations: 1,
                totalCost: data.cost,
                totalCredits: data.credits,
                avgDuration: data.duration
            }
        });
        return event;
    }
}
exports.UsageCollector = UsageCollector;
