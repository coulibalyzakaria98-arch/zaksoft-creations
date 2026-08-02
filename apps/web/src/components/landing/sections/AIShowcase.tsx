'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { Palette, Video, BarChart3, ChevronRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const tabs = [
  {
    id: 'design',
    label: 'Design IA',
    icon: Palette,
    title: 'Créez des visuels de classe mondiale',
    description: 'De la conception de logos à la création d\'affiches publicitaires, notre IA comprend les nuances esthétiques pour des résultats parfaits.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    features: ['Logos vectoriels', 'Affiches 4K', 'Retouche intelligente']
  },
  {
    id: 'video',
    label: 'Vidéo IA',
    icon: Video,
    title: 'Générez des vidéos cinématiques',
    description: 'Transformez vos scripts en vidéos immersives avec des transitions fluides et une qualité d\'image exceptionnelle.',
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
    features: ['Motion design', 'Synchronisation audio', 'Styles multiples']
  },
  {
    id: 'analytics',
    label: 'Analytics IA',
    icon: BarChart3,
    title: 'Analysez vos performances',
    description: 'Utilisez l\'IA pour prédire le succès de vos contenus et optimiser vos campagnes marketing en temps réel.',
    image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=1000',
    features: ['Prédiction d\'engagement', 'Analyse de sentiment', 'Rapports automatisés']
  }
];

export function AIShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="showcase" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Showcase"
          title="Une puissance sans limite"
          subtitle="Découvrez ce que vous pouvez accomplir avec les différents modules de ZAKSOFT AI."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab.id === tab.id
                  ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {activeTab.title}
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {activeTab.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {activeTab.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="bg-primary hover:bg-primary-dark group">
                  En savoir plus
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative">
                <GlassCard className="p-2 aspect-video overflow-hidden">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={activeTab.image}
                      alt={activeTab.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </GlassCard>
                
                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 md:-left-12 max-w-[200px]"
                >
                  <GlassCard className="p-4 bg-primary/20 border-primary/30 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary rounded-lg">
                        <activeTab.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-bold text-white">Module Actif</span>
                    </div>
                    <div className="text-[10px] text-gray-300 font-mono">
                      PROCESS_READY: 100%
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
