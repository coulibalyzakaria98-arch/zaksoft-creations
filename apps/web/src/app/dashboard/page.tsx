'use client';

import { useCredits } from '@/hooks/useCredits';
import { useStats } from '@/hooks/useStats';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DashboardHome() {
  const { credits, usedCredits, limit, plan } = useCredits();
  const { stats, loading } = useStats();

  const quickActions = [
    { name: 'Créer une image', description: 'Générez une image IA en quelques secondes', icon: '🎨', href: '/dashboard/image/new', color: 'from-purple-500 to-pink-500' },
    { name: 'Créer une vidéo', description: 'Production vidéo par intelligence artificielle', icon: '🎬', href: '/dashboard/video/new', color: 'from-blue-500 to-cyan-500' },
    { name: 'Créer un site', description: 'Générez un site web complet', icon: '🌐', href: '/dashboard/website/new', color: 'from-emerald-500 to-teal-500' },
  ];

  const statsCards = [
    { label: 'Images générées', value: stats?.images || 0, icon: '🖼️', change: '+12%', color: 'from-purple-500/20 to-pink-500/20' },
    { label: 'Vidéos générées', value: stats?.videos || 0, icon: '🎥', change: '+5%', color: 'from-blue-500/20 to-cyan-500/20' },
    { label: 'Sites créés', value: stats?.websites || 0, icon: '🌐', change: '+23%', color: 'from-emerald-500/20 to-teal-500/20' },
    { label: 'Crédits utilisés', value: usedCredits || 0, icon: '⚡', change: `${limit - (usedCredits || 0)} restants`, color: 'from-orange-500/20 to-red-500/20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto p-8">
        
        {/* Header avec effet glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Bonjour, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">coulibalyzakaria987</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Bienvenue sur votre espace de création ZAKSOFT
          </p>
        </motion.div>

        {/* Cartes de statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {statsCards.map((card, index) => (
            <div
              key={card.label}
              className={`bg-gradient-to-br ${card.color} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{card.icon}</span>
                <span className="text-sm text-green-400 bg-green-500/20 px-2 py-1 rounded-lg">
                  {card.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {loading ? '...' : card.value}
              </div>
              <div className="text-gray-400 text-sm">{card.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section crédits et plan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
        >
          {/* Carte crédits premium */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl shadow-purple-500/20">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-purple-200 text-sm font-medium">Crédits disponibles</p>
                <p className="text-5xl font-bold text-white mt-2">{credits}</p>
              </div>
              <Link href="/dashboard/billing">
                <button className="px-4 py-2 bg-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/30 transition-all backdrop-blur-sm">
                  Recharger →
                </button>
              </Link>
            </div>
            <div>
              <div className="flex justify-between text-sm text-purple-200 mb-2">
                <span>Utilisation du mois</span>
                <span>{usedCredits || 0} / {limit || 100} crédits</span>
              </div>
              <div className="w-full bg-purple-800/50 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((usedCredits || 0) / (limit || 100)) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white h-2 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Carte plan actuel */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-400 text-sm font-medium">Plan actuel</p>
                <p className="text-2xl font-bold text-white capitalize">{plan}</p>
              </div>
              <Link href="/dashboard/billing">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white text-sm font-medium hover:shadow-lg transition-all">
                  Améliorer mon plan →
                </button>
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              {credits > 0 
                ? `${credits} crédits restants ce mois` 
                : 'Crédits épuisés, passez au plan Pro pour continuer'}
            </div>
          </div>
        </motion.div>

        {/* Actions rapides */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>⚡</span> Actions rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link key={action.name} href={action.href}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-gradient-to-br ${action.color} p-6 rounded-2xl shadow-lg cursor-pointer transition-all h-full`}
                >
                  <div className="text-4xl mb-4">{action.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{action.name}</h3>
                  <p className="text-white/80 text-sm">{action.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Section récente (optionnelle) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">📊 Activité récente</h2>
            <Link href="/dashboard/history" className="text-purple-400 text-sm hover:text-purple-300">
              Voir tout →
            </Link>
          </div>
          <div className="text-gray-400 text-sm text-center py-8">
            Commencez à générer du contenu pour voir votre activité ici
          </div>
        </motion.div>
      </div>
    </div>
  );
}
