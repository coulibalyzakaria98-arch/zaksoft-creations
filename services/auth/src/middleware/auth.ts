import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Non authentifié' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!); 
    req.user = decoded as any;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalide' });
  }
};
