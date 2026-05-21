/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Video, ShoppingBag, Code, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

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
      text: 'L'API est puissante et bien documentée. Intégration en quelques heures.',
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
      {/* Fond animé - Particules */}
      <ParticleBackground />
      
      {/* Cercles flottants animés */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000" />
      
      {/* Gradient qui suit la souris */}
      <div 
        className="absolute w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-30 transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
        }}
      />

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
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
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
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
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

      {/* Pricing Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tarifs transparents</h2>
            <p className="text-xl text-indigo-200">Choisissez le plan qui vous correspond</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div key={i} className={`bg-white/5 border ${plan.featured ? 'border-indigo-400' : 'border-white/10'} rounded-xl p-6`}>
                {plan.featured && (
                  <div className="inline-block bg-indigo-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                    Populaire
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  {typeof plan.price === 'number' ? `${plan.price}€` : plan.price}
                  {typeof plan.price === 'number' && <span className="text-sm text-indigo-300">/mois</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-indigo-100 text-sm">✓ {feature}</li>
                  ))}
                </ul>
                <Link href="/auth/register">
                  <Button className="w-full bg-white text-indigo-900 hover:bg-gray-100" variant={plan.featured ? 'default' : 'outline'}>
                    Commencer
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-indigo-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à créer avec l'IA ?</h2>
          <p className="text-xl text-indigo-100 mb-8">Rejoignez des milliers de créateurs qui utilisent ZAKSOFT</p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Commencer gratuitement
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/40 text-gray-400 py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                <span className="font-bold text-xl text-white">ZAKSOFT</span>
              </div>
              <p className="text-sm">Création de contenu par intelligence artificielle</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/design">Design IA</Link></li>
                <li><Link href="/video">Vidéo IA</Link></li>
                <li><Link href="/marketplace">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/developers">API</Link></li>
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/pricing">Tarifs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal/terms">Conditions</Link></li>
                <li><Link href="/legal/privacy">Confidentialité</Link></li>
                <li><Link href="/legal/cookies">Cookies</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
            © 2024 ZAKSOFT Créations. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
