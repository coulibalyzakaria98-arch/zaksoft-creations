'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function VideoGenerationPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { user } = useAuth();

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    const response = await fetch('/api/video/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, userTier: user?.tier })
    });
    
    const { jobId } = await response.json();
    
    // Polling pour le résultat
    const poll = setInterval(async () => {
      const statusRes = await fetch(`/api/video/status/${jobId}`);
      const status = await statusRes.json();
      
      if (status.status === 'completed') {
        setVideoUrl(status.url);
        setIsGenerating(false);
        clearInterval(poll);
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Génération Vidéo IA</h1>
      
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Décrivez la vidéo que vous souhaitez créer..."
        className="w-full h-32 p-4 border rounded-lg mb-4"
      />
      
      <button
        onClick={handleGenerate}
        disabled={isGenerating || !prompt}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
      >
        {isGenerating ? 'Génération en cours...' : 'Générer la vidéo'}
      </button>
      
      {videoUrl && (
        <div className="mt-8">
          <video src={videoUrl} controls className="w-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}
