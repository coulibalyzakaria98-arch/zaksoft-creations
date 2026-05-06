import { Request, Response, NextFunction } from 'express';
import IORedis from 'ioredis';

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');

export async function rateLimiter(req: any, res: Response, next: NextFunction) {
  const apiKey = req.apiKey;
  if (!apiKey) return next();
  
  const key = `rate_limit:${apiKey.id}`;
  const limit = apiKey.rateLimit || 100;
  const window = apiKey.rateLimitWindow || 60000;
  
  const current = await redis.incr(key);
  if (current === 1) await redis.expire(key, Math.ceil(window / 1000));
  
  res.setHeader('X-RateLimit-Remaining', Math.max(0, limit - current));
  
  if (current > limit) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  
  next();
}
