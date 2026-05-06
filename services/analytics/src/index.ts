import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { UsageCollector } from './collectors/usage-collector';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Dashboard Data
app.get('/dashboard/user', async (req: any, res) => {
  const userId = req.headers['x-user-id'] || 'user_1';
  const usage = await prisma.dailyUsage.findMany({
    where: { userId: userId as string },
    orderBy: { date: 'asc' }
  });
  res.json({ usage });
});

// Collection endpoint
app.post('/internal/collect', async (req, res) => {
  try {
    await UsageCollector.collectEvent(req.body);
    res.json({ success: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.ANALYTICS_PORT || 3010;
app.listen(PORT, () => console.log(`Analytics Service on ${PORT}`));
