'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BobbyMascotProps {
  size?: 'small' | 'medium' | 'large' | 'hero';
  animated?: boolean;
  className?: string;
}

export default function BobbyMascot({
  size = 'medium',
  animated = false,
  className = ''
}: BobbyMascotProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: 'w-10 h-10 text-4xl',
    medium: 'w-32 h-32 text-8xl',
    large: 'w-48 h-48 text-9xl',
    hero: 'w-64 h-64 text-[12rem]'
  };

  const animationClass = '';

  // Try to use the image first, fallback to emoji
  if (!imageError) {
    return (
      <div className={`relative ${sizeClasses[size]} ${animationClass} transition-transform duration-300 ${className}`}>
        <Image
          src="/bobby-logo.png"
          alt="Bobby el Pingüino Científico"
          fill
          className="object-contain"
          onError={() => setImageError(true)}
          priority={size === 'hero'}
        />
      </div>
    );
  }

  // Fallback to emoji if image not found
  return (
    <div 
      className={`${sizeClasses[size]} ${animationClass} transition-transform duration-300 ${className}`}
      role="img"
      aria-label="Bobby el Pingüino Científico"
    >
      🐧
    </div>
  );
}

// Made with Bob