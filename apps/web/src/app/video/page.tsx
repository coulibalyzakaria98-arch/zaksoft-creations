// apps/web/src/app/video/page.tsx
'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Video, Sparkles, Upload, Download, Trash2, Copy, 
  Star, Share2, Mic, Subtitles, Scissors, Film, 
  Clock, Zap, Settings, Music, Volume2, Type,
  ChevronDown, Plus, Save, Eye, Calendar, TrendingUp,
  Play, Pause, SkipForward, SkipBack, VolumeX, Volume1,
  Fullscreen, Minimize, Edit, Layers, Wand2, Heart
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

// Types
interface VideoProject {
  id: string;
  title: string;
  prompt: string;
  url: string;
  thumbnail: string;
  duration: number;
  ratio: string;
  resolution: string;
  voiceover?: string;
  subtitles?: string;
  createdAt: Date;
  isFavorite: boolean;
  views: number;
  likes: number;
}

interface VideoTemplate {
  name: string;
  icon: string;
  duration: number;
  style: string;
  color: string;
}

// Templates de vidéos
const videoTemplates: VideoTemplate[] = [
  { name: 'Cinématique', icon: '🎬', duration: 30, style: 'Cinematic', color: 'from-purple-500 to-pink-500' },
  { name: 'Marketing', icon: '📊', duration: 15, style: 'Professional', color: 'from-blue-500 to-cyan-500' },
  { name: 'Tutoriel', icon: '📚', duration: 60, style: 'Educational', color: 'from-green-500 to-emerald-500' },
  { name: 'Réseaux Sociaux', icon: '📱', duration: 10, style: 'Social', color: 'from-orange-500 to-red-500' },
  { name: 'Film Court', icon: '🎥', duration: 300, style: 'Cinematic', color: 'from-indigo-500 to-purple-500' },
  { name: 'Animation', icon: '✨', duration: 20, style: 'Animated', color: 'from-pink-500 to-rose-500' },
];

// Résolutions
const resolutions = [
  { label: '720p (HD)', value: '720p', credits: 10 },
  { label: '1080p (Full HD)', value: '1080p', credits: 20 },
  { label: '4K (Ultra HD)', value: '4k', credits: 50 },
  { label: '8K', value: '8k', credits: 100 },
];

// Durées
const durations = [
  { label: 'Courte (5-30s)', value: 'short', credits: 10 },
  { label: 'Moyenne (30-120s)', value: 'medium', credits: 30 },
  { label: 'Longue (2-10min)', value: 'long', credits: 100 },
  { label: 'Film (10-60min)', value: 'film', credits: 500 },
];

// Voix off disponibles
const voiceOptions = [
  { name: 'Voix 1 - Professionnelle', value: 'voice1', gender: 'Femme', accent: 'Français' },
  { name: 'Voix 2 - Dynamique', value: 'voice2', gender: 'Homme', accent: 'Français' },
  { name: 'Voix 3 - Émotionnelle', value: 'voice3', gender: 'Femme', accent: 'Français' },
  { name: 'Voix 4 - Narrateur', value: 'voice4', gender: 'Homme', accent: 'Français' },
];

