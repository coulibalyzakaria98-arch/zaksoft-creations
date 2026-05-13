import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from "dotenv";
import { Readable } from "stream";

dotenv.config();

export interface StorageConfig {
  endpoint?: string;
  region?: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
}

export class StorageService {
  private client: S3Client;
  private bucket: string;

  constructor(config?: Partial<StorageConfig>) {
    const accessKeyId = config?.accessKeyId || process.env.S3_ACCESS_KEY_ID;
    const secretAccessKey = config?.secretAccessKey || process.env.S3_SECRET_ACCESS_KEY;
    const region = config?.region || process.env.S3_REGION || "us-east-1";
    const endpoint = config?.endpoint || process.env.S3_ENDPOINT;
    this.bucket = config?.bucket || process.env.S3_BUCKET || "zaksoft";

    if (!accessKeyId || !secretAccessKey) {
      console.warn("StorageService: Missing S3 credentials. Uploads may fail.");
    }

    this.client = new S3Client({
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
  async uploadFile(
    body: Buffer | Uint8Array | string | Readable,
    key: string,
    contentType?: string
  ): Promise<string> {
    try {
      const upload = new Upload({
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
    } catch (error) {
      console.error("Error uploading to S3:", error);
      throw error;
    }
  }

  /**
   * Helper to get the public URL for a key
   */
  getPublicUrl(key: string): string {
    const baseUrl = process.env.S3_PUBLIC_URL || (process.env.S3_ENDPOINT ? `${process.env.S3_ENDPOINT}/${this.bucket}` : `https://${this.bucket}.s3.amazonaws.com`);
    return `${baseUrl}/${key}`;
  }
}

export const storageService = new StorageService();
