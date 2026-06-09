import express from 'express';
import Stripe from 'stripe';
import { PrismaClient, Tier, CreditType } from '@zaksoft/database';
import cors from 'cors';
import dotenv from 'dotenv';
import { authenticate, AuthRequest } from './middleware/auth';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

if (!STRIPE_SECRET_KEY) {
  console.warn('WARNING: STRIPE_SECRET_KEY is not defined. Billing service will run in limited mode.');
}

const stripe = new Stripe(STRIPE_SECRET_KEY || 'dummy_key', {
  apiVersion: '2023-10-16' as any
});

app.use(cors());

// Configuration des produits (priceId venant de Stripe Dashboard)
const PRODUCTS = {
  basic: { credits: 100, priceId: process.env.STRIPE_BASIC_PRICE_ID },
  pro: { credits: 500, priceId: process.env.STRIPE_PRO_PRICE_ID },
  enterprise: { credits: 5000, priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID }
};

/**
 * POST /billing/create-checkout
 * Crée une session de paiement Stripe
 */
app.post('/billing/create-checkout', authenticate, async (req: AuthRequest, res) => {
  try {
    const { tier } = req.body;
    const userId = req.user?.userId;

    if (!tier || !['basic', 'pro', 'enterprise'].includes(tier)) {
      return res.status(400).json({ error: 'Tier invalide' });
    }

    const product = PRODUCTS[tier as keyof typeof PRODUCTS];
    if (!product.priceId) {
      return res.status(500).json({ error: `Price ID non configuré pour le tier ${tier}` });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/dashboard/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/dashboard/billing?canceled=true`,
      client_reference_id: userId,
      metadata: {
        userId: userId || '',
        tier
      }
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
  }
});

/**
 * POST /billing/webhook
 * Traitement des notifications asynchrones de Stripe
 */
app.post('/billing/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'] as string;
  
  if (!STRIPE_WEBHOOK_SECRET) {
    console.error('Webhook Error: STRIPE_WEBHOOK_SECRET is missing');
    return res.status(500).send('Webhook Secret missing');
  }
  
  let event: Stripe.Event;
  
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error(`Webhook Signature Verification Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  console.log(`[Stripe Webhook] Reçu : ${event.type}`);

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.client_reference_id;
        const tier = session.metadata?.tier as Tier;
        
        let creditsToAdd = 0;
        if (tier === Tier.basic) creditsToAdd = 100;
        else if (tier === Tier.pro) creditsToAdd = 500;
        else if (tier === Tier.enterprise) creditsToAdd = 5000;
        
        if (userId) {
          await prisma.user.update({
            where: { id: userId },
            data: {
              tier,
              credits: { increment: creditsToAdd },
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string
            }
          });
          
          await prisma.creditTransaction.create({
            data: {
              userId,
              amount: creditsToAdd,
              type: CreditType.PURCHASE,
              referenceId: session.id,
              description: `Achat abonnement ${tier}`
            }
          });
          console.log(`[Billing] User ${userId} upgradé vers ${tier} (+${creditsToAdd} credits)`);
        }
        break;
      }
      
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.billing_reason === 'subscription_create') break;

        const customerId = invoice.customer as string;
        const user = await prisma.user.findFirst({ where: { stripeCustomerId: customerId } });
        
        if (user) {
          const monthlyCredits = user.tier === Tier.basic ? 100 : user.tier === Tier.pro ? 500 : 5000;
          await prisma.user.update({
            where: { id: user.id },
            data: { credits: { increment: monthlyCredits } }
          });
          
          await prisma.creditTransaction.create({
            data: {
              userId: user.id,
              amount: monthlyCredits,
              type: CreditType.SUBSCRIPTION,
              referenceId: invoice.id,
              description: `Renouvellement mensuel ${user.tier}`
            }
          });
          console.log(`[Billing] Renouvellement mensuel pour user ${user.id} (+${monthlyCredits})`);
        }
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await prisma.user.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: { tier: Tier.free }
        });
        console.log(`[Billing] Abonnement supprimé : ${subscription.id}`);
        break;
      }
    }
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
  
  res.json({ received: true });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Billing service running on port ${PORT}`));
