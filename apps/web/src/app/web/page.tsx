// apps/web/src/app/web/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Sparkles, Layout } from 'lucide-react';

export default function WebPage() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Création de site web IA</h1>
        <p className="text-gray-400 mb-8">Générez des sites web complets et responsives en quelques secondes</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Décrivez votre site web</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Un site de portfolio pour un photographe de mariage, avec une galerie, une page à propos et un formulaire de contact"
              className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <select className="px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Style Moderne</option>
              <option>Style Minimaliste</option>
              <option>Style Professionnel</option>
              <option>Style Créatif</option>
            </select>
            <select className="px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Thème Sombre</option>
              <option>Thème Clair</option>
              <option>Thème Coloré</option>
            </select>
          </div>

          <button
            onClick={() => setGenerating(true)}
            disabled={generating || !prompt}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {generating ? (
              <>Génération en cours...</>
            ) : (
              <>
                <Globe className="w-5 h-5" />
                Générer le site web
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
