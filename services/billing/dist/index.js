"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = __importDefault(require("stripe"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
// ... rest of imports and config ...
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
if (!STRIPE_SECRET_KEY) {
    console.warn('WARNING: STRIPE_SECRET_KEY is not defined. Billing service will run in limited mode.');
}
const stripe = new stripe_1.default(STRIPE_SECRET_KEY || 'dummy_key', {
    apiVersion: '2023-10-16'
});
app.use((0, cors_1.default)());
// Configuration des produits (coût en centimes)
const PRODUCTS = {
    basic: { credits: 100, priceId: process.env.STRIPE_BASIC_PRICE_ID },
    pro: { credits: 500, priceId: process.env.STRIPE_PRO_PRICE_ID },
    enterprise: { credits: 5000, priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID }
};
// ... existing code ...
/**
 * POST /billing/webhook
 * Traitement des notifications asynchrones de Stripe (Paiements, Abonnements)
 */
app.post('/billing/webhook', express_1.default.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    if (!STRIPE_WEBHOOK_SECRET) {
        console.error('Webhook Error: STRIPE_WEBHOOK_SECRET is missing');
        return res.status(500).send('Webhook Secret missing');
    }
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
    }
    catch (err) {
        console.error(`Webhook Signature Verification Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    console.log(`[Stripe Webhook] Reçu : ${event.type}`);
    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                const userId = session.client_reference_id;
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
                const priceId = lineItems.data[0]?.price?.id;
                let tier = client_1.Tier.free;
                let credits = 0;
                if (priceId === PRODUCTS.basic.priceId) {
                    tier = client_1.Tier.basic;
                    credits = 100;
                }
                else if (priceId === PRODUCTS.pro.priceId) {
                    tier = client_1.Tier.pro;
                    credits = 500;
                }
                else if (priceId === PRODUCTS.enterprise.priceId) {
                    tier = client_1.Tier.enterprise;
                    credits = 5000;
                }
                if (userId) {
                    await prisma.user.update({
                        where: { id: userId },
                        data: {
                            tier,
                            credits: { increment: credits },
                            stripeCustomerId: session.customer,
                            stripeSubscriptionId: session.subscription
                        }
                    });
                    await prisma.creditTransaction.create({
                        data: {
                            userId,
                            amount: credits,
                            operation: 'purchase',
                            metadata: { sessionId: session.id }
                        }
                    });
                    console.log(`[Billing] User ${userId} upgradé vers ${tier} (+${credits} credits)`);
                }
                break;
            }
            case 'invoice.payment_succeeded': {
                const invoice = event.data.object;
                if (invoice.billing_reason === 'subscription_create')
                    break; // Géré par checkout.session.completed
                const customerId = invoice.customer;
                const user = await prisma.user.findFirst({ where: { stripeCustomerId: customerId } });
                if (user) {
                    const monthlyCredits = user.tier === client_1.Tier.basic ? 100 : user.tier === client_1.Tier.pro ? 500 : 5000;
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { credits: { increment: monthlyCredits } }
                    });
                    await prisma.creditTransaction.create({
                        data: {
                            userId: user.id,
                            amount: monthlyCredits,
                            operation: 'monthly_renewal',
                            metadata: { invoiceId: invoice.id }
                        }
                    });
                    console.log(`[Billing] Renouvellement mensuel pour user ${user.id} (+${monthlyCredits})`);
                }
                break;
            }
            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                await prisma.user.updateMany({
                    where: { stripeSubscriptionId: subscription.id },
                    data: { tier: client_1.Tier.free }
                });
                console.log(`[Billing] Abonnement supprimé : ${subscription.id}`);
                break;
            }
        }
    }
    catch (error) {
        console.error('Error processing webhook event:', error);
        return res.status(500).json({ error: 'Webhook processing failed' });
    }
    res.json({ received: true });
});
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Billing service running on port ${PORT}`));
