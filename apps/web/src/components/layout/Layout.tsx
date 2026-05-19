'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { MobileMenu } from './MobileMenu';

export function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-40 px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl text-indigo-600">ZAKSOFT</span>
        <MobileMenu />
      </header>

      {/* Contenu principal */}
      <main className="pt-16 md:pt-0">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
