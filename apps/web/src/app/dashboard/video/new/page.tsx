'use client';

import { useState } from 'react';
import { useCredits } from '@/hooks/useCredits';
import { generateVideo } from '@/services/video-service';

export default function CreateVideoPage() {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState(5);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { credits, refreshCredits } = useCredits();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    if (credits < 5) {
      alert('Crédits insuffisants (5 crédits requis)');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    try {
      const result = await generateVideo({ 
        prompt, 
        duration, 
        aspectRatio,
        onProgress: setProgress 
      });
      setVideoUrl(result.url);
      await refreshCredits();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la génération vidéo');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Création vidéo IA
          </h1>
          <p className="text-gray-400 mt-2">
            Générez des vidéos professionnelles à partir de texte
          </p>
        </div>

        {/* Credit info */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-8 text-center border border-gray-700">
          <span className="text-gray-400">Crédits disponibles :</span>
          <span className="text-2xl font-bold text-blue-400 mx-2">{credits}</span>
          <span className="text-gray-400 text-sm">(5 crédits par vidéo)</span>
        </div>

        {/* Prompt input */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-2 font-medium">
            Description de la vidéo
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Une scène cinématique d'un coucher de soleil sur l'océan, avec des vagues qui se brisent doucement"
            className="w-full h-32 bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Duration slider */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-4 font-medium">
            Durée : {duration} secondes
          </label>
          <input
            type="range"
            min={5}
            max={30}
            step={5}
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-gray-500 text-sm mt-2">
            <span>5s</span><span>10s</span><span>15s</span><span>20s</span><span>25s</span><span>30s</span>
          </div>
        </div>

        {/* Aspect ratio */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-4 font-medium">Format d'écran</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { ratio: '16:9', label: 'Paysage', icon: '🖥️' },
              { ratio: '9:16', label: 'Portrait', icon: '📱' },
              { ratio: '1:1', label: 'Carré', icon: '⬛' },
            ].map(({ ratio, label, icon }) => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio)}
                className={`py-4 rounded-xl font-medium transition-all ${
                  aspectRatio === ratio
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50 border border-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{icon}</div>
                <div>{label}</div>
                <div className="text-xs opacity-75">{ratio}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar (during generation) */}
        {isGenerating && (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
            <div className="flex justify-between text-gray-300 mb-2">
              <span>Génération en cours...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-gray-500 text-sm text-center mt-3">
              Cela peut prendre jusqu'à 2 minutes
            </p>
          </div>
        )}

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim() || credits < 5}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-white text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? 'Génération en cours...' : '🎬 Générer la vidéo'}
        </button>

        {/* Result video */}
        {videoUrl && (
          <div className="mt-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-gray-300 mb-4 font-medium">Vidéo générée</h3>
            <video src={videoUrl} controls className="w-full rounded-xl" />
          </div>
        )}
      </div>
    </div>
  );
}
