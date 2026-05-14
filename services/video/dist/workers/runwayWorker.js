"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoWorker = void 0;
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
dotenv_1.default.config();
if (ffmpeg_static_1.default) {
    fluent_ffmpeg_1.default.setFfmpegPath(ffmpeg_static_1.default);
}
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
const elevenlabs = new elevenlabs_1.ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
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
    const { prompt, duration, addVoiceover, voiceoverText, addSubtitles, userId } = job.data;
    console.log(`Processing video generation job ${job.id} for user ${userId}`);
    const runwayResponse = await axios_1.default.post(process.env.RUNWAY_API_URL || 'https://api.runwayml.com/v1/generate', { prompt, duration }, {
        headers: {
            Authorization: `Bearer ${process.env.RUNWAY_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    const videoUrl = runwayResponse.data?.url || runwayResponse.data?.outputUrl || '';
    let audioBuffer = null;
    let audioTempPath = null;
    let subtitles = null;
    if (addVoiceover && voiceoverText) {
        const audioResponse = await elevenlabs.generate({
            text: voiceoverText,
            voice: 'fr-FR-Neural2-D'
        });
        audioBuffer = await bufferFromResponse(audioResponse);
        audioTempPath = `/tmp/${job.id}.mp3`;
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
    const outputPath = `/tmp/${job.id}.mp4`;
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
    const s3Key = `videos/${userId || 'anonymous'}/${job.id}.mp4`;
    const s3Url = await storage_1.storageService.uploadFile((0, fs_1.createReadStream)(outputPath), s3Key, 'video/mp4');
    return { url: s3Url, subtitles };
}, { connection: redis });
exports.videoWorker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully`);
});
