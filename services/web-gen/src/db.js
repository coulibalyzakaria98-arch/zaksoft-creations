"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploymentQueue = exports.redis = exports.prisma = void 0;
var client_1 = require("@prisma/client");
var bullmq_1 = require("bullmq");
var ioredis_1 = require("ioredis");
exports.prisma = new client_1.PrismaClient();
exports.redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
exports.deploymentQueue = new bullmq_1.Queue('website-deployment', { connection: exports.redis });
