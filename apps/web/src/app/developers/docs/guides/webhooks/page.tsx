import { Metadata } from 'next';
import { Webhook } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Webhooks - API Documentation',
};

export default function WebhooksPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Webhooks</h1>
      <p className="text-gray-500 text-xl mb-12 font-medium">Réagissez aux événements de la plateforme en temps réel.</p>

      <div className="bg-white rounded-[40px] border border-gray-100 p-10 mb-8 shadow-sm">
         <div className="flex items-center gap-4 mb-8">
            <div className="bg-emerald-50 w-12 h-12 rounded-xl items-center justify-center">
               <Webhook className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Événements Supportés</h2>
         </div>
         
         <div className="grid grid-cols-1 gap-4">
            {['job.completed', 'job.failed', 'deployment.success', 'credits.low'].map(event => (
              <div key={event} className="bg-gray-50 px-6 py-4 rounded-2xl flex items-center justify-between">
                 <code className="text-indigo-600 font-black">{event}</code>
                 <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Active</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
