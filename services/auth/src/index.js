"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var bcrypt_1 = require("bcrypt");
var client_1 = require("./generated/client");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var helmet_1 = require("helmet");
var zod_1 = require("zod");
// import { authLimiter } from './middleware/rate-limit';
var validation_1 = require("./middleware/validation");
var health_1 = require("@zaksoft/health");
var logging_1 = require("@zaksoft/logging");
// Debug log
console.log('--- Starting Auth Service Initialization ---');
// Charger les variables d'environnement
dotenv_1.default.config();
logging_1.default.info('--- Auth Service Starting ---');
logging_1.default.info('Node Version:', { version: process.version });
var app = (0, express_1.default)();
var prisma = new client_1.PrismaClient();
var JWT_SECRET = process.env.JWT_SECRET;
var REFRESH_SECRET = process.env.REFRESH_SECRET || 'fallback-refresh-secret';
var DATABASE_URL = process.env.DATABASE_URL;
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
var corsOriginRaw = process.env.CORS_ORIGINS || 'http://localhost:3000,http://localhost:3001,https://zaksoft-creations.vercel.app,https://*.vercel.app';
var allowedOrigins = corsOriginRaw
    .split(',')
    .map(function (origin) { return origin.trim(); })
    .filter(Boolean)
    .map(function (origin) {
    if (origin === '*') {
        return origin;
    }
    if (origin.startsWith('/') && origin.endsWith('/')) {
        return new RegExp(origin.slice(1, -1));
    }
    if (origin.includes('*')) {
        var escaped = origin
            .split('*')
            .map(function (part) { return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); })
            .join('.*');
        return new RegExp("^".concat(escaped, "$"));
    }
    return origin;
});
var corsOptions = {
    origin: true, // Accepte toutes les origines pour le test
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
    .then(function () { return logging_1.default.info('Successfully connected to the database.'); })
    .catch(function (err) {
    logging_1.default.error('FAILED to connect to the database:', err);
});
/**
 * Génère une paire de tokens (Access & Refresh)
 */
var generateTokens = function (user) {
    var accessToken = jsonwebtoken_1.default.sign({ userId: user.id, tier: user.tier }, JWT_SECRET, { expiresIn: '1h' });
    var refreshToken = jsonwebtoken_1.default.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
    return { accessToken: accessToken, refreshToken: refreshToken };
};
// --- Routes Definition ---
var authRouter = express_1.default.Router();
// Endpoint d'inscription
authRouter.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedData, email, password, firstName, lastName, companyName, companySize, position, industry, website, intendedUse, budget, howDidYouHear, newsletter, existingUser, hashedPassword, user, _a, accessToken, refreshToken, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                validatedData = validation_1.registerSchema.parse(req.body);
                email = validatedData.email, password = validatedData.password, firstName = validatedData.firstName, lastName = validatedData.lastName, companyName = validatedData.companyName, companySize = validatedData.companySize, position = validatedData.position, industry = validatedData.industry, website = validatedData.website, intendedUse = validatedData.intendedUse, budget = validatedData.budget, howDidYouHear = validatedData.howDidYouHear, newsletter = validatedData.newsletter;
                return [4 /*yield*/, prisma.user.findUnique({ where: { email: email } })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(409).json({ error: 'Cet email est déjà utilisé' })];
                }
                return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
            case 2:
                hashedPassword = _b.sent();
                return [4 /*yield*/, prisma.user.create({
                        data: {
                            email: email,
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
                    })];
            case 3:
                user = _b.sent();
                _a = generateTokens(user), accessToken = _a.accessToken, refreshToken = _a.refreshToken;
                res.status(201).json({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
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
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                if (error_1 instanceof zod_1.z.ZodError) {
                    return [2 /*return*/, res.status(400).json({ error: error_1.errors })];
                }
                logging_1.default.error('Erreur inscription:', { error: error_1 });
                res.status(500).json({ error: 'Erreur interne du serveur' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Endpoint de connexion
authRouter.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, valid, _b, accessToken, refreshToken, error_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    return [2 /*return*/, res.status(400).json({ error: 'Email et mot de passe requis' })];
                }
                logging_1.default.info('Login attempt', { email: email });
                return [4 /*yield*/, prisma.user.findUnique({ where: { email: email } })];
            case 1:
                user = _c.sent();
                if (!user) {
                    logging_1.default.warn('Login failed - user not found', { email: email });
                    return [2 /*return*/, res.status(401).json({ error: 'Identifiants invalides' })];
                }
                return [4 /*yield*/, bcrypt_1.default.compare(password, user.passwordHash)];
            case 2:
                valid = _c.sent();
                if (!valid) {
                    logging_1.default.warn('Login failed - invalid password', { email: email });
                    return [2 /*return*/, res.status(401).json({ error: 'Identifiants invalides' })];
                }
                _b = generateTokens(user), accessToken = _b.accessToken, refreshToken = _b.refreshToken;
                logging_1.default.info('Login successful', { email: email, userId: user.id });
                res.json({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    user: {
                        id: user.id,
                        email: user.email,
                        tier: user.tier,
                        credits: user.credits
                    }
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                logging_1.default.error('Erreur connexion:', {
                    error: (error_2 === null || error_2 === void 0 ? void 0 : error_2.message) || String(error_2),
                    stack: error_2 === null || error_2 === void 0 ? void 0 : error_2.stack,
                    timestamp: new Date().toISOString()
                });
                res.status(500).json({ error: 'Erreur interne du serveur' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Endpoint pour rafraîchir le token
authRouter.post('/refresh', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshToken, payload, user, tokens, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                refreshToken = req.body.refreshToken;
                if (!refreshToken) {
                    return [2 /*return*/, res.status(401).json({ error: 'Refresh token requis' })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                payload = jsonwebtoken_1.default.verify(refreshToken, REFRESH_SECRET);
                return [4 /*yield*/, prisma.user.findUnique({ where: { id: payload.userId } })];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(401).json({ error: 'Utilisateur non trouvé' })];
                }
                tokens = generateTokens(user);
                res.json(tokens);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(401).json({ error: 'Refresh token invalide ou expiré' })];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 * Middleware de validation du token JWT
 */
var authenticate = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token manquant' });
    }
    var token = authHeader.split(' ')[1];
    try {
        var payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
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
authRouter.get('/me', authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.user.findUnique({
                        where: { id: req.userId }
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ error: 'Utilisateur non trouvé' })];
                }
                res.json({
                    id: user.id,
                    email: user.email,
                    tier: user.tier,
                    credits: user.credits
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                logging_1.default.error('Erreur /me:', { error: error_4 });
                res.status(500).json({ error: 'Erreur lors de la récupération du profil' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Middleware de validation du rôle Admin
 */
var isAdmin = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.user.findUnique({ where: { id: req.userId } })];
            case 1:
                user = _a.sent();
                if (!user || user.role !== 'admin') {
                    return [2 /*return*/, res.status(403).json({ error: 'Accès refusé. Droits administrateur requis.' })];
                }
                next();
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                logging_1.default.error('Erreur isAdmin:', { error: error_5 });
                res.status(500).json({ error: 'Erreur lors de la vérification des droits' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * GET /auth/admin/stats
 * Statistiques globales pour le dashboard admin
 */
authRouter.get('/admin/stats', authenticate, isAdmin, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var totalUsers, industryStats, sourceStats, companySizeStats, sevenDaysAgo, recentRegistrations, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, prisma.user.count()];
            case 1:
                totalUsers = _a.sent();
                return [4 /*yield*/, prisma.user.groupBy({
                        by: ['industry'],
                        _count: {
                            _all: true
                        }
                    })];
            case 2:
                industryStats = _a.sent();
                return [4 /*yield*/, prisma.user.groupBy({
                        by: ['howDidYouHear'],
                        _count: {
                            _all: true
                        }
                    })];
            case 3:
                sourceStats = _a.sent();
                return [4 /*yield*/, prisma.user.groupBy({
                        by: ['companySize'],
                        _count: {
                            _all: true
                        }
                    })];
            case 4:
                companySizeStats = _a.sent();
                sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                return [4 /*yield*/, prisma.user.findMany({
                        where: {
                            createdAt: {
                                gte: sevenDaysAgo
                            }
                        },
                        select: {
                            createdAt: true
                        }
                    })];
            case 5:
                recentRegistrations = _a.sent();
                res.json({
                    totalUsers: totalUsers,
                    industryStats: industryStats.map(function (s) { return ({ name: s.industry || 'Non spécifié', value: s._count._all }); }),
                    sourceStats: sourceStats.map(function (s) { return ({ name: s.howDidYouHear || 'Non spécifié', value: s._count._all }); }),
                    companySizeStats: companySizeStats.map(function (s) { return ({ name: s.companySize || 'Non spécifié', value: s._count._all }); }),
                    recentRegistrations: recentRegistrations
                });
                return [3 /*break*/, 7];
            case 6:
                error_6 = _a.sent();
                logging_1.default.error('Erreur stats admin:', { error: error_6 });
                res.status(500).json({ error: 'Erreur lors de la récupération des statistiques' });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
// Appliquer le router avec le préfixe /auth
app.use('/auth', authRouter);
// Root health check for Render
app.get('/', function (req, res) {
    res.json({ status: 'ok', service: 'auth-service' });
});
// Health check endpoint (legacy / compatible)
app.get('/health', function (req, res) {
    res.json((0, health_1.healthCheck)('auth', '1.0.0'));
});
var PORT = Number(process.env.PORT) || 10000;
app.listen(PORT, '0.0.0.0', function () {
    console.log("Auth service running on port ".concat(PORT));
    logging_1.default.info("Auth service running on port ".concat(PORT));
});
