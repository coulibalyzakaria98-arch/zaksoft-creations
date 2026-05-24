export declare function healthCheck(service: string, version?: string): {
    service: string;
    version: string;
    status: string;
    timestamp: string;
    uptime: number;
    memory: NodeJS.MemoryUsage;
};
