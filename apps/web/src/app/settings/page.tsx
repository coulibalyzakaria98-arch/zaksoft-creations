// apps/web/src/app/settings/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bell, Shield, User, Globe, Moon, Mail } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function SettingsPage() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Paramètres</h1>
        <p className="text-gray-400 mb-8">Personnalisez votre expérience</p>

        <div className="space-y-6">
          {/* Profil */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-orange-500" />
              Profil
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white opacity-70"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Nom d'utilisateur</label>
                <input
                  type="text"
                  value={user?.email?.split('@')[0] || ''}
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white"
                />
              </div>
            </div>
          </div>

          {/* Préférences */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-500" />
              Notifications
            </h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Notifications push</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition ${
                  notifications ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-500" />
              Sécurité
            </h2>
            <button className="px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition">
              Changer le mot de passe
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
