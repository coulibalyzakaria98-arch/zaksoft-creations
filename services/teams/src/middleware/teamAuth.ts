import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface TeamRequest extends Request {
  user?: { id: string };
  team?: any;
  teamRole?: string;
}

export async function teamAuth(req: TeamRequest, res: Response, next: NextFunction) {
  const teamId = req.params.teamId || req.body.teamId;
  const userId = req.user?.id;
  
  if (!teamId) {
    return next();
  }
  
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const membership = await prisma.membership.findUnique({
      where: {
        userId_teamId: { teamId, userId }
      },
      include: { team: true }
    });
    
    if (!membership) {
      return res.status(403).json({ error: 'You are not a member of this team' });
    }
    
    req.team = membership.team;
    req.teamRole = membership.role;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error during team check' });
  }
}

export function requireTeamRole(allowedRoles: string[]) {
  return (req: TeamRequest, res: Response, next: NextFunction) => {
    const role = req.teamRole;
    
    if (!role || !allowedRoles.includes(role)) {
      return res.status(403).json({ error: 'Insufficient permissions in this team' });
    }
    
    next();
  };
}
