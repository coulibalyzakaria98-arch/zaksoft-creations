import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TemplateManager {
  
  async createTemplate(data: {
    name: string;
    description?: string;
    type: string;
    config: any;
    thumbnail?: string;
    isPublic: boolean;
    price: number;
    authorId: string;
  }) {
    const template = await prisma.template.create({
      data: {
        name: data.name,
        description: data.description,
        type: data.type as any,
        config: data.config,
        thumbnail: data.thumbnail,
        isPublic: data.isPublic,
        price: data.price,
        authorId: data.authorId
      }
    });
    
    // Récompense symbolique pour la publication
    if (data.isPublic) {
      await prisma.user.update({
        where: { id: data.authorId },
        data: { credits: { increment: 5 } }
      });
      
      await prisma.creditTransaction.create({
        data: {
          userId: data.authorId,
          amount: 5,
          operation: 'template_published',
          metadata: { templateId: template.id } as any
        }
      });
    }
    
    return template;
  }
  
  async getTemplate(id: string) {
    const template = await prisma.template.findUnique({
      where: { id },
      include: {
        author: { select: { email: true, tier: true } },
        reviews: { include: { user: { select: { email: true } } } },
        _count: { select: { downloads: true, favorites: true } }
      }
    });
    
    if (template) {
      await prisma.template.update({
        where: { id },
        data: { views: { increment: 1 } }
      });
    }
    
    return template;
  }
}

export const templateManager = new TemplateManager();
