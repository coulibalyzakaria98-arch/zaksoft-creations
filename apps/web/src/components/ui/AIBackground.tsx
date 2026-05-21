'use client';

import { useEffect, useRef } from 'react';

export function AIBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      originalX: number;
      originalY: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originalX = this.x;
        this.originalY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        // Mouvement aléatoire
        this.x += this.vx;
        this.y += this.vy;

        // Rebond sur les bords
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Retour progressif à la position d'origine
        this.x += (this.originalX - this.x) * 0.005;
        this.y += (this.originalY - this.y) * 0.005;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Couleur dégradée selon la position
        const gradient = ctx.createLinearGradient(this.x - 10, this.y - 10, this.x + 10, this.y + 10);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.8)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0.8)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Effet de glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(79, 70, 229, 0.5)';
      }
    }

    class Connection {
      p1: Particle;
      p2: Particle;
      
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recréer les particules
      const particleCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 15000));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
      
      // Créer les connexions
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(particles[i], particles[j]));
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation des particules
    function animate() {
      if (!ctx || !canvas) return;
      
      // Fond transparent avec effet de traînée
      ctx.fillStyle = 'rgba(11, 13, 27, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Mise à jour et dessin des connexions
      for (const conn of connections) {
        conn.draw(ctx);
      }
      
      // Mise à jour et dessin des particules
      for (const particle of particles) {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
