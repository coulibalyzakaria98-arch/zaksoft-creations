import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export interface Asset {
  id: string;
  type: 'image' | 'video' | 'website';
  prompt?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  previewUrl?: string;
  resolution?: string;
  duration?: number;
  template?: string;
  createdAt: string;
}

export function useHistory(initialType: string = 'all') {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [cursor, setCursor] = useState<string | null>(null);
  const [type, setType] = useState(initialType);

  const loadMore = useCallback(async () => {
    if (!hasMore && cursor === null) return;
    
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (type !== 'all') params.set('type', type);
      if (cursor) params.set('cursor', cursor);
      params.set('limit', '20');
      
      const response = await axios.get(`/api/v1/users/me/assets?${params.toString()}`);
      
      setAssets(prev => [...prev, ...response.data.assets]);
      setHasMore(response.data.hasMore);
      setCursor(response.data.nextCursor);
    } catch (error) {
      console.error('Erreur chargement historique:', error);
    } finally {
      setLoading(false);
    }
  }, [type, cursor, hasMore]);

  const refresh = useCallback(async () => {
    setAssets([]);
    setCursor(null);
    setHasMore(true);
    setLoading(true);
    
    try {
      const params = new URLSearchParams();
      if (type !== 'all') params.set('type', type);
      params.set('limit', '20');
      
      const response = await axios.get(`/api/v1/users/me/assets?${params.toString()}`);
      setAssets(response.data.assets);
      setHasMore(response.data.hasMore);
      setCursor(response.data.nextCursor);
    } catch (error) {
      console.error('Erreur rafraîchissement:', error);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    refresh();
  }, [type, refresh]);

  return { assets, loading, hasMore, loadMore, refresh, type, setType };
}
