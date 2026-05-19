export function healthCheck(service: string, version: string = '1.0.0') {
  return {
    service,
    version,
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  };
}
