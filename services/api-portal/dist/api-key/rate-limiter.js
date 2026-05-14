"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = rateLimiter;
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
async function rateLimiter(req, res, next) {
    const apiKey = req.apiKey;
    if (!apiKey)
        return next();
    const key = `rate_limit:${apiKey.id}`;
    const limit = apiKey.rateLimit || 100;
    const window = apiKey.rateLimitWindow || 60000;
    const current = await redis.incr(key);
    if (current === 1)
        await redis.expire(key, Math.ceil(window / 1000));
    res.setHeader('X-RateLimit-Remaining', Math.max(0, limit - current));
    if (current > limit) {
        return res.status(429).json({ error: 'Rate limit exceeded' });
    }
    next();
}
