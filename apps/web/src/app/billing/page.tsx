'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { CreditCard, Zap, TrendingUp, Check, Loader2 } from 'lucide-react';

export const dynamic = 'force-dynamic'; // Added this line

const PLANS = [
  {
    name: 'Gratuit',
    tier: 'free',
    price: 0,
    credits: 10,
    features: ['10 crédits/mois', 'Images 512×512', 'Support communautaire'],
    priceId: null
  },
  {
    name: 'Basic',
    tier: 'basic',
    price: 9.99,
    credits: 100,
    features: ['100 crédits/mois', 'Images 1024×1024', 'Vidéos 5s', 'Support email'],
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID
  },
  {
    name: 'Pro',
    tier: 'pro',
    price: 29.99,
    credits: 500,
    features: ['500 crédits/mois', 'Images 4K', 'Vidéos 30s', 'Voix off premium', 'Support prioritaire'],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID
  },
  {
    name: 'Enterprise',
    tier: 'enterprise',
    price: 99.99,
    credits: 5000,
    features: ['5000 crédits/mois', 'API dédiée', 'SLA personnalisé', 'Support 24/7'],
    priceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID
  }
];

export default function BillingPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (user) {
      fetchTransactions();
    }
  }, [user]);

  const fetchTransactions = async () => {
    try {
      const res = await fetch(`/api/billing/transactions?userId=${user?.id}`);
      if (res.ok) {
        const data = await res.json();
        setTransactions(data);
      }
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (priceId: string | null) => {
    if (!priceId) return;
    setLoading(true);
    
    try {
      const res = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id,
          priceId,
          successUrl: `${window.location.origin}/billing/success`,
          cancelUrl: `${window.location.origin}/billing`
        })
      });
      
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout session creation failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stripe/create-portal-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id })
      });
      
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Portal session creation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Facturation & Crédits</h1>
        <p className="text-gray-600 mt-1">Gérez votre abonnement et suivez votre consommation</p>
      </div>
      
      {/* Solde actuel */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-indigo-100 flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" />
              Crédits disponibles
            </p>
            <p className="text-5xl font-bold mt-1">{user?.credits || 0}</p>
            <p className="text-indigo-100 text-sm mt-2 font-medium">
              Plan {PLANS.find(p => p.tier === user?.tier)?.name || 'Gratuit'}
            </p>
          </div>
          {user?.tier !== 'free' && (
            <button
              onClick={handleManageSubscription}
              disabled={loading}
              className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Gérer mon abonnement
            </button>
          )}
        </div>
      </div>
      
      {/* Grille des plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {PLANS.map((plan) => (
          <div
            key={plan.tier}
            className={`bg-white rounded-2xl shadow-sm border p-6 flex flex-col relative transition-all hover:shadow-md ${
              plan.popular ? 'ring-2 ring-indigo-600 shadow-xl scale-105 z-10' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Le plus populaire
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}€</span>
                {plan.price > 0 && <span className="text-gray-500 ml-1 font-medium">/mois</span>}
              </div>
              <p className="text-sm text-indigo-600 font-semibold mt-2">
                {plan.credits} crédits / mois
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                  <div className="mt-1 bg-green-100 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => handleSubscribe(plan.priceId || null)}
              disabled={user?.tier === plan.tier || loading || (plan.price === 0 && user?.tier !== 'free')}
              className={`w-full py-3 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${
                user?.tier === plan.tier
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border'
                  : plan.price === 0
                  ? 'bg-gray-50 text-gray-700 hover:bg-gray-100 border'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
              }`}
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {user?.tier === plan.tier ? 'Plan actuel' : plan.price === 0 ? 'Gratuit' : `Choisir ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
      
      {/* Historique des transactions */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Historique des transactions
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Opération</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Montant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.length > 0 ? (
                transactions.map((tx: any) => (
                  <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {new Date(tx.timestamp).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="capitalize">{tx.operation === 'purchase' ? 'Achat de crédits' : tx.operation.replace('/', ' ')}</span>
                    </td>
                    <td className={`px-6 py-4 text-sm text-right font-bold ${
                      tx.amount > 0 ? 'text-green-600' : 'text-red-500'
                    }`}>
                      {tx.amount > 0 ? `+${tx.amount}` : tx.amount} crédits
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center text-gray-400 italic">
                    Aucune transaction enregistrée pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
