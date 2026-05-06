import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { PushNotificationManager } from './push/manager';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Register device for push
app.post('/devices/register', async (req: any, res) => {
  const { userId, token, platform } = req.body;
  const device = await prisma.pushDevice.upsert({
    where: { token },
    update: { isActive: true, lastUsedAt: new Date() },
    create: { userId, token, platform }
  });
  res.json(device);
});

// Internal endpoint to trigger notifications
app.post('/internal/send', async (req: any, res) => {
  const { userId, type, title, body, data } = req.body;
  const notification = await PushNotificationManager.sendToUser({
    userId, type, title, body, data
  });
  res.json(notification);
});

const PORT = process.env.NOTIFICATIONS_PORT || 3009;
app.listen(PORT, () => console.log(`Notifications Service on ${PORT}`));
