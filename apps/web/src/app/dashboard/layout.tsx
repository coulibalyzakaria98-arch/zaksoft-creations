'use client';

import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar />
      <main className="ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
