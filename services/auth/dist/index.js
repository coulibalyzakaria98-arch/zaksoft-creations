"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = require("@zaksoft/database");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const zod_1 = require("zod");
// import { authLimiter } from './middleware/rate-limit';
const validation_1 = require("./middleware/validation");
const health_1 = require("@zaksoft/health");
const logging_1 = __importDefault(require("@zaksoft/logging"));
// Debug log
console.log('--- Starting Auth Service Initialization ---');
// Charger les variables d'environnement
dotenv_1.default.config();
logging_1.default.info('--- Auth Service Starting ---');
logging_1.default.info('Node Version:', { version: process.version });
const app = (0, express_1.default)();
const prisma = new database_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'fallback-refresh-secret';
const DATABASE_URL = process.env.DATABASE_URL;
if (!JWT_SECRET) {
    logging_1.default.error('FATAL ERROR: JWT_SECRET is not defined in environment variables.');
    process.exit(1);
}
if (!DATABASE_URL) {
    logging_1.default.error('FATAL ERROR: DATABASE_URL is not defined in environment variables.');
    // On ne quitte pas forcément ici pour permettre au health check de répondre si besoin, 
    // mais les requêtes DB échoueront.
}
logging_1.default.info('Environment variables loaded successfully.');
app.use((0, helmet_1.default)()); // Apply security headers
const corsOriginRaw = process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:3001,https://zaksoft-creations.vercel.app,https://*.vercel.app';
const allowedOrigins = corsOriginRaw
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .map((origin) => {
    if (origin === '*') {
        return origin;
    }
    if (origin.startsWith('/') && origin.endsWith('/')) {
        return new RegExp(origin.slice(1, -1));
    }
    if (origin.includes('*')) {
        const escaped = origin
            .split('*')
            .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('.*');
        return new RegExp(`^${escaped}$`);
    }
    return origin;
});
const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204,
    preflightContinue: false,
};
app.use((0, cors_1.default)(corsOptions));
app.options('*', (0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
// app.use(authLimiter); // Apply rate limiting
// Test database connection
prisma.$connect()
    .then(() => logging_1.default.info('Successfully connected to the database.'))
    .catch((err) => {
    logging_1.default.error('FAILED to connect to the database:', err);
});
/**
 * Génère une paire de tokens (Access & Refresh)
 */
const generateTokens = (user) => {
    const accessToken = jsonwebtoken_1.default.sign({ userId: user.id, tier: user.tier }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jsonwebtoken_1.default.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
};
// --- Routes Definition ---
const authRouter = express_1.default.Router();
// Endpoint d'inscription
authRouter.post('/register', async (req, res) => {
    try {
        const validatedData = validation_1.registerSchema.parse(req.body);
        const { email, password, firstName, lastName, companyName, companySize, position, industry, website, intendedUse, budget, howDidYouHear, newsletter } = validatedData;
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'Cet email est déjà utilisé' });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
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
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ error: error.errors });
        }
        logging_1.default.error('Erreur inscription:', { error });
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});
// Endpoint de connexion
authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email et mot de passe requis' });
        }
        logging_1.default.info('Login attempt', { email });
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) {
            logging_1.default.warn('Login failed - user not found or no password hash', { email });
            return res.status(401).json({ error: 'Identifiants invalides' });
        }
        const valid = await bcrypt_1.default.compare(password, user.passwordHash);
        if (!valid) {
            logging_1.default.warn('Login failed - invalid password', { email });
            return res.status(401).json({ error: 'Identifiants invalides' });
        }
        const { accessToken, refreshToken } = generateTokens(user);
        logging_1.default.info('Login successful', { email, userId: user.id });
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
    }
    catch (error) {
        logging_1.default.error('Erreur connexion:', {
            error: error?.message || String(error),
            stack: error?.stack,
            timestamp: new Date().toISOString()
        });
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});
// Endpoint pour rafraîchir le token
authRouter.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token requis' });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(refreshToken, REFRESH_SECRET);
        const user = await prisma.user.findUnique({ where: { id: payload.userId } });
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé' });
        }
        const tokens = generateTokens(user);
        res.json(tokens);
    }
    catch (error) {
        return res.status(401).json({ error: 'Refresh token invalide ou expiré' });
    }
});
/**
 * Middleware de validation du token JWT
 */
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token manquant' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.userId = payload.userId;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'Token invalide ou expiré' });
    }
};
/**
 * GET /auth/me
 * Récupère le profil de l'utilisateur connecté
 */
authRouter.get('/me', authenticate, async (req, res) => {
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
    }
    catch (error) {
        logging_1.default.error('Erreur /me:', { error });
        res.status(500).json({ error: 'Erreur lors de la récupération du profil' });
    }
});
/**
 * Middleware de validation du rôle Admin
 */
const isAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.userId } });
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ error: 'Accès refusé. Droits administrateur requis.' });
        }
        next();
    }
    catch (error) {
        logging_1.default.error('Erreur isAdmin:', { error });
        res.status(500).json({ error: 'Erreur lors de la vérification des droits' });
    }
};
/**
 * GET /auth/admin/stats
 * Statistiques globales pour le dashboard admin
 */
authRouter.get('/admin/stats', authenticate, isAdmin, async (req, res) => {
    try {
        const totalUsers = await prisma.user.count();
        // Répartition par industrie
        const industryStats = await prisma.user.groupBy({
            by: ['industry'],
            _count: {
                _all: true
            }
        });
        // Répartition par source (howDidYouHear)
        const sourceStats = await prisma.user.groupBy({
            by: ['howDidYouHear'],
            _count: {
                _all: true
            }
        });
        // Répartition par taille d'entreprise
        const companySizeStats = await prisma.user.groupBy({
            by: ['companySize'],
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
            industryStats: industryStats.map((s) => ({ name: s.industry || 'Non spécifié', value: s._count._all })),
            sourceStats: sourceStats.map((s) => ({ name: s.howDidYouHear || 'Non spécifié', value: s._count._all })),
            companySizeStats: companySizeStats.map((s) => ({ name: s.companySize || 'Non spécifié', value: s._count._all })),
            recentRegistrations
        });
    }
    catch (error) {
        logging_1.default.error('Erreur stats admin:', { error });
        res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
    }
});
// Appliquer le router avec le préfixe /auth
app.use('/auth', authRouter);
// Root health check for Render
app.get('/', (req, res) => {
    res.json({ status: 'ok', service: 'auth-service' });
});
// Health check endpoint (legacy / compatible)
app.get('/health', (req, res) => {
    res.json((0, health_1.healthCheck)('auth', '1.0.0'));
});
const PORT = Number(process.env.PORT) || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Auth service running on port ${PORT}`);
    logging_1.default.info(`Auth service running on port ${PORT}`);
});
