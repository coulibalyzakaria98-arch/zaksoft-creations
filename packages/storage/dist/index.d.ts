import { Readable } from "stream";
export interface StorageConfig {
    endpoint?: string;
    region?: string;
    accessKeyId: string;
    secretAccessKey: string;
    bucket: string;
}
export declare class StorageService {
    private client;
    private bucket;
    constructor(config?: Partial<StorageConfig>);
    /**
     * Upload a file to S3
     * @param body Buffer, String or Readable stream
     * @param key S3 Object Key (path)
     * @param contentType MIME type
     */
    uploadFile(body: Buffer | Uint8Array | string | Readable, key: string, contentType?: string): Promise<string>;
    /**
     * Helper to get the public URL for a key
     */
    getPublicUrl(key: string): string;
}
export declare const storageService: StorageService;
