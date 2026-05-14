"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSystem = exports.CommentSystem = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CommentSystem {
    async addComment(projectId, userId, content, parentId) {
        const hasAccess = await this.checkProjectAccess(projectId, userId);
        if (!hasAccess)
            throw new Error('Access denied');
        const comment = await prisma.projectComment.create({
            data: {
                content,
                projectId,
                userId,
                parentId
            },
            include: {
                user: { select: { email: true, id: true } }
            }
        });
        // Log activity
        await prisma.projectActivity.create({
            data: { projectId, userId, action: 'comment_added', details: { commentId: comment.id } }
        });
        return comment;
    }
    async getComments(projectId, userId) {
        const hasAccess = await this.checkProjectAccess(projectId, userId);
        if (!hasAccess)
            throw new Error('Access denied');
        return prisma.projectComment.findMany({
            where: { projectId, parentId: null },
            include: {
                user: { select: { email: true, id: true } },
                replies: {
                    include: { user: { select: { email: true, id: true } } },
                    orderBy: { createdAt: 'asc' }
                }
            },
            orderBy: { createdAt: 'asc' }
        });
    }
    async checkProjectAccess(projectId, userId) {
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { team: { include: { members: true } }, sharedWith: true }
        });
        if (!project)
            return false;
        return project.ownerId === userId ||
            project.team?.members.some(m => m.userId === userId) ||
            project.sharedWith.some(s => s.userId === userId);
    }
}
exports.CommentSystem = CommentSystem;
exports.commentSystem = new CommentSystem();
