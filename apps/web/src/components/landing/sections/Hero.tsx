'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedText } from '../ui/AnimatedText';

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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring', damping: 20 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="aspect-[16/10] rounded-xl bg-secondary overflow-hidden relative">
              {/* This would be an image or video in production */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-secondary flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 w-full h-full opacity-20">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded-lg animate-pulse" />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                            <Sparkles className="w-10 h-10 text-primary" />
                        </div>
                        <span className="mt-4 text-primary font-mono text-sm tracking-widest uppercase">Dashboard Preview</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-2/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-3/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
