'use client';

import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/landing/ui/ParticleBackground';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Stats } from '@/components/landing/Stats';
import { TrustedBy } from '@/components/landing/TrustedBy';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { AIShowcase } from '@/components/landing/AIShowcase';
import { Marketplace } from '@/components/landing/Marketplace';
import { DeveloperAPI } from '@/components/landing/DeveloperAPI';
import { PricingCard } from '@/components/landing/PricingCard';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { pricingPlans } from '@/config/pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Background avec particules IA et effets lumineux */}
      <ParticleBackground />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <AIShowcase />
        <Marketplace />
        <DeveloperAPI />
        {/* Section Tarifs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Des prix simples et transparents
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Commencez gratuitement, évoluez quand vous voulez
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={plan.id} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <FinalCTA />
        
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
// force redeploy 2026-05-26
