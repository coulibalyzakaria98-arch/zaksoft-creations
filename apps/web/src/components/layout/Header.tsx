'use client';

import { useAuth } from '../../hooks/useAuth'; // Corrected path
import { LogOut, User, CreditCard, Bell } from 'lucide-react';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
      {/* Titre de la page (dynamique) */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Bienvenue,</h1>
        <p className="text-sm text-gray-500">{user?.email?.split(' @')[0] || 'Utilisateur'}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Credits */}
        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
          <CreditCard className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">{user?.credits || 0} crédits</span>
        </div>

        {/* Notifications */}
        <button className="p-2 text-gray-400 hover:text-gray-600 transition">
          <Bell className="w-5 h-5" />
        </button>

        {/* Déconnexion */}
        <button
          onClick={logout}
          className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Déconnexion</span>
        </button>
      </div>
    </header>
  );
}