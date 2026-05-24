'use client';

import { 
  Palette, 
  Video, 
  Code, 
  ShoppingBag, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';

const features = [
  {
    title: "IA Design",
    description: "Générez des logos, des affiches et des visuels époustouflants en quelques secondes grâce à notre modèle de diffusion haute résolution.",
    icon: Palette,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "IA Vidéo",
    description: "Transformez vos textes en vidéos cinématiques. Idéal pour le marketing, les réseaux sociaux et la narration numérique.",
    icon: Video,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Marketplace",
    description: "Achetez et vendez des templates, des prompts et des modèles IA créés par la communauté créative africaine.",
    icon: ShoppingBag,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "API Développeur",
    description: "Intégrez nos capacités d'IA directement dans vos applications grâce à notre API robuste et nos SDKs dédiés.",
    icon: Code,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Ultra Rapide",
    description: "Infrastructures optimisées pour une génération quasi-instantanée, même pour les tâches les plus complexes.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Made in Africa",
    description: "Une plateforme pensée pour les réalités du marché africain, avec un support local et des prix adaptés.",
    icon: Globe,
    color: "from-blue-400 to-cyan-500"
  },
  {
    title: "Sécurité & RGPD",
    description: "Vos données sont cryptées et protégées. Nous respectons les standards les plus stricts en matière de confidentialité.",
    icon: ShieldCheck,
    color: "from-gray-400 to-gray-600"
  },
  {
    title: "IA Personnalisée",
    description: "Entraînez nos modèles sur vos propres styles ou données pour obtenir des résultats qui vous ressemblent vraiment.",
    icon: Cpu,
    color: "from-rose-500 to-pink-600"
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Fonctionnalités"
          title="Une suite d'outils IA complète"
          subtitle="Tout ce dont vous avez besoin pour passer de l'idée à la réalité, sans compromis sur la qualité ou la rapidité."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} className="flex flex-col h-full">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
