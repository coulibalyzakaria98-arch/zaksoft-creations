import { Metadata } from 'next';
import { Code, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JavaScript SDK - ZAKSOFT API',
};

export default function JavaScriptSDKPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">JavaScript SDK</h1>
      <p className="text-gray-500 text-xl mb-12 font-medium">Bibliothèque officielle pour Node.js et les navigateurs.</p>

      <div className="space-y-8">
        <div className="bg-gray-900 rounded-[40px] p-10">
          <div className="flex items-center gap-4 mb-6">
            <Terminal className="text-indigo-400" />
            <h2 className="text-2xl font-black text-white">Installation</h2>
          </div>
          <div className="bg-black/50 rounded-2xl p-6 border border-white/5 flex justify-between items-center">
             <code className="text-indigo-300 font-mono">npm install @zaksoft/api</code>
             <div className="bg-white/10 p-2 rounded-lg"><Code size={16} color="white" /></div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] border border-gray-100 p-10 shadow-sm">
           <h2 className="text-2xl font-black text-gray-900 mb-8">Exemple d&apos;utilisation</h2>
           <pre className="bg-gray-50 p-8 rounded-3xl font-mono text-sm text-gray-700 leading-relaxed overflow-x-auto">
{`import { Zaksoft } from '@zaksoft/api';

const zak = new Zaksoft('zak_live_...');

// Générer et attendre le résultat
const image = await zak.design.generate({
  prompt: 'A galaxy inside a lightbulb',
  size: '1024x1024'
}).wait();

console.log(image.url);`}
           </pre>
        </div>
      </div>
    </div>
  );
}
