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
exports.webGenWorker = void 0;
var Sentry = require("@sentry/node");
var bullmq_1 = require("bullmq");
var ioredis_1 = require("ioredis");
var storage_1 = require("@zaksoft/storage");
var openai_1 = require("openai");
var dotenv_1 = require("dotenv");
var database_1 = require("@zaksoft/database");
dotenv_1.default.config();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
});
var prisma = new database_1.PrismaClient();
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: null
});
var openai = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY });
var CREDITS_COST = 15;
exports.webGenWorker = new bullmq_1.Worker('web-generation', function (job) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Sentry.withMonitor("web-gen-worker", function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a, jobId, prompt, siteConfig, userId, user, completion, htmlContent_1, s3Key, s3Url_1, result_data, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.data, jobId = _a.jobId, prompt = _a.prompt, siteConfig = _a.siteConfig, userId = _a.userId;
                            console.log("\uD83C\uDF10 [Job ".concat(jobId, "] Starting AI generation for user ").concat(userId));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 8, , 10]);
                            return [4 /*yield*/, prisma.user.findUnique({
                                    where: { id: userId },
                                    select: { credits: true }
                                })];
                        case 2:
                            user = _b.sent();
                            if (!user || user.credits < CREDITS_COST) {
                                throw new Error('Crédits insuffisants pour générer un site web');
                            }
                            // 2. Update job status
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: { status: 'PROCESSING', progress: 10 }
                                })];
                        case 3:
                            // 2. Update job status
                            _b.sent();
                            return [4 /*yield*/, openai.chat.completions.create({
                                    model: "gpt-4-1106-preview",
                                    messages: [
                                        {
                                            role: "system",
                                            content: "Tu es un d\u00E9veloppeur frontend expert. G\u00E9n\u00E8re du HTML/CSS/JS complet et fonctionnel pour un site web \u00E0 page unique.\nRespecte les consignes suivantes:\n- Code autonome (fichier HTML unique)\n- Design moderne, responsive (mobile-first)\n- Utilise Tailwind CSS via CDN pour le style\n- Inclure des interactions basiques si n\u00E9cessaire\n- Retourne UNIQUEMENT le code HTML brut, sans explications ni blocs markdown."
                                        },
                                        {
                                            role: "user",
                                            content: "G\u00E9n\u00E8re un site web bas\u00E9 sur cette description: ".concat(prompt, ". Template: ").concat((siteConfig === null || siteConfig === void 0 ? void 0 : siteConfig.template) || 'landing', ". Framework: ").concat((siteConfig === null || siteConfig === void 0 ? void 0 : siteConfig.framework) || 'tailwind', ".")
                                        }
                                    ],
                                    temperature: 0.7,
                                })];
                        case 4:
                            completion = _b.sent();
                            htmlContent_1 = completion.choices[0].message.content || "";
                            // Nettoyer le markdown si GPT en a mis
                            htmlContent_1 = htmlContent_1.replace(/^```html\n?/, '').replace(/\n?```$/, '').trim();
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: { progress: 80 }
                                })];
                        case 5:
                            _b.sent();
                            s3Key = "sites/".concat(userId || 'anonymous', "/").concat(jobId, "/index.html");
                            return [4 /*yield*/, storage_1.storageService.uploadFile(htmlContent_1, s3Key, 'text/html')];
                        case 6:
                            s3Url_1 = _b.sent();
                            console.log("[WebGen] Uploaded to S3: ".concat(s3Url_1));
                            return [4 /*yield*/, prisma.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                                    var website;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, tx.website.create({
                                                    data: {
                                                        userId: userId,
                                                        jobId: jobId,
                                                        description: prompt,
                                                        template: (siteConfig === null || siteConfig === void 0 ? void 0 : siteConfig.template) || 'landing',
                                                        framework: (siteConfig === null || siteConfig === void 0 ? void 0 : siteConfig.framework) || 'tailwind',
                                                        code: htmlContent_1,
                                                        previewUrl: s3Url_1,
                                                        status: 'COMPLETED',
                                                    }
                                                })];
                                            case 1:
                                                website = _a.sent();
                                                // 5b. Mettre à jour le job
                                                return [4 /*yield*/, tx.job.update({
                                                        where: { id: jobId },
                                                        data: {
                                                            status: 'COMPLETED',
                                                            progress: 100,
                                                            output: { websiteId: website.id, previewUrl: s3Url_1 },
                                                            completedAt: new Date(),
                                                        }
                                                    })];
                                            case 2:
                                                // 5b. Mettre à jour le job
                                                _a.sent();
                                                // 5c. Débiter les crédits
                                                return [4 /*yield*/, tx.user.update({
                                                        where: { id: userId },
                                                        data: { credits: { decrement: CREDITS_COST } }
                                                    })];
                                            case 3:
                                                // 5c. Débiter les crédits
                                                _a.sent();
                                                // 5d. Transaction log
                                                return [4 /*yield*/, tx.creditTransaction.create({
                                                        data: {
                                                            userId: userId,
                                                            amount: -CREDITS_COST,
                                                            type: database_1.CreditType.GENERATION,
                                                            referenceId: jobId,
                                                            description: "G\u00E9n\u00E9ration site web: ".concat(prompt.substring(0, 50), "...")
                                                        }
                                                    })];
                                            case 4:
                                                // 5d. Transaction log
                                                _a.sent();
                                                return [2 /*return*/, website];
                                        }
                                    });
                                }); })];
                        case 7:
                            result_data = _b.sent();
                            console.log("\u2705 [Job ".concat(jobId, "] Site web g\u00E9n\u00E9r\u00E9 et cr\u00E9dits d\u00E9bit\u00E9s."));
                            return [2 /*return*/, {
                                    url: result_data.previewUrl,
                                    websiteId: result_data.id
                                }];
                        case 8:
                            error_1 = _b.sent();
                            console.error("\u274C [Job ".concat(jobId, "] Error:"), error_1);
                            Sentry.captureException(error_1, {
                                extra: { jobId: jobId, userId: userId, prompt: prompt }
                            });
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: {
                                        status: 'FAILED',
                                        error: String(error_1)
                                    }
                                })];
                        case 9:
                            _b.sent();
                            throw error_1;
                        case 10: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); }, {
    connection: redis,
    concurrency: 2
});
