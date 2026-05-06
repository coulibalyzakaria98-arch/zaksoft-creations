import promClient from 'prom-client';
import express from 'express';

const app = express();
const register = new promClient.Registry();

export const activeJobsGauge = new promClient.Gauge({
  name: 'bullmq_active_jobs_design',
  help: 'Nombre de jobs actifs (Design)',
  labelNames: ['queue'],
  registers: [register]
});

export const waitingJobsGauge = new promClient.Gauge({
  name: 'bullmq_waiting_jobs_design',
  help: 'Nombre de jobs en attente (Design)',
  labelNames: ['queue'],
  registers: [register]
});

export const generationDurationHistogram = new promClient.Histogram({
  name: 'image_generation_duration_seconds',
  help: 'Durée de génération image',
  buckets: [2, 5, 10, 20, 30, 45, 60],
  registers: [register]
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

export const metricsApp = app;
