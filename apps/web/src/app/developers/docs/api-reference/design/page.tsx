import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design API Reference - ZAKSOFT',
};

export default function DesignAPIReference() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Design API</h1>
      <p className="text-gray-500 text-xl mb-12 font-medium">Générez des images professionnelles avec les modèles de diffusion les plus avancés.</p>

      <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm">
        <div className="bg-emerald-50 px-10 py-6 border-b border-gray-100 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <span className="bg-emerald-600 text-white font-black px-4 py-1.5 rounded-xl text-xs uppercase tracking-widest">POST</span>
              <code className="text-emerald-900 font-black text-lg">/v1/design/generate</code>
           </div>
           <span className="text-emerald-700 font-bold text-sm">Async Job</span>
        </div>
        
        <div className="p-10">
           <h3 className="text-gray-900 font-black text-lg mb-6">Paramètres (JSON Body)</h3>
           <div className="space-y-6">
              <div className="flex items-start gap-4 border-b border-gray-50 pb-6">
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                       <code className="text-indigo-600 font-black">prompt</code>
                       <span className="bg-indigo-50 text-indigo-500 text-[10px] font-black px-2 py-0.5 rounded uppercase">Required</span>
                    </div>
                    <p className="text-gray-500 text-sm">Description textuelle détaillée de l&apos;image souhaitée.</p>
                 </div>
                 <span className="text-gray-400 font-mono text-xs italic">string</span>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                       <code className="text-indigo-600 font-black">size</code>
                       <span className="bg-gray-100 text-gray-400 text-[10px] font-black px-2 py-0.5 rounded uppercase">Optional</span>
                    </div>
                    <p className="text-gray-500 text-sm">Dimensions de sortie (512x512, 1024x1024, 4k).</p>
                 </div>
                 <span className="text-gray-400 font-mono text-xs italic">enum</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
