// apps/web/src/hooks/useCredits.ts
'use client';

import { useAuth } from './useAuth';

export function useCredits() {
  const { credits, refreshCredits } = useAuth();
  
  return {
    credits,
    refreshCredits
  };
}
