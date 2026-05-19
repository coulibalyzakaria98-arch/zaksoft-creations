'use client';

import { useAuth } from '@/hooks/useAuth';
import { DashboardSkeleton } from '@/components/ui/skeletons/DashboardSkeleton';
// import { useCredits } from '@/hooks/useCredits'; // Assuming this hook exists as per user plan

// Dummy hook for demonstration if not found
const useCredits = () => ({ credits: 120, isLoading: false });

export default function DashboardPage() {
  const { user, isLoading: authLoading } = useAuth();
  const { credits, isLoading: creditsLoading } = useCredits();

  const isLoading = authLoading || creditsLoading;

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-1">
          Bienvenue, {user?.email?.split('@')[0]} 👋
        </p>
      </div>

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-500 text-sm">Crédits disponibles</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">{credits}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-500 text-sm">Plan actuel</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2 capitalize">{user?.tier || 'Free'}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-gray-500 text-sm">Générations ce mois</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
        </div>
      </div>

      {/* Services rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/design" className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition">
          <h3 className="font-semibold">🎨 Design IA</h3>
          <p className="text-sm text-gray-600 mt-1">Générer des images</p>
        </a>
        <a href="/video" className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 hover:shadow-md transition">
          <h3 className="font-semibold">🎬 Vidéo IA</h3>
          <p className="text-sm text-gray-600 mt-1">Créer des vidéos</p>
        </a>
        <a href="/web" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 hover:shadow-md transition">
          <h3 className="font-semibold">🌐 Web IA</h3>
          <p className="text-sm text-gray-600 mt-1">Générer des sites</p>
        </a>
      </div>
    </div>
  );
}
