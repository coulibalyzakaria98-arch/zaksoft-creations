import * as Sentry from "@sentry/node";
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { storageService } from '@zaksoft/storage';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import { PrismaClient, CreditType } from '@zaksoft/database';

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
});

const prisma = new PrismaClient();
const redis = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
  maxRetriesPerRequest: null
});
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const CREDITS_COST = 15;

export const webGenWorker = new Worker(
  'web-generation',
  async (job) => {
    return Sentry.withMonitor("web-gen-worker", async () => {
      const { jobId, prompt, siteConfig, userId } = job.data;
      
      console.log(`🌐 [Job ${jobId}] Starting AI generation for user ${userId}`);
      
      try {
        // 1. Check credits
        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: { credits: true }
        });

        if (!user || user.credits < CREDITS_COST) {
          throw new Error('Crédits insuffisants pour générer un site web');
        }

        // 2. Update job status
        await prisma.job.update({
          where: { id: jobId },
          data: { status: 'PROCESSING', progress: 10 }
        });

        // 3. OpenAI Generation
        const completion = await openai.chat.completions.create({
          model: "gpt-4-1106-preview",
          messages: [
            {
              role: "system",
              content: `Tu es un développeur frontend expert. Génère du HTML/CSS/JS complet et fonctionnel pour un site web à page unique.
Respecte les consignes suivantes:
- Code autonome (fichier HTML unique)
- Design moderne, responsive (mobile-first)
- Utilise Tailwind CSS via CDN pour le style
- Inclure des interactions basiques si nécessaire
- Retourne UNIQUEMENT le code HTML brut, sans explications ni blocs markdown.`
            },
            {
              role: "user",
              content: `Génère un site web basé sur cette description: ${prompt}. Template: ${siteConfig?.template || 'landing'}. Framework: ${siteConfig?.framework || 'tailwind'}.`
            }
          ],
          temperature: 0.7,
        });

        let htmlContent = completion.choices[0].message.content || "";
        
        // Nettoyer le markdown si GPT en a mis
        htmlContent = htmlContent.replace(/^```html\n?/, '').replace(/\n?```$/, '').trim();

        await prisma.job.update({
          where: { id: jobId },
          data: { progress: 80 }
        });

        // 4. Upload to S3
        const s3Key = `sites/${userId || 'anonymous'}/${jobId}/index.html`;
        const s3Url = await storageService.uploadFile(htmlContent, s3Key, 'text/html');
        
        console.log(`[WebGen] Uploaded to S3: ${s3Url}`);
        
        // 5. Transaction BDD
        const result_data = await prisma.$transaction(async (tx) => {
          // 5a. Créer l'entrée website
          const website = await tx.website.create({
            data: {
              userId,
              jobId,
              description: prompt,
              template: siteConfig?.template || 'landing',
              framework: siteConfig?.framework || 'tailwind',
              code: htmlContent,
              previewUrl: s3Url,
              status: 'COMPLETED',
            }
          });

          // 5b. Mettre à jour le job
          await tx.job.update({
            where: { id: jobId },
            data: {
              status: 'COMPLETED',
              progress: 100,
              output: { websiteId: website.id, previewUrl: s3Url },
              completedAt: new Date(),
            }
          });

          // 5c. Débiter les crédits
          await tx.user.update({
            where: { id: userId },
            data: { credits: { decrement: CREDITS_COST } }
          });

          // 5d. Transaction log
          await tx.creditTransaction.create({
            data: {
              userId,
              amount: -CREDITS_COST,
              type: CreditType.GENERATION,
              referenceId: jobId,
              description: `Génération site web: ${prompt.substring(0, 50)}...`
            }
          });

          return website;
        });

        console.log(`✅ [Job ${jobId}] Site web généré et crédits débités.`);

        return { 
          url: result_data.previewUrl,
          websiteId: result_data.id
        };

      } catch (error) {
        console.error(`❌ [Job ${jobId}] Error:`, error);
        Sentry.captureException(error, {
          extra: { jobId, userId, prompt }
        });
        
        await prisma.job.update({
          where: { id: jobId },
          data: {
            status: 'FAILED',
            error: String(error)
          }
        });
        
        throw error;
      }
    });
  },
  { 
    connection: redis,
    concurrency: 2
  }
);
