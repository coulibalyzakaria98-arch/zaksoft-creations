// apps/web/src/app/page.tsx
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import LandingPage from '@/components/landing/LandingPage';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  // Check if user is authenticated on the server side
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  // If authenticated, redirect to dashboard
  if (token) {
    redirect('/dashboard');
  }

  // Otherwise, show landing page
  return <LandingPage />;
}
