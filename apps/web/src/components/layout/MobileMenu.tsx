'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const menuItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Design', href: '/design' },
  { name: 'Vidéo', href: '/video' },
  { name: 'Web', href: '/web' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Équipe', href: '/teams' },
  { name: 'Facturation', href: '/billing' },
  { name: 'Paramètres', href: '/settings' },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Bouton menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)} />
      )}

      {/* Menu latéral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
