"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSharing = exports.ProjectSharing = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProjectSharing {
    async shareProject(projectId, sharerId, targetUserId, permission) {
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: {
                team: {
                    include: {
                        members: { where: { userId: sharerId } }
                    }
                }
            }
        });
        if (!project) {
            throw new Error('Project not found');
        }
        const isOwner = project.ownerId === sharerId;
        const isTeamAdmin = project.team?.members[0]?.role === 'ADMIN' || project.team?.members[0]?.role === 'OWNER';
        if (!isOwner && !isTeamAdmin) {
            throw new Error('You do not have permission to share this project');
        }
        const shared = await prisma.sharedProjectAccess.upsert({
            where: {
                projectId_userId: { projectId, userId: targetUserId }
            },
            update: { permission: permission },
            create: {
                projectId,
                userId: targetUserId,
                permission: permission
            }
        });
        return shared;
    }
}
exports.ProjectSharing = ProjectSharing;
exports.projectSharing = new ProjectSharing();
