'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Prêt à donner vie à vos idées ?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-8 text-lg"
        >
          Rejoignez des milliers de créateurs qui utilisent ZAKSOFT AI
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/register">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition flex items-center gap-2 mx-auto">
              Commencer gratuitement
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          <Link href="/demo">
            <button className="px-8 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition">
              Voir la démo
            </button>
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm mt-6"
        >
          Aucune carte bancaire requise pour le plan gratuit
        </motion.p>
      </div>
    </section>
  );
}
