'use client';

import Link from 'next/link';
import { 
  Sparkles, Video, BarChart3, ShoppingBag, 
  Code, Users, Cloud, Zap, Shield, 
  Clock, Globe, Smartphone, Palette, 
  Mic, FileText, Share2, Lock 
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'IA Design Générative',
    description: 'Créez des logos, affiches, illustrations et artworks uniques en quelques secondes avec notre IA de pointe.',
    benefits: ['Génération SDXL', 'Style transfer', '4K Ultra HD', 'Modes portrait/paysage'],
    color: 'from-orange-500 to-pink-500',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'IA Vidéo',
    description: 'Transformez vos idées en vidéos professionnelles. Idéal pour le marketing, les réseaux sociaux et la formation.',
    benefits: ['Text-to-video', 'Voix off IA', 'Sous-titrage auto', 'Multi-format (16:9, 9:16, 1:1)'],
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics Dashboard',
    description: 'Suivez vos performances en temps réel avec des graphiques détaillés et des insights actionnables.',
    benefits: ['Statistiques en direct', 'Rapports exportables', 'Tendances IA', 'Prévisions'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'Marketplace',
    description: 'Achetez et vendez des templates, prompts et assets créés par la communauté.',
    benefits: ['Paiements sécurisés', 'Commission 30%', 'Mise en avant', 'Téléchargements illimités'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'API Développeurs',
    description: 'Intégrez notre IA dans vos applications avec une API RESTful documentée et performante.',
    benefits: ['Documentation complète', 'SDKs disponibles', 'Webhooks', 'Rate limiting personnalisable'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Collaboration Équipe',
    description: 'Travaillez ensemble sur des projets créatifs avec gestion des rôles et partage en temps réel.',
    benefits: ['Espaces de travail', 'Rôles (Admin, Éditeur, Viewer)', 'Commentaires', 'Historique des versions'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Stockage Cloud',
    description: 'Sauvegardez et accédez à tous vos fichiers où que vous soyez, avec synchronisation automatique.',
    benefits: ['10GB gratuits', 'Sauvegarde auto', 'Chiffrement AES-256', 'Accès mobile'],
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Automatisation IA',
    description: 'Automatisez vos workflows créatifs avec des déclencheurs et actions personnalisés.',
    benefits: ['Workflows personnalisés', 'Intégrations Zapier', 'Programmation', 'Notifications'],
    color: 'from-green-500 to-yellow-500',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Sécurité & Confidentialité',
    description: 'Vos créations et données sont protégées par le chiffrement et les normes de sécurité les plus strictes.',
    benefits: ['Chiffrement TLS/SSL', 'RGPD conforme', 'Sauvegardes quotidiennes', '2FA disponible'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Génération Rapide',
    description: 'Des résultats en quelques secondes grâce à nos modèles IA optimisés et notre infrastructure scalable.',
    benefits: ['Images < 5s', 'Vidéos < 30s', 'Files d&apos;attente prioritaires', 'Cache intelligent'],
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Multi-plateforme',
    description: 'Accédez à ZAKSOFT depuis n&apos;importe quel appareil : web, mobile, tablette.',
    benefits: ['Responsive design', 'Application mobile', 'PWA', 'Hors-ligne'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Application Mobile',
    description: 'Générez et gérez vos créations depuis votre smartphone, où que vous soyez.',
    benefits: ['iOS & Android', 'Notifications push', 'Upload rapide', 'Interface tactile'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Bibliothèque de Styles',
    description: 'Accédez à une vaste collection de styles prédéfinis pour booster votre créativité.',
    benefits: ['100+ styles', 'Styles populaires', 'Personnalisation', 'Favoris'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: 'Synthèse Vocale IA',
    description: 'Ajoutez des voix off professionnelles à vos vidéos avec notre synthèse vocale multilingue.',
    benefits: ['30+ voix', 'Multi-langues', 'Personnalisation', 'Téléchargement MP3'],
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Génération de Contenu',
    description: 'Créez des articles, posts LinkedIn, descriptions produits et plus encore avec notre IA textuelle.',
    benefits: ['20+ templates', 'SEO optimisé', 'Multi-langues', 'Ton personnalisable'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Export & Partage',
    description: 'Exportez vos créations dans plusieurs formats et partagez-les directement sur les réseaux sociaux.',
    benefits: ['PNG, JPG, MP4, GIF', 'Partage réseaux', 'Génération de liens', 'Embed code'],
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'API Sécurisée',
    description: 'Intégrez notre IA en toute sécurité avec des clés API et une authentification JWT.',
    benefits: ['Clés API', 'JWT', 'Rate limiting', 'Logs détaillés'],
    color: 'from-slate-500 to-gray-500',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Tout ce dont vous avez besoin pour
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {' '}créer avec l&apos;IA
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Découvrez une suite complète d&apos;outils IA pour booster votre créativité et votre productivité.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {feature.benefits.map((benefit, j) => (
                    <span key={j} className="text-xs bg-white/10 rounded-full px-2 py-1 text-gray-300">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à découvrir la puissance de l&apos;IA ?</h2>
          <p className="text-gray-400 mb-8">Rejoignez des milliers de créateurs qui utilisent ZAKSOFT au quotidien.</p>
          <Link href="/auth/register">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold">
              Commencer gratuitement
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
