'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ArrowLeft, Send, Code, Info, Loader2 } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function CreateTemplatePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'image_prompt',
    config: '',
    price: 0,
    isPublic: true,
    thumbnail: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    let config;
    try {
      config = JSON.parse(formData.config);
    } catch {
      alert('La configuration doit être un format JSON valide.');
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('/api/marketplace/templates', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-user-id': user?.id || '' 
        },
        body: JSON.stringify({ ...formData, config })
      });
      
      if (res.ok) {
        router.push('/marketplace');
      } else {
        const err = await res.json();
        alert(`Erreur: ${err.error || 'Inconnue'}`);
      }
    } catch (error) {
      alert('Erreur réseau lors de la publication');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/marketplace" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-indigo-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Retour au Marketplace
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <div className="bg-indigo-100 p-3 rounded-2xl">
          <Send className="w-8 h-8 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Publier un template</h1>
          <p className="text-gray-500">Partagez votre expertise et gagnez des crédits passifs.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Nom du template</label>
                <input
                  type="text"
                  required
                  placeholder="ex: Portrait Cyberpunk Néon"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Type de service</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="image_prompt">🎨 Prompt Image (SDXL)</option>
                  <option value="video_prompt">🎬 Prompt Vidéo (SVD)</option>
                  <option value="website_template">🌐 Template Web (React)</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Description</label>
              <textarea
                rows={3}
                placeholder="Décrivez ce que ce template permet de réaliser..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Configuration JSON
                </label>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded uppercase">Strict JSON</span>
              </div>
              <textarea
                rows={8}
                required
                value={formData.config}
                onChange={(e) => setFormData({ ...formData, config: e.target.value })}
                placeholder='{ "prompt": "cyberpunk portrait...", "negative_prompt": "ugly, blurry..." }'
                className="w-full px-4 py-3 border border-gray-200 rounded-xl font-mono text-sm bg-gray-900 text-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">URL de l'image d'aperçu (Thumbnail)</label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={formData.thumbnail}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
              Monétisation & Visibilité
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Prix de vente</label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="1000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-lg font-bold"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                    CRÉDITS
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.isPublic}
                      onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all shadow-sm"></div>
                  </div>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition-colors">
                    Publier publiquement
                  </span>
                </label>
                <p className="text-[11px] text-gray-400 mt-1 ml-15 italic">Permet aux autres utilisateurs de voir et d'acheter votre template.</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg active:scale-95 flex justify-center items-center gap-3"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-5 h-5" />}
            {loading ? 'Publication en cours...' : 'Mettre en vente sur le Marketplace'}
          </button>
        </form>

        <div className="space-y-6">
          <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Règles de Publication
            </h3>
            <ul className="space-y-4 text-sm text-indigo-100">
              <li className="flex items-start gap-3">
                <span className="bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">01</span>
                <span>Recevez <strong>70%</strong> de commission sur chaque vente en crédits.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">02</span>
                <span>Gagnez <strong>5 crédits bonus</strong> instantanés pour chaque publication publique.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-indigo-500 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">03</span>
                <span>Les configurations doivent être testées et fonctionnelles.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Aide au formatage</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Pour les prompts d'images, incluez les paramètres de style, d'éclairage et les mots-clés négatifs dans le JSON.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl font-mono text-[10px] text-gray-600">
              {`{
  "prompt": "neon tiger...",
  "steps": 30,
  "guidance": 7.5
}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
