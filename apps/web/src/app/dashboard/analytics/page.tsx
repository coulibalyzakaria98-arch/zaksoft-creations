'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface Stats {
  imagesGenerated: number;
  videosGenerated: number;
  websitesGenerated: number;
  creditsUsed: number;
  creditsRemaining: number;
  monthlyGrowth: number;
}

interface Activity {
  id: string;
  type: 'image' | 'video' | 'website';
  date: string;
  name: string;
  credits: number;
}

export default function AnalyticsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('month');
  const { user } = useAuth();

  useEffect(() => {
    // Mock data - à remplacer par API
    setStats({
      imagesGenerated: 47,
      videosGenerated: 12,
      websitesGenerated: 3,
      creditsUsed: 156,
      creditsRemaining: user?.credits || 44,
      monthlyGrowth: 23,
    });

    setActivities([
      { id: '1', type: 'image', date: '2026-06-08', name: 'Portrait cyberpunk', credits: 1 },
      { id: '2', type: 'video', date: '2026-06-07', name: 'Coucher de soleil', credits: 5 },
      { id: '3', type: 'website', date: '2026-06-05', name: 'Portfolio photo', credits: 15 },
      { id: '4', type: 'image', date: '2026-06-04', name: 'Logo startup', credits: 1 },
      { id: '5', type: 'video', date: '2026-06-03', name: 'Animation produit', credits: 5 },
    ]);
  }, [user]);

  const statCards = [
    { label: 'Images générées', value: stats?.imagesGenerated || 0, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { label: 'Vidéos générées', value: stats?.videosGenerated || 0, icon: '🎬', color: 'from-blue-500 to-cyan-500' },
    { label: 'Sites web', value: stats?.websitesGenerated || 0, icon: '🌐', color: 'from-emerald-500 to-teal-500' },
    { label: 'Crédits utilisés', value: stats?.creditsUsed || 0, icon: '💳', color: 'from-orange-500 to-red-500' },
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'image': return '🎨';
      case 'video': return '🎬';
      case 'website': return '🌐';
      default: return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Analytics
          </h1>
          <p className="text-gray-400 mt-2">
            Suivez votre consommation et vos créations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card) => (
            <div key={card.label} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{card.icon}</span>
                <span className={`text-2xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                  {card.value}
                </span>
              </div>
              <h3 className="text-gray-400">{card.label}</h3>
            </div>
          ))}
        </div>

        {/* Credits remaining */}
        <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-300">Crédits restants</span>
            <span className="text-3xl font-bold text-white">{stats?.creditsRemaining}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
              style={{ width: `${(stats?.creditsRemaining || 0) / ((stats?.creditsUsed || 0) + (stats?.creditsRemaining || 0)) * 100}%` }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-3">
            📈 +{stats?.monthlyGrowth}% de croissance ce mois-ci
          </p>
        </div>

        {/* Period selector */}
        <div className="flex gap-2 mb-6">
          {(['week', 'month', 'year'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                period === p
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              {p === 'week' ? 'Semaine' : p === 'month' ? 'Mois' : 'Année'}
            </button>
          ))}
        </div>

        {/* Activity list */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Activité récente</h3>
          
          <div className="space-y-3">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getTypeIcon(activity.type)}</span>
                  <div>
                    <p className="text-white font-medium">{activity.name}</p>
                    <p className="text-gray-500 text-sm">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-bold">-{activity.credits} crédits</p>
                  <p className="text-gray-500 text-sm capitalize">{activity.type}</p>
                </div>
              </div>
            ))}
          </div>

          {activities.length === 0 && (
            <p className="text-center text-gray-500 py-8">Aucune activité récente</p>
          )}
        </div>

        {/* Buy credits button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all">
            💰 Acheter plus de crédits
          </button>
        </div>
      </div>
    </div>
  );
}
