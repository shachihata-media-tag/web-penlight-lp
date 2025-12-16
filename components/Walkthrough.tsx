"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { QrCode, Smartphone, Sparkles, Volume2 } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "QRアクセス",
    desc: "会場スクリーンや配信画面のQRコードをスマホで読み取ります。",
    icon: QrCode,
  },
  {
    id: 2,
    title: "待機・再生",
    desc: "「START」をタップして待機。特別なアプリのインストールは不要です。",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "音響検出",
    desc: "会場や配信から流れる音楽に含まれる「音のしるし」をスマホが自動検出。",
    icon: Volume2,
  },
  {
    id: 4,
    title: "一斉連動",
    desc: "検出した信号に合わせて、画面の色や点滅パターンが瞬時に変化します。",
    icon: Sparkles,
  },
];

export function Walkthrough() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="features" className="py-24 bg-surface border-y border-white/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold">参加は4ステップ</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.id}
                role="button"
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "flex items-start gap-6 p-6 rounded-xl border transition-all cursor-pointer",
                  activeStep === step.id
                    ? "bg-white/5 border-accent/50 shadow-glow"
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors",
                    activeStep === step.id ? "bg-accent text-white" : "bg-white/10 text-muted"
                )}>
                  {step.id}
                </div>
                <div>
                  <h3 className={cn("text-xl font-bold mb-2", activeStep === step.id ? "text-white" : "text-muted")}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Visual/Preview area */}
          <div className="relative h-[500px] bg-bg rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-50" />
            
            {/* Animated Icons based on step */}
            <div className="relative z-10 flex flex-col items-center gap-6 transition-all duration-500 key={activeStep}">
               {(() => {
                 const Icon = STEPS[activeStep - 1].icon;
                 return <Icon size={120} className="text-white opacity-80" strokeWidth={1} />;
               })()}
               <p className="text-xl font-bold text-white tracking-widest">STEP {activeStep}</p>
            </div>

            {/* Step specific extra visuals */}
            {activeStep === 3 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 border border-accent/20 rounded-full animate-ping opacity-20" />
                    <div className="w-48 h-48 border border-accent/30 rounded-full animate-ping delay-100 opacity-20" />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
