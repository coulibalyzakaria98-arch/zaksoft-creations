import promClient from 'prom-client';
import express from 'express';

const app = express();
const register = new promClient.Registry();

export const activeJobsGauge = new promClient.Gauge({
  name: 'bullmq_active_jobs_webgen',
  help: 'Nombre de jobs actifs (Web Gen)',
  labelNames: ['queue'],
  registers: [register]
});

export const waitingJobsGauge = new promClient.Gauge({
  name: 'bullmq_waiting_jobs_webgen',
  help: 'Nombre de jobs en attente (Web Gen)',
  labelNames: ['queue'],
  registers: [register]
});

export const generationDurationHistogram = new promClient.Histogram({
  name: 'web_generation_duration_seconds',
  help: 'Durée de génération de site web',
  buckets: [5, 15, 30, 60, 120, 300],
  registers: [register]
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

export const metricsApp = app;
