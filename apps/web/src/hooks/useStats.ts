// apps/web/src/hooks/useStats.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Stats {
  images: number;
  videos: number;
  websites: number;
  totalGenerations: number;
}

export function useStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/v1/users/me/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Erreur chargement stats:', error);
        // Données mock en attendant le backend
        setStats({
          images: 12,
          videos: 3,
          websites: 1,
          totalGenerations: 16,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
}
