// apps/web/src/components/auth/LogoutButton.tsx
'use client';

import { LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
    >
      <LogOut className="w-5 h-5" />
      <span className="text-sm">Déconnexion</span>
    </button>
  );
}
