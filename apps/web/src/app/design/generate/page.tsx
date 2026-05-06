'use client'; // AJOUTÉ

import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

export const dynamic = 'force-dynamic';

export default function DesignGenerationPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { user } = useAuth();

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    const response = await fetch('/api/image/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, options: { width: 1024, height: 1024 } })
    });
    
    const { jobId } = await response.json();
    
    // Polling pour le résultat
    const poll = setInterval(async () => {
      const statusRes = await fetch(`/api/image/status/${jobId}`);
      const status = await statusRes.json();
      
      if (status.status === 'completed') {
        setImageUrl(status.url);
        setIsGenerating(false);
        clearInterval(poll);
      } else if (status.status === 'failed') {
        setIsGenerating(false);
        clearInterval(poll);
        alert('Génération échouée');
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Service Design Graphique (Stable Diffusion XL)</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Prompt de l'image
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Un paysage futuriste avec des gratte-ciels en cristal sous un ciel pourpre..."
          className="w-full h-32 p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 outline-none"
        />
        
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {isGenerating ? 'Génération artistique en cours...' : 'Générer le Design'}
        </button>
      </div>
      
      {imageUrl && (
        <div className="mt-8 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Votre Création</h2>
          <img src={imageUrl} alt="Generated design" className="w-full rounded-lg" />
          <div className="mt-4 flex justify-end">
             <a 
               href={imageUrl} 
               download={`design-${Date.now()}.png`}
               className="text-purple-600 font-medium hover:underline"
             >
               Télécharger l'image HD
             </a>
          </div>
        </div>
      )}
    </div>
  );
}
