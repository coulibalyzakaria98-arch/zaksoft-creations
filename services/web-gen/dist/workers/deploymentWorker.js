"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploymentWorker = void 0;
const bullmq_1 = require("bullmq");
const db_1 = require("../db");
const uptime_monitor_1 = require("../monitoring/uptime-monitor");
exports.deploymentWorker = new bullmq_1.Worker('website-deployment', async (job) => {
    const { deploymentId, websiteId, websiteData } = job.data;
    await db_1.prisma.deployment.update({
        where: { id: deploymentId },
        data: { status: 'BUILDING' }
    });
    // Simulate cloud deployment (Vercel/AWS/etc.)
    const simulatedUrl = `https://zaksoft-site-${websiteId.slice(0, 8)}.vercel.app`;
    await db_1.prisma.deployment.update({
        where: { id: deploymentId },
        data: { status: 'SUCCESS', url: simulatedUrl, completedAt: new Date() }
    });
    await db_1.prisma.website.update({
        where: { id: websiteId },
        data: { deployUrl: simulatedUrl, lastDeployedAt: new Date() }
    });
    await uptime_monitor_1.uptimeMonitor.checkDeployment(deploymentId);
    return { url: simulatedUrl };
}, { connection: db_1.redis });
