"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const teamManager_1 = require("./services/teamManager");
const invitationManager_1 = require("./services/invitationManager");
const teamAuth_1 = require("./middleware/teamAuth");
const teamDashboard_1 = require("./dashboard/teamDashboard");
const activityFeed_1 = require("./dashboard/activityFeed");
const commentSystem_1 = require("./collaboration/commentSystem");
const teamSync_1 = require("./websocket/teamSync");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const prisma = new client_1.PrismaClient();
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
const invitationQueue = new bullmq_1.Queue('team-invitations', { connection: redis });
(0, teamSync_1.initializeWebSocket)(httpServer);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const authenticate = (req, res, next) => {
    req.user = { id: req.headers['x-user-id'] || 'user_1' };
    next();
};
app.use(authenticate);
// ============ TEAMS ============
app.post('/teams', async (req, res) => {
    try {
        const team = await teamManager_1.teamManager.createTeam({ ...req.body, ownerId: req.user.id });
        res.json(team);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/teams', async (req, res) => {
    try {
        res.json(await teamManager_1.teamManager.getUserTeams(req.user.id));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/teams/:teamId', teamAuth_1.teamAuth, async (req, res) => {
    try {
        res.json(await teamManager_1.teamManager.getTeamWithMembers(req.params.teamId));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ============ DASHBOARD & ACTIVITY ============
app.get('/teams/:teamId/dashboard/stats', teamAuth_1.teamAuth, async (req, res) => {
    try {
        res.json(await teamDashboard_1.teamDashboard.getTeamStats(req.params.teamId));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/teams/:teamId/activity', teamAuth_1.teamAuth, async (req, res) => {
    try {
        res.json(await activityFeed_1.activityFeed.getTeamActivityFeed(req.params.teamId, Number(req.query.limit || 50)));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ============ COMMENTS ============
app.get('/projects/:projectId/comments', async (req, res) => {
    try {
        res.json(await commentSystem_1.commentSystem.getComments(req.params.projectId, req.user.id));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/projects/:projectId/comments', async (req, res) => {
    try {
        res.json(await commentSystem_1.commentSystem.addComment(req.params.projectId, req.user.id, req.body.content, req.body.parentId));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ============ INVITATIONS ============
app.post('/teams/:teamId/invitations', teamAuth_1.teamAuth, (0, teamAuth_1.requireTeamRole)(['OWNER', 'ADMIN']), async (req, res) => {
    try {
        const invitation = await invitationManager_1.invitationManager.createInvitation({ ...req.body, teamId: req.params.teamId, invitedBy: req.user.id });
        await invitationQueue.add('send', { invitationId: invitation.id });
        res.json(invitation);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const PORT = process.env.TEAMS_SERVICE_PORT || 3007;
httpServer.listen(PORT, () => console.log(`Teams service (with WS) on ${PORT}`));
