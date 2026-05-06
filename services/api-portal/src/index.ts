import express from 'express';
import { prisma } from './db';
import cors from 'cors';
import { apiKeyManager } from './api-key/key-manager';
import { apiKeyAuth } from './api-key/key-middleware';
import { rateLimiter } from './api-key/rate-limiter';
import swaggerUi from 'swagger-ui-express';
import jsyaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// ============ SWAGGER DOCS ============
const openApiSpec = jsyaml.load(fs.readFileSync(path.join(__dirname, 'swagger/openapi.yaml'), 'utf8')) as any;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

// ============ DEVELOPER API ============

const authenticate = (req: any, res: any, next: any) => {
  req.user = { id: req.headers['x-user-id'] || 'user_1' };
  next();
};

app.post('/developer/api-keys', authenticate, async (req: any, res) => {
  try {
    const key = await apiKeyManager.createApiKey({ ...req.body, userId: req.user.id });
    res.json(key);
  } catch (error: any) { res.status(500).json({ error: error.message }); }
});

app.get('/developer/api-keys', authenticate, async (req: any, res) => {
  try { res.json(await apiKeyManager.getUserApiKeys(req.user.id)); }
  catch (error: any) { res.status(500).json({ error: error.message }); }
});

// ============ PUBLIC API V1 ============

app.post('/v1/design/generate', apiKeyAuth, rateLimiter, async (req: any, res) => {
  if (!apiKeyManager.hasPermission(req.apiKey, 'design', 'write')) {
    return res.status(403).json({ error: 'Insufficient permissions' });
  }
  res.status(202).json({ jobId: `job_${Math.random().toString(36).slice(2)}`, status: 'pending' });
});

const PORT = process.env.API_PORTAL_PORT || 3008;
app.listen(PORT, () => console.log(`API Portal & Swagger running on ${PORT}`));
