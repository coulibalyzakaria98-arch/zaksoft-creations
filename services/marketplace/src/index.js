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
var express_1 = require("express");
var bullmq_1 = require("bullmq");
var ioredis_1 = require("ioredis");
var client_1 = require("./generated/client");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var templateManager_1 = require("./services/templateManager");
var searchEngine_1 = require("./services/searchEngine");
var auth_1 = require("./middleware/auth");
var health_1 = require("@zaksoft/health");
var logging_1 = require("@zaksoft/logging");
dotenv_1.default.config();
var app = (0, express_1.default)();
var prisma = new client_1.PrismaClient();
var redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
var importQueue = new bullmq_1.Queue('template-import', {
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
app.get('/health', function (req, res) {
    res.json((0, health_1.healthCheck)('marketplace', '1.0.0'));
});
// ============ ENDPOINTS PUBLICS ============
app.get('/templates', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, limit, type, _d, sort, search, category, templates, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 20 : _c, type = _a.type, _d = _a.sort, sort = _d === void 0 ? 'popular' : _d, search = _a.search, category = _a.category;
                _e.label = 1;
            case 1:
                _e.trys.push([1, 3, , 4]);
                return [4 /*yield*/, searchEngine_1.searchEngine.search({
                        page: Number(page),
                        limit: Number(limit),
                        type: type,
                        sort: sort,
                        search: search,
                        category: category
                    })];
            case 2:
                templates = _e.sent();
                res.json(templates);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _e.sent();
                logging_1.default.error('Error searching templates', { error: error_1.message });
                res.status(500).json({ error: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/templates/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, template, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, templateManager_1.templateManager.getTemplate(id)];
            case 2:
                template = _a.sent();
                if (!template)
                    return [2 /*return*/, res.status(404).json({ error: 'Template not found' })];
                res.json(template);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                logging_1.default.error('Error getting template', { error: error_2.message, templateId: id });
                res.status(500).json({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/categories', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var categories, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.category.findMany({
                        include: { _count: { select: { templates: true } } }
                    })];
            case 1:
                categories = _a.sent();
                res.json(categories);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                logging_1.default.error('Error getting categories', { error: error_3.message });
                res.status(500).json({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// ============ ENDPOINTS PRIVÉS (Authentifiés) ============
app.post('/templates', auth_1.authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, description, type, config, thumbnail, _b, isPublic, _c, price, userId, template, error_4;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, description = _a.description, type = _a.type, config = _a.config, thumbnail = _a.thumbnail, _b = _a.isPublic, isPublic = _b === void 0 ? true : _b, _c = _a.price, price = _c === void 0 ? 0 : _c;
                userId = (_d = req.user) === null || _d === void 0 ? void 0 : _d.userId;
                if (!userId)
                    return [2 /*return*/, res.status(401).json({ error: "Utilisateur non identifié" })];
                if (!name_1 || !type || !config) {
                    return [2 /*return*/, res.status(400).json({ error: "Nom, type et config requis" })];
                }
                return [4 /*yield*/, templateManager_1.templateManager.createTemplate({
                        name: name_1,
                        description: description,
                        type: type,
                        config: config,
                        thumbnail: thumbnail,
                        isPublic: isPublic,
                        price: price,
                        authorId: userId
                    })];
            case 1:
                template = _e.sent();
                logging_1.default.info('Nouveau template créé', { templateId: template.id, userId: userId });
                res.status(201).json(template);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _e.sent();
                logging_1.default.error('Erreur création template:', { error: error_4.message });
                res.status(500).json({ error: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post('/templates/:id/import', auth_1.authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userId, job, error_5;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
                if (!userId)
                    return [2 /*return*/, res.status(401).json({ error: "Utilisateur non identifié" })];
                return [4 /*yield*/, importQueue.add('import', { templateId: id, userId: userId })];
            case 1:
                job = _b.sent();
                res.json({
                    jobId: job.id,
                    status: 'queued',
                    message: 'Import du template en cours'
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                logging_1.default.error('Erreur import template:', { error: error_5.message });
                res.status(500).json({ error: error_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.PORT || 3006;
app.listen(PORT, function () { return logging_1.default.info('Marketplace service running', { port: PORT }); });
