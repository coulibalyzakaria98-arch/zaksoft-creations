'use client'; // AJOUTÉ

import { useState, useEffect } from 'react';
import { Search, Star, Download, Loader2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // AJOUTÉ

interface Template {
  id: string;
  name: string;
  description: string;
  type: string;
  thumbnail: string;
  price: number;
  avgRating: number;
  author: { email: string };
  _count: { downloads: number };
}

export default function MarketplacePage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sort, setSort] = useState('popular');
  const { user } = useAuth();

  useEffect(() => {
    fetchTemplates();
  }, [search, selectedType, sort]);

  const fetchTemplates = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search,
        type: selectedType !== 'all' ? selectedType : '',
        sort,
        page: '1'
      });
      
      const res = await fetch(`/api/marketplace/templates?${params}`);
      if (res.ok) {
        const data = await res.json();
        setTemplates(data.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch templates", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImport = async (templateId: string) => {
    try {
      const res = await fetch(`/api/marketplace/templates/${templateId}/import`, {
        method: 'POST',
        headers: { 'x-user-id': user?.id || '' }
      });
      const { jobId } = await res.json();
      alert(`Importation lancée ! Job ID: ${jobId}`);
    } catch (error) {
      alert("Erreur lors de l'importation");
    }
  };

  const types = [
    { value: 'all', label: 'Tous' },
    { value: 'image_prompt', label: '🎨 Prompts Image' },
    { value: 'video_prompt', label: '🎬 Prompts Vidéo' },
    { value: 'website_template', label: '🌐 Templates Web' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Marketplace de Templates</h1>
          <p className="text-gray-500 mt-1">Explorez les meilleures configurations créées par la communauté.</p>
        </div>
        <Link 
          href="/marketplace/create"
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <span>+ Publier un template</span>
        </Link>
      </div>
      
      <div className="bg-white p-4 rounded-2xl shadow-sm border mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par nom ou description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>
        
        <div className="flex gap-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 font-medium outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {types.map(t => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 font-medium outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="popular">🔥 Populaires</option>
            <option value="newest">🆕 Nouveautés</option>
            <option value="top_rated">⭐ Mieux notés</option>
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <Loader2 className="w-12 h-12 animate-spin mb-4 text-indigo-600" />
          <p className="font-medium">Chargement des templates...</p>
        </div>
      ) : templates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="group bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                {template.thumbnail ? (
                  <img src={template.thumbnail} alt={template.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="text-6xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    {template.type === 'image_prompt' && '🎨'}
                    {template.type === 'video_prompt' && '🎬'}
                    {template.type === 'website_template' && '🌐'}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 border">
                  {template.type.split('_')[0].toUpperCase()}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-gray-900 truncate text-lg">{template.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[40px]">{template.description || "Aucune description fournie."}</p>
                
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-amber-500 font-bold text-sm">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {template.avgRating > 0 ? template.avgRating.toFixed(1) : '—'}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm font-medium">
                      <Download className="w-4 h-4 mr-1" />
                      {template._count.downloads}
                    </div>
                  </div>
                  <div className="font-extrabold text-indigo-600">
                    {template.price === 0 ? (
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">GRATUIT</span>
                    ) : (
                      <span>{template.price} <span className="text-xs">CRÉDITS</span></span>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => handleImport(template.id)}
                  className="mt-5 w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-sm active:scale-95"
                >
                  Utiliser ce template
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-dashed border-gray-300 p-20 text-center">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun template trouvé</h3>
          <p className="text-gray-500 max-w-xs mx-auto">Essayez de modifier vos critères de recherche ou publiez le premier template dans cette catégorie !</p>
          <button 
            onClick={() => {setSearch(''); setSelectedType('all');}}
            className="mt-6 text-indigo-600 font-bold hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}
