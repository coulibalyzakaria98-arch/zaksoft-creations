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

dotenv.config();

if (ffmpegPath) {
  ffmpeg.setFfmpegPath(ffmpegPath);
}

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const elevenlabs = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
  const { prompt, duration, addVoiceover, voiceoverText, addSubtitles, userId } = job.data;

  console.log(`Processing video generation job ${job.id} for user ${userId}`);

  const runwayResponse = await axios.post(
    process.env.RUNWAY_API_URL || 'https://api.runwayml.com/v1/generate',
    { prompt, duration },
    {
      headers: {
        Authorization: `Bearer ${process.env.RUNWAY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const videoUrl = runwayResponse.data?.url || runwayResponse.data?.outputUrl || '';

  let audioBuffer: Buffer | null = null;
  let audioTempPath: string | null = null;
  let subtitles: string | null = null;

  if (addVoiceover && voiceoverText) {
    const audioResponse = await elevenlabs.generate({
      text: voiceoverText,
      voice: 'fr-FR-Neural2-D'
    } as any);

    audioBuffer = await bufferFromResponse(audioResponse);
    audioTempPath = `/tmp/${job.id}.mp3`;
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

  const outputPath = `/tmp/${job.id}.mp4`;

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

  const s3Key = `videos/${userId || 'anonymous'}/${job.id}.mp4`;
  const s3Url = await storageService.uploadFile(createReadStream(outputPath), s3Key, 'video/mp4');

  return { url: s3Url, subtitles };
}, { connection: redis });

videoWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully`);
});
