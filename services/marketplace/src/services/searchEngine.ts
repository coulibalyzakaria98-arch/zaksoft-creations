import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export class SearchEngine {
  
  async search(params: {
    page: number;
    limit: number;
    type?: string;
    sort?: string;
    search?: string;
    category?: string;
  }) {
    const { page, limit, type, sort, search, category } = params;
    const skip = (page - 1) * limit;
    
    const where: Prisma.TemplateWhereInput = {
      isPublic: true
    };
    
    if (type) {
      where.type = type as any;
    }
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }
    
    let orderBy: any = {};
    switch (sort) {
      case 'popular':
        orderBy = { downloads: { _count: 'desc' } };
        break;
      case 'top_rated':
        orderBy = { avgRating: 'desc' };
        break;
      case 'newest':
        orderBy = { createdAt: 'desc' };
        break;
      default:
        orderBy = { views: 'desc' };
    }
    
    const [templates, total] = await Promise.all([
      prisma.template.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          author: { select: { email: true } },
          _count: { select: { downloads: true, favorites: true } }
        }
      }),
      prisma.template.count({ where })
    ]);
    
    return {
      data: templates,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }
}

export const searchEngine = new SearchEngine();
