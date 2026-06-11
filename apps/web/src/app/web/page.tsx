'use client';
import { motion } from 'framer-motion';

export default function WebGenPage() {
  return (
    <div className="p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white mb-4">Générateur de sites Web</h1>
        <p className="text-gray-400">Section en cours de développement...</p>
      </motion.div>
    </div>
  );
}
