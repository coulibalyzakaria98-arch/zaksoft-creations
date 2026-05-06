import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProjectSharing {
  
  async shareProject(projectId: string, sharerId: string, targetUserId: string, permission: string) {
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
      update: { permission: permission as any },
      create: {
        projectId,
        userId: targetUserId,
        permission: permission as any
      }
    });
    
    return shared;
  }
}

export const projectSharing = new ProjectSharing();
