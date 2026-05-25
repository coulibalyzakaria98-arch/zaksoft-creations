'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, Video, BarChart3, ShoppingBag, 
  Code, Users, Cloud, Zap 
} from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'AI Design Generator',
    description: 'Créez des logos, affiches et illustrations uniques en quelques secondes',
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'AI Video Generator',
    description: 'Transformez vos idées en vidéos professionnelles avec l\'IA',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics Dashboard',
    description: 'Suivez vos performances et optimisez votre stratégie',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'Marketplace',
    description: 'Vendez et achetez des templates créés par la communauté',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Developer APIs',
    description: 'Intégrez notre IA dans vos applications',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Collaboration',
    description: 'Travaillez en équipe sur vos projets créatifs',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Storage',
    description: 'Stockez et gérez tous vos fichiers en un seul endroit',
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Smart Automation',
    description: 'Automatisez vos workflows avec des déclencheurs IA',
    gradient: 'from-green-500 to-yellow-500',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-300">Fonctionnalités</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une suite complète d&apos;outils IA pour booster votre créativité et votre business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
