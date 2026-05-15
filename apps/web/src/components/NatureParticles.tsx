'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  type: 'leaf' | 'drop' | 'pollen';
}

export default function NatureParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = [];
    const types: ('leaf' | 'drop' | 'pollen')[] = ['leaf', 'drop', 'pollen'];
    
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 15 + 5,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
        type: types[Math.floor(Math.random() * types.length)]
      });
    }
    
    setParticles(newParticles);
  }, []);

  const getParticleStyle = (particle: Particle) => {
    const baseStyle = {
      left: `${particle.left}%`,
      top: `${particle.top}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      animationDelay: `${particle.delay}s`,
      animationDuration: `${particle.duration}s`,
    };

    switch (particle.type) {
      case 'leaf':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          borderRadius: '0% 100% 0% 100%',
          opacity: 0.6,
        };
      case 'drop':
        return {
          ...baseStyle,
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(14, 165, 233, 0.4) 100%)',
          borderRadius: '50%',
          opacity: 0.7,
        };
      case 'pollen':
        return {
          ...baseStyle,
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.9) 0%, rgba(245, 158, 11, 0.5) 100%)',
          borderRadius: '50%',
          opacity: 0.5,
        };
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={particle.type === 'leaf' ? 'leaf' : particle.type === 'drop' ? 'water-drop' : 'particle'}
          style={getParticleStyle(particle)}
        />
      ))}
    </div>
  );
}

// Made with Bob