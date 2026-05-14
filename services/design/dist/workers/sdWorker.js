"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdBridgeWorker = void 0;
const bullmq_1 = require("bullmq");
const axios_1 = __importDefault(require("axios"));
const ioredis_1 = __importDefault(require("ioredis"));
const storage_1 = require("@zaksoft/storage");
const redis = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
class SDWorker {
    constructor(config) {
        this.config = config;
    }
    async generateImage(prompt, options) {
        const response = await axios_1.default.post(`${this.config.url}/generate`, {
            prompt,
            negative_prompt: options?.negative_prompt,
            width: options?.width || 1024,
            height: options?.height || 1024,
            seed: options?.seed
        });
        const { job_id } = response.data;
        // Polling
        let imageUrl = null;
        for (let i = 0; i < 60; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const statusRes = await axios_1.default.get(`${this.config.url}/status/${job_id}`);
            if (statusRes.data.status === 'completed') {
                imageUrl = `${this.config.url}${statusRes.data.image_url}`;
                break;
            }
        }
        if (!imageUrl)
            throw new Error('SD Generation timeout');
        return imageUrl;
    }
}
exports.sdBridgeWorker = new bullmq_1.Worker('image-generation', async (job) => {
    const { prompt, options } = job.data;
    const sdUrl = process.env.SD_BRIDGE_URL || 'http://localhost:7861';
    const worker = new SDWorker({ url: sdUrl });
    const imageUrl = await worker.generateImage(prompt, options);
    // Stockage S3 Réel
    const imageResponse = await axios_1.default.get(imageUrl, { responseType: 'arraybuffer' });
    const s3Key = `images/${job.id}.png`;
    const s3Url = await storage_1.storageService.uploadFile(Buffer.from(imageResponse.data), s3Key, 'image/png');
    console.log(`Uploaded image to S3: ${s3Url}`);
    return { url: s3Url };
}, { connection: redis });
