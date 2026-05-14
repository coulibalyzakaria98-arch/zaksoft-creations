"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Charger les variables d'environnement
dotenv_1.default.config();
console.log('--- Auth Service Starting ---');
console.log('Node Version:', process.version);
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'fallback-refresh-secret';
if (!JWT_SECRET) {
    console.error('FATAL ERROR: JWT_SECRET is not defined in environment variables.');
    process.exit(1);
}
console.log('Environment variables loaded successfully.');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ⚠️ IMPORTANT : Désactiver CSP pour le développement (évite le blocage des ressources externes)
app.use((req, res, next) => {
    res.removeHeader('Content-Security-Policy');
    res.removeHeader('X-Content-Type-Options');
    res.removeHeader('X-Frame-Options');
    next();
});
// Test database connection
prisma.$connect()
    .then(() => console.log('Successfully connected to the database.'))
    .catch((err) => {
    console.error('FAILED to connect to the database:', err);
});
/**
 * Génère une paire de tokens (Access & Refresh)
 */
const generateTokens = (user) => {
    const accessToken = jsonwebtoken_1.default.sign({ userId: user.id, tier: user.tier }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jsonwebtoken_1.default.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
};
// Endpoint d'inscription
app.post('/auth/register', async (req, res) => {
    try {
        const { email, password, firstName, lastName, companyName, companySize, position, industry, website, intendedUse, budget, howDidYouHear, newsletter } = req.body;
        // Validation basique
        if (!email || !password || !email.includes('@')) {
            return res.status(400).json({ error: 'Email valide et mot de passe requis' });
        }
        if (password.length < 8) {
            return res.status(400).json({ error: 'Le mot de passe doit faire au moins 8 caractères' });
        }
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
                firstName,
                lastName,
                companyName,
                companySize,
                position,
                industry,
                website,
                intendedUse,
                budget,
                howDidYouHear,
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
                lastName: user.lastName
            }
        });
    }
    catch (error) {
        console.error('Erreur inscription:', error);
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
        const valid = await bcrypt_1.default.compare(password, user.passwordHash);
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
    }
    catch (error) {
        console.error('Erreur connexion:', error);
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
app.get('/auth/me', authenticate, async (req, res) => {
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
            industryStats: industryStats.map(s => ({ name: s.industry || 'Non spécifié', value: s._count._all })),
            sourceStats: sourceStats.map(s => ({ name: s.howDidYouHear || 'Non spécifié', value: s._count._all })),
            companySizeStats: companySizeStats.map(s => ({ name: s.companySize || 'Non spécifié', value: s._count._all })),
            recentRegistrations
        });
    }
    catch (error) {
        console.error('Erreur stats admin:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
    }
});
// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'auth' });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});
