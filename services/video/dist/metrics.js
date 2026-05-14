"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsApp = exports.generationCounter = exports.generationDurationHistogram = exports.waitingJobsGauge = exports.activeJobsGauge = void 0;
exports.setupBullMQMetrics = setupBullMQMetrics;
const prom_client_1 = __importDefault(require("prom-client"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Initialiser le registre Prometheus
const register = new prom_client_1.default.Registry();
// Métriques BullMQ
exports.activeJobsGauge = new prom_client_1.default.Gauge({
    name: 'bullmq_active_jobs',
    help: 'Nombre de jobs actifs',
    labelNames: ['queue'],
    registers: [register]
});
exports.waitingJobsGauge = new prom_client_1.default.Gauge({
    name: 'bullmq_waiting_jobs',
    help: 'Nombre de jobs en attente',
    labelNames: ['queue'],
    registers: [register]
});
// Métriques vidéo
exports.generationDurationHistogram = new prom_client_1.default.Histogram({
    name: 'video_generation_duration_seconds',
    help: 'Durée de génération vidéo',
    buckets: [5, 10, 15, 30, 45, 60, 90, 120],
    registers: [register]
});
exports.generationCounter = new prom_client_1.default.Counter({
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
function setupBullMQMetrics(queue) {
    setInterval(async () => {
        const counts = await queue.getJobCounts('active', 'waiting');
        exports.activeJobsGauge.set({ queue: queue.name }, counts.active);
        exports.waitingJobsGauge.set({ queue: queue.name }, counts.waiting);
    }, 5000);
}
exports.metricsApp = app;
