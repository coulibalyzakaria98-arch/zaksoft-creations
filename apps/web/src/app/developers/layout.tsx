'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Key, Webhook, Code, Zap, ChevronRight, LayoutDashboard, Settings } from 'lucide-react';

const sidebarItems = [
  {
    title: 'Console',
    items: [
      { name: 'Dashboard', href: '/developers', icon: LayoutDashboard },
      { name: 'Clés API', href: '/developers/api-keys', icon: Key },
      { name: 'Webhooks', href: '/developers/webhooks', icon: Webhook },
    ]
  },
  {
    title: 'Documentation',
    items: [
      { name: 'Introduction', href: '/developers/docs', icon: Zap },
      { name: 'Authentification', href: '/developers/docs/getting-started/authentication', icon: Shield },
      { name: 'Design API', href: '/developers/docs/api-reference/design', icon: BookOpen },
    ]
  },
  {
    title: 'SDKs',
    items: [
      { name: 'JavaScript', href: '/developers/docs/sdk/javascript', icon: Code },
    ]
  }
];

export default function DevelopersLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-80 border-r border-gray-100 h-screen sticky top-0 bg-gray-50/50 hidden lg:block">
        <div className="p-8">
           <Link href="/developers" className="flex items-center gap-3 mb-12">
              <div className="bg-indigo-600 w-10 h-10 rounded-xl items-center justify-center flex">
                 <Zap size={20} color="white" fill="white" />
              </div>
              <span className="font-black text-xl text-gray-900 tracking-tighter">ZAKSOFT <span className="text-indigo-600">API</span></span>
           </Link>

           <nav className="space-y-10">
              {sidebarItems.map(section => (
                <div key={section.title}>
                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] mb-6 px-4">{section.title}</h4>
                   <div className="space-y-2">
                      {section.items.map(item => {
                        const isActive = pathname === item.href;
                        return (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${isActive ? 'bg-white shadow-sm border border-gray-100 text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}
                          >
                             <item.icon size={18} />
                             <span>{item.name}</span>
                          </Link>
                        );
                      })}
                   </div>
                </div>
              ))}
           </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
         <header className="h-20 border-b border-gray-50 flex items-center justify-end px-12 gap-8">
            <Link href="/" className="text-gray-400 font-bold text-sm hover:text-gray-900 transition-colors">Retour au Studio</Link>
            <div className="w-10 h-10 bg-gray-900 rounded-xl items-center justify-center flex">
               <span className="text-white font-black text-xs">ZK</span>
            </div>
         </header>
         <div className="max-w-4xl mx-auto px-12 pb-24">
            {children}
         </div>
      </main>
    </div>
  );
}

function Shield({ size, color }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
