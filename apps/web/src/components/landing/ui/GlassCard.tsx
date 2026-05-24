'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "relative group overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-300",
        hoverEffect && "hover:border-primary/20 hover:bg-white/10",
        className
      )}
    >
      {/* Glow effect on hover */}
      {hoverEffect && (
        <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent-2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none" />
      )}
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
}
