'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Check, Zap, Sparkles, Building2 } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Parfait pour découvrir la puissance de notre IA.",
    features: [
      "10 crédits par mois",
      "Génération d'images (512x512)",
      "Accès à la Marketplace",
      "Support communautaire",
      "1 utilisateur"
    ],
    cta: "Commencer gratuitement",
    icon: Zap,
    popular: false
  },
  {
    name: "Pro",
    price: "19,000",
    description: "Pour les créateurs et entrepreneurs exigeants.",
    features: [
      "500 crédits par mois",
      "Génération 4K & Vidéos HD",
      "Pas de filigrane",
      "Support prioritaire",
      "API Access (Basic)",
      "5 utilisateurs"
    ],
    cta: "Passer à Pro",
    icon: Sparkles,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Solutions sur mesure pour les grandes entreprises.",
    features: [
      "Crédits illimités",
      "Modèles personnalisés",
      "API Dédiée & Webhooks",
      "Account Manager dédié",
      "SLA 99.9%",
      "Utilisateurs illimités"
    ],
    cta: "Contacter la vente",
    icon: Building2,
    popular: false
  }
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tarification"
          title="Des prix adaptés à votre croissance"
          subtitle="Choisissez le plan qui vous convient le mieux. Économisez 20% avec la facturation annuelle."
        />

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-secondary p-1 rounded-full border border-white/10 flex items-center relative">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${
                billingCycle === 'monthly' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${
                billingCycle === 'yearly' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              Annuel
            </button>
            <motion.div
              animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
              className="absolute left-1 w-1/2 h-[calc(100%-8px)] bg-primary rounded-full z-0"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <GlassCard 
                className={`h-full flex flex-col p-8 border-white/10 ${
                  plan.popular ? 'border-primary/50 bg-primary/5 shadow-[0_0_40px_rgba(249,115,22,0.1)]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                    Plus Populaire
                  </div>
                )}
                
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${plan.popular ? 'bg-primary text-white' : 'bg-white/5 text-primary'}`}>
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {plan.price === "Sur devis" ? "" : (billingCycle === 'yearly' && plan.price !== "0" ? (parseInt(plan.price.replace(',', '')) * 0.8).toLocaleString() : plan.price)}
                    </span>
                    <span className="text-4xl font-bold text-white">{plan.price === "Sur devis" ? "Sur devis" : ""}</span>
                    {plan.price !== "Sur devis" && (
                      <span className="text-gray-500 ml-1">FCFA / mois</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full h-12 ${
                    plan.popular ? 'bg-primary hover:bg-primary-dark' : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
