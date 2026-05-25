'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight, Zap, Video, ShoppingBag, Code } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20" />
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-white/80">Made in Côte d'Ivoire 🇨🇮</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Créez en quelques
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {' '}secondes
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Générez des images, vidéos et sites web professionnels avec notre intelligence artificielle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold flex items-center gap-2">
                Commencer gratuitement <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="#features">
              <button className="px-8 py-3 border border-white/20 text-white rounded-xl font-semibold">
                Découvrir les services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Services IA puissants</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Sparkles className="w-8 h-8" />, title: 'Design IA', desc: 'Créez des images uniques' },
              { icon: <Video className="w-8 h-8" />, title: 'Vidéo IA', desc: 'Générez des vidéos pro' },
              { icon: <ShoppingBag className="w-8 h-8" />, title: 'Marketplace', desc: 'Partagez vos créations' },
              { icon: <Code className="w-8 h-8" />, title: 'API', desc: 'Intégrez notre IA' },
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-orange-500 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Tarifs transparents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '0€', features: ['10 crédits/mois', 'Images 512×512'] },
              { name: 'Pro', price: '29€', features: ['500 crédits/mois', 'Images 4K', 'Vidéos illimitées'], popular: true },
              { name: 'Enterprise', price: 'Sur devis', features: ['Crédits illimités', 'API dédiée'] },
            ].map((plan, i) => (
              <div key={i} className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 text-center ${plan.popular ? 'border-orange-500' : 'border-white/10'}`}>
                {plan.popular && <p className="text-orange-500 text-sm mb-2">Recommandé</p>}
                <h3 className="text-white text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-white mb-4">{plan.price}<span className="text-sm text-gray-400">/mois</span></p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-gray-300 text-sm">{f}</li>
                  ))}
                </ul>
                <Link href="/auth/register">
                  <button className="w-full py-2 bg-white/10 rounded-lg text-white">Commencer</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2024 ZAKSOFT AI. Tous droits réservés. Made with ❤️ in Côte d'Ivoire
      </footer>
    </div>
  );
}
