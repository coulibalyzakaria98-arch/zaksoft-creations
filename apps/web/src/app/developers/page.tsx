'use client';

import { useState, useEffect } from 'react';
import { Key, Webhook, BarChart3, Code, Zap, Send } from 'lucide-react';
import Link from 'next/link';

export default function DeveloperPortalPage() {
  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/developer/api-keys', { headers: { 'x-user-id': 'user_1' } })
      .then(r => r.json())
      .then(data => { setApiKeys(data); setLoading(false); });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Console Développeur</h1>
          <p className="text-gray-500 mt-2 text-lg">Gérez vos intégrations et clés d&apos;accès API.</p>
        </div>
        <div className="bg-indigo-600 px-6 py-3 rounded-2xl shadow-lg shadow-indigo-100 flex items-center gap-3">
           <Zap size={20} color="white" fill="white" />
           <Text className="text-white font-bold uppercase tracking-widest text-xs">API v2.0 Ready</Text>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Link href="/developers/api-keys" className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
           <div className="bg-indigo-50 w-14 h-14 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Key size={28} color="#4f46e5" />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Clés API</h3>
           <p className="text-gray-500 text-sm leading-5">Créez et gérez vos jetons d&apos;authentification sécurisés.</p>
        </Link>

        <Link href="/developers/webhooks" className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
           <div className="bg-emerald-50 w-14 h-14 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Webhook size={28} color="#10b981" />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Webhooks</h3>
           <p className="text-gray-500 text-sm leading-5">Recevez des notifications en temps réel pour vos jobs IA.</p>
        </Link>

        <Link href="/developers/docs" className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
           <div className="bg-amber-50 w-14 h-14 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code size={28} color="#f59e0b" />
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
           <p className="text-gray-500 text-sm leading-5">Explorez nos guides et SDKs pour intégrer ZAKSOFT.</p>
        </Link>
      </div>

      <div className="bg-gray-900 rounded-[48px] p-10 relative overflow-hidden">
         <div className="relative z-10">
            <h2 className="text-white text-3xl font-black mb-4">Besoin d&apos;un accès Enterprise ?</h2>
            <p className="text-indigo-200 max-w-xl text-lg mb-8">Pour les volumes élevés et des limites de débit personnalisées, contactez notre équipe commerciale.</p>
            <TouchableOpacity className="bg-white px-10 py-4 rounded-2xl self-start flex-row items-center gap-3">
               <Send size={20} color="#4f46e5" />
               <Text className="text-indigo-600 font-black uppercase tracking-widest text-sm">Contacter le Support</Text>
            </TouchableOpacity>
         </div>
         <div className="absolute -right-20 -bottom-20 bg-indigo-500/20 w-96 h-96 rounded-full" />
      </div>
    </div>
  );
}

function Text({ children, className }: any) { return <span className={className}>{children}</span>; }
function TouchableOpacity({ children, className, ...props }: any) { return <button className={className} {...props}>{children}</button>; }
