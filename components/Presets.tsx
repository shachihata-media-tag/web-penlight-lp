'use client';

import { useState, useEffect } from 'react';
import { TorchSimulator } from './TorchSimulator';
import { DEMO_PRESETS, PENLIGHT_COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

export function Presets() {
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [simulatorColor, setSimulatorColor] = useState('#000000');
  const [simulatorPattern, setSimulatorPattern] = useState<any>('steady');

  // Mock sequence runner
  useEffect(() => {
    if (!activePreset) return;

    const preset = DEMO_PRESETS.find((p) => p.id === activePreset);
    if (!preset) return;

    let step = 0;
    const interval = setInterval(() => {
      // Simple mock sequence logic adapted for Torchlight
      const colorName = preset.sequence[step % preset.sequence.length];
      
      if (colorName === 'Off') {
        setSimulatorColor('#000000');
        setSimulatorPattern('steady');
      } else {
        setSimulatorColor('#FFFF00'); // Standard torchlight color
        
        // Map preset to different pulse patterns
        if (preset.id === 'intro') {
          setSimulatorPattern('fast-blink');
        } else if (preset.id === 'finale') {
          setSimulatorPattern('blink');
        } else {
          setSimulatorPattern('steady');
        }
      }
      step++;
    }, 800); // Change every 800ms

    return () => clearInterval(interval);
  }, [activePreset]);

  return (
    <section id='preset-demos' className='py-24 bg-transparent relative' aria-label='演出パターンプリセット'>
      <div className='container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        <div>
          <span className='text-accent text-sm font-bold tracking-widest uppercase mb-2 block'>Presets</span>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>演出パターン例</h2>
          <p className='text-muted mb-8 leading-relaxed'>
            楽曲の展開に合わせたプリセット演出をご用意。
            <br />
            これらを組み合わせるだけで、プロフェッショナルな演出が可能です。
            <span className='block mt-3 text-sm text-muted/80'>
              ※スマホのトーチライトを使用する場合は、色の変化ではなくパルス（点滅）などの光り方が音響連動します。
            </span>
          </p>

          <div className='space-y-4'>
            {DEMO_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  if (activePreset === preset.id) {
                    setActivePreset(null);
                    setSimulatorColor('#000000');
                  } else {
                    setActivePreset(preset.id);
                  }
                }}
                className={cn(
                  'w-full text-left p-6 rounded-xl border transition-all flex items-center justify-between group',
                  activePreset === preset.id ? 'bg-surface border-accent shadow-xl' : 'bg-surface2 border-border hover:border-accent/50'
                )}>
                <div>
                  <h3 className={cn('text-lg font-bold mb-1', activePreset === preset.id ? 'text-accent' : 'text-text')}>{preset.label}</h3>
                  <p className='text-sm text-muted'>{preset.description}</p>
                </div>
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center border transition-all',
                    activePreset === preset.id ? 'bg-accent border-accent text-white' : 'border-border group-hover:border-accent text-muted group-hover:text-accent'
                  )}>
                  <Play size={16} fill={activePreset === preset.id ? 'currentColor' : 'none'} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mini Simulator for Preview */}
        <div className='flex justify-center bg-surface2 p-8 rounded-3xl border border-border'>
          <TorchSimulator
            color={simulatorColor}
            pattern={simulatorPattern}
            status='synced'
            className='transform scale-90'
          />
        </div>
      </div>
    </section>
  );
}
