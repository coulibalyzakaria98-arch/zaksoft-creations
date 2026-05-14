"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyAuth = apiKeyAuth;
const key_manager_1 = require("./key-manager");
async function apiKeyAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Missing API key' });
    }
    const key = authHeader.substring(7);
    const apiKey = await key_manager_1.apiKeyManager.validateApiKey(key);
    if (!apiKey) {
        return res.status(401).json({ error: 'Invalid or inactive API key' });
    }
    req.apiKey = apiKey;
    next();
}
