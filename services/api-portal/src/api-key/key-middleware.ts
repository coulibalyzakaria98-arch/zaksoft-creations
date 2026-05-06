import { Request, Response, NextFunction } from 'express';
import { apiKeyManager } from './key-manager';

export interface ApiRequest extends Request {
  apiKey?: any;
}

export async function apiKeyAuth(req: ApiRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing API key' });
  }
  
  const key = authHeader.substring(7);
  const apiKey = await apiKeyManager.validateApiKey(key);
  
  if (!apiKey) {
    return res.status(401).json({ error: 'Invalid or inactive API key' });
  }
  
  req.apiKey = apiKey;
  next();
}
