// apps/web/src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/useAuth';
import { ThemeProvider } from '@/components/providers/ThemeProvider'; // Import ThemeProvider
import { ToastProvider } from '@/components/providers/ToastProvider'; // Import ToastProvider

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
    <html lang="fr" suppressHydrationWarning> {/* Added suppressHydrationWarning for ThemeProvider */}
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider> {/* Wrap with ThemeProvider */}
            <ToastProvider /> {/* Add ToastProvider */}
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
