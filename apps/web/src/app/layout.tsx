// apps/web/src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic'; // Import dynamic

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZAKSOFT Créations',
  description: 'Plateforme de création de contenu par IA',
};

// Dynamically import AuthProvider to ensure it's client-side only
const ClientAuthProvider = dynamic(() => import('../hooks/useAuth').then(mod => mod.AuthProvider), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ClientAuthProvider>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
        </ClientAuthProvider>
      </body>
    </html>
  );
}
