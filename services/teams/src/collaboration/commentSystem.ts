import { PrismaClient } from '@prisma/client';
import { activityFeed } from '../dashboard/activityFeed';

const prisma = new PrismaClient();

export class CommentSystem {
  
  async addComment(projectId: string, userId: string, content: string, parentId?: string) {
    const hasAccess = await this.checkProjectAccess(projectId, userId);
    if (!hasAccess) throw new Error('Access denied');
    
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
      data: { projectId, userId, action: 'comment_added', details: { commentId: comment.id } as any }
    });
    
    return comment;
  }
  
  async getComments(projectId: string, userId: string) {
    const hasAccess = await this.checkProjectAccess(projectId, userId);
    if (!hasAccess) throw new Error('Access denied');
    
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
  
  private async checkProjectAccess(projectId: string, userId: string): Promise<boolean> {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { team: { include: { members: true } }, sharedWith: true }
    });
    
    if (!project) return false;
    return project.ownerId === userId || 
           project.team?.members.some(m => m.userId === userId) || 
           project.sharedWith.some(s => s.userId === userId);
  }
}

export const commentSystem = new CommentSystem();
