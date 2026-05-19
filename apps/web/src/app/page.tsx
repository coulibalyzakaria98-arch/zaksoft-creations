'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Video, ShoppingBag, Code, ArrowRight, Star } from 'lucide-react';

export default function LandingPage() {
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
      text: 'L\'API est puissante et bien documentée. Intégration en quelques heures.',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">ZAKSOFT</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">Fonctionnalités</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Tarifs</Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-gray-900">Marketplace</Link>
              <Link href="/developers" className="text-gray-600 hover:text-gray-900">API</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth/login">
                <Button variant="ghost">Se connecter</Button>
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
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-indigo-600">Création IA nouvelle génération</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Créez en quelques
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}secondes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
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
              <Button size="lg" variant="outline" className="text-lg px-8">
                Découvrir les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services IA puissants</h2>
            <p className="text-xl text-gray-600">Des outils professionnels pour booster votre créativité</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link href={service.link} className="text-indigo-600 text-sm font-medium hover:underline">
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce qu'en disent nos utilisateurs</h2>
            <p className="text-xl text-gray-600">Rejoignez une communauté de créateurs satisfaits</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarifs transparents</h2>
            <p className="text-xl text-gray-600">Choisissez le plan qui vous correspond</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 shadow-sm border ${plan.featured ? 'border-indigo-600 ring-2 ring-indigo-600' : ''}`}>
                {plan.featured && (
                  <div className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-4">
                    Populaire
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {typeof plan.price === 'number' ? `${plan.price}€` : plan.price}
                  {typeof plan.price === 'number' && <span className="text-sm text-gray-500">/mois</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-600 text-sm">✓ {feature}</li>
                  ))}
                </ul>
                <Link href="/auth/register">
                  <Button className="w-full" variant={plan.featured ? 'default' : 'outline'}>
                    Commencer
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à créer avec l'IA ?</h2>
          <p className="text-xl text-indigo-100 mb-8">Rejoignez des milliers de créateurs qui utilisent ZAKSOFT</p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
              Commencer gratuitement
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-indigo-500" />
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2024 ZAKSOFT Créations. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}