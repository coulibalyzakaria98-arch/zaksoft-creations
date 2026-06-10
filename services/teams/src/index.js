"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bullmq_1 = require("bullmq");
var ioredis_1 = require("ioredis");
var client_1 = require("./generated/client");
var cors_1 = require("cors");
var http_1 = require("http");
var teamManager_1 = require("./services/teamManager");
var invitationManager_1 = require("./services/invitationManager");
var teamAuth_1 = require("./middleware/teamAuth");
var teamDashboard_1 = require("./dashboard/teamDashboard");
var activityFeed_1 = require("./dashboard/activityFeed");
var commentSystem_1 = require("./collaboration/commentSystem");
var teamSync_1 = require("./websocket/teamSync");
var health_1 = require("@zaksoft/health");
var logging_1 = require("@zaksoft/logging");
var app = (0, express_1.default)();
var httpServer = (0, http_1.createServer)(app);
var prisma = new client_1.PrismaClient();
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
var invitationQueue = new bullmq_1.Queue('team-invitations', { connection: redis });
(0, teamSync_1.initializeWebSocket)(httpServer);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check endpoint
app.get('/health', function (req, res) {
    res.json((0, health_1.healthCheck)('teams', '1.0.0'));
});
var authenticate = function (req, res, next) {
    req.user = { id: req.headers['x-user-id'] || 'user_1' };
    next();
};
app.use(authenticate);
// ============ TEAMS ============
app.post('/teams', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var team, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, teamManager_1.teamManager.createTeam(__assign(__assign({}, req.body), { ownerId: req.user.id }))];
            case 1:
                team = _a.sent();
                res.json(team);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                logging_1.default.error('Error creating team', { error: error_1.message });
                res.status(500).json({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/teams', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, teamManager_1.teamManager.getUserTeams(req.user.id)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _c.sent();
                logging_1.default.error('Error getting teams', { error: error_2.message });
                res.status(500).json({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/teams/:teamId', teamAuth_1.teamAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_3;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, teamManager_1.teamManager.getTeamWithMembers(req.params.teamId)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _c.sent();
                logging_1.default.error('Error getting team details', { error: error_3.message, teamId: req.params.teamId });
                res.status(500).json({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ============ DASHBOARD & ACTIVITY ============
app.get('/teams/:teamId/dashboard/stats', teamAuth_1.teamAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, teamDashboard_1.teamDashboard.getTeamStats(req.params.teamId)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _c.sent();
                logging_1.default.error('Error getting stats', { error: error_4.message, teamId: req.params.teamId });
                res.status(500).json({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/teams/:teamId/activity', teamAuth_1.teamAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_5;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, activityFeed_1.activityFeed.getTeamActivityFeed(req.params.teamId, Number(req.query.limit || 50))];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _c.sent();
                logging_1.default.error('Error getting activity', { error: error_5.message, teamId: req.params.teamId });
                res.status(500).json({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ============ COMMENTS ============
app.get('/projects/:projectId/comments', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_6;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, commentSystem_1.commentSystem.getComments(req.params.projectId, req.user.id)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _c.sent();
                logging_1.default.error('Error getting comments', { error: error_6.message, projectId: req.params.projectId });
                res.status(500).json({ error: error_6.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post('/projects/:projectId/comments', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_7;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, commentSystem_1.commentSystem.addComment(req.params.projectId, req.user.id, req.body.content, req.body.parentId)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_7 = _c.sent();
                logging_1.default.error('Error adding comment', { error: error_7.message, projectId: req.params.projectId });
                res.status(500).json({ error: error_7.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ============ INVITATIONS ============
app.post('/teams/:teamId/invitations', teamAuth_1.teamAuth, (0, teamAuth_1.requireTeamRole)(['OWNER', 'ADMIN']), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var invitation, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, invitationManager_1.invitationManager.createInvitation(__assign(__assign({}, req.body), { teamId: req.params.teamId, invitedBy: req.user.id }))];
            case 1:
                invitation = _a.sent();
                return [4 /*yield*/, invitationQueue.add('send', { invitationId: invitation.id })];
            case 2:
                _a.sent();
                res.json(invitation);
                return [3 /*break*/, 4];
            case 3:
                error_8 = _a.sent();
                logging_1.default.error('Error creating invitation', { error: error_8.message, teamId: req.params.teamId });
                res.status(500).json({ error: error_8.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.TEAMS_SERVICE_PORT || 3007;
httpServer.listen(PORT, function () { return logging_1.default.info('Teams service started', { port: PORT }); });
