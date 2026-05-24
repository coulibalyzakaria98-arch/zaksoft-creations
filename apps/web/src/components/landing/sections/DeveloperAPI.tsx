'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '@/components/ui/button';
import { Code, Copy, Check, Terminal, Cpu, Zap } from 'lucide-react';

const codeSnippets = {
  curl: `curl -X POST https://api.zaksoft.ai/v1/generate/image \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Une ville futuriste à Abidjan, style cyberpunk",
    "size": "1024x1024",
    "quality": "premium"
  }'`,
  javascript: `const response = await fetch('https://api.zaksoft.ai/v1/generate/video', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Un drone survolant la basilique de Yamoussoukro',
    duration: 10
  })
});

const data = await response.json();
console.log(data.video_url);`,
  python: `import requests

url = "https://api.zaksoft.ai/v1/generate/image"
payload = {
    "prompt": "Mise en page d'un site e-commerce moderne",
    "style": "professional"
}
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
};

export function DeveloperAPI() {
  const [activeLang, setActiveLang] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang as keyof typeof codeSnippets]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              centered={false}
              badge="Développeurs"
              title="Intégrez l'IA dans vos applications"
              subtitle="Notre API est conçue pour être simple, performante et scalable. Donnez des super-pouvoirs à vos projets en quelques minutes."
            />

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">SDKs Multilingues</h4>
                  <p className="text-gray-400 text-sm">Disponible en JS/TS, Python, Go et PHP pour une intégration fluide.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Modèles Optimisés</h4>
                  <p className="text-gray-400 text-sm">Accès à nos modèles propriétaires fine-tunés pour le contexte local.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Temps Réel</h4>
                  <p className="text-gray-400 text-sm">Streaming de réponses et webhooks pour une expérience utilisateur réactive.</p>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary-dark">
              Consulter la documentation
              <Code className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            {/* Window frame */}
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="flex gap-4">
                  {['javascript', 'python', 'curl'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                        activeLang === lang ? 'text-primary' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={copyToClipboard}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Code area */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-gray-300">
                    {codeSnippets[activeLang as keyof typeof codeSnippets]}
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
