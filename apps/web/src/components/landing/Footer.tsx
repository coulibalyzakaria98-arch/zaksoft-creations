'use client';

import Link from 'next/link';
import { Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <span className="font-bold text-xl text-white">
                ZAKSOFT<span className="text-orange-500">AI</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              La première plateforme africaine de création et d&apos;automatisation par IA.
            </p>
            <p className="text-gray-500 text-xs mt-2">Made in Côte d&apos;Ivoire 🇨🇮</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/design" className="text-gray-400 hover:text-white transition">Design IA</Link></li>
              <li><Link href="/video" className="text-gray-400 hover:text-white transition">Vidéo IA</Link></li>
              <li><Link href="/marketplace" className="text-gray-400 hover:text-white transition">Marketplace</Link></li>
              <li><Link href="/developers" className="text-gray-400 hover:text-white transition">API</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Tarifs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition">Conditions</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition">Confidentialité</Link></li>
              <li><Link href="/legal/cookies" className="text-gray-400 hover:text-white transition">Cookies</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 ZAKSOFT AI. Tous droits réservés.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
