'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';

const steps = [
  {
    number: "01",
    title: "Décrivez votre idée",
    description: "Utilisez notre interface simple pour décrire ce que vous souhaitez créer. Que ce soit une image, une vidéo ou un script complexe.",
    icon: "✍️"
  },
  {
    number: "02",
    title: "IA transforme l'idée",
    description: "Nos modèles d'IA avancés traitent votre demande en quelques secondes, optimisant chaque détail pour un résultat professionnel.",
    icon: "🧠"
  },
  {
    number: "03",
    title: "Exportez & Partagez",
    description: "Téléchargez votre création en haute résolution ou partagez-la directement sur vos réseaux sociaux ou vos applications.",
    icon: "🚀"
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Processus"
          title="Comment ça marche ?"
          subtitle="De l'imagination à la création en trois étapes simples. Pas besoin de compétences techniques avancées."
        />

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-4xl mb-8 shadow-2xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
