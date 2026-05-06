import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import jwt from 'jsonwebtoken';
import { activityEmitter } from '../dashboard/activityFeed';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
let io: Server;

export function initializeWebSocket(server: HttpServer) {
  io = new Server(server, {
    cors: { origin: '*', credentials: true }
  });
  
  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Auth required'));
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
      socket.data.userId = decoded.userId;
      next();
    } catch (error) {
      next(new Error('Invalid token'));
    }
  });
  
  io.on('connection', (socket) => {
    socket.on('join_team', async (teamId: string) => {
      const member = await prisma.membership.findUnique({
        where: { userId_teamId: { teamId, userId: socket.data.userId } }
      });
      if (member) socket.join(`team:${teamId}:activity`);
    });
  });
  
  activityEmitter.on('team:activity', (activity) => {
    io.to(`team:${activity.teamId}:activity`).emit('activity:new', activity);
  });
  
  return io;
}
