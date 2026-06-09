// apps/web/src/components/layout/DashboardSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Image, 
  Video, 
  Globe, 
  ShoppingBag, 
  Library,
  BarChart3, 
  CreditCard, 
  Settings,
  Sparkles,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const menuItems = [
  { name: 'Accueil', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Créer Image', href: '/dashboard/image/new', icon: Image },
  { name: 'Créer Vidéo', href: '/dashboard/video/new', icon: Video },
  { name: 'Créer Site', href: '/dashboard/website/new', icon: Globe },
  { name: 'Mon historique', href: '/dashboard/history', icon: Library },
  { name: 'Marketplace', href: '/dashboard/marketplace', icon: ShoppingBag },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Facturation', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-black/95 backdrop-blur-sm border-r border-white/10 z-30">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl text-white">
            ZAKSOFT<span className="text-orange-500">AI</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-500 border border-orange-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer avec déconnexion */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <div className="mb-4 p-3 bg-white/5 rounded-xl">
          <p className="text-xs text-gray-400 truncate">{user?.email}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-400">Connecté</span>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
