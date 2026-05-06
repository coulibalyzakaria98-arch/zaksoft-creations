import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CREDITS_COST: Record<string, number> = {
  'image:512': 1,
  'image:1024': 2,
  'image:4k': 5,
  'video:5s': 10,
  'video:10s': 20,
  'video:30s': 50,
  'website:basic': 10,
  'website:pro': 25,
  'voiceover': 3
};

export interface AuthRequest extends Request {
  user?: { id: string; tier: string };
  creditCost?: number;
}

export function requireCredits(operation: string, getParams?: (req: Request) => any) {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    const params = getParams ? getParams(req) : req.body;
    let cost = CREDITS_COST[operation] || 1;
    
    // Ajustement dynamique
    if (operation === 'image' && params?.size) {
      cost = CREDITS_COST[`image:${params.size}`] || 1;
    }
    
    if (operation === 'video' && params?.duration) {
      if (params.duration <= 5) cost = 10;
      else if (params.duration <= 10) cost = 20;
      else cost = 50;
    }
    
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { credits: true, tier: true }
      });
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Enterprise = illimité (ou très haut plafond)
      if (user.tier === 'enterprise') {
        return next();
      }
      
      if (user.credits < cost) {
        return res.status(402).json({
          error: 'Insufficient credits',
          required: cost,
          available: user.credits,
          message: 'Crédits insuffisants. Veuillez recharger votre compte.'
        });
      }
      
      // On attache le coût pour la déduction ultérieure
      req.creditCost = cost;
      next();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error during credit check' });
    }
  };
}

export async function deductCreditsAfterSuccess(req: AuthRequest, res: Response, next: NextFunction) {
  const originalJson = res.json;
  
  res.json = function(body) {
    if (res.statusCode === 200 || res.statusCode === 201 || res.statusCode === 202) {
      const userId = req.user?.id;
      const cost = req.creditCost;
      
      if (userId && cost) {
        prisma.user.update({
          where: { id: userId },
          data: { credits: { decrement: cost } }
        }).then(() => {
          prisma.creditTransaction.create({
            data: {
              userId,
              amount: -cost,
              operation: req.path,
              metadata: { body: req.body } as any
            }
          });
        }).catch(err => {
          console.error("Failed to deduct credits after success:", err);
        });
      }
    }
    
    return originalJson.call(this, body);
  };
  
  next();
}
