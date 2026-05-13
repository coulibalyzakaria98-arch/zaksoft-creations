import { Metadata } from 'next';
import Link from 'next/link';
import { Code, Key, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'API Documentation - ZAKSOFT Créations',
  description: 'Intégrez la puissance de la création IA dans vos applications',
};

const sections = [
  {
    title: 'Commencer',
    icon: Zap,
    items: [
      { name: 'Authentification', href: '/developers/docs/getting-started/authentication' },
    ]
  },
  {
    title: 'API Référence',
    icon: Code,
    items: [
      { name: 'Design API', href: '/developers/docs/api-reference/design' },
    ]
  },
  {
    title: 'Guides',
    icon: Globe,
    items: [
      { name: 'Webhooks', href: '/developers/docs/guides/webhooks' },
      { name: 'Rate Limits', href: '/developers/docs/guides/rate-limits' },
    ]
  },
  {
    title: 'SDKs',
    icon: Code,
    items: [
      { name: 'JavaScript/TypeScript', href: '/developers/docs/sdk/javascript' },
    ]
  }
];

export default function DocsLanding() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">API Documentation</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          La plateforme ZAKSOFT est conçue pour les développeurs. Intégrez nos moteurs d&apos;IA générative directement dans votre workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
          <Zap className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
          <div className="text-3xl font-black text-gray-900">99.9%</div>
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Uptime</div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
          <Code className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
          <div className="text-3xl font-black text-gray-900">&lt;200ms</div>
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Latence</div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
          <Key className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
          <div className="text-3xl font-black text-gray-900">100/min</div>
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Rate Limit</div>
        </div>
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
          <Globe className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
          <div className="text-3xl font-black text-gray-900">24/7</div>
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Support</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-[32px] border border-gray-100 p-10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-8">
               <div className="bg-indigo-50 w-14 h-14 rounded-2xl items-center justify-center">
                  <section.icon className="w-8 h-8 text-indigo-600" />
               </div>
               <h2 className="text-2xl font-black text-gray-900">{section.title}</h2>
            </div>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center justify-between group">
                    <span className="text-gray-600 font-bold group-hover:text-indigo-600 transition-colors">{item.name}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                       <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChevronRight({ className }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
