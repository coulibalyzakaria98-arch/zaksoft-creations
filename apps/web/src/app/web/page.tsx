'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { FormSkeleton } from '@/components/ui/skeletons/FormSkeleton';
// import { webService } from '@/services/webApi'; // Mocking

const webService = { generate: async (p: any) => ({ jobId: '123' }) };

export default function WebPage() {
  const [description, setDescription] = useState('');
  const [generating, setGenerating] = useState(false);
  const { isLoading } = useAuth();

  if (isLoading) {
    return <FormSkeleton />;
  }

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      await webService.generate({ description });
      // Polling logic...
    } catch (error) {
      console.error(error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">🌐 Génération de site web</h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Décrivez le site web que vous souhaitez créer..."
          className="w-full h-32 p-3 border rounded-lg mb-4"
        />
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {generating ? 'Génération...' : 'Générer le site'}
        </button>
      </div>
    </div>
  );
}