export default function VideoPage() {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [duration, setDuration] = useState('medium');
  const [resolution, setResolution] = useState('1080p');
  const [ratio, setRatio] = useState('16:9');
  const [generating, setGenerating] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<VideoProject | null>(null);
  const [videos, setVideos] = useState<VideoProject[]>([]);
  const [showVoiceover, setShowVoiceover] = useState(false);
  const [voiceoverText, setVoiceoverText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('voice1');
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [subtitleLanguage, setSubtitleLanguage] = useState('fr');
  const [addBackgroundMusic, setAddBackgroundMusic] = useState(false);
  const [musicVolume, setMusicVolume] = useState(30);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Calcul des crédits
  const getCreditsCost = (): number => {
    const durationCost = durations.find(d => d.value === duration)?.credits || 10;
    const resolutionCost = resolutions.find(r => r.value === resolution)?.credits || 20;
    let total = durationCost + resolutionCost;
    if (showVoiceover) total += 5;
    if (showSubtitles) total += 3;
    if (addBackgroundMusic) total += 2;
    return total;
  };

  // Génération de vidéo
  const handleGenerate = async () => {
    if (!prompt) {
      toast.error('Veuillez décrire la vidéo');
      return;
    }

    const cost = getCreditsCost();
    if ((user?.credits || 0) < cost) {
      toast.error(`Crédits insuffisants. ${cost} crédits requis.`);
      return;
    }

    setGenerating(true);
    
    // Simulation de génération (à remplacer par appel API réel)
    setTimeout(() => {
      const newVideo: VideoProject = {
        id: Date.now().toString(),
        title: `Vidéo ${videos.length + 1}`,
        prompt: prompt,
        url: `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4`,
        thumbnail: `https://picsum.photos/400/300?random=${Date.now()}`,
        duration: durations.find(d => d.value === duration)?.value === 'film' ? 600 : 30,
        ratio: ratio,
        resolution: resolution,
        voiceover: showVoiceover ? voiceoverText : undefined,
        subtitles: showSubtitles ? 'auto-generated' : undefined,
        createdAt: new Date(),
        isFavorite: false,
        views: 0,
        likes: 0,
      };
      setVideos(prev => [newVideo, ...prev]);
      setCurrentVideo(newVideo);
      setGenerating(false);
      toast.success('Vidéo générée avec succès !');
    }, 5000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getDurationLabel = () => {
    const durationMap: Record<string, string> = {
      'short': '5-30 secondes',
      'medium': '30-120 secondes',
      'long': '2-10 minutes',
      'film': '10-60 minutes'
    };
    return durationMap[duration] || '30 secondes';
  };

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
            Création vidéo IA
          </h1>
          <p className="text-gray-400">
            Générez des films, vidéos marketing, tutoriels et contenus professionnels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panneau de gauche - Formulaire */}
          <div className="lg:col-span-1 space-y-6">
            {/* Templates */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Film className="w-5 h-5 text-pink-500" />
                Templates vidéo
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {videoTemplates.map((template) => (
                  <button
                    key={template.name}
                    onClick={() => setSelectedTemplate(template.name === selectedTemplate ? '' : template.name)}
                    className={`p-3 rounded-xl text-center transition ${
                      selectedTemplate === template.name
                        ? `bg-gradient-to-r ${template.color} text-white`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-2xl mb-1">{template.icon}</div>
                    <p className="text-xs font-medium">{template.name}</p>
                    <p className="text-xs opacity-70">{template.duration}s</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500" />
                Description du film / vidéo
              </h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Une scène cinématique d'un coucher de soleil sur l'océan, avec des vagues qui se brisent doucement..."
                className="w-full h-32 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              />
            </div>

            {/* Paramètres avancés */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-pink-500" />
                Paramètres avancés
              </h2>

              {/* Durée */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Durée</p>
                <div className="grid grid-cols-2 gap-2">
                  {durations.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDuration(d.value)}
                      className={`px-3 py-2 rounded-lg text-sm transition ${
                        duration === d.value
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {d.label}
                      <span className="text-xs ml-1 opacity-70">({d.credits} cr)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Résolution */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Résolution</p>
                <div className="grid grid-cols-2 gap-2">
                  {resolutions.map((res) => (
                    <button
                      key={res.value}
                      onClick={() => setResolution(res.value)}
                      className={`px-3 py-2 rounded-lg text-sm transition ${
                        resolution === res.value
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {res.label}
                      <span className="text-xs ml-1 opacity-70">({res.credits} cr)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Format d'écran</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '16:9', value: '16:9', icon: '📺' },
                    { label: '9:16', value: '9:16', icon: '📱' },
                    { label: '1:1', value: '1:1', icon: '🟦' },
                  ].map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setRatio(r.value)}
                      className={`px-3 py-2 rounded-lg text-sm transition ${
                        ratio === r.value
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {r.icon} {r.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Voix off */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-300 text-sm">Ajouter une voix off</span>
                  </div>
                  <button
                    onClick={() => setShowVoiceover(!showVoiceover)}
                    className={`w-10 h-5 rounded-full transition ${
                      showVoiceover ? 'bg-pink-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      showVoiceover ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </button>
                </label>
                
                {showVoiceover && (
                  <div className="mt-3 space-y-3">
                    <select
                      value={selectedVoice}
                      onChange={(e) => setSelectedVoice(e.target.value)}
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm"
                    >
                      {voiceOptions.map((voice) => (
                        <option key={voice.value} value={voice.value}>
                          {voice.name} - {voice.gender} ({voice.accent})
                        </option>
                      ))}
                    </select>
                    <textarea
                      value={voiceoverText}
                      onChange={(e) => setVoiceoverText(e.target.value)}
                      placeholder="Texte à prononcer dans la vidéo..."
                      className="w-full h-24 px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 resize-none"
                    />
                    <p className="text-gray-500 text-xs">+5 crédits</p>
                  </div>
                )}
              </div>

              {/* Sous-titres */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Subtitles className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-300 text-sm">Ajouter des sous-titres</span>
                  </div>
                  <button
                    onClick={() => setShowSubtitles(!showSubtitles)}
                    className={`w-10 h-5 rounded-full transition ${
                      showSubtitles ? 'bg-pink-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      showSubtitles ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </button>
                </label>
                {showSubtitles && (
                  <div className="mt-3">
                    <select
                      value={subtitleLanguage}
                      onChange={(e) => setSubtitleLanguage(e.target.value)}
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm"
                    >
                      <option value="fr">Français</option>
                      <option value="en">Anglais</option>
                      <option value="es">Espagnol</option>
                      <option value="de">Allemand</option>
                    </select>
                    <p className="text-gray-500 text-xs mt-1">+3 crédits</p>
                  </div>
                )}
              </div>

              {/* Musique de fond */}
              <div className="mb-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-pink-500" />
                    <span className="text-gray-300 text-sm">Musique de fond</span>
                  </div>
                  <button
                    onClick={() => setAddBackgroundMusic(!addBackgroundMusic)}
                    className={`w-10 h-5 rounded-full transition ${
                      addBackgroundMusic ? 'bg-pink-500' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      addBackgroundMusic ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </button>
                </label>
                {addBackgroundMusic && (
                  <div className="mt-3">
                    <p className="text-gray-400 text-sm mb-1">Volume</p>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={musicVolume}
                      onChange={(e) => setMusicVolume(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-gray-500 text-xs mt-1">+2 crédits</p>
                  </div>
                )}
              </div>

              {/* Coût total */}
              <div className="mt-4 p-3 bg-pink-500/10 rounded-xl border border-pink-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Coût total</span>
                  <span className="text-pink-500 font-bold">{getCreditsCost()} crédits</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  Durée: {getDurationLabel()} • Résolution: {resolution}
                </p>
              </div>

              {/* Bouton génération */}
              <button
                onClick={handleGenerate}
                disabled={generating || !prompt}
                className="mt-4 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Génération en cours... (peut prendre plusieurs minutes)
                  </>
                ) : (
                  <>
                    <Video className="w-5 h-5" />
                    Générer la vidéo / film
                  </>
                )}
              </button>

              {/* Crédits restants */}
              <p className="text-center text-gray-500 text-sm mt-4">
                Il vous reste <span className="text-pink-500 font-semibold">{user?.credits || 0}</span> crédits
              </p>
            </div>
          </div>

          {/* Panneau de droite - Galerie */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lecteur vidéo (si vidéo sélectionnée) */}
            {currentVideo && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={currentVideo.url}
                    className="w-full aspect-video"
                    onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime || 0)}
                  />
                  
                  {/* Contrôles personnalisés */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                      <button onClick={togglePlay} className="text-white hover:text-pink-500 transition">
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </button>
                      <span className="text-white text-sm">
                        {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-pink-500 rounded-full"
                          style={{ width: `${(currentTime / (currentVideo.duration || 1)) * 100}%` }}
                        />
                      </div>
                      <span className="text-white text-sm">
                        {Math.floor(currentVideo.duration / 60)}:{Math.floor(currentVideo.duration % 60).toString().padStart(2, '0')}
                      </span>
                      <button className="text-white hover:text-pink-500 transition">
                        <Volume2 className="w-5 h-5" />
                      </button>
                      <button className="text-white hover:text-pink-500 transition">
                        <Fullscreen className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{currentVideo.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{currentVideo.prompt}</p>
                  <div className="flex gap-4 mt-3">
                    <button className="flex items-center gap-1 text-gray-400 hover:text-pink-500 transition text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{currentVideo.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-400 hover:text-pink-500 transition text-sm">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                    <button className="flex items-center gap-1 text-gray-400 hover:text-pink-500 transition text-sm">
                      <Share2 className="w-4 h-4" />
                      Partager
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Liste des vidéos */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-semibold">Mes créations</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-pink-500' : 'bg-white/10'}`}
                  >
                    <div className="w-4 h-4 bg-white" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-pink-500' : 'bg-white/10'}`}
                  >
                    <div className="w-4 h-4 bg-white" />
                  </button>
                </div>
              </div>

              {videos.length === 0 ? (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                  <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">Aucune vidéo générée</p>
                  <p className="text-gray-600 text-sm mt-2">Commencez par décrire votre vidéo ci-dessus</p>
                </div>
              ) : (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' 
                  : 'space-y-3'
                }>
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:bg-white/10 transition"
                      onClick={() => setCurrentVideo(video)}
                    >
                      <div className="relative aspect-video">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
                          {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, '0')}
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-white text-sm font-medium truncate">{video.title}</p>
                        <p className="text-gray-500 text-xs">{new Date(video.createdAt).toLocaleDateString()}</p>
                        <div className="flex gap-2 mt-2">
                          <button className="text-gray-500 hover:text-pink-500 transition text-xs">
                            <Heart className="w-3 h-3 inline" /> {video.likes}
                          </button>
                          <button className="text-gray-500 hover:text-pink-500 transition text-xs">
                            <Eye className="w-3 h-3 inline" /> {video.views}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
