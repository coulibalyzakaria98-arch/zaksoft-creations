'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Image as ImageIcon, Upload, Download, 
  Trash2, Copy, Star, Share2, Camera, RefreshCw,
  Layers, Palette, Zap, Clock, TrendingUp, Heart,
  FolderOpen, Grid, List, Search, Filter, X
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

// Types
interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
  size: string;
  isFavorite: boolean;
}

// Styles prédéfinis
const styles = [
  { name: 'Photorealistic', icon: '📷', color: 'from-blue-500 to-cyan-500' },
  { name: 'Anime', icon: '🎨', color: 'from-pink-500 to-purple-500' },
  { name: 'Cinematic', icon: '🎬', color: 'from-purple-500 to-indigo-500' },
  { name: 'Cyberpunk', icon: '🤖', color: 'from-cyan-500 to-teal-500' },
  { name: 'Minimalist', icon: '✨', color: 'from-gray-500 to-slate-500' },
  { name: 'Abstract', icon: '🎭', color: 'from-orange-500 to-red-500' },
];

// Tailles
const sizes = [
  { label: '512×512', value: '512x512', credits: 1 },
  { label: '1024×1024', value: '1024x1024', credits: 2 },
  { label: '1024×768', value: '1024x768', credits: 2 },
  { label: '4K', value: '4k', credits: 5 },
];

