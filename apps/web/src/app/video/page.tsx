'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { FormSkeleton } from '@/components/ui/skeletons/FormSkeleton';
// import { videoService } from '@/services/videoApi'; // Mocking

const videoService = { generate: async (p: any) => ({ jobId: '123' }) };

export default function VideoPage() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FormSkeleton />
        <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
          <p className="text-gray-400">Aperçu vidéo</p>
        </div>
      </div>
    );
  }

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      await videoService.generate({ prompt, duration: 5 });
      // Polling logic...
    } catch (error) {
      console.error(error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Formulaire */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">🎬 Génération vidéo</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez la vidéo que vous souhaitez créer..."
          className="w-full h-32 p-3 border rounded-lg mb-4"
        />
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 disabled:opacity-50"
        >
          {generating ? 'Génération...' : 'Générer la vidéo'}
        </button>
      </div>

      {/* Aperçu */}
      <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
        <p className="text-gray-400">Aperçu de la vidéo générée</p>
      </div>
    </div>
  );
}
