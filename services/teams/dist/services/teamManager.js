"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamManager = exports.TeamManager = void 0;
const client_1 = require("@prisma/client");
const slugify_1 = __importDefault(require("slugify"));
const prisma = new client_1.PrismaClient();
class TeamManager {
    async createTeam(data) {
        const slug = await this.generateUniqueSlug(data.name);
        const team = await prisma.$transaction(async (tx) => {
            const newTeam = await tx.team.create({
                data: {
                    name: data.name,
                    slug,
                    description: data.description,
                    avatar: data.avatar,
                    ownerId: data.ownerId
                }
            });
            await tx.membership.create({
                data: {
                    teamId: newTeam.id,
                    userId: data.ownerId,
                    role: 'OWNER'
                }
            });
            return newTeam;
        });
        return team;
    }
    async generateUniqueSlug(name) {
        let baseSlug = (0, slugify_1.default)(name, { lower: true });
        let slug = baseSlug;
        let counter = 1;
        while (await prisma.team.findUnique({ where: { slug } })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        return slug;
    }
    async getTeamWithMembers(teamId) {
        return prisma.team.findUnique({
            where: { id: teamId },
            include: {
                owner: { select: { id: true, email: true } },
                members: {
                    include: { user: { select: { id: true, email: true, tier: true } } }
                },
                projects: {
                    include: { owner: { select: { email: true } } }
                }
            }
        });
    }
    async getUserTeams(userId) {
        return prisma.team.findMany({
            where: {
                members: { some: { userId } }
            },
            include: {
                _count: { select: { members: true, projects: true } }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
}
exports.TeamManager = TeamManager;
exports.teamManager = new TeamManager();
