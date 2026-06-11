'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CreditCard, Zap, Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    credits: 10,
    features: ['10 crédits/mois', 'Images 512×512', 'Support communautaire'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 29,
    credits: 500,
    features: ['500 crédits/mois', 'Images 4K', 'Vidéos illimitées', 'Support prioritaire'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    credits: 'Illimité',
    features: ['Crédits illimités', 'API dédiée', 'Support 24/7', 'SLA personnalisé'],
    popular: false,
  },
];

export default function BillingPage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Facturation</h1>
        <p className="text-gray-400 mb-8">Gérez votre abonnement et vos crédits</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? 'bg-gradient-to-b from-orange-500/20 to-pink-500/20 border-2 border-orange-500'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {typeof plan.price === 'number' ? `${plan.price}€` : plan.price}
                  </span>
                  {typeof plan.price === 'number' && <span className="text-gray-400">/mois</span>}
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.credits} crédits</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.name === 'Free' ? '/dashboard' : '/billing/checkout'}>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Free' ? 'Actuel' : 'Choisir'}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Transaction récente */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Historique des transactions</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-white text-sm">Achat de crédits</p>
                    <p className="text-gray-500 text-xs">15 Mai 2024</p>
                  </div>
                </div>
                <p className="text-white font-semibold">+100 crédits</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
