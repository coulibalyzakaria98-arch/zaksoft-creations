'use client';

import { useAuth } from '@/hooks/useAuth';
import { useCredits } from '@/hooks/useCredits';
import Link from 'next/link';

export default function DashboardHomePage() {
  const { user } = useAuth();
  const { credits } = useCredits();

  const quickActions = [
    { title: 'Créer une image', description: 'Générez une image IA en quelques secondes', icon: '🎨', href: '/dashboard/image/new', color: 'from-purple-500 to-pink-500' },
    { title: 'Créer une vidéo', description: 'Production vidéo par intelligence artificielle', icon: '🎬', href: '/dashboard/video/new', color: 'from-blue-500 to-cyan-500' },
    { title: 'Créer un site', description: 'Générez un site web complet', icon: '🌐', href: '/dashboard/website/new', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Bonjour, {user?.email?.split('@')[0] || 'Créateur'} 👋
          </h1>
          <p className="text-gray-400">Bienvenue sur votre espace de création ZAKSOFT</p>
        </div>

        {/* Credit card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-12 shadow-xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-purple-200 text-sm">Crédits disponibles</p>
              <p className="text-5xl font-bold text-white mt-2">{credits}</p>
              <Link href="/dashboard/billing" className="inline-block mt-4 px-4 py-2 bg-white/20 rounded-xl text-white text-sm hover:bg-white/30 transition-colors">
                + Ajouter des crédits
              </Link>
            </div>
            <div className="text-right">
              <p className="text-purple-200 text-sm">Plan actuel</p>
              <p className="text-white font-bold capitalize">{user?.tier || 'Gratuit'}</p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <h2 className="text-2xl font-bold text-white mb-6">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href}>
              <div className={`bg-gradient-to-br ${action.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full`}>
                <div className="text-4xl mb-4">{action.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                <p className="text-white/80 text-sm">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">📊 Statistiques du mois</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Images générées</span>
                <span className="text-white font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vidéos générées</span>
                <span className="text-white font-bold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sites créés</span>
                <span className="text-white font-bold">1</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">💡 Astuce du jour</h3>
            <p className="text-gray-300">
              Utilisez des prompts détaillés pour obtenir de meilleurs résultats. Plus vous êtes précis, meilleure est la génération !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
