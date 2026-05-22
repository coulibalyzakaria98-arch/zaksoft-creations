import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { z } from 'zod';
import { authLimiter } from './middleware/rate-limit';
import { registerSchema } from './middleware/validation';
import { healthCheck } from '@zaksoft/health';
import logger from '@zaksoft/logging';

// Debug log
console.log('--- Starting Auth Service Initialization ---');

// Charger les variables d'environnement
dotenv.config();

logger.info('--- Auth Service Starting ---');
logger.info('Node Version:', { version: process.version });

const app = express();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'fallback-refresh-secret';

if (!JWT_SECRET) {
  logger.error('FATAL ERROR: JWT_SECRET is not defined in environment variables.');
  process.exit(1);
}

logger.info('Environment variables loaded successfully.');

app.use(helmet()); // Apply security headers
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://zaksoft-creations.vercel.app',
    /\.vercel\.app$/,  // All Vercel deployments
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Handle pre-flight OPTIONS requests
app.options('*', cors());

app.use(express.json());
app.use(authLimiter); // Apply rate limiting

// Test database connection
prisma.$connect()
  .then(() => logger.info('Successfully connected to the database.'))
  .catch((err) => {
    logger.error('FAILED to connect to the database:', err);
  });

/**
 * Génère une paire de tokens (Access & Refresh)
 */
const generateTokens = (user: { id: string; tier: string }) => {
  const accessToken = jwt.sign(
    { userId: user.id, tier: user.tier },
    JWT_SECRET!,
    { expiresIn: '1h' }
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  return { accessToken, refreshToken };
};

// Endpoint d'inscription
app.post('/auth/register', async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const { 
      email, password, firstName, lastName, 
      companyName, companySize, position, industry,
      website, intendedUse, budget, howDidYouHear, newsletter 
    } = validatedData;
    
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Cet email est déjà utilisé' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: { 
        email, 
        passwordHash: hashedPassword, 
        firstName: firstName || null,
        lastName: lastName || null,
        companyName: companyName || null,
        companySize: companySize || null,
        position: position || null,
        industry: industry || null,
        role: 'user',
        howDidYouHear: howDidYouHear || null,
        website: website || null,
        intendedUse: intendedUse || null,
        budget: budget || null,
        newsletter: !!newsletter,
        tier: 'free', 
        credits: 10 
      }
    });
    
    const { accessToken, refreshToken } = generateTokens(user);
    
    res.status(201).json({ 
      accessToken, 
      refreshToken,
      user: { 
        id: user.id, 
        email: user.email, 
        tier: user.tier, 
        credits: user.credits,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      } 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    logger.error('Erreur inscription:', { error });
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

// Endpoint de connexion
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }
    
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }
    
    const { accessToken, refreshToken } = generateTokens(user);
    
    res.json({ 
      accessToken, 
      refreshToken,
      user: { 
        id: user.id, 
        email: user.email, 
        tier: user.tier, 
        credits: user.credits 
      } 
    });
  } catch (error) {
    logger.error('Erreur connexion:', { error });
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

// Endpoint pour rafraîchir le token
app.post('/auth/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token requis' });
  }

  try {
    const payload = jwt.verify(refreshToken, REFRESH_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé' });
    }
    
    const tokens = generateTokens(user);
    res.json(tokens);
  } catch (error) {
    return res.status(401).json({ error: 'Refresh token invalide ou expiré' });
  }
});

/**
 * Middleware de validation du token JWT
 */
const authenticate = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token manquant' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET!) as { userId: string };
    req.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalide ou expiré' });
  }
};

/**
 * GET /auth/me
 * Récupère le profil de l'utilisateur connecté
 */
app.get('/auth/me', authenticate, async (req: any, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId }
    });

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.json({
      id: user.id,
      email: user.email,
      tier: user.tier,
      credits: user.credits
    });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du profil' });
  }
});

/**
 * Middleware de validation du rôle Admin
 */
const isAdmin = async (req: any, res: any, next: any) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.userId } });
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Accès refusé. Droits administrateur requis.' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la vérification des droits' });
  }
};

/**
 * GET /auth/admin/stats
 * Statistiques globales pour le dashboard admin
 */
app.get('/auth/admin/stats', authenticate, isAdmin, async (req, res) => {
  try {
    const totalUsers = await prisma.user.count();
    
    // Répartition par industrie
    const industryStats = await prisma.user.groupBy({
      by: ['industry'] as const,
      _count: {
        _all: true
      }
    });

    // Répartition par source (howDidYouHear)
    const sourceStats = await prisma.user.groupBy({
      by: ['howDidYouHear'] as const,
      _count: {
        _all: true
      }
    });

    // Répartition par taille d'entreprise
    const companySizeStats = await prisma.user.groupBy({
      by: ['companySize'] as const,
      _count: {
        _all: true
      }
    });

    // Inscriptions récentes (7 derniers jours)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentRegistrations = await prisma.user.findMany({
      where: {
        createdAt: {
          gte: sevenDaysAgo
        }
      },
      select: {
        createdAt: true
      }
    });

    res.json({
      totalUsers,
      industryStats: industryStats.map(s => ({ name: s.industry || 'Non spécifié', value: s._count._all })),
      sourceStats: sourceStats.map(s => ({ name: s.howDidYouHear || 'Non spécifié', value: s._count._all })),
      companySizeStats: companySizeStats.map(s => ({ name: s.companySize || 'Non spécifié', value: s._count._all })),
      recentRegistrations
    });
  } catch (error) {
    logger.error('Erreur stats admin:', { error });
    res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json(healthCheck('auth', '1.0.0'));
});

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Auth service running on port ${PORT}`);
});
