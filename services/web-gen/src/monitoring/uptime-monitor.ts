import { prisma } from '../db';
import axios from 'axios';

export class UptimeMonitor {
  async checkDeployment(deploymentId: string) {
    const deployment = await prisma.deployment.findUnique({ where: { id: deploymentId } });
    if (!deployment || !deployment.url) return;
    
    const start = Date.now();
    try {
      await axios.get(deployment.url, { timeout: 5000 });
      await prisma.uptimeCheck.create({
        data: { deploymentId, status: true, responseTime: Date.now() - start }
      });
    } catch {
      await prisma.uptimeCheck.create({
        data: { deploymentId, status: false, responseTime: Date.now() - start }
      });
    }
  }
}

export const uptimeMonitor = new UptimeMonitor();
