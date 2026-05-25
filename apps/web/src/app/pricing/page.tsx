'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'mois',
    description: 'Parfait pour commencer',
    features: [
      '10 crédits/mois',
      'Images 512×512',
      'Support communautaire',
      'Accès marketplace',
      'Stockage 1GB',
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
      'Vidéos 30s',
      'Voix off premium',
      'Sites web illimités',
      'Support prioritaire',
      'Stockage 50GB',
      'API accès',
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
      'Images 8K',
      'Vidéos illimitées',
      'API dédiée',
      'SLA personnalisé',
      'Formation équipe',
      'Support 24/7',
      'Comptes multiples',
      'Stockage illimité',
    ],
    button: 'Contacter',
    popular: false,
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Des tarifs{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              transparents
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Choisissez le plan qui correspond à vos besoins. Sans engagement, résiliable à tout moment.
          </motion.p>

          {/* Toggle */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <span className={!isAnnual ? 'text-white' : 'text-gray-400'}>Mensuel</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`w-12 h-6 rounded-full transition ${isAnnual ? 'bg-orange-500' : 'bg-gray-600'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={isAnnual ? 'text-white' : 'text-gray-400'}>
              Annuel <span className="text-orange-500 text-sm">-20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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
                      {typeof plan.price === 'number' 
                        ? `${isAnnual ? Math.round(plan.price * 0.8) : plan.price}€` 
                        : plan.price}
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
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
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

      {/* FAQ Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: 'Puis-je changer de plan à tout moment ?', a: 'Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment depuis votre espace client.' },
              { q: 'Que deviennent mes crédits si je résilie ?', a: 'Les crédits non utilisés sont perdus en cas de résiliation. Nous vous recommandons de les utiliser avant.' },
              { q: 'Y a-t-il un engagement ?', a: 'Non, tous nos plans sont sans engagement et résiliables à tout moment.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white/5 rounded-xl p-6">
                <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-white text-left">
                  {faq.q}
                  <span className="text-orange-500 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-4 text-gray-400 pl-4 border-l-2 border-orange-500 text-left">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
