'use client'; // AJOUTÉ

import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth'; // Corrected relative path

export const dynamic = 'force-dynamic'; // AJOUTÉ
export const fetchCache = 'force-no-store';

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
      body: JSON.stringify({ prompt, options: { duration: 5 } })
    });
    
    const { jobId } = await response.json();
    
    const poll = setInterval(async () => {
      const statusRes = await fetch(`/api/video/status/${jobId}`);
      const status = await statusRes.json();
      
      if (status.status === 'completed') {
        setVideoUrl(status.url);
        setIsGenerating(false);
        clearInterval(poll);
      } else if (status.status === 'failed') {
        setIsGenerating(false);
        clearInterval(poll);
        alert('Génération vidéo échouée');
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Service Génération Vidéo (Stable Video Diffusion)</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Prompt de la vidéo
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Un chat astronaute flottant dans l'espace, style Pixar, musique épique..."
          className="w-full h-32 p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 outline-none"
        />
        
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {isGenerating ? 'Génération vidéo en cours...' : 'Générer la Vidéo'}
        </button>
      </div>
      
      {videoUrl && (
        <div className="mt-8 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Votre Création Vidéo</h2>
          <video src={videoUrl} controls className="w-full rounded-lg" />
          <div className="mt-4 flex justify-end">
             <a 
               href={videoUrl} 
               download={`video-${Date.now()}.mp4`}
               className="text-purple-600 font-medium hover:underline"
             >
               Télécharger la vidéo HD
             </a>
          </div>
        </div>
      )}
    </div>
  );
}
