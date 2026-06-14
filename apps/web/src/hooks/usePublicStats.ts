import { useEffect, useState } from 'react';
import axios from 'axios';

interface PublicStats {
  users: number;
  generations: number;
  images: number;
  videos: number;
  projects: number;
  growth: {
    users: number;
    images: number;
    videos: number;
  };
}

export function usePublicStats() {
  const [stats, setStats] = useState<PublicStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/public/stats');
        setStats(response.data);
      } catch (err) {
        setError('Impossible de charger les statistiques');
        console.error('Stats error:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return { stats, loading, error };
}
