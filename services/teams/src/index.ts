import express from 'express';
import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { createServer } from 'http';
import { teamManager } from './services/teamManager';
import { invitationManager } from './services/invitationManager';
import { projectSharing } from './services/projectSharing';
import { teamAuth, requireTeamRole } from './middleware/teamAuth';
import { teamDashboard } from './dashboard/teamDashboard';
import { activityFeed } from './dashboard/activityFeed';
import { commentSystem } from './collaboration/commentSystem';
import { initializeWebSocket } from './websocket/teamSync';

const app = express();
const httpServer = createServer(app);
const prisma = new PrismaClient();
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const invitationQueue = new Queue('team-invitations', { connection: redis });

initializeWebSocket(httpServer);

app.use(cors());
app.use(express.json());

const authenticate = (req: any, res: any, next: any) => {
  req.user = { id: req.headers['x-user-id'] || 'user_1' };
  next();
};

app.use(authenticate);

// ============ TEAMS ============
app.post('/teams', async (req: any, res) => {
  try {
    const team = await teamManager.createTeam({ ...req.body, ownerId: req.user.id });
    res.json(team);
  } catch (error: any) { res.status(500).json({ error: error.message }); }
});

app.get('/teams', async (req: any, res) => {
  try { res.json(await teamManager.getUserTeams(req.user.id)); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

app.get('/teams/:teamId', teamAuth as any, async (req: any, res) => {
  try { res.json(await teamManager.getTeamWithMembers(req.params.teamId)); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

// ============ DASHBOARD & ACTIVITY ============
app.get('/teams/:teamId/dashboard/stats', teamAuth as any, async (req: any, res) => {
  try { res.json(await teamDashboard.getTeamStats(req.params.teamId)); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

app.get('/teams/:teamId/activity', teamAuth as any, async (req: any, res) => {
  try { res.json(await activityFeed.getTeamActivityFeed(req.params.teamId, Number(req.query.limit || 50))); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

// ============ COMMENTS ============
app.get('/projects/:projectId/comments', async (req: any, res) => {
  try { res.json(await commentSystem.getComments(req.params.projectId, req.user.id)); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

app.post('/projects/:projectId/comments', async (req: any, res) => {
  try { res.json(await commentSystem.addComment(req.params.projectId, req.user.id, req.body.content, req.body.parentId)); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

// ============ INVITATIONS ============
app.post('/teams/:teamId/invitations', teamAuth as any, requireTeamRole(['OWNER', 'ADMIN']) as any, async (req: any, res) => {
  try {
    const invitation = await invitationManager.createInvitation({ ...req.body, teamId: req.params.teamId, invitedBy: req.user.id });
    await invitationQueue.add('send', { invitationId: invitation.id });
    res.json(invitation);
  } catch (error: any) { res.status(500).json({ error: error.message }); }
});

const PORT = process.env.TEAMS_SERVICE_PORT || 3007;
httpServer.listen(PORT, () => console.log(`Teams service (with WS) on ${PORT}`));
