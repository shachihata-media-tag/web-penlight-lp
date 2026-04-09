'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TorchSimulatorProps {
  color: string;
  pattern: 'steady' | 'blink' | 'fast-blink' | 'random';
  status: 'waiting' | 'detecting' | 'synced';
  className?: string;
  intensity?: number;
}

export function TorchSimulator({ color, pattern, status, className, intensity = 1 }: TorchSimulatorProps) {
  const getAnimationClass = () => {
    switch (pattern) {
      case 'blink': return 'animate-[pulse_1s_ease-in-out_infinite]';
      case 'fast-blink': return 'animate-[pulse_0.3s_ease-in-out_infinite]';
      case 'random': return 'animate-pulse';
      default: return '';
    }
  };

  const statusText = {
    waiting: '待機中...',
    detecting: '音響信号を受信中...',
    synced: '同期完了',
  };

  const activeColor = color === '#000000' ? 'transparent' : color;
  const isGlowing = status !== 'waiting' && activeColor !== 'transparent';

  return (
    <div className={cn('relative mx-auto w-[280px] h-[580px] bg-[#151516] rounded-[48px] border-[4px] border-[#2c2c2e] shadow-2xl overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c2c2e]/50 to-[#000000] opacity-80 mix-blend-overlay" />
      
      {/* Camera Bump Area (Modern Smartphone Style) */}
      <div className="absolute top-10 left-8 w-[130px] h-[130px] bg-[#141416] rounded-[32px] border border-white/[0.05] shadow-[inset_0_2px_10px_rgba(255,255,255,0.05),_4px_4px_15px_rgba(0,0,0,0.5)] p-3 z-10">
         {/* Top Left Lens */}
         <div className="absolute top-1 left-1 w-[50px] h-[50px] rounded-full bg-[#0a0a0c] border border-white/5 flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,1)] overflow-hidden">
            {/* Inner lens elements */}
            <div className="w-5 h-5 rounded-full bg-[#111115] border border-black shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)] relative flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-900/40 blur-[1px]"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/30 blur-[0.5px]"></div>
            </div>
         </div>
         {/* Bottom Left Lens */}
         <div className="absolute bottom-1 left-1 w-[50px] h-[50px] rounded-full bg-[#0a0a0c] border border-white/5 flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,1)] overflow-hidden">
            <div className="w-5 h-5 rounded-full bg-[#111115] border border-black shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)] relative flex items-center justify-center">
               <div className="w-2.5 h-2.5 rounded-full bg-blue-900/40 blur-[1px]"></div>
               <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/30 blur-[0.5px]"></div>
            </div>
         </div>
         
         {/* Bottom Right Lens (Third lens) */}
         <div className="absolute bottom-1 right-1 w-[50px] h-[50px] rounded-full bg-[#0a0a0c] border border-white/5 flex items-center justify-center shadow-[inset_0_4px_10px_rgba(0,0,0,1)] overflow-hidden">
            <div className="w-5 h-5 rounded-full bg-[#111115] border border-black shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)] relative flex items-center justify-center">
               <div className="w-2.5 h-2.5 rounded-full bg-blue-900/40 blur-[1px]"></div>
               <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/30 blur-[0.5px]"></div>
            </div>
         </div>
         
         {/* Actual phone Flash (Top Right) - Unlit state underneath the sticker */}
         {/* Flash is physically very small on real phones */}
         <div className="absolute top-[23px] right-[23px] w-[20px] h-[20px] rounded-full bg-[#fff4e0] opacity-20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] z-0"></div>
         
         {/* Flash & Sticker Area (Positioned exactly over the flash hole in top right) */}
         <div className="absolute top-[17px] right-[17px] w-[32px] h-[32px] flex items-center justify-center z-20">
            {/* Intense Light Core when active */}
            <div 
               className={cn(
                 "absolute inset-[-12px] rounded-full transition-all duration-300 blur-xl",
                 getAnimationClass()
               )}
               style={{
                  backgroundColor: isGlowing ? activeColor : 'transparent',
                  opacity: isGlowing ? intensity * 1.5 : 0,
                  boxShadow: isGlowing ? `0 0 100px 35px ${activeColor}, 0 0 50px 15px ${activeColor}` : 'none',
                  filter: isGlowing ? 'brightness(1.5)' : 'none',
               }}
            />
            
            {/* The physical LED light source container without the dark background */}
            <div className="relative flex-none w-[18px] h-[18px] rounded-full border border-white/10 flex items-center justify-center z-10 overflow-hidden mix-blend-screen">
               {/* LED Phosphor / Glowing core */}
               <div 
                  className={cn(
                    "w-[10px] h-[10px] rounded-full transition-colors duration-300",
                    getAnimationClass()
                  )}
                  style={{
                     backgroundColor: isGlowing ? activeColor : '#d4cbb3', // Beige phosphor color when off
                     opacity: isGlowing ? 1 : 0.4,
                     boxShadow: isGlowing ? `0 0 12px 4px ${activeColor}, inset 0 0 6px rgba(255,255,255,0.8)` : 'inset 0 1px 2px rgba(0,0,0,0.6)',
                  }}
               />
            </div>
         </div>
      </div>

      {/* Apple/Modern style phone branding logo placeholder */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center opacity-[0.03]">
         <svg viewBox="0 0 100 100" fill="currentColor" className="w-8 h-8 text-white">
            <path d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z" />
         </svg>
      </div>

      {/* Status indicator block at bottom */}
      <div className="absolute bottom-8 inset-x-8 flex flex-col items-center gap-2">
         <div className={cn(
            "w-2 h-2 rounded-full",
            status === 'detecting' ? 'bg-accent animate-ping' : status === 'synced' ? 'bg-green-500' : 'bg-muted'
         )} />
         <p className="text-[10px] font-mono tracking-wider text-muted/60">{statusText[status]}</p>
         {status === 'detecting' && (
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
               <div className="h-full bg-accent animate-[pulse_1s_ease-in-out_infinite]" />
            </div>
         )}
      </div>
      
      {/* Gloss overlay */}
      <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-gradient-to-tr from-transparent via-white-[0.02] to-white-[0.08]" />
    </div>
  );
}
