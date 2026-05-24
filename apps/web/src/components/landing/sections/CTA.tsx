'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20 overflow-hidden shadow-2xl">
          {/* Decorative background sparkles */}
          <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
            <Sparkles className="w-40 h-40 text-primary animate-pulse" />
          </div>
          
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Prêt à révolutionner votre <span className="text-primary">processus créatif</span> ?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-12 leading-relaxed"
            >
              Rejoignez plus de 10,000 créateurs et entreprises qui font confiance à ZAKSOFT AI pour donner vie à leurs idées les plus folles.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/auth/register">
                <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary-dark shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all hover:scale-105">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/developers">
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-white/20 bg-white/5 hover:bg-white/10">
                  Découvrir l&apos;API
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
