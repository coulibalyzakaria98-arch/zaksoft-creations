// apps/web/src/hooks/useCredits.ts
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface CreditsData {
  credits: number;
  usedCredits: number;
  limit: number;
  plan: 'free' | 'pro' | 'business' | 'enterprise';
}

export function useCredits() {
  const [data, setData] = useState<CreditsData>({
    credits: 10,
    usedCredits: 0,
    limit: 100,
    plan: 'free',
  });
  const [loading, setLoading] = useState(true);

  const refreshCredits = useCallback(async () => {
    try {
      const response = await axios.get('/api/v1/users/me/credits');
      setData(response.data);
    } catch (error) {
      console.error('Erreur chargement crédits:', error);
      // Données mock en attendant le backend
      setData({
        credits: 10,
        usedCredits: 45,
        limit: 100,
        plan: 'free',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshCredits();
  }, [refreshCredits]);

  return {
    credits: data.credits,
    usedCredits: data.usedCredits,
    limit: data.limit,
    plan: data.plan,
    loading,
    refreshCredits,
  };
}
