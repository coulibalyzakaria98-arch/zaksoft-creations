// apps/web/src/hooks/useRecentActivity.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Activity {
  type: 'image' | 'video' | 'website' | 'purchase';
  title: string;
  description: string;
  time: string;
  timestamp: Date;
}

export function useRecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/v1/users/me/activities?limit=3');
        setActivities(response.data);
      } catch (error) {
        console.error('Erreur chargement activités:', error);
        // Données mock en attendant le backend
        setActivities([
          {
            type: 'image',
            title: 'Image générée',
            description: 'Paysage futuriste avec néons',
            time: 'Il y a 2 minutes',
            timestamp: new Date(),
          },
          {
            type: 'video',
            title: 'Vidéo créée',
            description: 'Coucher de soleil cinématique',
            time: 'Il y a 1 heure',
            timestamp: new Date(),
          },
          {
            type: 'purchase',
            title: 'Template acheté',
            description: 'Logo Tech Startup',
            time: 'Il y a 3 heures',
            timestamp: new Date(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { activities, loading };
}
