'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop',
    title: 'Design IA - Futuriste',
    prompt: 'Une ville futuriste avec des néons et des drones'
  },
  {
    url: 'https://images.unsplash.com/photo-1536240474400-b3b87e2f87dd?w=800&h=500&fit=crop',
    title: 'Vidéo IA - Cinématique',
    prompt: 'Coucher de soleil sur l'océan, style cinématique'
  },
  {
    url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop',
    title: 'Web IA - Moderne',
    prompt: 'Site web moderne pour agence créative'
  },
  {
    url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop',
    title: 'Design IA - Minimaliste',
    prompt: 'Logo minimaliste pour startup tech'
  },
  {
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=500&fit=crop',
    title: 'Vidéo IA - Animation',
    prompt: 'Animation 3D de particules lumineuses'
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 rounded-2xl overflow-hidden shadow-2xl">
      {/* Image principale */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          unoptimized
        />
        
        {/* Overlay avec titre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white">{images[currentIndex].title}</h3>
            <p className="text-white/70 text-sm mt-1">{images[currentIndex].prompt}</p>
          </div>
        </div>
      </div>

      {/* Contrôles */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={goToPrevious}
          className="ml-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={goToNext}
          className="mr-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Bouton play/pause */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
    </div>
  );
}
