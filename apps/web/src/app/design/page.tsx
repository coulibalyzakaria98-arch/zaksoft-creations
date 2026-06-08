// apps/web/src/app/design/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, Download } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function DesignPage() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const { user } = useAuth();

  const handleGenerate = async () => {
    if (!prompt) return;
    setGenerating(true);
    // Logique de génération...
    setTimeout(() => setGenerating(false), 2000);
  };

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Création d'image IA</h1>
        <p className="text-gray-400 mb-8">Générez des images uniques avec notre intelligence artificielle</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Description de l'image</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Un paysage futuriste avec des néons bleus et violets, style cyberpunk, 4K"
              className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {['512x512', '1024x1024', '1024x768', '768x1024'].map((size) => (
              <button
                key={size}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition"
              >
                {size}
              </button>
            ))}
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating || !prompt}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {generating ? (
              <>Génération en cours...</>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Générer l'image
              </>
            )}
          </button>
        </div>

        {/* Crédits restants */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Il vous reste <span className="text-orange-500 font-semibold">{user?.credits || 0}</span> crédits
          </p>
        </div>
      </motion.div>
    </div>
  );
}
