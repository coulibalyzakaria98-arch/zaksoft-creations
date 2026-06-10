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
var stripe_1 = require("stripe");
var database_1 = require("@zaksoft/database");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var auth_1 = require("./middleware/auth");
dotenv_1.default.config();
var app = (0, express_1.default)();
var prisma = new database_1.PrismaClient();
var STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
var STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
if (!STRIPE_SECRET_KEY) {
    console.warn('WARNING: STRIPE_SECRET_KEY is not defined. Billing service will run in limited mode.');
}
var stripe = new stripe_1.default(STRIPE_SECRET_KEY || 'dummy_key', {
    apiVersion: '2023-10-16'
});
app.use((0, cors_1.default)());
// Configuration des produits (priceId venant de Stripe Dashboard)
var PRODUCTS = {
    basic: { credits: 100, priceId: process.env.STRIPE_BASIC_PRICE_ID },
    pro: { credits: 500, priceId: process.env.STRIPE_PRO_PRICE_ID },
    enterprise: { credits: 5000, priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID }
};
/**
 * POST /billing/create-checkout
 * Crée une session de paiement Stripe
 */
app.post('/billing/create-checkout', auth_1.authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tier, userId, product, session, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                tier = req.body.tier;
                userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
                if (!tier || !['basic', 'pro', 'enterprise'].includes(tier)) {
                    return [2 /*return*/, res.status(400).json({ error: 'Tier invalide' })];
                }
                product = PRODUCTS[tier];
                if (!product.priceId) {
                    return [2 /*return*/, res.status(500).json({ error: "Price ID non configur\u00E9 pour le tier ".concat(tier) })];
                }
                return [4 /*yield*/, stripe.checkout.sessions.create({
                        payment_method_types: ['card'],
                        line_items: [
                            {
                                price: product.priceId,
                                quantity: 1,
                            },
                        ],
                        mode: 'subscription',
                        success_url: "".concat(process.env.FRONTEND_URL, "/dashboard/billing?success=true&session_id={CHECKOUT_SESSION_ID}"),
                        cancel_url: "".concat(process.env.FRONTEND_URL, "/dashboard/billing?canceled=true"),
                        client_reference_id: userId,
                        metadata: {
                            userId: userId || '',
                            tier: tier
                        }
                    })];
            case 1:
                session = _b.sent();
                res.json({ url: session.url, sessionId: session.id });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error('Stripe Error:', error_1);
                res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * POST /billing/webhook
 * Traitement des notifications asynchrones de Stripe
 */
app.post('/billing/webhook', express_1.default.raw({ type: 'application/json' }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sig, event, _a, session, userId, tier, creditsToAdd, invoice, customerId, user, monthlyCredits, subscription, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                sig = req.headers['stripe-signature'];
                if (!STRIPE_WEBHOOK_SECRET) {
                    console.error('Webhook Error: STRIPE_WEBHOOK_SECRET is missing');
                    return [2 /*return*/, res.status(500).send('Webhook Secret missing')];
                }
                try {
                    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
                }
                catch (err) {
                    console.error("Webhook Signature Verification Error: ".concat(err.message));
                    return [2 /*return*/, res.status(400).send("Webhook Error: ".concat(err.message))];
                }
                console.log("[Stripe Webhook] Re\u00E7u : ".concat(event.type));
                _c.label = 1;
            case 1:
                _c.trys.push([1, 14, , 15]);
                _a = event.type;
                switch (_a) {
                    case 'checkout.session.completed': return [3 /*break*/, 2];
                    case 'invoice.payment_succeeded': return [3 /*break*/, 6];
                    case 'customer.subscription.deleted': return [3 /*break*/, 11];
                }
                return [3 /*break*/, 13];
            case 2:
                session = event.data.object;
                userId = session.client_reference_id;
                tier = (_b = session.metadata) === null || _b === void 0 ? void 0 : _b.tier;
                creditsToAdd = 0;
                if (tier === database_1.Tier.basic)
                    creditsToAdd = 100;
                else if (tier === database_1.Tier.pro)
                    creditsToAdd = 500;
                else if (tier === database_1.Tier.enterprise)
                    creditsToAdd = 5000;
                if (!userId) return [3 /*break*/, 5];
                return [4 /*yield*/, prisma.user.update({
                        where: { id: userId },
                        data: {
                            tier: tier,
                            credits: { increment: creditsToAdd },
                            stripeCustomerId: session.customer,
                            stripeSubscriptionId: session.subscription
                        }
                    })];
            case 3:
                _c.sent();
                return [4 /*yield*/, prisma.creditTransaction.create({
                        data: {
                            userId: userId,
                            amount: creditsToAdd,
                            type: database_1.CreditType.PURCHASE,
                            referenceId: session.id,
                            description: "Achat abonnement ".concat(tier)
                        }
                    })];
            case 4:
                _c.sent();
                console.log("[Billing] User ".concat(userId, " upgrad\u00E9 vers ").concat(tier, " (+").concat(creditsToAdd, " credits)"));
                _c.label = 5;
            case 5: return [3 /*break*/, 13];
            case 6:
                invoice = event.data.object;
                if (invoice.billing_reason === 'subscription_create')
                    return [3 /*break*/, 13];
                customerId = invoice.customer;
                return [4 /*yield*/, prisma.user.findFirst({ where: { stripeCustomerId: customerId } })];
            case 7:
                user = _c.sent();
                if (!user) return [3 /*break*/, 10];
                monthlyCredits = user.tier === database_1.Tier.basic ? 100 : user.tier === database_1.Tier.pro ? 500 : 5000;
                return [4 /*yield*/, prisma.user.update({
                        where: { id: user.id },
                        data: { credits: { increment: monthlyCredits } }
                    })];
            case 8:
                _c.sent();
                return [4 /*yield*/, prisma.creditTransaction.create({
                        data: {
                            userId: user.id,
                            amount: monthlyCredits,
                            type: database_1.CreditType.SUBSCRIPTION,
                            referenceId: invoice.id,
                            description: "Renouvellement mensuel ".concat(user.tier)
                        }
                    })];
            case 9:
                _c.sent();
                console.log("[Billing] Renouvellement mensuel pour user ".concat(user.id, " (+").concat(monthlyCredits, ")"));
                _c.label = 10;
            case 10: return [3 /*break*/, 13];
            case 11:
                subscription = event.data.object;
                return [4 /*yield*/, prisma.user.updateMany({
                        where: { stripeSubscriptionId: subscription.id },
                        data: { tier: database_1.Tier.free }
                    })];
            case 12:
                _c.sent();
                console.log("[Billing] Abonnement supprim\u00E9 : ".concat(subscription.id));
                return [3 /*break*/, 13];
            case 13: return [3 /*break*/, 15];
            case 14:
                error_2 = _c.sent();
                console.error('Error processing webhook event:', error_2);
                return [2 /*return*/, res.status(500).json({ error: 'Webhook processing failed' })];
            case 15:
                res.json({ received: true });
                return [2 /*return*/];
        }
    });
}); });
var PORT = process.env.PORT || 3005;
app.listen(PORT, function () { return console.log("Billing service running on port ".concat(PORT)); });
