'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'gratuit',
    description: 'Parfait pour commencer',
    features: [
      '10 crédits/mois',
      'Images 512×512',
      'Support communautaire',
      'Accès marketplace',
    ],
    button: 'Commencer',
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'mois',
    description: 'Pour les créateurs exigeants',
    features: [
      '500 crédits/mois',
      'Images 4K Ultra HD',
      'Vidéos illimitées',
      'Voix off premium',
      'Sites web illimités',
      'Support prioritaire',
    ],
    button: 'Choisir Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'mois',
    description: 'Pour les équipes et agences',
    features: [
      'Crédits illimités',
      'API dédiée',
      'SLA personnalisé',
      'Formation équipe',
      'Support 24/7',
      'Comptes multiples',
    ],
    button: 'Contacter',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-gray-300">Tarifs transparents</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choisissez le plan qui vous correspond
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sans engagement, résiliable à tout moment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-orange-500/20 to-pink-500/20 border-2 border-orange-500'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommandé
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {typeof plan.price === 'number' ? `${plan.price}€` : plan.price}
                  </span>
                  {typeof plan.price === 'number' && (
                    <span className="text-gray-400">/{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.name === 'Enterprise' ? '/contact' : '/auth/register'}>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.button}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
