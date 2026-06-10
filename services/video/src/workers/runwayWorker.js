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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoWorker = void 0;
var Sentry = require("@sentry/node");
var bullmq_1 = require("bullmq");
var ioredis_1 = require("ioredis");
var axios_1 = require("axios");
var elevenlabs_1 = require("elevenlabs");
var openai_1 = require("openai");
var fluent_ffmpeg_1 = require("fluent-ffmpeg");
var ffmpeg_static_1 = require("ffmpeg-static");
var stream_1 = require("stream");
var promises_1 = require("fs/promises");
var fs_1 = require("fs");
var dotenv_1 = require("dotenv");
var storage_1 = require("@zaksoft/storage");
var database_1 = require("@zaksoft/database");
dotenv_1.default.config();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
});
if (ffmpeg_static_1.default) {
    fluent_ffmpeg_1.default.setFfmpegPath(ffmpeg_static_1.default);
}
var prisma = new database_1.PrismaClient();
var redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: null
});
var elevenlabs = new elevenlabs_1.ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
var openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
var RUNWAY_API_KEY = process.env.RUNWAY_API_KEY;
var RUNWAY_API = 'https://api.runwayml.com/v1';
// Coût en crédits par génération vidéo
var CREDITS_COST = 5;
var bufferFromResponse = function (source) { return __awaiter(void 0, void 0, void 0, function () {
    var chunks, chunk, e_1_1, _a, _b;
    var _c, source_1, source_1_1;
    var _d, e_1, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                if (Buffer.isBuffer(source))
                    return [2 /*return*/, source];
                if (!(source instanceof stream_1.Readable)) return [3 /*break*/, 13];
                chunks = [];
                _g.label = 1;
            case 1:
                _g.trys.push([1, 6, 7, 12]);
                _c = true, source_1 = __asyncValues(source);
                _g.label = 2;
            case 2: return [4 /*yield*/, source_1.next()];
            case 3:
                if (!(source_1_1 = _g.sent(), _d = source_1_1.done, !_d)) return [3 /*break*/, 5];
                _f = source_1_1.value;
                _c = false;
                chunk = _f;
                chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
                _g.label = 4;
            case 4:
                _c = true;
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 7:
                _g.trys.push([7, , 10, 11]);
                if (!(!_c && !_d && (_e = source_1.return))) return [3 /*break*/, 9];
                return [4 /*yield*/, _e.call(source_1)];
            case 8:
                _g.sent();
                _g.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12: return [2 /*return*/, Buffer.concat(chunks)];
            case 13:
                if (!(source === null || source === void 0 ? void 0 : source.arrayBuffer)) return [3 /*break*/, 15];
                _b = (_a = Buffer).from;
                return [4 /*yield*/, source.arrayBuffer()];
            case 14: return [2 /*return*/, _b.apply(_a, [_g.sent()])];
            case 15:
                if (source === null || source === void 0 ? void 0 : source.data) {
                    return [2 /*return*/, Buffer.from(source.data)];
                }
                throw new Error('Unsupported audio response format from ElevenLabs');
        }
    });
}); };
exports.videoWorker = new bullmq_1.Worker('video-generation', function (job) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Sentry.withMonitor("video-worker", function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a, jobId, prompt, duration, aspectRatio, addVoiceover, voiceoverText, addSubtitles, userId, user, ratio_1, runDuration_1, runwayResponse, task, status_1, videoUrl_1, attempts, maxAttempts, progress, statusData, audioBuffer_1, audioTempPath, subtitles_1, audioResponse, transcription, outputPath_1, s3Key_1, s3Url_1, result_data, error_1;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = job.data, jobId = _a.jobId, prompt = _a.prompt, duration = _a.duration, aspectRatio = _a.aspectRatio, addVoiceover = _a.addVoiceover, voiceoverText = _a.voiceoverText, addSubtitles = _a.addSubtitles, userId = _a.userId;
                            console.log("\uD83C\uDFAC [Job ".concat(jobId, "] G\u00E9n\u00E9ration vid\u00E9o pour user ").concat(userId));
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 20, , 22]);
                            return [4 /*yield*/, prisma.user.findUnique({
                                    where: { id: userId },
                                    select: { credits: true },
                                })];
                        case 2:
                            user = _c.sent();
                            if (!user)
                                throw new Error('Utilisateur non trouvé');
                            if (user.credits < CREDITS_COST)
                                throw new Error('Crédits insuffisants pour générer une vidéo');
                            // 2. Mettre à jour le statut du job
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: { status: 'PROCESSING', progress: 10 },
                                })];
                        case 3:
                            // 2. Mettre à jour le statut du job
                            _c.sent();
                            ratio_1 = (aspectRatio || '16:9').replace(':', '/');
                            runDuration_1 = Math.min(duration || 5, 16);
                            return [4 /*yield*/, axios_1.default.post("".concat(RUNWAY_API, "/generate"), {
                                    prompt: prompt,
                                    duration: runDuration_1,
                                    aspect_ratio: ratio_1,
                                    seed: Math.floor(Math.random() * 1000000),
                                }, {
                                    headers: {
                                        'Authorization': "Bearer ".concat(RUNWAY_API_KEY),
                                        'Content-Type': 'application/json'
                                    }
                                })];
                        case 4:
                            runwayResponse = _c.sent();
                            task = runwayResponse.data;
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: { progress: 20 },
                                })];
                        case 5:
                            _c.sent();
                            status_1 = 'PENDING';
                            videoUrl_1 = null;
                            attempts = 0;
                            maxAttempts = 60;
                            _c.label = 6;
                        case 6:
                            if (!(status_1 !== 'SUCCEEDED' && status_1 !== 'FAILED' && attempts < maxAttempts)) return [3 /*break*/, 10];
                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 3000); })];
                        case 7:
                            _c.sent();
                            attempts++;
                            progress = Math.min(20 + Math.floor((attempts / maxAttempts) * 70), 90);
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: { progress: progress },
                                })];
                        case 8:
                            _c.sent();
                            return [4 /*yield*/, axios_1.default.get("".concat(RUNWAY_API, "/tasks/").concat(task.id), {
                                    headers: { 'Authorization': "Bearer ".concat(RUNWAY_API_KEY) },
                                })];
                        case 9:
                            statusData = (_c.sent()).data;
                            status_1 = statusData.status;
                            if ((_b = statusData.output) === null || _b === void 0 ? void 0 : _b.video_url) {
                                videoUrl_1 = statusData.output.video_url;
                            }
                            return [3 /*break*/, 6];
                        case 10:
                            if (status_1 !== 'SUCCEEDED' || !videoUrl_1) {
                                throw new Error('La génération vidéo a échoué ou a expiré');
                            }
                            audioBuffer_1 = null;
                            audioTempPath = null;
                            subtitles_1 = null;
                            if (!(addVoiceover && voiceoverText)) return [3 /*break*/, 14];
                            return [4 /*yield*/, elevenlabs.generate({
                                    text: voiceoverText,
                                    voice: 'fr-FR-Neural2-D'
                                })];
                        case 11:
                            audioResponse = _c.sent();
                            return [4 /*yield*/, bufferFromResponse(audioResponse)];
                        case 12:
                            audioBuffer_1 = _c.sent();
                            audioTempPath = "/tmp/".concat(jobId, ".mp3");
                            return [4 /*yield*/, (0, promises_1.writeFile)(audioTempPath, audioBuffer_1)];
                        case 13:
                            _c.sent();
                            _c.label = 14;
                        case 14:
                            if (!(addSubtitles && audioTempPath)) return [3 /*break*/, 16];
                            return [4 /*yield*/, openai.audio.transcriptions.create({
                                    file: (0, fs_1.createReadStream)(audioTempPath),
                                    response_format: 'srt',
                                    model: 'whisper-1'
                                })];
                        case 15:
                            transcription = _c.sent();
                            subtitles_1 = transcription;
                            _c.label = 16;
                        case 16:
                            outputPath_1 = "/tmp/".concat(jobId, ".mp4");
                            // Mixage Audio/Vidéo avec FFmpeg
                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    var command = (0, fluent_ffmpeg_1.default)(videoUrl_1);
                                    if (audioBuffer_1) {
                                        var audioStream = stream_1.Readable.from(audioBuffer_1);
                                        command.input(audioStream).inputFormat('mp3');
                                    }
                                    command
                                        .outputOptions(['-c:v copy', '-c:a aac'])
                                        .save(outputPath_1)
                                        .on('end', function () { return resolve(); })
                                        .on('error', function (error) { return reject(error); });
                                })];
                        case 17:
                            // Mixage Audio/Vidéo avec FFmpeg
                            _c.sent();
                            s3Key_1 = "videos/".concat(userId || 'anonymous', "/").concat(jobId, ".mp4");
                            return [4 /*yield*/, storage_1.storageService.uploadFile((0, fs_1.createReadStream)(outputPath_1), s3Key_1, 'video/mp4')];
                        case 18:
                            s3Url_1 = _c.sent();
                            return [4 /*yield*/, prisma.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                                    var video;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, tx.video.create({
                                                    data: {
                                                        userId: userId,
                                                        jobId: jobId,
                                                        prompt: prompt,
                                                        duration: runDuration_1,
                                                        aspectRatio: ratio_1,
                                                        videoUrl: s3Url_1,
                                                        storageKey: s3Key_1,
                                                        status: 'COMPLETED',
                                                        hasWatermark: false,
                                                    },
                                                })];
                                            case 1:
                                                video = _a.sent();
                                                // 6b. Mettre à jour le job
                                                return [4 /*yield*/, tx.job.update({
                                                        where: { id: jobId },
                                                        data: {
                                                            status: 'COMPLETED',
                                                            progress: 100,
                                                            output: { videoUrl: s3Url_1, storageKey: s3Key_1, subtitles: subtitles_1 },
                                                            completedAt: new Date(),
                                                        },
                                                    })];
                                            case 2:
                                                // 6b. Mettre à jour le job
                                                _a.sent();
                                                // 6c. Débiter les crédits
                                                return [4 /*yield*/, tx.user.update({
                                                        where: { id: userId },
                                                        data: {
                                                            credits: { decrement: CREDITS_COST },
                                                        },
                                                    })];
                                            case 3:
                                                // 6c. Débiter les crédits
                                                _a.sent();
                                                // 6d. Enregistrer la transaction
                                                return [4 /*yield*/, tx.creditTransaction.create({
                                                        data: {
                                                            userId: userId,
                                                            amount: -CREDITS_COST,
                                                            type: database_1.CreditType.GENERATION,
                                                            referenceId: jobId,
                                                            description: "G\u00E9n\u00E9ration vid\u00E9o: ".concat(prompt.substring(0, 50), "..."),
                                                        },
                                                    })];
                                            case 4:
                                                // 6d. Enregistrer la transaction
                                                _a.sent();
                                                return [2 /*return*/, video];
                                        }
                                    });
                                }); })];
                        case 19:
                            result_data = _c.sent();
                            console.log("\u2705 [Job ".concat(jobId, "] Vid\u00E9o g\u00E9n\u00E9r\u00E9e avec succ\u00E8s et cr\u00E9dits d\u00E9bit\u00E9s."));
                            return [2 /*return*/, { url: result_data.videoUrl, subtitles: subtitles_1 }];
                        case 20:
                            error_1 = _c.sent();
                            console.error("\u274C [Job ".concat(jobId, "] Erreur:"), error_1);
                            Sentry.captureException(error_1, {
                                extra: { jobId: jobId, userId: userId, prompt: prompt }
                            });
                            return [4 /*yield*/, prisma.job.update({
                                    where: { id: jobId },
                                    data: {
                                        status: 'FAILED',
                                        error: String(error_1),
                                    },
                                })];
                        case 21:
                            _c.sent();
                            throw error_1;
                        case 22: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); }, { connection: redis, concurrency: 2 });
exports.videoWorker.on('completed', function (job) {
    console.log("Job ".concat(job.id, " completed successfully"));
});
