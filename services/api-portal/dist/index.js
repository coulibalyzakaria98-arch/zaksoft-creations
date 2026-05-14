"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const key_manager_1 = require("./api-key/key-manager");
const key_middleware_1 = require("./api-key/key-middleware");
const rate_limiter_1 = require("./api-key/rate-limiter");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ============ SWAGGER DOCS ============
const openApiSpec = js_yaml_1.default.load(fs_1.default.readFileSync(path_1.default.join(__dirname, 'swagger/openapi.yaml'), 'utf8'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openApiSpec));
// ============ DEVELOPER API ============
const authenticate = (req, res, next) => {
    req.user = { id: req.headers['x-user-id'] || 'user_1' };
    next();
};
app.post('/developer/api-keys', authenticate, async (req, res) => {
    try {
        const key = await key_manager_1.apiKeyManager.createApiKey({ ...req.body, userId: req.user.id });
        res.json(key);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/developer/api-keys', authenticate, async (req, res) => {
    try {
        res.json(await key_manager_1.apiKeyManager.getUserApiKeys(req.user.id));
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ============ PUBLIC API V1 ============
app.post('/v1/design/generate', key_middleware_1.apiKeyAuth, rate_limiter_1.rateLimiter, async (req, res) => {
    if (!key_manager_1.apiKeyManager.hasPermission(req.apiKey, 'design', 'write')) {
        return res.status(403).json({ error: 'Insufficient permissions' });
    }
    res.status(202).json({ jobId: `job_${Math.random().toString(36).slice(2)}`, status: 'pending' });
});
const PORT = process.env.API_PORTAL_PORT || 3008;
app.listen(PORT, () => console.log(`API Portal & Swagger running on ${PORT}`));
