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
const dotenv_1 = __importDefault(require("dotenv"));
const templateManager_1 = require("./services/templateManager");
const searchEngine_1 = require("./services/searchEngine");
const auth_1 = require("./middleware/auth");
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
const importQueue = new bullmq_1.Queue('template-import', {
    connection: redis,
    defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: true
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
// Health check (avant auth)
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'marketplace' });
});
// ============ ENDPOINTS PUBLICS ============
app.get('/templates', async (req, res) => {
    const { page = 1, limit = 20, type, sort = 'popular', search, category } = req.query;
    try {
        const templates = await searchEngine_1.searchEngine.search({
            page: Number(page),
            limit: Number(limit),
            type: type,
            sort: sort,
            search: search,
            category: category
        });
        res.json(templates);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/templates/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const template = await templateManager_1.templateManager.getTemplate(id);
        if (!template)
            return res.status(404).json({ error: 'Template not found' });
        res.json(template);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/categories', async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: { _count: { select: { templates: true } } }
        });
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ============ ENDPOINTS PRIVÉS (Authentifiés) ============
app.post('/templates', auth_1.authenticate, async (req, res) => {
    try {
        const { name, description, type, config, thumbnail, isPublic = true, price = 0 } = req.body;
        const userId = req.user?.userId;
        if (!userId)
            return res.status(401).json({ error: "Utilisateur non identifié" });
        if (!name || !type || !config) {
            return res.status(400).json({ error: "Nom, type et config requis" });
        }
        const template = await templateManager_1.templateManager.createTemplate({
            name,
            description,
            type,
            config,
            thumbnail,
            isPublic,
            price,
            authorId: userId
        });
        console.log(`[Marketplace] Nouveau template créé : ${template.id} par ${userId}`);
        res.status(201).json(template);
    }
    catch (error) {
        console.error('Erreur création template:', error);
        res.status(500).json({ error: error.message });
    }
});
app.post('/templates/:id/import', auth_1.authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user?.userId;
        if (!userId)
            return res.status(401).json({ error: "Utilisateur non identifié" });
        const job = await importQueue.add('import', { templateId: id, userId });
        res.json({
            jobId: job.id,
            status: 'queued',
            message: 'Import du template en cours'
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Marketplace service running on port ${PORT}`));
