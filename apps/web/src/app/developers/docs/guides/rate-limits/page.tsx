import { Metadata } from 'next';
import { Gauge, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rate Limits - API Documentation',
};

export default function RateLimitsPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Rate Limits</h1>
      <p className="text-gray-500 text-xl mb-12 font-medium">Contrôle de débit et quotas d&apos;utilisation de l&apos;API.</p>

      <div className="bg-white rounded-[40px] border border-gray-100 p-10 mb-12 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-[10px] font-black uppercase tracking-[2px]">
              <th className="text-left pb-6">Tier</th>
              <th className="text-left pb-6">RPM (Requests/Min)</th>
              <th className="text-left pb-6">Monthly Quota</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr>
              <td className="py-6 font-black text-gray-900">Free</td>
              <td className="py-6 font-mono text-indigo-600 font-bold">10</td>
              <td className="py-6 text-gray-500">1,000 reqs</td>
            </tr>
            <tr>
              <td className="py-6 font-black text-gray-900">Pro</td>
              <td className="py-6 font-mono text-indigo-600 font-bold">100</td>
              <td className="py-6 text-gray-500">50,000 reqs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-600 rounded-[40px] p-10 flex gap-8 items-center">
         <div className="bg-white/20 w-20 h-20 rounded-3xl items-center justify-center">
            <Gauge size={40} color="white" />
         </div>
         <div>
            <h3 className="text-white text-2xl font-black mb-2">Surveillez vos Headers</h3>
            <p className="text-indigo-100 max-w-lg leading-relaxed">Chaque réponse contient les en-têtes <code className="bg-black/20 px-2 py-1 rounded">X-RateLimit-Remaining</code> et <code className="bg-black/20 px-2 py-1 rounded">X-RateLimit-Reset</code> pour vous aider à gérer votre débit.</p>
         </div>
      </div>
    </div>
  );
}
