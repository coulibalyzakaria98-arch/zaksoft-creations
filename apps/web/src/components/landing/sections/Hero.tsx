'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedText } from '../ui/AnimatedText';
import { DashboardPreview } from '../ui/DashboardPreview';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-widest">
              Made in Côte d&apos;Ivoire
            </span>
            <span className="w-px h-4 bg-white/10 mx-1" />
            <span className="text-xs text-gray-400">Nouvelle version 2.0 disponible</span>
          </motion.div>

          {/* Main Title */}
          <AnimatedText
            text="L&apos;Intelligence Artificielle au Service de la Création Africaine"
            className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto justify-center"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ZAKSOFT AI est la plateforme tout-en-un pour générer des images, vidéos, et automatiser vos processus créatifs. Donnez vie à vos idées en quelques secondes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/auth/register">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary-dark shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:scale-105">
                Essayer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <Play className="mr-2 w-5 h-5 fill-current" />
              Voir la démo
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">IA Générative</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Automatisation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Multi-Cloud</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 max-w-5xl mx-auto">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
