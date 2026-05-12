'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { 
  Plus, 
  Search, 
  Filter, 
  Star, 
  Download, 
  Sparkles, 
  Layout, 
  Video, 
  Image as ImageIcon,
  ArrowRight,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export const dynamic = 'force-dynamic';

export default function MarketplacePage() {
  const { user } = useAuth();
  const [templates, setTemplates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch(`/api/marketplace/templates?search=${search}&type=${filter === 'all' ? '' : filter}`);
        const data = await res.json();
        setTemplates(data.data || []);
      } catch (error) {
        console.error('Failed to fetch templates:', error);
        toast.error('Erreur lors du chargement des templates');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchTemplates, 300);
    return () => clearTimeout(timer);
  }, [search, filter]);

  const categories = [
    { id: 'all', name: 'Tous', icon: Layout },
    { id: 'image_prompt', name: 'Images', icon: ImageIcon },
    { id: 'video_prompt', name: 'Vidéos', icon: Video },
    { id: 'website_template', name: 'Web', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight flex items-center gap-3">
              Marketplace
            </h1>
            <p className="text-gray-500 mt-2 font-medium">Découvrez et utilisez les meilleurs templates IA de la communauté</p>
          </div>
          <Link 
            href="/marketplace/create"
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
          >
            <Plus size={20} />
            Publier un template
          </Link>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Rechercher un prompt, un style, un auteur..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${
                  filter === cat.id 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <cat.icon size={18} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Chargement des pépites...</p>
          </div>
        ) : templates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div 
                key={template.id}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                  {template.thumbnail ? (
                    <img 
                      src={template.thumbnail} 
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <ImageIcon size={48} />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 flex items-center gap-1 shadow-sm">
                    <Star size={12} fill="currentColor" />
                    {template.avgRating || 'Nouveau'}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {template.type.split('_')[0]}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {template.author?.email.split('@')[0] || 'Communauté'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {template.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                    {template.description || "Aucune description fournie pour ce template."}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Prix</span>
                      <span className="text-xl font-black text-gray-900">
                        {template.price === 0 ? 'Gratuit' : `${template.price} CR`}
                      </span>
                    </div>
                    
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all">
                      Utiliser
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[48px] border border-dashed border-gray-200">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-300 w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun résultat</h3>
            <p className="text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
