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
exports.svdBridgeWorker = void 0;
var bullmq_1 = require("bullmq");
var axios_1 = require("axios");
var ioredis_1 = require("ioredis");
var dotenv_1 = require("dotenv");
var storage_1 = require("@zaksoft/storage");
var database_1 = require("@zaksoft/database");
dotenv_1.default.config();
var prisma = new database_1.PrismaClient();
var redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
// Coût en crédits par génération vidéo SVD
var CREDITS_COST = 5;
var SVDWorker = /** @class */ (function () {
    function SVDWorker(config) {
        this.config = config;
    }
    SVDWorker.prototype.generateVideoFromImage = function (jobId, imageUrl, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, externalJobId, videoUrl, MAX_POLLS, POLL_INTERVAL_1, i, statusRes, _a, status_1, video_url, error, progress, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        // 1. Mettre à jour le statut
                        return [4 /*yield*/, prisma.job.update({
                                where: { id: jobId },
                                data: { status: 'PROCESSING', progress: 10 },
                            })];
                    case 1:
                        // 1. Mettre à jour le statut
                        _b.sent();
                        return [4 /*yield*/, axios_1.default.post("".concat(this.config.url, "/generate"), {
                                image_url: imageUrl,
                                fps: (options === null || options === void 0 ? void 0 : options.fps) || 6,
                                frames: (options === null || options === void 0 ? void 0 : options.frames) || 25,
                                seed: options === null || options === void 0 ? void 0 : options.seed
                            }, { timeout: 15000 })];
                    case 2:
                        response = _b.sent();
                        externalJobId = response.data.job_id;
                        if (!externalJobId)
                            throw new Error('Aucun job_id reçu du SVD Bridge');
                        return [4 /*yield*/, prisma.job.update({
                                where: { id: jobId },
                                data: { progress: 20 },
                            })];
                    case 3:
                        _b.sent();
                        videoUrl = null;
                        MAX_POLLS = 60;
                        POLL_INTERVAL_1 = 3000;
                        i = 0;
                        _b.label = 4;
                    case 4:
                        if (!(i < MAX_POLLS)) return [3 /*break*/, 9];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, POLL_INTERVAL_1); })];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, axios_1.default.get("".concat(this.config.url, "/status/").concat(externalJobId), { timeout: 5000 })];
                    case 6:
                        statusRes = _b.sent();
                        _a = statusRes.data, status_1 = _a.status, video_url = _a.video_url, error = _a.error;
                        progress = Math.min(20 + Math.floor((i / MAX_POLLS) * 70), 90);
                        return [4 /*yield*/, prisma.job.update({
                                where: { id: jobId },
                                data: { progress: progress },
                            })];
                    case 7:
                        _b.sent();
                        if (status_1 === 'completed') {
                            videoUrl = "".concat(this.config.url).concat(video_url);
                            return [3 /*break*/, 9];
                        }
                        else if (status_1 === 'failed') {
                            throw new Error("G\u00E9n\u00E9ration SVD \u00E9chou\u00E9e : ".concat(error || 'Erreur inconnue'));
                        }
                        _b.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 4];
                    case 9:
                        if (!videoUrl)
                            throw new Error('Timeout de génération SVD');
                        return [2 /*return*/, videoUrl];
                    case 10:
                        error_1 = _b.sent();
                        throw error_1;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return SVDWorker;
}());
// Worker BullMQ
exports.svdBridgeWorker = new bullmq_1.Worker('svd-generation', function (job) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, jobId, imageUrl, options, userId, svdUrl, user, worker, videoUrl, response, s3Key_1, s3Url_1, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = job.data, jobId = _a.jobId, imageUrl = _a.imageUrl, options = _a.options, userId = _a.userId;
                svdUrl = process.env.SVD_BRIDGE_URL || 'http://localhost:7860';
                console.log("\uD83C\uDFAC [Job ".concat(jobId, "] D\u00E9but g\u00E9n\u00E9ration SVD pour l'utilisateur ").concat(userId));
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 9]);
                return [4 /*yield*/, prisma.user.findUnique({
                        where: { id: userId },
                        select: { credits: true },
                    })];
            case 2:
                user = _b.sent();
                if (!user || user.credits < CREDITS_COST)
                    throw new Error('Crédits insuffisants');
                worker = new SVDWorker({ url: svdUrl });
                return [4 /*yield*/, worker.generateVideoFromImage(jobId, imageUrl, options)];
            case 3:
                videoUrl = _b.sent();
                return [4 /*yield*/, axios_1.default.get(videoUrl, { responseType: 'arraybuffer' })];
            case 4:
                response = _b.sent();
                s3Key_1 = "videos/".concat(userId || 'anonymous', "/").concat(jobId, ".mp4");
                return [4 /*yield*/, storage_1.storageService.uploadFile(Buffer.from(response.data), s3Key_1, 'video/mp4')];
            case 5:
                s3Url_1 = _b.sent();
                // 3. Sauvegarde BDD + TRANSACTION
                return [4 /*yield*/, prisma.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tx.video.create({
                                        data: {
                                            userId: userId,
                                            jobId: jobId,
                                            prompt: "SVD from ".concat(imageUrl),
                                            duration: 5, // SVD par défaut
                                            aspectRatio: '1:1',
                                            videoUrl: s3Url_1,
                                            storageKey: s3Key_1,
                                            status: 'COMPLETED',
                                        },
                                    })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, tx.job.update({
                                            where: { id: jobId },
                                            data: {
                                                status: 'COMPLETED',
                                                progress: 100,
                                                output: { videoUrl: s3Url_1, storageKey: s3Key_1 },
                                                completedAt: new Date(),
                                            },
                                        })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, tx.user.update({
                                            where: { id: userId },
                                            data: { credits: { decrement: CREDITS_COST } },
                                        })];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, tx.creditTransaction.create({
                                            data: {
                                                userId: userId,
                                                amount: -CREDITS_COST,
                                                type: 'GENERATION',
                                                referenceId: jobId,
                                                description: "G\u00E9n\u00E9ration SVD (Vid\u00E9o depuis image)",
                                            },
                                        })];
                                case 4:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 6:
                // 3. Sauvegarde BDD + TRANSACTION
                _b.sent();
                console.log("\u2705 [Job ".concat(jobId, "] SVD termin\u00E9e et upload\u00E9e : ").concat(s3Url_1));
                return [2 /*return*/, { url: s3Url_1 }];
            case 7:
                error_2 = _b.sent();
                console.error("\u274C [Job ".concat(jobId, "] Erreur SVD:"), error_2);
                return [4 /*yield*/, prisma.job.update({
                        where: { id: jobId },
                        data: { status: 'FAILED', error: String(error_2) },
                    })];
            case 8:
                _b.sent();
                throw error_2;
            case 9: return [2 /*return*/];
        }
    });
}); }, { connection: redis });
