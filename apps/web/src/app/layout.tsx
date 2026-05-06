// apps/web/src/app/layout.tsx
'use client';  // ← AJOUTER CETTE LIGNE (TRÈS IMPORTANTE)

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/useAuth'; // Changé pour l'import direct

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZAKSOFT Créations',
  description: 'Plateforme de création de contenu par IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>  {/* PROTECTION NÉCESSAIRE */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
