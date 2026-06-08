// apps/web/src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { 
  Sparkles, Video, ShoppingBag, BarChart3, 
  CreditCard, Settings, LogOut, Zap, 
  Image, TrendingUp, Clock, Award,
  ArrowRight, ChevronRight, Activity,
  Calendar, DollarSign, Users, Star,
  Crown
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    imagesGenerated: 12,
    videosGenerated: 3,
    websitesCreated: 2,
    templatesUsed: 5,
    creditsUsed: 45,
    streakDays: 7,
  });

  const quickActions = [
    { icon: <Image className="w-5 h-5" />, label: 'Créer une image', href: '/design', color: 'from-orange-500 to-pink-500', bg: 'bg-orange-500/10' },
    { icon: <Video className="w-5 h-5" />, label: 'Créer une vidéo', href: '/video', color: 'from-pink-500 to-purple-500', bg: 'bg-pink-500/10' },
    { icon: <Sparkles className="w-5 h-5" />, label: 'Générer un site', href: '/web', color: 'from-purple-500 to-indigo-500', bg: 'bg-purple-500/10' },
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'Marketplace', href: '/marketplace', color: 'from-indigo-500 to-blue-500', bg: 'bg-indigo-500/10' },
  ];

  const recentActivities = [
    { action: 'Image générée', prompt: 'Paysage futuriste avec néons', time: 'Il y a 2 minutes', status: 'success' },
    { action: 'Vidéo créée', prompt: 'Coucher de soleil cinématique', time: 'Il y a 1 heure', status: 'success' },
    { action: 'Template acheté', prompt: 'Logo Tech Startup', time: 'Il y a 3 heures', status: 'success' },
  ];

  const upcomingFeatures = [
    { name: 'API Access', progress: 100, status: 'available' },
    { name: 'Team Collaboration', progress: 75, status: 'coming_soon' },
    { name: 'Advanced Analytics', progress: 50, status: 'coming_soon' },
    { name: 'White Label', progress: 25, status: 'planned' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header avec bienvenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Bonjour, <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  {user?.email?.split('@')[0]}
                </span>
              </h1>
              <p className="text-gray-400 mt-2">Voici votre activité des 30 derniers jours</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 text-center">
                <p className="text-xs text-gray-400">Série actuelle</p>
                <p className="text-xl font-bold text-orange-500">{stats.streakDays} jours</p>
              </div>
              <button
                onClick={logout}
                className="p-2 text-gray-400 hover:text-white transition"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Cartes statistiques */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Image className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-gray-400 text-sm">Images générées</p>
            <p className="text-3xl font-bold text-white mt-1">{stats.imagesGenerated}</p>
            <p className="text-xs text-green-500 mt-2">+23% ce mois</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-gray-400 text-sm">Vidéos créées</p>
            <p className="text-3xl font-bold text-white mt-1">{stats.videosGenerated}</p>
            <p className="text-xs text-green-500 mt-2">+15% ce mois</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-gray-400 text-sm">Sites web créés</p>
            <p className="text-3xl font-bold text-white mt-1">{stats.websitesCreated}</p>
            <p className="text-xs text-green-500 mt-2">+8% ce mois</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <Award className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-gray-300 text-sm">Crédits disponibles</p>
            <p className="text-3xl font-bold text-white mt-1">{user?.credits || 0}</p>
            <Link href="/billing" className="text-xs text-orange-500 hover:underline mt-2 inline-block">
              Recharger →
            </Link>
          </motion.div>
        </motion.div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Actions rapides */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                Actions rapides
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action, i) => (
                  <Link key={i} href={action.href}>
                    <div className={`${action.bg} rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer`}>
                      <div className={`w-10 h-10 mx-auto bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                        {action.icon}
                      </div>
                      <p className="text-white text-sm font-medium">{action.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activité récente */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mt-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Activité récente
              </h2>
              <div className="space-y-4">
                {recentActivities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{activity.action}</p>
                      <p className="text-gray-500 text-xs">{activity.prompt}</p>
                    </div>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                ))}
              </div>
              <Link href="/history" className="flex items-center justify-center gap-1 mt-4 text-orange-500 text-sm hover:gap-2 transition">
                Voir tout l'historique
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Sidebar droite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Plan actuel */}
            <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm">Plan actuel</p>
                  <p className="text-2xl font-bold text-white capitalize">{user?.tier || 'Free'}</p>
                </div>
                <Crown className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Crédits utilisés</span>
                  <span className="text-white">{stats.creditsUsed}/100</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
              <Link href="/billing">
                <button className="w-full py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition">
                  Améliorer mon plan
                </button>
              </Link>
            </div>

            {/* Fonctionnalités à venir */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500" />
                Prochainement
              </h3>
              <div className="space-y-3">
                {upcomingFeatures.map((feature, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{feature.name}</span>
                      <span className="text-orange-500 text-xs">
                        {feature.status === 'available' ? 'Disponible' : feature.status === 'coming_soon' ? 'Bientôt' : 'Planifié'}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-1.5 rounded-full" style={{ width: `${feature.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-semibold">Besoin d'aide ?</h3>
              <p className="text-gray-400 text-sm mt-1">Notre équipe est disponible 24/7</p>
              <button className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg text-sm hover:bg-orange-500/10 transition">
                Contacter le support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
