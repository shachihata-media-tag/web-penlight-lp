"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function MiniEstimator() {
  const [triggers, setTriggers] = useState(1); // 1 = ~2500, 2 = ~5000, 3 = 10000+
  const [sources, setSources] = useState(1);
  
  // Base cost
  const basePrice = 300000;
  // Extra source cost
  const extraSourceCost = 100000;
  
  const total = basePrice + (Math.max(0, sources - 1) * extraSourceCost);
  
  const triggerLabels = ["~2,500回", "~10,000回", "~50,000回", "それ以上"];

  return (
    <section id="pricing" className="py-24 bg-bg border-t border-white/5">
      <div className="container-custom">
        <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Pricing</span>
            <h2 className="text-3xl font-bold">概算費用シミュレーション</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-surface border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <label className="text-sm font-bold text-white mb-4 block">
                            音響信号の埋め込み数
                        </label>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => setSources(Math.max(1, sources - 1))}
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
                            >-</button>
                            <span className="text-2xl font-bold w-12 text-center">{sources}</span>
                            <button 
                                onClick={() => setSources(sources + 1)}
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
                            >+</button>
                            <span className="text-sm text-muted">曲分</span>
                        </div>
                        <p className="text-xs text-muted mt-2">1曲（5分以内）につき埋め込み費用が発生します。</p>
                    </div>

                    <div>
                        <label className="text-sm font-bold text-white mb-4 block">
                            想定トリガー回数（検知総数）
                        </label>
                        <input 
                            type="range" 
                            min="0" 
                            max="3" 
                            step="1" 
                            value={triggers}
                            onChange={(e) => setTriggers(parseInt(e.target.value))}
                            className="w-full accent-accent h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between mt-2 text-xs text-muted">
                            {triggerLabels.map((l, i) => (
                                <span key={i} className={cn(i === triggers ? "text-accent font-bold" : "")}>{l}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:items-end bg-bg/50 rounded-xl p-8 border border-white/5">
                    <span className="text-sm text-muted mb-1">概算費用</span>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        ¥{total.toLocaleString()}~
                    </div>
                    <span className="text-xs text-muted/60 mb-6">※税抜価格</span>

                    <ul className="text-xs text-muted space-y-2 text-right">
                        <li>モバイルWEBページ制作・ホスティング 込</li>
                        <li>音響透かし埋め込み（{sources}曲） 込</li>
                        <li>トリガー数 {triggerLabels[triggers]} まで</li>
                    </ul>

                    {triggers === 3 && (
                        <div className="mt-4 text-xs text-accent">
                            ※大規模利用はサーバーリソース調整のため別途お見積り
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
