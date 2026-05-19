'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { CardSkeleton } from '@/components/ui/skeletons/CardSkeleton';
import { marketplaceService } from '@/services/marketplaceApi';

export default function MarketplacePage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoading: authLoading } = useAuth();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await marketplaceService.getTemplates();
        setTemplates(data);
      } catch (error) {
        console.error('Failed to fetch templates:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  // Afficher le skeleton pendant le chargement
  if (authLoading || loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template: any) => (
          <div key={template.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{template.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{template.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 font-bold">{template.price} crédits</span>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm">
                  Utiliser
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
