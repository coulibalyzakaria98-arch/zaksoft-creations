'use client';

import { useCredits } from '@/hooks/useCredits';
import { useStats } from '@/hooks/useStats';
import { useRecentActivity } from '@/hooks/useRecentActivity';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function DashboardHome() {
  const { credits, usedCredits, limit, plan } = useCredits();
  const { stats, loading: statsLoading } = useStats();
  const { activities, loading: activitiesLoading } = useRecentActivity();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Bon matin');
    else if (hour < 18) setGreeting('Bon après-midi');
    else setGreeting('Bonsoir');
  }, []);

  const quickActions = [
    { name: 'Créer une image', icon: '🎨', href: '/dashboard/image/new', color: 'from-purple-500 to-pink-500', description: 'Génération IA instantanée' },
    { name: 'Créer une vidéo', icon: '🎬', href: '/dashboard/video/new', color: 'from-blue-500 to-cyan-500', description: 'Vidéos professionnelles' },
    { name: 'Générer un site', icon: '🌐', href: '/dashboard/website/new', color: 'from-emerald-500 to-teal-500', description: 'Sites web complets' },
    { name: 'Marketplace', icon: '🛒', href: '/dashboard/marketplace', color: 'from-orange-500 to-red-500', description: 'Templates & assets' },
  ];

  const upcomingFeatures = [
    { name: 'API Access', status: 'Disponible', icon: '🔌', available: true },
    { name: 'Team Collaboration', status: 'Bientôt', icon: '👥', available: false },
    { name: 'Advanced Analytics', status: 'Bientôt', icon: '📊', available: false },
    { name: 'White Label', status: 'Planifié', icon: '🏷️', available: false },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'image': return '🎨';
      case 'video': return '🎬';
      case 'website': return '🌐';
      case 'purchase': return '🛒';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        
        {/* Header avec effet glassmorphism */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                <span className="text-gray-400">{greeting},</span>{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  coulibalyzakaria987
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Voici votre activité des 30 derniers jours
              </p>
            </div>
            
            {/* Badge plan */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
              <span className="text-purple-300 text-sm">Plan </span>
              <span className="text-white font-semibold uppercase text-sm">{plan}</span>
            </div>
          </div>
        </motion.div>

        {/* Cartes de statistiques */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Images générées', value: stats?.images || 0, icon: '🎨', trend: '+12%', trendUp: true },
            { label: 'Vidéos créées', value: stats?.videos || 0, icon: '🎬', trend: '+5%', trendUp: true },
            { label: 'Sites web', value: stats?.websites || 0, icon: '🌐', trend: '+23%', trendUp: true },
            { label: 'Templates achetés', value: stats?.purchases || 0, icon: '🛒', trend: '+8%', trendUp: true },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{stat.icon}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trendUp ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {statsLoading ? '...' : stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section principale : Crédits + Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Carte crédits premium */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-2 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-2xl p-6 shadow-2xl shadow-purple-500/20 relative overflow-hidden"
          >
            {/* Effet de fond */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-purple-200 text-sm font-medium mb-1">Crédits disponibles</p>
                  <p className="text-5xl font-bold text-white">{credits}</p>
                </div>
                <Link href="/dashboard/billing">
                  <button className="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-xl text-white font-medium hover:bg-white/30 transition-all flex items-center gap-2">
                    Recharger <span className="text-lg">→</span>
                  </button>
                </Link>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-purple-200 mb-2">
                  <span>Utilisation du mois</span>
                  <span>{usedCredits || 0} / {limit || 100} crédits</span>
                </div>
                <div className="w-full bg-purple-800/50 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((usedCredits || 0) / (limit || 100)) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white h-2.5 rounded-full shadow-lg"
                  />
                </div>
                <p className="text-purple-200 text-xs mt-3">
                  {credits > 0 ? `✨ ${credits} crédits restants ce mois` : '⚠️ Crédits épuisés, rechargez pour continuer'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carte plan actuel */}
          <motion.div 
            {...fadeInUp}
            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm font-medium">Plan actuel</p>
                <p className="text-2xl font-bold text-white capitalize mt-1">{plan}</p>
              </div>
              <div className="text-right">
                <p className="text-cyan-400 text-xl font-bold">{usedCredits || 0}</p>
                <p className="text-gray-500 text-xs">crédits utilisés</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-gray-400 text-sm mb-1">
                <span>Limite mensuelle</span>
                <span>{limit || 100} crédits</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1.5 rounded-full"
                  style={{ width: `${((usedCredits || 0) / (limit || 100)) * 100}%` }}
                />
              </div>
            </div>
            <Link href="/dashboard/billing">
              <button className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:shadow-lg transition-all">
                Améliorer mon plan →
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Actions rapides */}
        <motion.div {...fadeInUp} className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Actions rapides
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={action.name} href={action.href}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-gradient-to-br ${action.color} p-5 rounded-2xl shadow-lg cursor-pointer transition-all h-full`}
                >
                  <div className="text-4xl mb-3">{action.icon}</div>
                  <h3 className="text-white font-bold text-md">{action.name}</h3>
                  <p className="text-white/70 text-xs mt-1">{action.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Section Activité récente + Améliorations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activité récente */}
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>📊</span> Activité récente
              </h2>
              <Link href="/dashboard/history" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                Voir tout l’historique →
              </Link>
            </div>
            
            {activitiesLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : activities && activities.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-700/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center text-xl">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.title}</p>
                      <p className="text-gray-400 text-sm">{activity.description}</p>
                    </div>
                    <div className="text-gray-500 text-xs">{activity.time}</div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <span className="text-4xl block mb-2">✨</span>
                <p>Commencez à générer du contenu</p>
                <p className="text-sm">Votre activité apparaîtra ici</p>
              </div>
            )}
          </motion.div>

          {/* Améliorations & Support */}
          <motion.div {...fadeInUp} className="space-y-6">
            {/* Fonctionnalités à venir */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>🚀</span> Améliorer mon plan
              </h2>
              <div className="space-y-3">
                {upcomingFeatures.map((feature) => (
                  <div key={feature.name} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{feature.icon}</span>
                      <div>
                        <p className="text-white font-medium">{feature.name}</p>
                        <p className="text-gray-500 text-xs">{feature.status}</p>
                      </div>
                    </div>
                    {feature.available ? (
                      <span className="text-green-400 text-xs bg-green-500/20 px-2 py-1 rounded-full">✓ Inclus</span>
                    ) : (
                      <span className="text-gray-500 text-xs">🔒</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-white font-bold text-lg mb-1">Besoin d’aide ?</h3>
                <p className="text-gray-400 text-sm mb-4">Notre équipe est disponible 24/7</p>
                <button className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:shadow-lg transition-all">
                  Contacter le support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
