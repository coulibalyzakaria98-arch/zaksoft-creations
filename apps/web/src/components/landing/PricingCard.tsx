'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PricingPlan } from '@/config/pricing';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  const isPopular = plan.popular;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        isPopular
          ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-2 border-purple-500'
          : 'bg-white/5 backdrop-blur-sm border border-white/10'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Populaire
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      
      <div className="mb-4">
        <span className="text-4xl font-bold text-white">{plan.price}€</span>
        <span className="text-gray-400">/{plan.period === 'monthly' ? 'mois' : 'an'}</span>
      </div>
      
      <p className="text-gray-400 mb-6">{plan.credits} crédits / mois</p>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
            <Check className="w-4 h-4 text-purple-500" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Link href={plan.buttonLink}>
        <button className={`w-full py-3 rounded-xl font-semibold transition ${
          isPopular
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}>
          {plan.buttonText}
        </button>
      </Link>
    </motion.div>
  );
}
