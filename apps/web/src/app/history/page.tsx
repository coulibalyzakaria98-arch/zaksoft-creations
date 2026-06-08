// apps/web/src/app/history/page.tsx
'use client';

import { motion } from 'framer-motion';
import { History, Image, Video, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function HistoryPage() {
  const { user } = useAuth();

  // Données mockées (à remplacer par API réelle)
  const activities = [
    { id: 1, type: 'image', action: 'Génération d\'image', prompt: 'Paysage futuriste avec néons', date: '2024-06-08', status: 'success' },
    { id: 2, type: 'video', action: 'Génération vidéo', prompt: 'Coucher de soleil cinématique', date: '2024-06-07', status: 'success' },
    { id: 3, type: 'website', action: 'Création de site', prompt: 'Portfolio pour photographe', date: '2024-06-06', status: 'success' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="w-5 h-5 text-orange-500" />;
      case 'video': return <Video className="w-5 h-5 text-pink-500" />;
      case 'website': return <Globe className="w-5 h-5 text-purple-500" />;
      default: return <History className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <History className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-white">Historique</h1>
          </div>
          <p className="text-gray-400 mb-8">Retrouvez toutes vos créations et activités</p>

          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    {getIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-gray-500 text-sm">{activity.prompt}</p>
                    <p className="text-gray-600 text-xs mt-1">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activities.length === 0 && (
            <div className="bg-white/5 rounded-2xl p-12 text-center">
              <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">Aucune activité pour le moment</p>
              <Link href="/design">
                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2 mx-auto">
                  Créer mon premier contenu
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
