"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploymentService = exports.DeploymentService = void 0;
const db_1 = require("../db");
class DeploymentService {
    async deployWebsite(websiteId, platform, environment = 'PRODUCTION', config) {
        const website = await db_1.prisma.website.findUnique({
            where: { id: websiteId },
            include: { user: true }
        });
        if (!website)
            throw new Error('Website not found');
        if (website.user.credits < 25)
            throw new Error('Insufficient credits');
        const deployment = await db_1.prisma.deployment.create({
            data: {
                websiteId,
                platform: platform,
                environment: environment,
                status: 'PENDING',
                startedAt: new Date()
            }
        });
        await db_1.deploymentQueue.add('deploy', {
            deploymentId: deployment.id,
            websiteId,
            platform,
            environment,
            websiteData: website,
            config
        });
        await db_1.prisma.user.update({
            where: { id: website.userId },
            data: { credits: { decrement: 25 } }
        });
        return { deploymentId: deployment.id };
    }
}
exports.DeploymentService = DeploymentService;
exports.deploymentService = new DeploymentService();
