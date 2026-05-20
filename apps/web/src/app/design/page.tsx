'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { FormSkeleton } from '@/components/ui/skeletons/FormSkeleton';
import { CardSkeleton } from '@/components/ui/skeletons/CardSkeleton';
import { generateImage, getImageStatus } from '@/services/designApi';

export default function DesignPage() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FormSkeleton />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const { jobId } = await generateImage(prompt);
      // Polling logic
      const interval = setInterval(async () => {
        const status = await getImageStatus(jobId);
        if (status.status === 'completed') {
          setImages(prev => [status.result.url, ...prev]);
          setGenerating(false);
          clearInterval(interval);
        } else if (status.status === 'failed') {
          setGenerating(false);
          clearInterval(interval);
        }
      }, 2000);
    } catch (error) {
      console.error('Generation failed:', error);
      setGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Formulaire */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">🎨 Génération d&apos;image</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez l&apos;image que vous souhaitez créer..."
          className="w-full h-32 p-3 border rounded-lg mb-4"
        />
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {generating ? 'Génération...' : <>Générer l{String.fromCharCode(39)}image</>}
        </button>
      </div>

      {/* Galerie */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Vos créations</h2>
        {images.length === 0 ? (
          <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-500">
            Aucune image générée pour le moment
          </div>
        ) : (
          images.map((url, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Image 
                src={url} 
                alt={`Génération ${i + 1}`} 
                width={800} 
                height={400} 
                className="w-full h-64 object-cover" 
                unoptimized
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
