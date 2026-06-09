'use client';

import { useState } from 'react';
import { useHistory, Asset } from '@/hooks/useHistory';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function HistoryPage() {
  const { assets, loading, hasMore, loadMore, refresh, type, setType } = useHistory('all');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const { user } = useAuth();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return '🎨';
      case 'video': return '🎬';
      case 'website': return '🌐';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'image': return 'from-purple-500 to-pink-500';
      case 'video': return 'from-blue-500 to-cyan-500';
      case 'website': return 'from-emerald-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDownload = async (asset: Asset) => {
    const url = asset.type === 'image' ? asset.imageUrl : asset.videoUrl;
    if (!url) return;
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `zaksoft-${asset.type}-${asset.id}.${asset.type === 'image' ? 'png' : 'mp4'}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download error:', error);
      alert('Erreur lors du téléchargement');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Mon historique
          </h1>
          <p className="text-gray-400 mt-2">
            Retrouvez toutes vos créations générées par IA
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { value: 'all', label: 'Tous', icon: '📁' },
            { value: 'image', label: 'Images', icon: '🎨' },
            { value: 'video', label: 'Vidéos', icon: '🎬' },
            { value: 'website', label: 'Sites web', icon: '🌐' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setType(filter.value)}
              className={`px-5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                type === filter.value
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
          
          <button
            onClick={refresh}
            className="ml-auto px-4 py-2 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors"
          >
            🔄 Rafraîchir
          </button>
        </div>

        {/* Assets grid */}
        {loading && assets.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 animate-pulse">
                <div className="h-48 bg-gray-700 rounded-xl mb-4" />
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-700 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : assets.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-bold text-white mb-2">Aucune création</h3>
            <p className="text-gray-400 mb-6">Vous n'avez pas encore généré de contenu</p>
            <Link
              href="/dashboard/image/new"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium hover:shadow-lg transition-all"
            >
              Créer ma première image
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all cursor-pointer relative"
                  onClick={() => setSelectedAsset(asset)}
                >
                  {/* Preview */}
                  <div className="relative h-48 bg-gray-900/50">
                    {asset.type === 'image' && asset.imageUrl && (
                      <img
                        src={asset.imageUrl}
                        alt={asset.prompt || 'Image générée'}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {asset.type === 'video' && asset.videoUrl && (
                      <video
                        src={asset.videoUrl}
                        className="w-full h-full object-cover"
                        muted
                      />
                    )}
                    {asset.type === 'website' && asset.previewUrl && (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-4xl">🌐</span>
                      </div>
                    )}
                    
                    {/* Type badge */}
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${getTypeColor(asset.type)} text-white z-10`}>
                      {getTypeIcon(asset.type)} {asset.type === 'image' ? 'Image' : asset.type === 'video' ? 'Vidéo' : 'Site web'}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-4">
                    <p className="text-gray-300 text-sm line-clamp-2 mb-2">
                      {asset.prompt || asset.description || 'Sans description'}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{formatDate(asset.createdAt)}</span>
                      {asset.type === 'image' && asset.resolution && (
                        <span>{asset.resolution}</span>
                      )}
                      {asset.type === 'video' && asset.duration && (
                        <span>{asset.duration}s</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 rounded-2xl">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(asset);
                      }}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
                    >
                      ⬇️ Télécharger
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAsset(asset);
                      }}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
                    >
                      🔍 Détails
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load more */}
            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="px-6 py-3 bg-gray-800/50 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Chargement...' : 'Charger plus'}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal détails */}
      {selectedAsset && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center z-20">
              <h2 className="text-xl font-bold text-white">
                {selectedAsset.type === 'image' ? 'Détails de l\'image' :
                 selectedAsset.type === 'video' ? 'Détails de la vidéo' :
                 'Détails du site web'}
              </h2>
              <button
                onClick={() => setSelectedAsset(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              {/* Preview */}
              {selectedAsset.type === 'image' && selectedAsset.imageUrl && (
                <img src={selectedAsset.imageUrl} alt="" className="w-full rounded-xl mb-4" />
              )}
              {selectedAsset.type === 'video' && selectedAsset.videoUrl && (
                <video src={selectedAsset.videoUrl} controls className="w-full rounded-xl mb-4" />
              )}
              
              {/* Info */}
              <div className="space-y-3">
                <div>
                  <label className="text-gray-500 text-sm">Prompt / Description</label>
                  <p className="text-white">{selectedAsset.prompt || selectedAsset.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-sm">Créé le</label>
                    <p className="text-white">{formatDate(selectedAsset.createdAt)}</p>
                  </div>
                  {selectedAsset.type === 'image' && selectedAsset.resolution && (
                    <div>
                      <label className="text-gray-500 text-sm">Résolution</label>
                      <p className="text-white">{selectedAsset.resolution}</p>
                    </div>
                  )}
                  {selectedAsset.type === 'video' && selectedAsset.duration && (
                    <div>
                      <label className="text-gray-500 text-sm">Durée</label>
                      <p className="text-white">{selectedAsset.duration} secondes</p>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => handleDownload(selectedAsset)}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium"
                  >
                    ⬇️ Télécharger
                  </button>
                  <button
                    onClick={() => setSelectedAsset(null)}
                    className="flex-1 py-3 bg-gray-800 rounded-xl text-gray-400 font-medium"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
