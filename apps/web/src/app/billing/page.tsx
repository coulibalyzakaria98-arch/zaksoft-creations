'use client';

import { useAuth } from '@/hooks/useAuth';
import { PageSkeleton } from '@/components/ui/skeletons/PageSkeleton';

export default function BillingPage() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <PageSkeleton header cards={3} />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Facturation</h1>
      
      {/* Plans d'abonnement */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold">Gratuit</h3>
          <p className="text-3xl font-bold mt-2">0€<span className="text-sm text-gray-500">/mois</span></p>
          <p className="text-gray-500 text-sm mt-2">10 crédits inclus</p>
          <button className="w-full mt-4 border border-gray-300 py-2 rounded-lg">Actuel</button>
        </div>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-3xl font-bold mt-2">29€<span className="text-sm text-indigo-200">/mois</span></p>
          <p className="text-indigo-200 text-sm mt-2">500 crédits inclus</p>
          <button className="w-full mt-4 bg-white text-indigo-600 py-2 rounded-lg font-semibold">
            Choisir
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <p className="text-3xl font-bold mt-2">Sur devis</p>
          <p className="text-gray-500 text-sm mt-2">Crédits illimités</p>
          <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg">
            Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
