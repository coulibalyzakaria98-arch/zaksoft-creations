'use client';

import { useState } from 'react';
import { useCredits } from '@/hooks/useCredits';
import { generateWebsite } from '@/services/website-service';

type Template = 'portfolio' | 'ecommerce' | 'blog' | 'landing';
type Framework = 'tailwind' | 'bootstrap' | 'custom';

export default function CreateWebsitePage() {
  const [description, setDescription] = useState('');
  const [template, setTemplate] = useState<Template>('landing');
  const [framework, setFramework] = useState<Framework>('tailwind');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { credits, refreshCredits } = useCredits();

  const handleGenerate = async () => {
    if (!description.trim()) return;
    if (credits < 15) {
      alert('Crédits insuffisants (15 crédits requis)');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    try {
      const result = await generateWebsite({ 
        description, 
        template, 
        framework,
        onProgress: setProgress 
      });
      setGeneratedCode(result.code);
      setPreviewUrl(result.previewUrl);
      await refreshCredits();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la génération du site');
    } finally {
      setIsGenerating(false);
    }
  };

  const templates: { value: Template; label: string; icon: string; desc: string }[] = [
    { value: 'portfolio', label: 'Portfolio', icon: '🎨', desc: 'Pour artistes, photographes, créatifs' },
    { value: 'ecommerce', label: 'E-commerce', icon: '🛍️', desc: 'Boutique en ligne avec catalogue' },
    { value: 'blog', label: 'Blog', icon: '📝', desc: 'Articles, actualités, contenu éditorial' },
    { value: 'landing', label: 'Landing Page', icon: '🚀', desc: 'Page de vente ou inscription' },
  ];

  const frameworks: { value: Framework; label: string; icon: string }[] = [
    { value: 'tailwind', label: 'Tailwind CSS', icon: '🌊' },
    { value: 'bootstrap', label: 'Bootstrap', icon: '🎯' },
    { value: 'custom', label: 'CSS personnalisé', icon: '✏️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Création de site web IA
          </h1>
          <p className="text-gray-400 mt-2">
            Générez un site web complet à partir d'une simple description
          </p>
        </div>

        {/* Credit info */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-8 text-center border border-gray-700">
          <span className="text-gray-400">Crédits disponibles :</span>
          <span className="text-2xl font-bold text-emerald-400 mx-2">{credits}</span>
          <span className="text-gray-400 text-sm">(15 crédits par site)</span>
        </div>

        {/* Description input */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-2 font-medium">
            Description du site web
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Un site portfolio pour photographe professionnel avec galerie d'images, section à propos, formulaire de contact et blog intégré. Style minimaliste avec tons neutres et accents dorés."
            className="w-full h-40 bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>

        {/* Template selector */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-4 font-medium">Type de site</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {templates.map((t) => (
              <button
                key={t.value}
                onClick={() => setTemplate(t.value)}
                className={`p-4 rounded-xl text-left transition-all ${
                  template === t.value
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50 border border-gray-700'
                }`}
              >
                <div className="text-3xl mb-2">{t.icon}</div>
                <div className="font-bold">{t.label}</div>
                <div className="text-xs opacity-75 mt-1">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Framework selector */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
          <label className="block text-gray-300 mb-4 font-medium">Framework CSS</label>
          <div className="flex gap-3">
            {frameworks.map((f) => (
              <button
                key={f.value}
                onClick={() => setFramework(f.value)}
                className={`flex-1 py-4 rounded-xl font-medium transition-all ${
                  framework === f.value
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50 border border-gray-700'
                }`}
              >
                <div className="text-2xl mb-1">{f.icon}</div>
                <div>{f.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress */}
        {isGenerating && (
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-8">
            <div className="flex justify-between text-gray-300 mb-2">
              <span>Génération du site en cours...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-gray-500 text-sm text-center mt-3">
              Construction du HTML/CSS, cela peut prendre jusqu'à 30 secondes
            </p>
          </div>
        )}

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !description.trim() || credits < 15}
          className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white text-lg shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? 'Génération en cours...' : '🌐 Générer le site web'}
        </button>

        {/* Results */}
        {generatedCode && previewUrl && (
          <div className="mt-8 space-y-4">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-gray-300 mb-4 font-medium">Aperçu du site</h3>
              <iframe src={previewUrl} className="w-full h-96 rounded-xl border border-gray-700" />
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-gray-300 mb-4 font-medium">Code généré</h3>
              <pre className="bg-gray-900/50 p-4 rounded-xl overflow-x-auto text-sm text-gray-300">
                <code>{generatedCode.slice(0, 500)}...</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(generatedCode)}
                className="mt-4 px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors"
              >
                📋 Copier le code
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
