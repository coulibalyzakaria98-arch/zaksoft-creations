"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeWebSocket = initializeWebSocket;
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const activityFeed_1 = require("../dashboard/activityFeed");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let io;
function initializeWebSocket(server) {
    io = new socket_io_1.Server(server, {
        cors: { origin: '*', credentials: true }
    });
    io.use(async (socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token)
            return next(new Error('Auth required'));
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            socket.data.userId = decoded.userId;
            next();
        }
        catch (error) {
            next(new Error('Invalid token'));
        }
    });
    io.on('connection', (socket) => {
        socket.on('join_team', async (teamId) => {
            const member = await prisma.membership.findUnique({
                where: { userId_teamId: { teamId, userId: socket.data.userId } }
            });
            if (member)
                socket.join(`team:${teamId}:activity`);
        });
    });
    activityFeed_1.activityEmitter.on('team:activity', (activity) => {
        io.to(`team:${activity.teamId}:activity`).emit('activity:new', activity);
    });
    return io;
}
