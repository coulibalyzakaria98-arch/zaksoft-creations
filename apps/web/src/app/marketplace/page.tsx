'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Star, Download, Heart } from 'lucide-react';

const templates = [
  {
    id: 1,
    title: 'Logo Tech Startup',
    category: 'Logo',
    price: 5,
    rating: 4.8,
    downloads: 234,
    image: 'https://placehold.co/400x300/1a1a1a/orange?text=Logo+Tech',
  },
  {
    id: 2,
    title: 'Présentation Pitch Deck',
    category: 'Présentation',
    price: 10,
    rating: 4.9,
    downloads: 567,
    image: 'https://placehold.co/400x300/1a1a1a/orange?text=Pitch+Deck',
  },
  {
    id: 3,
    title: 'Pack Branding Complet',
    category: 'Branding',
    price: 25,
    rating: 5.0,
    downloads: 890,
    image: 'https://placehold.co/400x300/1a1a1a/orange?text=Branding+Pack',
  },
  {
    id: 4,
    title: 'Vidéo Intros YouTube',
    category: 'Vidéo',
    price: 15,
    rating: 4.7,
    downloads: 432,
    image: 'https://placehold.co/400x300/1a1a1a/orange?text=YouTube+Intros',
  },
  {
    id: 5,
    title: 'Template Site Portfolio',
    category: 'Site Web',
    price: 20,
    rating: 4.9,
    downloads: 678,
    image: 'https://placehold.co/400x300/1a1a1a/orange?text=Portfolio',
  },
  {
    id: 6,
    title: 'Pack Réseaux Sociaux',
    category: 'Social Media',
    price: 12,
    rating: 4.6,
    downloads: 345,
    image: 'https://placehold.co/400x300/1a1a1a/orange?text=Social+Pack',
  },
];

const categories = ['Tous', 'Logo', 'Présentation', 'Branding', 'Vidéo', 'Site Web', 'Social Media'];

export default function MarketplacePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tous');

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Tous' || template.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Marketplace{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              créatif
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Découvrez des milliers de templates créés par notre communauté
          </motion.p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un template..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full transition ${
                  category === cat
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-orange-500/30" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white">{template.title}</h3>
                    <button className="text-gray-400 hover:text-pink-500">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{template.category}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-white">{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-400">{template.downloads}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{template.price}€</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white text-sm font-semibold">
                      Acheter
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
