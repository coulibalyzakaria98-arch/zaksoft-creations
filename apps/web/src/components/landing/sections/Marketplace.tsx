'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    title: "Pack Affiches Minimalistes",
    category: "Design",
    price: "15,000 FCFA",
    rating: 4.9,
    downloads: "1.2k",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=500",
    trending: true
  },
  {
    title: "Template Vidéo Promo",
    category: "Vidéo",
    price: "25,000 FCFA",
    rating: 4.8,
    downloads: "850",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=500",
    trending: false
  },
  {
    title: "Prompts Masterclass IA",
    category: "Prompts",
    price: "5,000 FCFA",
    rating: 5.0,
    downloads: "3.4k",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=500",
    trending: true
  },
  {
    title: "Modèle 3D Futuriste",
    category: "3D",
    price: "12,000 FCFA",
    rating: 4.7,
    downloads: "420",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=500",
    trending: false
  }
];

export function Marketplace() {
  return (
    <section id="marketplace" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              Marketplace
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Explorez la créativité locale
            </h2>
            <p className="text-gray-400 max-w-xl">
              Accédez à des milliers de ressources créées par la communauté ZAKSOFT AI pour booster vos propres projets.
            </p>
          </div>
          
          <Button variant="outline" className="border-white/10 hover:bg-white/5 group">
            Voir tout le catalogue
            <ShoppingBag className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-0 group h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-[10px] uppercase tracking-wider">
                      {product.category}
                    </Badge>
                    {product.trending && (
                      <Badge className="bg-primary text-white border-none text-[10px] uppercase tracking-wider">
                        Tendance
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-gray-300 font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-lg font-bold text-white">{product.price}</span>
                    <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-all">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
