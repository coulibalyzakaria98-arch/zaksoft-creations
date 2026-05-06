import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

export class TeamManager {
  
  async createTeam(data: {
    name: string;
    description?: string;
    avatar?: string;
    ownerId: string;
  }) {
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
  
  private async generateUniqueSlug(name: string): Promise<string> {
    let baseSlug = slugify(name, { lower: true });
    let slug = baseSlug;
    let counter = 1;
    
    while (await prisma.team.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    return slug;
  }
  
  async getTeamWithMembers(teamId: string) {
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
  
  async getUserTeams(userId: string) {
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

export const teamManager = new TeamManager();
