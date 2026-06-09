'use client';

import { useState } from 'react';
import { useCredits } from '@/hooks/useCredits';
import { generateImage } from '@/services/image-service';

export default function CreateImagePage() {
  const [prompt, setPrompt] = useState('');
  const [resolution, setResolution] = useState('1024x1024');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { credits, refreshCredits } = useCredits();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    if (credits < 1) {
      alert('Crédits insuffisants');
      return;
    }

    setIsGenerating(true);
    try {
      const imageUrl = await generateImage({ prompt, resolution });
      setGeneratedImage(imageUrl);
      await refreshCredits();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la génération');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Création d'image IA
          </h1>
          <p className="text-gray-400 mt-2">
            Générez des images uniques avec notre intelligence artificielle
          </p>
        </div>

        {/* Credit indicator */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-8 text-center border border-gray-700">
          <span className="text-gray-400">Il vous reste</span>
          <span className="text-2xl font-bold text-purple-400 mx-2">{credits}</span>
          <span className="text-gray-400">crédits</span>
        </div>

        {/* Input zone */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-2 font-medium">
            Description de l'image
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Un paysage futuriste avec des néons bleus et violets, style cyberpunk, 4K"
            className="w-full h-32 bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>

        {/* Resolution selector */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-4 font-medium">Résolution</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['512x512', '1024x1024', '1024x768', '768x1024'].map((res) => (
              <button
                key={res}
                onClick={() => setResolution(res)}
                className={`py-3 rounded-xl font-medium transition-all ${
                  resolution === res
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50 border border-gray-700'
                }`}
              >
                {res}
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim() || credits < 1}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Génération en cours...
            </span>
          ) : (
            'Générer l\'image'
          )}
        </button>

        {/* Result display */}
        {generatedImage && (
          <div className="mt-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-gray-300 mb-4 font-medium">Image générée</h3>
            <img src={generatedImage} alt="Generated" className="w-full rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
}
