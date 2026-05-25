'use client';

import { motion } from 'framer-motion';
import { Sparkles, Video, Image as ImageIcon, BarChart3 } from 'lucide-react';

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl" />
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl">
          {/* Browser bar */}
          <div className="border-b border-white/10 p-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-gray-400 font-mono">
                app.zaksoft.ai/dashboard
              </div>
            </div>
            <div className="w-16" />
          </div>
          
          {/* Dashboard content */}
          <div className="p-6">
            {/* Welcome header */}
            <div className="mb-6 text-left">
              <h2 className="text-xl font-semibold text-white">
                Bonjour, <span className="text-orange-500">Créateur</span>
              </h2>
              <p className="text-gray-400 text-sm">Voici votre activité des 30 derniers jours</p>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: <ImageIcon className="w-4 h-4" />, label: 'Images', value: '847', change: '+12%', color: 'from-orange-500 to-pink-500' },
                { icon: <Video className="w-4 h-4" />, label: 'Vidéos', value: '234', change: '+23%', color: 'from-pink-500 to-purple-500' },
                { icon: <BarChart3 className="w-4 h-4" />, label: 'Crédits', value: '1,250', change: '-5%', color: 'from-purple-500 to-indigo-500' },
                { icon: <Sparkles className="w-4 h-4" />, label: 'Projets', value: '12', change: '+8%', color: 'from-indigo-500 to-blue-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                      {stat.icon}
                    </div>
                    <span className={`text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white text-left">{stat.value}</p>
                  <p className="text-gray-400 text-sm text-left">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Recent activity */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-white font-semibold">Activité récente</h4>
                <button className="text-orange-500 text-sm hover:text-orange-400">Voir tout →</button>
              </div>
              <div className="space-y-3">
                {[
                  { action: 'Image générée', prompt: 'Un paysage futuriste', time: '2 min' },
                  { action: 'Vidéo créée', prompt: 'Coucher de soleil cinématique', time: '15 min' },
                  { action: 'Site web publié', prompt: 'Portfolio créatif', time: '1 heure' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition text-left">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-white text-sm">{item.action}</p>
                      <p className="text-gray-500 text-xs">{item.prompt}</p>
                    </div>
                    <p className="text-gray-500 text-xs">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated glow effects */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse delay-1000" />
    </motion.div>
  );
}
