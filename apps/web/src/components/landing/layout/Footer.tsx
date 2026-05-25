'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Twitter, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  Produit: [
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Marketplace', href: '#marketplace' },
    { name: 'Tarifs', href: '#pricing' },
  ],
  Développeurs: [
    { name: 'Documentation', href: '#api' },
    { name: 'API Reference', href: '#' },
    { name: 'SDKs', href: '#' },
    { name: 'Status', href: '#' },
  ],
  Société: [
    { name: 'À propos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carrières', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Légal: [
    { name: 'Confidentialité', href: '#' },
    { name: 'Conditions', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/logo.png"
                alt="ZAKSOFT AI"
                width={32}
                height={32}
                className="object-contain transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-xl tracking-tight text-white">
                ZAKSOFT <span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              La première plateforme africaine de création et d&apos;automatisation par IA. 
              Propulsons ensemble l&apos;innovation technologique en Afrique.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Github className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 text-sm hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} ZAKSOFT AI. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-primary" />
              <span>Abidjan, Côte d&apos;Ivoire</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-primary" />
              <span>contact@zaksoft.ai</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-gray-300 uppercase tracking-widest">
              Made in Côte d&apos;Ivoire
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
