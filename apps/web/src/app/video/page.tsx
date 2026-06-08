// apps/web/src/app/video/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Sparkles } from 'lucide-react';

export default function VideoPage() {
  const [prompt, setPrompt] = useState('');
  const [duration, setDuration] = useState(5);
  const [generating, setGenerating] = useState(false);

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Création vidéo IA</h1>
        <p className="text-gray-400 mb-8">Générez des vidéos professionnelles à partir de texte</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Description de la vidéo</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Une scène cinématique d'un coucher de soleil sur l'océan, avec des vagues qui se brisent doucement"
              className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-medium mb-2">Durée : {duration} secondes</label>
            <input
              type="range"
              min={2}
              max={30}
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {['16:9', '9:16', '1:1'].map((ratio) => (
              <button
                key={ratio}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm hover:bg-white/10 transition"
              >
                {ratio}
              </button>
            ))}
          </div>

          <button
            onClick={() => setGenerating(true)}
            disabled={generating || !prompt}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {generating ? (
              <>Génération en cours...</>
            ) : (
              <>
                <Video className="w-5 h-5" />
                Générer la vidéo
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
