"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamDashboard = exports.TeamDashboard = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TeamDashboard {
    async getTeamStats(teamId) {
        const [projects, members, activities, recentProjects] = await Promise.all([
            prisma.project.count({ where: { teamId } }),
            prisma.membership.count({ where: { teamId } }),
            prisma.teamActivity.count({ where: { teamId, createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } } }),
            prisma.project.findMany({
                where: { teamId },
                orderBy: { updatedAt: 'desc' },
                take: 5,
                include: { owner: { select: { email: true } } }
            })
        ]);
        const membersWithCredits = await prisma.membership.findMany({
            where: { teamId },
            include: { user: { select: { credits: true } } }
        });
        const totalCredits = membersWithCredits.reduce((sum, m) => sum + (m.user.credits || 0), 0);
        const lastMonthActivities = await prisma.teamActivity.count({
            where: {
                teamId,
                createdAt: {
                    gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
                    lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                }
            }
        });
        const activityGrowth = lastMonthActivities === 0 ? 100 :
            ((activities - lastMonthActivities) / lastMonthActivities) * 100;
        return {
            projects,
            members,
            activities,
            totalCredits,
            activityGrowth,
            recentProjects
        };
    }
}
exports.TeamDashboard = TeamDashboard;
exports.teamDashboard = new TeamDashboard();
