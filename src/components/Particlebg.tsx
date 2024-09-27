// src/components/SpaceParticleBackground.tsx
import React, { useEffect, useRef } from 'react';

const Particlebg: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: Particle[] = [];
  const numberOfParticles = 100; 

  interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocityX: number;
    velocityY: number;
  }

  const createParticles = () => {
    for (let i = 0; i < numberOfParticles; i++) {
      const radius = Math.random() * 2.5 + 1.5; 
      const particle: Particle = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius,
        color: 'rgba(255, 255, 255, 0.8)', // Brighter color for stars
        // Increased speed for a faster effect
        velocityX: (Math.random() - 0.5) * 1.5, // Faster horizontal movement
        velocityY: (Math.random() - 0.5) * 1.5, // Faster vertical movement
      };
      particles.push(particle);
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();

      // Update particle position
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      // Reset particle position to create a continuous effect
      if (particle.x > ctx.canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = ctx.canvas.width;
      if (particle.y > ctx.canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = ctx.canvas.height;
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        drawParticles(ctx);
      }
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    createParticles();
    animate();
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />;
};

export default Particlebg;
