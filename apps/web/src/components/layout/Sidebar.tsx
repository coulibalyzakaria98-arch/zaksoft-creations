'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Image,
  Video,
  Globe,
  ShoppingBag,
  Users,
  CreditCard,
  Settings,
  Sparkles
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Design Graphique', href: '/design', icon: Image },
  { name: 'Génération Vidéo', href: '/video', icon: Video },
  { name: 'Génération Web', href: '/web', icon: Globe },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { name: 'Équipe', href: '/teams', icon: Users },
  { name: 'Facturation', href: '/billing', icon: CreditCard },
  { name: 'Paramètres', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">ZAKSOFT</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">Créations IA</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="p-4 m-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-semibold text-indigo-600">Passer à la vitesse supérieure</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">Obtenez plus de crédits et fonctionnalités.</p>
        <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition">
          DEVENIR PRO
        </button>
      </div>
    </aside>
  );
}