export default function DesignPage() {
  const { user, refreshUser } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedSize, setSelectedSize] = useState('1024x1024');
  const [generating, setGenerating] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showHistory, setShowHistory] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload d'images
  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map(file => URL.createObjectURL(file));
    setUploadedImages(prev => [...prev, ...newImages]);
    toast.success(`${files.length} image(s) importée(s)`);
  }, []);

  const removeUploadedImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    toast.success('Image supprimée');
  };

  // Génération d'image
  const handleGenerate = async () => {
    if (!prompt) {
      toast.error('Veuillez décrire l\'image');
      return;
    }

    const cost = sizes.find(s => s.value === selectedSize)?.credits || 2;
    if ((user?.credits || 0) < cost) {
      toast.error('Crédits insuffisants. Veuillez recharger.');
      return;
    }

    setGenerating(true);
    
    // Simulation de génération (à remplacer par appel API réel)
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url: `https://picsum.photos/1024/1024?random=${Date.now()}`,
        prompt: prompt,
        createdAt: new Date(),
        size: selectedSize,
        isFavorite: false,
      };
      setGeneratedImages(prev => [newImage, ...prev]);
      setGenerating(false);
      refreshUser();
      toast.success('Image générée avec succès !');
    }, 3000);
  };

  // Toggle favori
  const toggleFavorite = (id: string) => {
    setGeneratedImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, isFavorite: !img.isFavorite } : img
      )
    );
    toast.success('Ajouté aux favoris');
  };

  // Supprimer image
  const deleteImage = (id: string) => {
    setGeneratedImages(prev => prev.filter(img => img.id !== id));
    toast.success('Image supprimée');
  };

  // Télécharger image
  const downloadImage = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `zaksoft-${Date.now()}.png`;
    link.click();
    toast.success('Téléchargement commencé');
  };

  // Copier prompt
  const copyPrompt = (promptText: string) => {
    navigator.clipboard.writeText(promptText);
    toast.success('Prompt copié');
  };

  const favoriteImages = generatedImages.filter(img => img.isFavorite);
  const filteredImages = generatedImages.filter(img =>
    img.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Création d'image IA
          </h1>
          <p className="text-gray-400">
            Générez des images uniques avec notre intelligence artificielle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panneau de gauche - Formulaire */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload d'images */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-orange-500" />
                Importer des images
              </h2>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-orange-500 transition"
              >
                <Upload className="w-10 h-10 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Cliquez pour importer</p>
                <p className="text-gray-500 text-xs">PNG, JPG, WEBP max 10MB</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              
              {uploadedImages.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-2">{uploadedImages.length} image(s) importée(s)</p>
                  <div className="flex gap-2 overflow-x-auto">
                    {uploadedImages.map((url, i) => (
                      <div key={i} className="relative w-16 h-16 flex-shrink-0">
                        <img src={url} alt={`Upload ${i}`} className="w-full h-full object-cover rounded-lg" />
                        <button
                          onClick={() => removeUploadedImage(i)}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Prompt principal */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Description
              </h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Un paysage futuriste avec des néons bleus et violets, style cyberpunk, 4K"
                className="w-full h-28 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
              
              {/* Styles */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Style (optionnel)</p>
                <div className="flex flex-wrap gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.name}
                      onClick={() => setSelectedStyle(style.name === selectedStyle ? '' : style.name)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition ${
                        selectedStyle === style.name
                          ? `bg-gradient-to-r ${style.color} text-white`
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {style.icon} {style.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Negative prompt */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">À exclure (optionnel)</p>
                <input
                  type="text"
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  placeholder="flou, pixelisé, déformé, basse qualité"
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Tailles */}
              <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Taille</p>
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={`px-3 py-2 rounded-lg text-sm transition ${
                        selectedSize === size.value
                          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {size.label}
                      <span className="text-xs ml-1 opacity-70">({size.credits} crédits)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bouton génération */}
              <button
                onClick={handleGenerate}
                disabled={generating || !prompt}
                className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Générer l'image
                  </>
                )}
              </button>

              {/* Crédits restants */}
              <p className="text-center text-gray-500 text-sm mt-4">
                Il vous reste <span className="text-orange-500 font-semibold">{user?.credits || 0}</span> crédits
              </p>
            </div>
          </div>

          {/* Panneau de droite - Galerie */}
          <div className="lg:col-span-2 space-y-6">
            {/* Barre d'outils */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-orange-500' : 'bg-white/10'}`}
                >
                  <Grid className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-orange-500' : 'bg-white/10'}`}
                >
                  <List className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20 transition"
                >
                  {showHistory ? '📜 Historique' : '⭐ Favoris'}
                </button>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Contenu principal */}
            {showHistory ? (
              // Historique des générations
              filteredImages.length > 0 ? (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-4' 
                  : 'space-y-3'
                }>
                  <AnimatePresence>
                    {filteredImages.map((image, index) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                        className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden ${
                          viewMode === 'list' ? 'flex' : ''
                        }`}
                      >
                        <div className={viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'w-full aspect-square'}>
                          <img src={image.url} alt={image.prompt} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex-1">
                          <p className="text-white text-sm line-clamp-2">{image.prompt}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-gray-500 text-xs">{image.size}</span>
                            <span className="text-gray-500 text-xs">
                              {new Date(image.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <button
                              onClick={() => toggleFavorite(image.id)}
                              className={`p-1.5 rounded-lg transition ${
                                image.isFavorite ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'
                              }`}
                            >
                              <Star className="w-4 h-4" fill={image.isFavorite ? 'currentColor' : 'none'} />
                            </button>
                            <button
                              onClick={() => downloadImage(image.url)}
                              className="p-1.5 text-gray-500 hover:text-white transition"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => copyPrompt(image.prompt)}
                              className="p-1.5 text-gray-500 hover:text-white transition"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteImage(image.id)}
                              className="p-1.5 text-gray-500 hover:text-red-500 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                  <ImageIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">Aucune image générée</p>
                  <p className="text-gray-600 text-sm mt-2">Commencez par décrire une image ci-dessus</p>
                </div>
              )
            ) : (
              // Favoris
              favoriteImages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteImages.map((image) => (
                    <div key={image.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                      <div className="aspect-square">
                        <img src={image.url} alt={image.prompt} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <p className="text-white text-sm line-clamp-2">{image.prompt}</p>
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => toggleFavorite(image.id)}
                            className="p-1.5 text-yellow-500 transition"
                          >
                            <Star className="w-4 h-4" fill="currentColor" />
                          </button>
                          <button
                            onClick={() => downloadImage(image.url)}
                            className="p-1.5 text-gray-500 hover:text-white transition"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                  <Star className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">Aucun favori</p>
                  <p className="text-gray-600 text-sm mt-2">Ajoutez des images en favoris pour les retrouver ici</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
