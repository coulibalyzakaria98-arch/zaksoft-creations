// apps/web/src/app/layout.tsx
'use client'; // AJOUTER CETTE LIGNE

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/useAuth'; // Changé pour l'import direct

const inter = Inter({ subsets: ['latin'] });

// La section metadata est supprimée car elle ne peut pas être exportée depuis un composant client
// export const metadata: Metadata = {
//   title: 'ZAKSOFT Créations',
//   description: 'Plateforme de création de contenu par IA',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
