'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Sparkles, Code, Check,
  Smartphone, Tablet, Monitor, Zap, Layout, FileText
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

// Types
interface WebsiteTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: 'portfolio' | 'ecommerce' | 'blog' | 'landing' | 'business';
  price: number;
  popular?: boolean;
}

interface Framework {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface GeneratedWebsite {
  id: string;
  title: string;
  description: string;
  template: string;
  framework: string;
  code: string;
  previewUrl: string;
  createdAt: Date;
}

// Templates de sites web
const websiteTemplates: WebsiteTemplate[] = [
  { id: 'portfolio', name: 'Portfolio Créatif', description: 'Pour artistes, photographes, designers', icon: '🎨', color: 'from-purple-500 to-pink-500', category: 'portfolio', price: 15, popular: true },
  { id: 'ecommerce', name: 'Boutique E-commerce', description: 'Vendez vos produits en ligne', icon: '🛍️', color: 'from-blue-500 to-cyan-500', category: 'ecommerce', price: 25 },
  { id: 'blog', name: 'Blog Moderne', description: 'Partagez vos articles et actualités', icon: '📝', color: 'from-green-500 to-emerald-500', category: 'blog', price: 20 },
  { id: 'landing', name: 'Landing Page', description: 'Page de vente ou inscription', icon: '🚀', color: 'from-orange-500 to-red-500', category: 'landing', price: 10, popular: true },
  { id: 'business', name: 'Site Corporate', description: 'Pour entreprises professionnelles', icon: '🏢', color: 'from-indigo-500 to-purple-500', category: 'business', price: 30 },
  { id: 'restaurant', name: 'Restaurant', description: 'Carte, réservations, galerie', icon: '🍽️', color: 'from-red-500 to-orange-500', category: 'business', price: 20 },
];

// Frameworks CSS
const frameworks: Framework[] = [
  { id: 'tailwind', name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first, personnalisable', color: 'from-cyan-500 to-blue-500' },
  { id: 'bootstrap', name: 'Bootstrap', icon: '📦', description: 'Framework classique, composants prêts', color: 'from-purple-500 to-indigo-500' },
  { id: 'custom', name: 'CSS Personnalisé', icon: '✏️', description: 'Style unique, sur mesure', color: 'from-pink-500 to-rose-500' },
];

export default function WebPage() {
  const { user, refreshUser } = useAuth();
  const [selectedTemplate, setSelectedTemplate] = useState<string>('portfolio');
  const [selectedFramework, setSelectedFramework] = useState<string>('tailwind');
  const [description, setDescription] = useState('');
  const [projectName, setProjectName] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generatedSite, setGeneratedSite] = useState<GeneratedWebsite | null>(null);
  const [sites, setSites] = useState<GeneratedWebsite[]>([]);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentTemplate = websiteTemplates.find(t => t.id === selectedTemplate);

  const getCreditsCost = (): number => currentTemplate?.price || 15;

  const handleGenerate = async () => {
    if (!description && !projectName) {
      toast.error('Veuillez décrire le site web ou donner un nom');
      return;
    }

    const cost = getCreditsCost();
    if ((user?.credits || 0) < cost) {
      toast.error(`Crédits insuffisants. ${cost} crédits requis.`);
      return;
    }

    setGenerating(true);
    
    setTimeout(() => {
      const generatedCode = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${projectName || 'Site généré'}</title></head><body><h1>${projectName || 'Site généré'}</h1><p>${description}</p></body></html>`;
      
      const newSite: GeneratedWebsite = {
        id: Date.now().toString(),
        title: projectName || `Site ${currentTemplate?.name}`,
        description: description || `Site généré avec le template ${currentTemplate?.name}`,
        template: selectedTemplate,
        framework: selectedFramework,
        code: generatedCode,
        previewUrl: `data:text/html;charset=utf-8,${encodeURIComponent(generatedCode)}`,
        createdAt: new Date(),
      };
      
      setSites(prev => [newSite, ...prev]);
      setGeneratedSite(newSite);
      setGenerating(false);
      refreshUser();
      toast.success('Site web généré avec succès !');
    }, 3000);
  };

  const getPreviewScale = () => {
    switch (previewMode) {
      case 'mobile': return 'w-[375px]';
      case 'tablet': return 'w-[768px]';
      default: return 'w-full';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Générateur de sites Web</h1>
          <p className="text-gray-400">Générez des sites professionnels avec l'IA</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {/* Templates */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2"><Layout className="w-5 h-5 text-purple-500" />Templates</h2>
              <div className="grid grid-cols-2 gap-2">
                {websiteTemplates.map((t) => (
                  <button key={t.id} onClick={() => setSelectedTemplate(t.id)} className={`p-3 rounded-xl text-center ${selectedTemplate === t.id ? 'bg-gradient-to-r ' + t.color : 'bg-white/5'}`}>
                    <div className="text-2xl">{t.icon}</div>
                    <p className="text-xs">{t.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="font-semibold mb-4">Framework CSS</h2>
              <div className="space-y-2">
                {frameworks.map((f) => (
                  <button key={f.id} onClick={() => setSelectedFramework(f.id)} className={`w-full p-3 rounded-xl text-left ${selectedFramework === f.id ? 'bg-gradient-to-r ' + f.color : 'bg-white/5'}`}>
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Nom du projet" className="w-full px-4 py-2 bg-black rounded-xl mb-3 border border-white/10" />
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Décrivez le contenu..." className="w-full h-32 px-4 py-3 bg-black rounded-xl border border-white/10" />
              <button onClick={handleGenerate} disabled={generating} className="w-full mt-4 py-3 bg-purple-600 rounded-xl font-bold">
                {generating ? 'Génération...' : `Générer (${getCreditsCost()} cr)`}
              </button>
            </div>
          </div>

          {/* Aperçu */}
          <div className="lg:col-span-2">
            {generatedSite && (
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-4">
                <div className="flex gap-2 mb-4">
                  <button onClick={() => setPreviewMode('mobile')} className="p-2 bg-white/10 rounded"><Smartphone className="w-4 h-4"/></button>
                  <button onClick={() => setPreviewMode('tablet')} className="p-2 bg-white/10 rounded"><Tablet className="w-4 h-4"/></button>
                  <button onClick={() => setPreviewMode('desktop')} className="p-2 bg-white/10 rounded"><Monitor className="w-4 h-4"/></button>
                </div>
                <div className={`${getPreviewScale()} mx-auto h-[500px] bg-white rounded-lg`}>
                  <iframe src={generatedSite.previewUrl} className="w-full h-full border-0" title="Aperçu"/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
