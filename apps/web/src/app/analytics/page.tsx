// apps/web/src/app/analytics/page.tsx
'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-400 mb-8">Suivez vos performances en temps réel</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
              <span className="text-green-500 text-sm">+23%</span>
            </div>
            <p className="text-gray-400 text-sm">Images générées</p>
            <p className="text-3xl font-bold text-white">847</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-500" />
              </div>
              <span className="text-green-500 text-sm">+15%</span>
            </div>
            <p className="text-gray-400 text-sm">Vidéos créées</p>
            <p className="text-3xl font-bold text-white">234</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-500" />
              </div>
              <span className="text-green-500 text-sm">+8%</span>
            </div>
            <p className="text-gray-400 text-sm">Sites web créés</p>
            <p className="text-3xl font-bold text-white">56</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-indigo-500" />
              </div>
              <span className="text-green-500 text-sm">+12%</span>
            </div>
            <p className="text-gray-400 text-sm">Templates utilisés</p>
            <p className="text-3xl font-bold text-white">1,234</p>
          </div>
        </div>

        {/* Graphique d'activité (placeholder) */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Activité mensuelle</h3>
          <div className="h-64 flex items-center justify-center border border-white/10 rounded-xl">
            <p className="text-gray-500">Graphique d'activité (intégration à venir)</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
