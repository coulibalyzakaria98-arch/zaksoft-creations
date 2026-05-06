import promClient from 'prom-client';
import express from 'express';

const app = express();
// Initialiser le registre Prometheus
const register = new promClient.Registry();

// Métriques BullMQ
export const activeJobsGauge = new promClient.Gauge({
  name: 'bullmq_active_jobs',
  help: 'Nombre de jobs actifs',
  labelNames: ['queue'],
  registers: [register]
});

export const waitingJobsGauge = new promClient.Gauge({
  name: 'bullmq_waiting_jobs',
  help: 'Nombre de jobs en attente',
  labelNames: ['queue'],
  registers: [register]
});

// Métriques vidéo
export const generationDurationHistogram = new promClient.Histogram({
  name: 'video_generation_duration_seconds',
  help: 'Durée de génération vidéo',
  buckets: [5, 10, 15, 30, 45, 60, 90, 120],
  registers: [register]
});

export const generationCounter = new promClient.Counter({
  name: 'video_generation_total',
  help: 'Nombre total de générations',
  labelNames: ['engine', 'status'],
  registers: [register]
});

// Exposition des métriques
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Placeholder for BullMQ stats update
async function getBullMQStats() {
  return { active: 0, waiting: 0 };
}

// Mise à jour périodique des stats BullMQ
setInterval(async () => {
  const queueMetrics = await getBullMQStats();
  activeJobsGauge.set({ queue: 'video-generation' }, queueMetrics.active);
  waitingJobsGauge.set({ queue: 'video-generation' }, queueMetrics.waiting);
}, 5000);

export const metricsApp = app;
