'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { CreditCard, Zap, TrendingUp, Check, Loader2, Settings, LayoutDashboard } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('fr');

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Paramètres</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6">
        {/* Profil */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Profil</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400">Email</label>
              <p className="text-gray-900 dark:text-white">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400">Plan</label>
              <p className="text-gray-900 dark:text-white capitalize">{user?.tier || 'Gratuit'}</p>
            </div>
          </div>
        </div>

        {/* Préférences */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Préférences</h2>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Notifications push</span>
              <input 
                type="checkbox" 
                checked={notifications} 
                onChange={(e) => setNotifications(e.target.checked)}
                className="w-4 h-4"
              />
            </label>
            <div>
              <label className="block text-sm mb-1">Langue</label>
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded-lg px-3 py-2 dark:bg-gray-700"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
