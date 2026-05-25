'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, Terminal, BookOpen, Key, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const codeExamples = {
  javascript: `import { ZaksoftClient } from '@zaksoft/api';

const client = new ZaksoftClient({
  apiKey: 'your-api-key'
});

// Générer une image
const { jobId } = await client.design.generate({
  prompt: 'A beautiful sunset over mountains'
});

// Attendre le résultat
const result = await client.design.waitForCompletion(jobId);
console.log(result.url);`,
  python: `from zaksoft import ZaksoftClient

client = ZaksoftClient(api_key='your-api-key')

# Générer une image
job = client.design.generate(
    prompt="A beautiful sunset over mountains"
)

# Attendre le résultat
result = job.wait_for_completion()
print(result.url)`,
  curl: `curl -X POST https://api.zaksoft.com/v1/design/generate \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "A beautiful sunset over mountains"}'`,
};

export default function APIPage() {
  const [language, setLanguage] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[language as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            API{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              développeurs
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Intégrez la puissance de ZAKSOFT IA dans vos applications
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Rapide', desc: 'Latence < 100ms' },
              { icon: <Shield className="w-6 h-6" />, title: 'Sécurisé', desc: 'Authentification JWT' },
              { icon: <BookOpen className="w-6 h-6" />, title: 'Documenté', desc: 'Swagger OpenAPI' },
              { icon: <Key className="w-6 h-6" />, title: 'Clés API', desc: 'Gestion simple' },
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 text-center">
                <div className="text-orange-500 mb-3 flex justify-center">{feature.icon}</div>
                <h3 className="text-white font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-white/10">
            <div className="flex border-b border-white/10">
              {['javascript', 'python', 'curl'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-3 text-sm font-medium transition ${
                    language === lang
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang === 'javascript' ? 'JavaScript' : lang === 'python' ? 'Python' : 'cURL'}
                </button>
              ))}
              <button onClick={copyCode} className="ml-auto px-4 py-3 text-gray-400 hover:text-white">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm text-green-400 font-mono">
                {codeExamples[language as keyof typeof codeExamples]}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à intégrer notre API ?</h2>
          <p className="text-gray-400 mb-8">Commencez gratuitement et passez à l&apos;échelle avec vos applications.</p>
          <Link href="/auth/register">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold">
              Obtenir une clé API
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
