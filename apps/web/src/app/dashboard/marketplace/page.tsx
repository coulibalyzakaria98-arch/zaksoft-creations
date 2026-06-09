'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface Template {
  id: string;
  name: string;
  category: 'website' | 'image' | 'video' | 'prompt';
  price: number;
  image: string;
  author: string;
  downloads: number;
  rating: number;
}

export default function MarketplacePage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<string[]>([]);
  const { user } = useAuth();

  // Mock data - à remplacer par API réelle
  useEffect(() => {
    const mockTemplates: Template[] = [
      { id: '1', name: 'Portfolio Photographe', category: 'website', price: 25, image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80', author: 'ZakSoft', downloads: 234, rating: 4.8 },
      { id: '2', name: 'Style Cyberpunk', category: 'image', price: 5, image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?w=800&q=80', author: 'AI Master', downloads: 1456, rating: 4.9 },
      { id: '3', name: 'Template E-commerce', category: 'website', price: 45, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', author: 'ShopBuilder', downloads: 89, rating: 4.5 },
      { id: '4', name: 'Musique LoFi', category: 'video', price: 15, image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80', author: 'AudioGen', downloads: 567, rating: 4.7 },
      { id: '5', name: 'Prompt Expert Marketing', category: 'prompt', price: 3, image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80', author: 'MarkAI', downloads: 2341, rating: 4.9 },
    ];
    setTemplates(mockTemplates);
  }, []);

  const filteredTemplates = templates.filter(t => 
    (category === 'all' || t.category === category) &&
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (templateId: string) => {
    setCart([...cart, templateId]);
  };

  const totalPrice = templates
    .filter(t => cart.includes(t.id))
    .reduce((sum, t) => sum + t.price, 0);

  const categoryIcons: Record<string, string> = {
    website: '🌐',
    image: '🎨',
    video: '🎬',
    prompt: '📝',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Marketplace
            </h1>
            <p className="text-gray-400 mt-2">
              Téléchargez des templates créés par la communauté
            </p>
          </div>
          
          {/* Cart */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛒</span>
              <div>
                <div className="text-white font-bold">{cart.length} articles</div>
                <div className="text-indigo-400">{totalPrice} crédits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Rechercher un template..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          
          <div className="flex gap-2">
            {['all', 'website', 'image', 'video', 'prompt'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  category === cat
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
              >
                {cat === 'all' ? 'Tous' : cat === 'website' ? 'Sites' : cat === 'image' ? 'Images' : cat === 'video' ? 'Vidéos' : 'Prompts'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all">
              <img src={template.image} alt={template.name} className="w-full h-48 object-cover" />
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{categoryIcons[template.category]}</span>
                  <span className="text-indigo-400 font-bold">{template.price} crédits</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                <p className="text-gray-400 text-sm mb-3">par {template.author}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📥 {template.downloads} téléchargements</span>
                  <span>⭐ {template.rating}/5</span>
                </div>
                
                <button
                  onClick={() => addToCart(template.id)}
                  disabled={cart.includes(template.id)}
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    cart.includes(template.id)
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                  }`}
                >
                  {cart.includes(template.id) ? '✓ Dans le panier' : 'Ajouter au panier'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout */}
        {cart.length > 0 && (
          <div className="fixed bottom-8 right-8">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all">
              💳 Payer {totalPrice} crédits
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
