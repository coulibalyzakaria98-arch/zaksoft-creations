import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { storageService } from '@zaksoft/storage';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const webGenWorker = new Worker(
  'web-generation',
  async (job) => {
    const { prompt, siteConfig, userId } = job.data;
    
    console.log(`[WebGen] Starting AI generation for: ${prompt} (User: ${userId})`);
    
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          {
            role: "system",
            content: "You are an expert frontend developer. Generate a complete, responsive, and modern HTML/CSS/JS code for a single-page website based on the user's description. Use Tailwind CSS via CDN for styling. Return ONLY the raw HTML code."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
      });

      let htmlContent = completion.choices[0].message.content || "";
      
      // Clean up markdown code blocks if present
      if (htmlContent.startsWith('```html')) {
        htmlContent = htmlContent.replace(/^```html\n/, '').replace(/\n```$/, '');
      } else if (htmlContent.startsWith('```')) {
        htmlContent = htmlContent.replace(/^```\n/, '').replace(/\n```$/, '');
      }

      const s3Key = `sites/${userId || 'anonymous'}/${job.id}/index.html`;
      const s3Url = await storageService.uploadFile(htmlContent, s3Key, 'text/html');
      
      console.log(`[WebGen] Site generated and uploaded: ${s3Url}`);
      
      return { 
        url: s3Url,
        key: s3Key,
        preview: s3Url
      };
    } catch (error) {
      console.error('[WebGen] Error during generation:', error);
      throw error;
    }
  },
  { connection: redis }
);
