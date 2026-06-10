"use strict";
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
var Sentry = require("@sentry/node");
var express_1 = require("express");
var bullmq_1 = require("bullmq");
var ioredis_1 = require("ioredis");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
// Charger les variables d'environnement
dotenv_1.default.config();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV || 'development',
});
var metrics_1 = require("./metrics");
var auth_1 = require("./middleware/auth");
var health_1 = require("@zaksoft/health");
var logging_1 = require("@zaksoft/logging");
var database_1 = require("@zaksoft/database");
var prisma = new database_1.PrismaClient();
var app = (0, express_1.default)();
// The request handler must be the first middleware on the app
Sentry.setupExpressErrorHandler(app);
var port = process.env.PORT || 3003;
// Configuration Redis
var redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
// File d'attente BullMQ
var imageQueue = new bullmq_1.Queue('image-generation', {
    connection: redis,
    defaultJobOptions: {
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 1000
        },
        removeOnComplete: true
    }
});
// Initialiser les métriques BullMQ
(0, metrics_1.setupBullMQMetrics)(imageQueue);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Health check (avant auth)
app.get('/health', function (req, res) {
    res.json((0, health_1.healthCheck)('design', '1.0.0'));
});
// Monter les métriques (avant auth pour le monitoring)
app.use(metrics_1.metricsApp);
// Normaliser les requêtes Vercel sous /_/design pour que l'Express route correctement
app.use(function (req, res, next) {
    if (req.url.startsWith('/_/design')) {
        req.url = req.url.replace('/_/design', '');
    }
    next();
});
// Appliquer l'authentification sur les routes de génération
app.use('/image', auth_1.authenticate);
var CREDITS_COST = 1;
/**
 * POST /image/generate
 * Déclenche une génération d'image via IA
 */
app.post('/image/generate', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, prompt_1, options, userId, user, dbJob, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                _a = req.body, prompt_1 = _a.prompt, options = _a.options;
                userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId;
                if (!prompt_1) {
                    return [2 /*return*/, res.status(400).json({ error: 'Le prompt est requis' })];
                }
                if (!userId) {
                    return [2 /*return*/, res.status(401).json({ error: 'Utilisateur non identifié' })];
                }
                return [4 /*yield*/, prisma.user.findUnique({
                        where: { id: userId },
                        select: { credits: true }
                    })];
            case 1:
                user = _c.sent();
                if (!user || user.credits < CREDITS_COST) {
                    return [2 /*return*/, res.status(402).json({ error: 'Crédits insuffisants' })];
                }
                return [4 /*yield*/, prisma.job.create({
                        data: {
                            type: 'IMAGE',
                            userId: userId,
                            status: 'PENDING',
                            input: { prompt: prompt_1, options: options },
                            creditsCost: CREDITS_COST,
                        }
                    })];
            case 2:
                dbJob = _c.sent();
                // 3. Ajouter à la file BullMQ
                return [4 /*yield*/, imageQueue.add('generate', {
                        jobId: dbJob.id,
                        prompt: prompt_1,
                        options: options,
                        userId: userId,
                        timestamp: new Date().toISOString()
                    }, {
                        jobId: dbJob.id // Use same ID for tracking
                    })];
            case 3:
                // 3. Ajouter à la file BullMQ
                _c.sent();
                res.status(202).json({
                    jobId: dbJob.id,
                    status: 'queued',
                    message: 'Demande de génération enregistrée'
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _c.sent();
                logging_1.default.error('Erreur génération image:', { error: error_1 });
                res.status(500).json({ error: 'Erreur lors du traitement de la demande' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
/**
 * GET /image/status/:jobId
 * Récupère le statut et le résultat d'un job
 */
app.get('/image/status/:jobId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var jobId, dbJob, bullJob, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                jobId = req.params.jobId;
                return [4 /*yield*/, prisma.job.findUnique({
                        where: { id: jobId },
                        include: { image: true }
                    })];
            case 1:
                dbJob = _b.sent();
                if (!dbJob) {
                    return [2 /*return*/, res.status(404).json({ error: 'Job non trouvé' })];
                }
                if (dbJob.status === 'COMPLETED') {
                    return [2 /*return*/, res.json({
                            id: dbJob.id,
                            status: 'completed',
                            progress: 100,
                            url: ((_a = dbJob.image) === null || _a === void 0 ? void 0 : _a.imageUrl) || null
                        })];
                }
                if (dbJob.status === 'FAILED') {
                    return [2 /*return*/, res.json({
                            id: dbJob.id,
                            status: 'failed',
                            error: dbJob.error
                        })];
                }
                return [4 /*yield*/, imageQueue.getJob(jobId)];
            case 2:
                bullJob = _b.sent();
                res.json({
                    id: dbJob.id,
                    status: dbJob.status.toLowerCase(),
                    progress: (bullJob === null || bullJob === void 0 ? void 0 : bullJob.progress) || dbJob.progress,
                    url: null
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                logging_1.default.error('Erreur récupération statut:', { error: error_2 });
                res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    logging_1.default.info('Design service started', { port: port });
});
