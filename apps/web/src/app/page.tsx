'use client';

import { ParticleBackground } from '@/components/landing/ui/ParticleBackground';
import { Navbar } from '@/components/landing/layout/Navbar';
import { Footer } from '@/components/landing/layout/Footer';
import { Hero } from '@/components/landing/sections/Hero';
import { TrustedBy } from '@/components/landing/sections/TrustedBy';
import { Features } from '@/components/landing/sections/Features';
import { HowItWorks } from '@/components/landing/sections/HowItWorks';
import { AIShowcase } from '@/components/landing/sections/AIShowcase';
import { Marketplace } from '@/components/landing/sections/Marketplace';
import { DeveloperAPI } from '@/components/landing/sections/DeveloperAPI';
import { Pricing } from '@/components/landing/sections/Pricing';
import { Testimonials } from '@/components/landing/sections/Testimonials';
import { FAQ } from '@/components/landing/sections/FAQ';
import { CTA } from '@/components/landing/sections/CTA';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Interactive Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections Wrapper */}
      <div className="relative z-10">
        <Hero />
        <TrustedBy />
        <Features />
        <AIShowcase />
        <HowItWorks />
        <Marketplace />
        <DeveloperAPI />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
