"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uptimeMonitor = exports.UptimeMonitor = void 0;
const db_1 = require("../db");
const axios_1 = __importDefault(require("axios"));
class UptimeMonitor {
    async checkDeployment(deploymentId) {
        const deployment = await db_1.prisma.deployment.findUnique({ where: { id: deploymentId } });
        if (!deployment || !deployment.url)
            return;
        const start = Date.now();
        try {
            await axios_1.default.get(deployment.url, { timeout: 5000 });
            await db_1.prisma.uptimeCheck.create({
                data: { deploymentId, status: true, responseTime: Date.now() - start }
            });
        }
        catch {
            await db_1.prisma.uptimeCheck.create({
                data: { deploymentId, status: false, responseTime: Date.now() - start }
            });
        }
    }
}
exports.UptimeMonitor = UptimeMonitor;
exports.uptimeMonitor = new UptimeMonitor();
