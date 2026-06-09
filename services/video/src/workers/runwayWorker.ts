import * as Sentry from "@sentry/node";
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import axios from 'axios';
import { ElevenLabsClient } from 'elevenlabs';
import { OpenAI } from 'openai';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { Readable } from 'stream';
import { writeFile } from 'fs/promises';
import { createReadStream } from 'fs';
import dotenv from 'dotenv';
import { storageService } from '@zaksoft/storage';
import { PrismaClient, CreditType } from '@zaksoft/database';

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
});

if (ffmpegPath) {
  ffmpeg.setFfmpegPath(ffmpegPath);
}

const prisma = new PrismaClient();
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null
});
const elevenlabs = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const RUNWAY_API_KEY = process.env.RUNWAY_API_KEY;
const RUNWAY_API = 'https://api.runwayml.com/v1';

// Coût en crédits par génération vidéo
const CREDITS_COST = 5;

const bufferFromResponse = async (source: any): Promise<Buffer> => {
  if (Buffer.isBuffer(source)) return source;
  if (source instanceof Readable) {
    const chunks: Buffer[] = [];
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

export const videoWorker = new Worker('video-generation', async (job) => {
  return Sentry.withMonitor("video-worker", async () => {
    const { jobId, prompt, duration, aspectRatio, addVoiceover, voiceoverText, addSubtitles, userId } = job.data;

    console.log(`🎬 [Job ${jobId}] Génération vidéo pour user ${userId}`);

    try {
      // 1. Vérifier les crédits
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { credits: true },
      });
      
      if (!user) throw new Error('Utilisateur non trouvé');
      if (user.credits < CREDITS_COST) throw new Error('Crédits insuffisants pour générer une vidéo');

      // 2. Mettre à jour le statut du job
      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'PROCESSING', progress: 10 },
      });

      // 3. Démarrer la tâche Runway
      const ratio = (aspectRatio || '16:9').replace(':', '/');
      const runDuration = Math.min(duration || 5, 16);
      
      const runwayResponse = await axios.post(
        `${RUNWAY_API}/generate`,
        {
          prompt,
          duration: runDuration,
          aspect_ratio: ratio,
          seed: Math.floor(Math.random() * 1000000),
        },
        {
          headers: {
            'Authorization': `Bearer ${RUNWAY_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

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
        
        const { data: statusData } = await axios.get(`${RUNWAY_API}/tasks/${task.id}`, {
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

      let audioBuffer: Buffer | null = null;
      let audioTempPath: string | null = null;
      let subtitles: string | null = null;

      if (addVoiceover && voiceoverText) {
        const audioResponse = await elevenlabs.generate({
          text: voiceoverText,
          voice: 'fr-FR-Neural2-D'
        } as any);

        audioBuffer = await bufferFromResponse(audioResponse);
        audioTempPath = `/tmp/${jobId}.mp3`;
        await writeFile(audioTempPath, audioBuffer);
      }

      if (addSubtitles && audioTempPath) {
        const transcription = await openai.audio.transcriptions.create({
          file: createReadStream(audioTempPath),
          response_format: 'srt',
          model: 'whisper-1'
        });
        subtitles = transcription as string;
      }

      const outputPath = `/tmp/${jobId}.mp4`;

      // Mixage Audio/Vidéo avec FFmpeg
      await new Promise<void>((resolve, reject) => {
        const command = ffmpeg(videoUrl);

        if (audioBuffer) {
          const audioStream = Readable.from(audioBuffer);
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
      const s3Url = await storageService.uploadFile(createReadStream(outputPath), s3Key, 'video/mp4');

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
            type: CreditType.GENERATION,
            referenceId: jobId,
            description: `Génération vidéo: ${prompt.substring(0, 50)}...`,
          },
        });
        
        return video;
      });

      console.log(`✅ [Job ${jobId}] Vidéo générée avec succès et crédits débités.`);
      return { url: result_data.videoUrl, subtitles };

    } catch (error) {
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

videoWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully`);
});
