"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityFeed = exports.ActivityFeed = exports.activityEmitter = void 0;
const client_1 = require("@prisma/client");
const events_1 = require("events");
const prisma = new client_1.PrismaClient();
exports.activityEmitter = new events_1.EventEmitter();
class ActivityFeed {
    async logTeamActivity(teamId, userId, action, details) {
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
        exports.activityEmitter.emit('team:activity', activity);
        return activity;
    }
    async getTeamActivityFeed(teamId, limit = 50, cursor) {
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
exports.ActivityFeed = ActivityFeed;
exports.activityFeed = new ActivityFeed();
