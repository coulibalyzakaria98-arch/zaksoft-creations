import promClient from 'prom-client';
import express from 'express';
import { Queue } from 'bullmq';

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

/**
 * Configure le monitoring d'une queue BullMQ
 */
export function setupBullMQMetrics(queue: Queue) {
  setInterval(async () => {
    const counts = await queue.getJobCounts('active', 'waiting');
    activeJobsGauge.set({ queue: queue.name }, counts.active);
    waitingJobsGauge.set({ queue: queue.name }, counts.waiting);
  }, 5000);
}

export const metricsApp = app;
