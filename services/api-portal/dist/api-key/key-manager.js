"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyManager = exports.ApiKeyManager = void 0;
const client_1 = require("@prisma/client");
const crypto_1 = require("crypto");
const prisma = new client_1.PrismaClient();
class ApiKeyManager {
    async createApiKey(data) {
        const key = `zak_${(0, crypto_1.randomBytes)(32).toString('hex')}`;
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
    async validateApiKey(key) {
        const apiKey = await prisma.apiKey.findUnique({
            where: { key },
            include: { permissions: true }
        });
        if (!apiKey || !apiKey.isActive)
            return null;
        await prisma.apiKey.update({
            where: { id: apiKey.id },
            data: { lastUsedAt: new Date() }
        });
        return apiKey;
    }
    async getUserApiKeys(userId) {
        return prisma.apiKey.findMany({
            where: { userId },
            include: { permissions: true }
        });
    }
    hasPermission(apiKey, resource, action) {
        return apiKey.permissions.some((p) => p.resource === resource && p.action === action);
    }
}
exports.ApiKeyManager = ApiKeyManager;
exports.apiKeyManager = new ApiKeyManager();
