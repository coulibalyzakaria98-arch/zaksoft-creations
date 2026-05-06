import { prisma, deploymentQueue } from '../db';
import { domainManager } from './domain-manager';

export class DeploymentService {
  
  async deployWebsite(websiteId: string, platform: string, environment: string = 'PRODUCTION', config?: any) {
    const website = await prisma.website.findUnique({
      where: { id: websiteId },
      include: { user: true }
    });
    
    if (!website) throw new Error('Website not found');
    if (website.user.credits < 25) throw new Error('Insufficient credits');
    
    const deployment = await prisma.deployment.create({
      data: {
        websiteId,
        platform: platform as any,
        environment: environment as any,
        status: 'PENDING',
        startedAt: new Date()
      }
    });
    
    await deploymentQueue.add('deploy', {
      deploymentId: deployment.id,
      websiteId,
      platform,
      environment,
      websiteData: website,
      config
    });
    
    await prisma.user.update({
      where: { id: website.userId },
      data: { credits: { decrement: 25 } }
    });
    
    return { deploymentId: deployment.id };
  }
}

export const deploymentService = new DeploymentService();
