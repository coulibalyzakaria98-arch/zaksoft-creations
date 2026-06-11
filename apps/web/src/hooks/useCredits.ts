// apps/web/src/hooks/useCredits.ts
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';

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

  const { refreshUser } = useAuth();
  
  const refreshCredits = useCallback(async () => {
    await refreshUser();
    // Re-fetch data if needed from API, but user state is now updated via refreshUser
    setLoading(false);
  }, [refreshUser]);

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
