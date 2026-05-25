'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg' },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
];

const stats = [
  { value: '10K+', label: 'Utilisateurs' },
  { value: '500K+', label: 'Générations' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

export function TrustedBy() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
            Propulsé par les meilleures technologies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partners.map((partner) => (
              <div key={partner.name} className="relative h-6 md:h-8 w-24 md:w-32 invert">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 border-t border-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
