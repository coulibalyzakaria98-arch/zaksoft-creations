'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { createCheckoutSession } from '@/services/billingApi';

interface Plan {
  id: string;
  name: string;
  price: number;
  credits: number;
  features: string[];
  popular?: boolean;
}

export default function BillingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState(false);
  const { user } = useAuth();

  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Gratuit',
      price: 0,
      credits: 10,
      features: ['10 crédits/mois', 'Images 512x512', 'Support communautaire'],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: isYearly ? 15 : 19,
      credits: 200,
      features: ['200 crédits/mois', 'Toutes résolutions', 'Vidéos 30s max', 'Support prioritaire', 'Pas de watermark'],
      popular: true,
    },
    {
      id: 'business',
      name: 'Business',
      price: isYearly ? 49 : 59,
      credits: 600,
      features: ['600 crédits/mois', 'Vidéos 5 min max', 'API accès', 'Support dédié 24/7', 'Multi-utilisateurs'],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      credits: 5000,
      features: ['Crédits sur mesure', 'On-premise possible', 'SLA personnalisé', 'Formation incluse'],
    },
  ];

  const invoices = [
    { id: 'INV-001', date: '2026-06-01', amount: 19, status: 'payé' },
    { id: 'INV-002', date: '2026-05-01', amount: 19, status: 'payé' },
    { id: 'INV-003', date: '2026-04-01', amount: 19, status: 'payé' },
  ];

  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (planId: string) => {
    if (planId === 'free') return;
    
    setIsSubscribing(true);
    try {
      const { url } = await createCheckoutSession(planId);
      window.location.href = url;
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Erreur lors de la redirection vers le paiement');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Facturation
          </h1>
          <p className="text-gray-400 mt-2">
            Gérez votre abonnement et vos crédits
          </p>
        </div>

        {/* Current plan info */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-400">Plan actuel</span>
              <h2 className="text-2xl font-bold text-white capitalize">{user?.tier || 'Gratuit'}</h2>
              <p className="text-gray-400 text-sm">{user?.credits || 0} crédits disponibles</p>
            </div>
            <button className="px-6 py-2 bg-gray-700 rounded-xl text-gray-300 hover:bg-gray-600 transition-colors">
              Gérer
            </button>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className={`${!isYearly ? 'text-white' : 'text-gray-500'}`}>Mensuel</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-14 h-7 rounded-full transition-all relative ${isYearly ? 'bg-amber-500' : 'bg-gray-700'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-all absolute top-1 ${isYearly ? 'left-8' : 'left-1'}`} />
          </button>
          <span className={`${isYearly ? 'text-white' : 'text-gray-500'}`}>
            Annuel <span className="text-green-400 text-sm">(-20%)</span>
          </span>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border transition-all ${
                plan.popular
                  ? 'border-amber-500/50 shadow-lg shadow-amber-500/10'
                  : 'border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white whitespace-nowrap">
                  POPULAIRE
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{plan.price}€</span>
                <span className="text-gray-500">/{isYearly ? 'an' : 'mois'}</span>
              </div>
              
              <div className="text-cyan-400 font-bold mb-4">{plan.credits} crédits</div>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={plan.id === user?.tier}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.id === user?.tier
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.id === user?.tier ? 'Actuel' : 'Souscrire'}
              </button>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Moyens de paiement</h3>
          
          <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl">
            <span className="text-2xl">💳</span>
            <div>
              <p className="text-white">•••• •••• •••• 4242</p>
              <p className="text-gray-500 text-sm">Expire 12/2028</p>
            </div>
            <button className="ml-auto text-amber-400 text-sm hover:text-amber-300">
              Modifier
            </button>
          </div>
          
          <button className="mt-4 px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors">
            + Ajouter un moyen de paiement
          </button>
        </div>

        {/* Invoice history */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Historique des factures</h3>
          
          <div className="space-y-2">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex justify-between items-center p-3 bg-gray-900/30 rounded-xl">
                <div>
                  <p className="text-white font-medium">{invoice.id}</p>
                  <p className="text-gray-500 text-sm">{invoice.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{invoice.amount}€</p>
                  <p className="text-green-400 text-sm capitalize">{invoice.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
