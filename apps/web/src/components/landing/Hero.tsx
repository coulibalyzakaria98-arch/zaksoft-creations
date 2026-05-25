'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="text-sm text-gray-300">Powered by AI — Made in Côte d&apos;Ivoire 🇨🇮</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Build, Create &{' '}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Grow with AI
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          La première plateforme africaine de création et d&apos;automatisation par IA.
          Générez des images, vidéos, sites web et boostez votre business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/auth/register">
            <button className="group px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2 shadow-orange-500/25">
              Commencer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </Link>
          <button className="px-8 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition flex items-center gap-2">
            <Play className="w-5 h-5" />
            Voir la démo
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl" />
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
            <Image
              src="https://placehold.co/1200x600/1a1a1a/ffffff?text=ZAKSOFT+AI+Dashboard"
              alt="ZAKSOFT AI Dashboard Preview"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-2xl opacity-50" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
