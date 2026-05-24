'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Koffi Kouamé",
    role: "Fondateur de AgriTech CI",
    content: "ZAKSOFT AI a littéralement transformé notre façon de communiquer. Nous générons nos visuels de campagne en quelques minutes au lieu de plusieurs jours.",
    avatar: "https://i.pravatar.cc/150?u=koffi",
    rating: 5
  },
  {
    name: "Awa Diop",
    role: "Directrice Marketing chez Digital Sénégal",
    content: "L'API de ZAKSOFT est d'une robustesse incroyable. Nous l'avons intégrée dans notre CMS pour automatiser la création de vignettes vidéo.",
    avatar: "https://i.pravatar.cc/150?u=awa",
    rating: 5
  },
  {
    name: "Moussa Traoré",
    role: "Artiste Digital & Freelance",
    content: "En tant que créateur, c'est l'outil que j'attendais. La Marketplace me permet aussi de monétiser mes propres modèles IA.",
    avatar: "https://i.pravatar.cc/150?u=moussa",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Témoignages"
          title="Ils nous font confiance"
          subtitle="Découvrez comment les entrepreneurs et créateurs africains utilisent ZAKSOFT AI pour propulser leurs projets."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col relative pt-12">
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8 flex-grow leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-primary/30"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
