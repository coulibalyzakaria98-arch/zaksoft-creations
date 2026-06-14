'use client';

import { usePublicStats } from '@/hooks/usePublicStats';

export function Stats() {
  const { stats, loading } = usePublicStats();
  
  return (
    <section className="py-12 bg-black/50 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white">
              {loading ? '...' : `${stats?.users || 0}+`}
            </div>
            <div className="text-gray-400 text-sm">Utilisateurs</div>
            {stats?.growth.users && (
              <span className="text-green-500 text-xs">+{stats.growth.users}%</span>
            )}
          </div>
          
          <div>
            <div className="text-4xl font-bold text-white">
              {loading ? '...' : `${stats?.generations || 0}+`}
            </div>
            <div className="text-gray-400 text-sm">Générations</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-white">
              {loading ? '...' : `${stats?.images || 0}`}
            </div>
            <div className="text-gray-400 text-sm">Images</div>
          </div>
          
          <div>
            <div className="text-4xl font-bold text-white">
              {loading ? '...' : `${stats?.videos || 0}`}
            </div>
            <div className="text-gray-400 text-sm">Vidéos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
