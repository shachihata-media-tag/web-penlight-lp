'use client';

import { useEffect, useState } from 'react';

export function DynamicBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none w-full h-full bg-bg">
      {/* 
        Soft glowing orbs meant to resemble out-of-focus white torchlights 
        and provide a pop pastel backdrop.
      */}
      
      {/* Soft Pastel Pink Orb - Top Right */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full animate-blob pointer-events-none"
        style={{ 
          top: '-15%', 
          right: '-10%', 
          animationDelay: '0s', 
          animationDuration: '14s',
          background: 'radial-gradient(circle at center, rgba(255,182,193,0.3) 0%, transparent 60%)'
        }}
      />
      
      {/* Soft Pastel Yellow Orb - Bottom Left */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full animate-blob pointer-events-none"
        style={{ 
          bottom: '-10%', 
          left: '-5%', 
          animationDelay: '4s', 
          animationDuration: '18s',
          background: 'radial-gradient(circle at center, rgba(255,250,205,0.4) 0%, transparent 60%)'
        }}
      />
      
      {/* Soft Pastel Blue Orb - Middle */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full animate-blob pointer-events-none"
        style={{ 
          top: '30%', 
          left: '20%', 
          animationDelay: '2s', 
          animationDuration: '12s',
          background: 'radial-gradient(circle at center, rgba(173,216,230,0.3) 0%, transparent 60%)'
        }}
      />
      
      {/* Base shadow layer removed so orbs are visible */}
      
      {/* Noise texture overlay for a slightly more physical, premium feel */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </div>
  );
}
