import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

export class ApiKeyManager {
  
  async createApiKey(data: {
    name: string;
    userId: string;
    permissions: { resource: string; action: string }[];
  }) {
    const key = `zak_${randomBytes(32).toString('hex')}`;
    
    return prisma.apiKey.create({
      data: {
        name: data.name,
        key,
        userId: data.userId,
        permissions: {
          create: data.permissions
        }
      }
    });
  }
  
  async validateApiKey(key: string) {
    const apiKey = await prisma.apiKey.findUnique({
      where: { key },
      include: { permissions: true }
    });
    
    if (!apiKey || !apiKey.isActive) return null;
    
    await prisma.apiKey.update({
      where: { id: apiKey.id },
      data: { lastUsedAt: new Date() }
    });
    
    return apiKey;
  }
  
  async getUserApiKeys(userId: string) {
    return prisma.apiKey.findMany({
      where: { userId },
      include: { permissions: true }
    });
  }
  
  hasPermission(apiKey: any, resource: string, action: string): boolean {
    return apiKey.permissions.some((p: any) => 
      p.resource === resource && p.action === action
    );
  }
}

export const apiKeyManager = new ApiKeyManager();
