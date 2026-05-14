"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const manager_1 = require("./push/manager");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Register device for push
app.post('/devices/register', async (req, res) => {
    const { userId, token, platform } = req.body;
    const device = await prisma.pushDevice.upsert({
        where: { token },
        update: { isActive: true, lastUsedAt: new Date() },
        create: { userId, token, platform }
    });
    res.json(device);
});
// Internal endpoint to trigger notifications
app.post('/internal/send', async (req, res) => {
    const { userId, type, title, body, data } = req.body;
    const notification = await manager_1.PushNotificationManager.sendToUser({
        userId, type, title, body, data
    });
    res.json(notification);
});
const PORT = process.env.NOTIFICATIONS_PORT || 3009;
app.listen(PORT, () => console.log(`Notifications Service on ${PORT}`));
