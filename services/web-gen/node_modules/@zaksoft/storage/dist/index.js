"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageService = exports.StorageService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class StorageService {
    constructor(config) {
        const accessKeyId = config?.accessKeyId || process.env.S3_ACCESS_KEY_ID;
        const secretAccessKey = config?.secretAccessKey || process.env.S3_SECRET_ACCESS_KEY;
        const region = config?.region || process.env.S3_REGION || "us-east-1";
        const endpoint = config?.endpoint || process.env.S3_ENDPOINT;
        this.bucket = config?.bucket || process.env.S3_BUCKET || "zaksoft";
        if (!accessKeyId || !secretAccessKey) {
            console.warn("StorageService: Missing S3 credentials. Uploads may fail.");
        }
        this.client = new client_s3_1.S3Client({
            region,
            endpoint,
            forcePathStyle: !!endpoint, // Required for Minio
            credentials: {
                accessKeyId: accessKeyId || "",
                secretAccessKey: secretAccessKey || "",
            },
        });
    }
    /**
     * Upload a file to S3
     * @param body Buffer, String or Readable stream
     * @param key S3 Object Key (path)
     * @param contentType MIME type
     */
    async uploadFile(body, key, contentType) {
        try {
            const upload = new lib_storage_1.Upload({
                client: this.client,
                params: {
                    Bucket: this.bucket,
                    Key: key,
                    Body: body,
                    ContentType: contentType,
                    ACL: "public-read", // Assuming public access for generated content
                },
            });
            await upload.done();
            const baseUrl = process.env.S3_PUBLIC_URL || (process.env.S3_ENDPOINT ? `${process.env.S3_ENDPOINT}/${this.bucket}` : `https://${this.bucket}.s3.amazonaws.com`);
            return `${baseUrl}/${key}`;
        }
        catch (error) {
            console.error("Error uploading to S3:", error);
            throw error;
        }
    }
    /**
     * Helper to get the public URL for a key
     */
    getPublicUrl(key) {
        const baseUrl = process.env.S3_PUBLIC_URL || (process.env.S3_ENDPOINT ? `${process.env.S3_ENDPOINT}/${this.bucket}` : `https://${this.bucket}.s3.amazonaws.com`);
        return `${baseUrl}/${key}`;
    }
}
exports.StorageService = StorageService;
exports.storageService = new StorageService();
