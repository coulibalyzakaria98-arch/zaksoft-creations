"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = healthCheck;
function healthCheck(service, version = '1.0.0') {
    return {
        service,
        version,
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
    };
}
