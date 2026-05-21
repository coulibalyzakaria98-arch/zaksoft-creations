/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Video, ShoppingBag, Code, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AIBackground } from '@/components/ui/AIBackground';
import { ImageCarousel } from '@/components/ui/ImageCarousel';

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'IA Design',
      description: 'Créez des affiches, logos et visuels uniques avec notre IA générative',
      link: '/design'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'IA Vidéo',
      description: 'Générez des vidéos professionnelles automatiquement',
      link: '/video'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Marketplace',
      description: 'Trouvez et partagez des templates créés par la communauté',
      link: '/marketplace'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'API Developers',
      description: 'Intégrez notre IA dans vos applications',
      link: '/developers'
    }
  ];

  const stats = [
    { value: '+10K', label: 'Créations générées' },
    { value: '+2K', label: 'Utilisateurs actifs' },
    { value: '99.9%', label: 'Disponibilité' },
    { value: '24/7', label: 'Support client' }
  ];

  const testimonials = [
    {
      text: 'ZAKSOFT a révolutionné notre processus créatif. Gain de temps et qualité exceptionnelle !',
      author: 'Sarah M.',
      role: 'Directrice Artistique',
      rating: 5
    },
    {
      text: "L'API est puissante et bien documentée. Intégration en quelques heures.",
      author: 'Thomas L.',
      role: 'Développeur Full-Stack',
      rating: 5
    }
  ];

  const pricing = [
    {
      name: 'Free',
      price: 0,
      features: ['10 crédits/mois', 'Images 512×512', 'Support communautaire']
    },
    {
      name: 'Pro',
      price: 29.99,
      featured: true,
      features: ['500 crédits/mois', 'Images 4K', 'Vidéos illimitées', 'Support prioritaire']
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      features: ['Crédits illimités', 'API dédiée', 'SLA personnalisé', 'Support 24/7']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden text-white">
      {/* Fond animé */}
      <AIBackground />
      
      {/* Contenu avec effet de verre */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                <span className="font-bold text-xl">ZAKSOFT</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/features" className="hover:text-indigo-300">Fonctionnalités</Link>
                <Link href="/pricing" className="hover:text-indigo-300">Tarifs</Link>
                <Link href="/marketplace" className="hover:text-indigo-300">Marketplace</Link>
                <Link href="/developers" className="hover:text-indigo-300">API</Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/auth/login">
                  <Button variant="ghost" className="text-white hover:bg-white/10">Se connecter</Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Commencer
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-200">Création IA nouvelle génération</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Créez en quelques
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {' '}secondes
              </span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              Générez des images, vidéos et sites web avec notre intelligence artificielle.
              Simple, rapide et professionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white/20 hover:bg-white/10">
                  Découvrir les services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-indigo-200 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Services IA puissants</h2>
              <p className="text-xl text-indigo-200">Des outils professionnels pour booster votre créativité</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition glass-card">
                  <div className="text-indigo-400 mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-indigo-200 text-sm mb-4">{service.description}</p>
                  <Link href={service.link} className="text-indigo-400 text-sm font-medium hover:underline">
                    En savoir plus →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-20 bg-black/20 backdrop-blur-sm px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ce qu'en disent nos utilisateurs</h2>
              <p className="text-xl text-indigo-200">Rejoignez une communauté de créateurs satisfaits</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 glass-card">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-indigo-100 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-indigo-300">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="relative bg-black/40 text-gray-400 py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center text-sm">
            © 2024 ZAKSOFT Créations. Tous droits réservés.
          </div>
        </footer>
      </div>
    </div>
  );
}
