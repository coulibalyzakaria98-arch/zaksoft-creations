'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce que ZAKSOFT AI ?",
    answer: "ZAKSOFT AI est la première plateforme africaine tout-en-un dédiée à la création de contenu par intelligence artificielle. Nous proposons des outils pour générer des images, des vidéos, des textes et des sites web, ainsi qu'une marketplace et une API pour les développeurs."
  },
  {
    question: "Comment fonctionnent les crédits ?",
    answer: "Chaque action sur la plateforme (génération d'image, vidéo, etc.) consomme un certain nombre de crédits. Votre solde de crédits dépend de votre plan d'abonnement. Les crédits inutilisés ne sont pas reportés d'un mois à l'autre dans le plan Free, mais le sont dans le plan Pro."
  },
  {
    question: "L'API est-elle accessible à tous ?",
    answer: "Oui, l'API est accessible dès le plan Free pour des tests. Pour une utilisation en production avec des volumes plus importants, nous recommandons le plan Pro ou Enterprise qui offre des limites plus élevées et un support dédié."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les cartes bancaires internationales (Visa, Mastercard), ainsi que les solutions de Mobile Money locales (Orange Money, MTN MoMo, Wave) pour faciliter l'accès à nos services sur tout le continent africain."
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Absolument. Nos abonnements sont sans engagement. Vous pouvez annuler votre plan Pro à tout moment depuis vos paramètres de facturation. Vous conserverez l'accès à vos fonctionnalités Pro jusqu'à la fin de la période facturée."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Aide"
          title="Questions Fréquentes"
          subtitle="Tout ce que vous devez savoir sur ZAKSOFT AI et comment nous pouvons vous aider."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
