"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsApp = exports.generationDurationHistogram = exports.waitingJobsGauge = exports.activeJobsGauge = void 0;
exports.setupBullMQMetrics = setupBullMQMetrics;
const prom_client_1 = __importDefault(require("prom-client"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const register = new prom_client_1.default.Registry();
exports.activeJobsGauge = new prom_client_1.default.Gauge({
    name: 'bullmq_active_jobs_webgen',
    help: 'Nombre de jobs actifs (Web Gen)',
    labelNames: ['queue'],
    registers: [register]
});
exports.waitingJobsGauge = new prom_client_1.default.Gauge({
    name: 'bullmq_waiting_jobs_webgen',
    help: 'Nombre de jobs en attente (Web Gen)',
    labelNames: ['queue'],
    registers: [register]
});
exports.generationDurationHistogram = new prom_client_1.default.Histogram({
    name: 'web_generation_duration_seconds',
    help: 'Durée de génération de site web',
    buckets: [5, 15, 30, 60, 120, 300],
    registers: [register]
});
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
