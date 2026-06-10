"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoWorker = void 0;
const Sentry = __importStar(require("@sentry/node"));
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
const axios_1 = __importDefault(require("axios"));
const elevenlabs_1 = require("elevenlabs");
const openai_1 = require("openai");
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const ffmpeg_static_1 = __importDefault(require("ffmpeg-static"));
const stream_1 = require("stream");
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const dotenv_1 = __importDefault(require("dotenv"));
const storage_1 = require("@zaksoft/storage");
const database_1 = require("@zaksoft/database");
dotenv_1.default.config();
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
});
if (ffmpeg_static_1.default) {
    fluent_ffmpeg_1.default.setFfmpegPath(ffmpeg_static_1.default);
}
const prisma = new database_1.PrismaClient();
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', {
    maxRetriesPerRequest: null
});
const elevenlabs = new elevenlabs_1.ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const RUNWAY_API_KEY = process.env.RUNWAY_API_KEY;
const RUNWAY_API = 'https://api.runwayml.com/v1';
// Coût en crédits par génération vidéo
const CREDITS_COST = 5;
const bufferFromResponse = async (source) => {
    if (Buffer.isBuffer(source))
        return source;
    if (source instanceof stream_1.Readable) {
        const chunks = [];
        for await (const chunk of source) {
            chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
        }
        return Buffer.concat(chunks);
    }
    if (source?.arrayBuffer) {
        return Buffer.from(await source.arrayBuffer());
    }
    if (source?.data) {
        return Buffer.from(source.data);
    }
    throw new Error('Unsupported audio response format from ElevenLabs');
};
exports.videoWorker = new bullmq_1.Worker('video-generation', async (job) => {
    return Sentry.withMonitor("video-worker", async () => {
        const { jobId, prompt, duration, aspectRatio, addVoiceover, voiceoverText, addSubtitles, userId } = job.data;
        console.log(`🎬 [Job ${jobId}] Génération vidéo pour user ${userId}`);
        try {
            // 1. Vérifier les crédits
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: { credits: true },
            });
            if (!user)
                throw new Error('Utilisateur non trouvé');
            if (user.credits < CREDITS_COST)
                throw new Error('Crédits insuffisants pour générer une vidéo');
            // 2. Mettre à jour le statut du job
            await prisma.job.update({
                where: { id: jobId },
                data: { status: 'PROCESSING', progress: 10 },
            });
            // 3. Démarrer la tâche Runway
            const ratio = (aspectRatio || '16:9').replace(':', '/');
            const runDuration = Math.min(duration || 5, 16);
            const runwayResponse = await axios_1.default.post(`${RUNWAY_API}/generate`, {
                prompt,
                duration: runDuration,
                aspect_ratio: ratio,
                seed: Math.floor(Math.random() * 1000000),
            }, {
                headers: {
                    'Authorization': `Bearer ${RUNWAY_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            const task = runwayResponse.data;
            await prisma.job.update({
                where: { id: jobId },
                data: { progress: 20 },
            });
            // 4. Polling Runway
            let status = 'PENDING';
            let videoUrl = null;
            let attempts = 0;
            const maxAttempts = 60;
            while (status !== 'SUCCEEDED' && status !== 'FAILED' && attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                attempts++;
                const progress = Math.min(20 + Math.floor((attempts / maxAttempts) * 70), 90);
                await prisma.job.update({
                    where: { id: jobId },
                    data: { progress },
                });
                const { data: statusData } = await axios_1.default.get(`${RUNWAY_API}/tasks/${task.id}`, {
                    headers: { 'Authorization': `Bearer ${RUNWAY_API_KEY}` },
                });
                status = statusData.status;
                if (statusData.output?.video_url) {
                    videoUrl = statusData.output.video_url;
                }
            }
            if (status !== 'SUCCEEDED' || !videoUrl) {
                throw new Error('La génération vidéo a échoué ou a expiré');
            }
            let audioBuffer = null;
            let audioTempPath = null;
            let subtitles = null;
            if (addVoiceover && voiceoverText) {
                const audioResponse = await elevenlabs.generate({
                    text: voiceoverText,
                    voice: 'fr-FR-Neural2-D'
                });
                audioBuffer = await bufferFromResponse(audioResponse);
                audioTempPath = `/tmp/${jobId}.mp3`;
                await (0, promises_1.writeFile)(audioTempPath, audioBuffer);
            }
            if (addSubtitles && audioTempPath) {
                const transcription = await openai.audio.transcriptions.create({
                    file: (0, fs_1.createReadStream)(audioTempPath),
                    response_format: 'srt',
                    model: 'whisper-1'
                });
                subtitles = transcription;
            }
            const outputPath = `/tmp/${jobId}.mp4`;
            // Mixage Audio/Vidéo avec FFmpeg
            await new Promise((resolve, reject) => {
                const command = (0, fluent_ffmpeg_1.default)(videoUrl);
                if (audioBuffer) {
                    const audioStream = stream_1.Readable.from(audioBuffer);
                    command.input(audioStream).inputFormat('mp3');
                }
                command
                    .outputOptions(['-c:v copy', '-c:a aac'])
                    .save(outputPath)
                    .on('end', () => resolve())
                    .on('error', (error) => reject(error));
            });
            // 5. Upload vers S3
            const s3Key = `videos/${userId || 'anonymous'}/${jobId}.mp4`;
            const s3Url = await storage_1.storageService.uploadFile((0, fs_1.createReadStream)(outputPath), s3Key, 'video/mp4');
            // 6. Sauvegarde BDD + DÉBIT CRÉDITS (transaction)
            const result_data = await prisma.$transaction(async (tx) => {
                // 6a. Créer l'entrée vidéo
                const video = await tx.video.create({
                    data: {
                        userId,
                        jobId,
                        prompt,
                        duration: runDuration,
                        aspectRatio: ratio,
                        videoUrl: s3Url,
                        storageKey: s3Key,
                        status: 'COMPLETED',
                        hasWatermark: false,
                    },
                });
                // 6b. Mettre à jour le job
                await tx.job.update({
                    where: { id: jobId },
                    data: {
                        status: 'COMPLETED',
                        progress: 100,
                        output: { videoUrl: s3Url, storageKey: s3Key, subtitles },
                        completedAt: new Date(),
                    },
                });
                // 6c. Débiter les crédits
                await tx.user.update({
                    where: { id: userId },
                    data: {
                        credits: { decrement: CREDITS_COST },
                    },
                });
                // 6d. Enregistrer la transaction
                await tx.creditTransaction.create({
                    data: {
                        userId,
                        amount: -CREDITS_COST,
                        type: database_1.CreditType.GENERATION,
                        referenceId: jobId,
                        description: `Génération vidéo: ${prompt.substring(0, 50)}...`,
                    },
                });
                return video;
            });
            console.log(`✅ [Job ${jobId}] Vidéo générée avec succès et crédits débités.`);
            return { url: result_data.videoUrl, subtitles };
        }
        catch (error) {
            console.error(`❌ [Job ${jobId}] Erreur:`, error);
            Sentry.captureException(error, {
                extra: { jobId, userId, prompt }
            });
            await prisma.job.update({
                where: { id: jobId },
                data: {
                    status: 'FAILED',
                    error: String(error),
                },
            });
            throw error;
        }
    });
}, { connection: redis, concurrency: 2 });
exports.videoWorker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully`);
});
