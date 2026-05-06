import { Metadata } from 'next';
import { AlertCircle, Key, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authentification - API Documentation',
};

export default function AuthenticationPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Authentification</h1>
      <p className="text-gray-500 text-xl mb-12 font-medium">Toutes les requêtes vers l'API ZAKSOFT doivent être authentifiées via une clé API sécurisée.</p>

      <div className="space-y-12">
        <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-50 w-12 h-12 rounded-xl items-center justify-center">
               <Key className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Obtenir une clé API</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Vous pouvez générer vos clés d'accès depuis votre <Link href="/developers/api-keys" className="text-indigo-600 font-bold underline">Console Développeur</Link>. 
            Une clé API commence toujours par le préfixe <code className="bg-gray-100 px-2 py-1 rounded font-mono font-bold">zak_</code>.
          </p>
        </div>

        <div className="bg-gray-900 rounded-[40px] p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 w-12 h-12 rounded-xl items-center justify-center">
               <Shield className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-white">Usage de l'en-tête HTTP</h2>
          </div>
          <p className="text-indigo-200 mb-6 font-medium">Transmettez votre clé via l'en-tête standard Bearer Token :</p>
          <div className="bg-black/40 rounded-2xl p-6 border border-white/5">
            <pre className="text-emerald-400 font-mono text-sm">
              Authorization: Bearer zak_live_51P2uJ1L9uJ...
            </pre>
          </div>
        </div>

        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex gap-6">
          <div className="bg-amber-100 w-12 h-12 rounded-2xl items-center justify-center flex-shrink-0">
             <AlertCircle className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="text-amber-900 font-black text-lg mb-2">Sécurité critique</h3>
            <p className="text-amber-800 leading-relaxed">Ne partagez jamais vos clés API. Elles donnent accès à vos crédits et à vos données. Ne les exposez jamais dans du code frontend (client-side).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
