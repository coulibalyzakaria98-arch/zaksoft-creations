// apps/web/src/app/marketplace/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Search, ShoppingBag, Star } from 'lucide-react';

const templates = [
  { name: 'Logo Tech Startup', price: 5, rating: 4.8, downloads: 234, category: 'Logo' },
  { name: 'Présentation Pitch Deck', price: 10, rating: 4.9, downloads: 567, category: 'Présentation' },
  { name: 'Pack Branding Complet', price: 25, rating: 5.0, downloads: 890, category: 'Branding' },
  { name: 'Vidéo Intros YouTube', price: 15, rating: 4.7, downloads: 432, category: 'Vidéo' },
  { name: 'Template Site Portfolio', price: 20, rating: 4.9, downloads: 678, category: 'Site Web' },
  { name: 'Pack Réseaux Sociaux', price: 12, rating: 4.6, downloads: 345, category: 'Social' },
];

export default function MarketplacePage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Marketplace</h1>
        <p className="text-gray-400 mb-8">Découvrez des templates créés par la communauté</p>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un template..."
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
            >
              <div className="h-40 bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-orange-500/50" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{template.name}</h3>
                <p className="text-gray-400 text-sm">{template.category}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white text-sm">{template.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{template.downloads} téléchargements</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-white">{template.price}€</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white text-sm font-semibold">
                    Acheter
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
