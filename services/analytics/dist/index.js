"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const usage_collector_1 = require("./collectors/usage-collector");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Dashboard Data
app.get('/dashboard/user', async (req, res) => {
    const userId = req.headers['x-user-id'] || 'user_1';
    const usage = await prisma.dailyUsage.findMany({
        where: { userId: userId },
        orderBy: { date: 'asc' }
    });
    res.json({ usage });
});
// Collection endpoint
app.post('/internal/collect', async (req, res) => {
    try {
        await usage_collector_1.UsageCollector.collectEvent(req.body);
        res.json({ success: true });
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
});
const PORT = process.env.ANALYTICS_PORT || 3010;
app.listen(PORT, () => console.log(`Analytics Service on ${PORT}`));
