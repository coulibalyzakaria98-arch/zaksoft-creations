import { Inter } from 'next/font/google';
import { AuthProvider } from '@/hooks/useAuth';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://zaksoft-creations.vercel.app'),
  title: 'ZAKSOFT AI - Création et Automatisation par IA',
  description: "La première plateforme africaine de création et d'automatisation par IA. Générez des images, vidéos, sites web et boostez votre business.",
  keywords: "IA, intelligence artificielle, création de contenu, vidéo IA, design IA, marketplace, API, Afrique, Côte d'Ivoire",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  authors: [{ name: 'Zakaria Coulibaly' }],
  creator: 'Zakaria Coulibaly',
  publisher: 'ZAKSOFT AI',
  robots: 'index, follow',
  openGraph: {
    title: 'ZAKSOFT AI - Création et Automatisation par IA',
    description: "La première plateforme africaine de création et d'automatisation par IA.",
    url: 'https://zaksoft-creations.vercel.app',
    siteName: 'ZAKSOFT AI',
    images: [
      {
        url: 'https://zaksoft-creations.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZAKSOFT AI Platform',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAKSOFT AI - Création et Automatisation par IA',
    description: "La première plateforme africaine de création et d'automatisation par IA.",
    images: ['https://zaksoft-creations.vercel.app/og-image.jpg'],
    creator: '@zaksoft',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AuthProvider>
            {children}
            <Toaster position="top-right" richColors />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
