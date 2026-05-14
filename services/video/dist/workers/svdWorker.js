"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.svdBridgeWorker = void 0;
const bullmq_1 = require("bullmq");
const axios_1 = __importDefault(require("axios"));
const ioredis_1 = __importDefault(require("ioredis"));
const dotenv_1 = __importDefault(require("dotenv"));
const storage_1 = require("@zaksoft/storage");
dotenv_1.default.config();
const redisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
};
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379', redisOptions);
class SVDWorker {
    constructor(config) {
        this.config = config;
    }
    async generateVideoFromImage(imageUrl, options) {
        try {
            // Étape 1 : Soumission du job au Bridge Python
            const response = await axios_1.default.post(`${this.config.url}/generate`, {
                image_url: imageUrl,
                fps: options?.fps || 6,
                frames: options?.frames || 25,
                seed: options?.seed
            }, { timeout: 15000 });
            const { job_id } = response.data;
            if (!job_id)
                throw new Error('Aucun job_id reçu du SVD Bridge');
            console.log(`SVD Job ${job_id} soumis au bridge. Début du polling...`);
            // Étape 2 : Polling jusqu'à complétion (max 3 minutes)
            let videoUrl = null;
            const MAX_POLLS = 60;
            const POLL_INTERVAL = 3000;
            for (let i = 0; i < MAX_POLLS; i++) {
                await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
                try {
                    const statusRes = await axios_1.default.get(`${this.config.url}/status/${job_id}`, { timeout: 5000 });
                    const { status, video_url, error } = statusRes.data;
                    if (status === 'completed') {
                        videoUrl = `${this.config.url}${video_url}`;
                        break;
                    }
                    else if (status === 'failed') {
                        throw new Error(`Génération SVD échouée : ${error || 'Erreur inconnue'}`);
                    }
                    console.log(`[SVD ${job_id}] Statut : ${status} (essai ${i + 1}/${MAX_POLLS})`);
                }
                catch (pollError) {
                    if (pollError.response?.status === 404) {
                        console.warn(`[SVD ${job_id}] Job introuvable sur le bridge.`);
                    }
                    // On continue le polling si c'est une erreur réseau temporaire
                }
            }
            if (!videoUrl)
                throw new Error('Timeout de génération SVD (3 minutes dépassées)');
            return videoUrl;
        }
        catch (error) {
            const msg = error.response?.data?.error || error.message;
            throw new Error(`SVDWorker Error: ${msg}`);
        }
    }
}
// Worker BullMQ
exports.svdBridgeWorker = new bullmq_1.Worker('svd-generation', async (job) => {
    const { imageUrl, options, userId } = job.data;
    const svdUrl = process.env.SVD_BRIDGE_URL || 'http://localhost:7860';
    console.log(`[Job ${job.id}] Début génération SVD pour l'utilisateur ${userId}`);
    const worker = new SVDWorker({ url: svdUrl });
    const videoUrl = await worker.generateVideoFromImage(imageUrl, options);
    // Téléchargement et stockage S3
    const s3Key = `videos/${userId || 'anonymous'}/${job.id}.mp4`;
    const response = await axios_1.default.get(videoUrl, { responseType: 'arraybuffer' });
    const s3Url = await storage_1.storageService.uploadFile(Buffer.from(response.data), s3Key, 'video/mp4');
    console.log(`[Job ${job.id}] Vidéo générée et uploadée avec succès : ${s3Url}`);
    return {
        url: s3Url,
        source: videoUrl
    };
}, { connection: redis });
