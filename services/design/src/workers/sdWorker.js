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
exports.sdBridgeWorker = void 0;
var Sentry = require("@sentry/node");
var bullmq_1 = require("bullmq");
var axios_1 = require("axios");
var ioredis_1 = require("ioredis");
var storage_1 = require("@zaksoft/storage");
var database_1 = require("@zaksoft/database");
var prisma = new database_1.PrismaClient();
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: null
});
var REPLICATE_API_KEY = process.env.REPLICATE_API_KEY;
var REPLICATE_API = 'https://api.replicate.com/v1';
// Coût en crédits par génération
var CREDITS_COST = 1;
var SDWorker = /** @class */ (function () {
    function SDWorker(apiKey) {
        this.apiKey = apiKey;
    }
    SDWorker.prototype.generateImage = function (jobId, prompt, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, prediction, attempts, maxAttempts, progress, statusRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // 1. Mettre à jour le statut du job
                    return [4 /*yield*/, prisma.job.update({
                            where: { id: jobId },
                            data: { status: 'PROCESSING', progress: 10 },
                        })];
                    case 1:
                        // 1. Mettre à jour le statut du job
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.post("".concat(REPLICATE_API, "/predictions"), {
                                version: "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
                                input: {
                                    prompt: prompt,
                                    negative_prompt: (options === null || options === void 0 ? void 0 : options.negative_prompt) || '',
                                    width: (options === null || options === void 0 ? void 0 : options.width) || 1024,
                                    height: (options === null || options === void 0 ? void 0 : options.height) || 1024,
                                    num_outputs: 1,
                                    scheduler: "K_EULER",
                                    num_inference_steps: 25,
                                    guidance_scale: 7.5,
                                    seed: options === null || options === void 0 ? void 0 : options.seed
                                },
                            }, {
                                headers: {
                                    'Authorization': "Token ".concat(this.apiKey),
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 2:
                        response = _a.sent();
                        prediction = response.data;
                        return [4 /*yield*/, prisma.job.update({
                                where: { id: jobId },
                                data: { progress: 20 },
                            })];
                    case 3:
                        _a.sent();
                        attempts = 0;
                        maxAttempts = 60;
                        _a.label = 4;
                    case 4:
                        if (!(prediction.status !== 'succeeded' && prediction.status !== 'failed' && attempts < maxAttempts)) return [3 /*break*/, 8];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                    case 5:
                        _a.sent();
                        attempts++;
                        progress = Math.min(20 + Math.floor((attempts / maxAttempts) * 70), 90);
                        return [4 /*yield*/, prisma.job.update({
                                where: { id: jobId },
                                data: { progress: progress },
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get("".concat(REPLICATE_API, "/predictions/").concat(prediction.id), {
                                headers: { 'Authorization': "Token ".concat(this.apiKey) },
                            })];
                    case 7:
                        statusRes = _a.sent();
                        prediction = statusRes.data;
                        return [3 /*break*/, 4];
                    case 8:
                        if (prediction.status === 'failed') {
                            throw new Error(prediction.error || 'SD XL Generation failed');
                        }
                        return [2 /*return*/, prediction.output[0]];
                }
            });
        });
    };
    return SDWorker;
}());
exports.sdBridgeWorker = new bullmq_1.Worker('image-generation', function (job) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Sentry.withMonitor("sd-worker", function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a, jobId, userId, prompt, options, replicateKey, worker, imageUrl, imageResponse, s3Key_1, s3Url_1, result_data, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.data, jobId = _a.jobId, userId = _a.userId, prompt = _a.prompt, options = _a.options;
                            replicateKey = process.env.REPLICATE_API_KEY;
                            if (!replicateKey)
                                throw new Error('REPLICATE_API_KEY is not set');
                            console.log("\uD83C\uDFA8 [Job ".concat(jobId, "] G\u00E9n\u00E9ration d'image pour user ").concat(userId));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 6, , 7]);
                            worker = new SDWorker(replicateKey);
                            return [4 /*yield*/, worker.generateImage(jobId, prompt, options)];
                        case 2:
                            imageUrl = _b.sent();
                            return [4 /*yield*/, axios_1.default.get(imageUrl, { responseType: 'arraybuffer' })];
                        case 3:
                            imageResponse = _b.sent();
                            s3Key_1 = "images/".concat(userId || 'anonymous', "/").concat(jobId, ".png");
                            return [4 /*yield*/, storage_1.storageService.uploadFile(Buffer.from(imageResponse.data), s3Key_1, 'image/png')];
                        case 4:
                            s3Url_1 = _b.sent();
                            console.log("Uploaded image to S3: ".concat(s3Url_1));
                            return [4 /*yield*/, prisma.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                                    var image, user;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, tx.image.create({
                                                    data: {
                                                        userId: userId,
                                                        jobId: jobId,
                                                        prompt: prompt,
                                                        negativePrompt: options === null || options === void 0 ? void 0 : options.negative_prompt,
                                                        resolution: "".concat((options === null || options === void 0 ? void 0 : options.width) || 1024, "x").concat((options === null || options === void 0 ? void 0 : options.height) || 1024),
                                                        imageUrl: s3Url_1,
                                                        storageKey: s3Key_1,
                                                        status: 'COMPLETED',
                                                    },
                                                })];
                                            case 1:
                                                image = _a.sent();
                                                // 5b. Mettre à jour le job
                                                return [4 /*yield*/, tx.job.update({
                                                        where: { id: jobId },
                                                        data: {
                                                            status: 'COMPLETED',
                                                            progress: 100,
                                                            output: { imageUrl: s3Url_1, storageKey: s3Key_1 },
                                                            completedAt: new Date(),
                                                        },
                                                    })];
                                            case 2:
                                                // 5b. Mettre à jour le job
                                                _a.sent();
                                                return [4 /*yield*/, tx.user.findUnique({
                                                        where: { id: userId },
                                                        select: { credits: true },
                                                    })];
                                            case 3:
                                                user = _a.sent();
                                                if (!user)
                                                    throw new Error('Utilisateur non trouvé');
                                                if (user.credits < CREDITS_COST)
                                                    throw new Error('Crédits insuffisants');
                                                return [4 /*yield*/, tx.user.update({
                                                        where: { id: userId },
                                                        data: {
                                                            credits: { decrement: CREDITS_COST },
                                                        },
                                                    })];
                                            case 4:
                                                _a.sent();
                                                // 5d. Enregistrer la transaction
                                                return [4 /*yield*/, tx.creditTransaction.create({
                                                        data: {
                                                            userId: userId,
                                                            amount: -CREDITS_COST,
                                                            type: database_1.CreditType.GENERATION,
                                                            referenceId: jobId,
                                                            description: "G\u00E9n\u00E9ration d'image: ".concat(prompt.substring(0, 50), "..."),
                                                        },
                                                    })];
                                            case 5:
                                                // 5d. Enregistrer la transaction
                                                _a.sent();
                                                return [2 /*return*/, image];
                                        }
                                    });
                                }); })];
                        case 5:
                            result_data = _b.sent();
                            console.log("\u2705 [Job ".concat(jobId, "] Image g\u00E9n\u00E9r\u00E9e et cr\u00E9dits d\u00E9bit\u00E9s."));
                            return [2 /*return*/, { url: result_data.imageUrl }];
                        case 6:
                            error_1 = _b.sent();
                            Sentry.captureException(error_1, {
                                extra: { jobId: jobId, userId: userId, prompt: prompt }
                            });
                            throw error_1;
                        case 7: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); }, {
    connection: redis,
    concurrency: 5
});
