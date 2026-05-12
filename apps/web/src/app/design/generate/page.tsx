'use client'; // AJOUTÉ

import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth'; // Corrected relative path

export const dynamic = 'force-dynamic'; // AJOUTÉ
export const fetchCache = 'force-no-store';

export default function DesignGenerationPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { user } = useAuth();

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('/_/design/image/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, options: { width: 1024, height: 1024 } })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Design API POST failed ${response.status}: ${errorText}`);
      }

      const { jobId } = await response.json();
      if (!jobId) {
        throw new Error('Job ID manquant dans la réponse du service de génération');
      }

      const poll = setInterval(async () => {
        try {
          const statusRes = await fetch(`/_/design/image/status/${jobId}`);
          if (!statusRes.ok) {
            const errorText = await statusRes.text();
            throw new Error(`Design status failed ${statusRes.status}: ${errorText}`);
          }

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
        } catch (pollError) {
          console.error('Erreur polling design status:', pollError);
          setIsGenerating(false);
          clearInterval(poll);
          alert(`Erreur de statut de génération : ${pollError instanceof Error ? pollError.message : 'Erreur inconnue'}`);
        }
      }, 2000);
    } catch (error) {
      console.error('Design generation error:', error);
      setIsGenerating(false);
      alert(`Erreur génération : ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
    }
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
