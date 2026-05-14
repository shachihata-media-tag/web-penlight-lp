"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, FileText } from "lucide-react";

export function ChecklistBuilder() {
  const [audience, setAudience] = useState<"small" | "medium" | "large">("small");
  const [streaming, setStreaming] = useState<boolean>(true);

  // Simple Logic for Goods Production
  const steps = [
    { title: "無料見積もり・ヒアリング", owner: "Client", weeks: "お問い合わせ" },
    { title: "仕様・デザインのお打ち合わせ", owner: "Joint", weeks: "ご契約前" },
    { title: "デザインデータ・音源受領", owner: "Client", weeks: "Week 1" },
    { title: "グッズ制作・システム設定", owner: "Shachihata", weeks: "Week 2-4" },
    ...(streaming ? [{ title: "配信テスト・動作確認", owner: "Joint", weeks: "納品前" }] : []),
    { title: "納品・イベント本番", owner: "Joint", weeks: "Event Day" },
  ];

  return (
    <section className="py-24 bg-transparent border-y border-border/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center text-text">オリジナルグッズ制作・導入の流れ</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-surface2 p-6 rounded-card border border-border">
               <h3 className="font-bold mb-4 flex items-center gap-2 text-text">
                 <SettingsIcon /> 前提条件
               </h3>
               
               <div className="space-y-6">
                 <div>
                   <label className="text-xs text-muted block mb-2">想定制作ロット</label>
                   <div className="grid grid-cols-3 gap-2">
                     {(["small", "medium", "large"] as const).map((s) => (
                       <button
                         key={s}
                         onClick={() => setAudience(s)}
                         className={cn(
                           "text-xs py-2 rounded border transition-colors",
                           audience === s 
                             ? "bg-accent text-white border-accent" 
                             : "bg-surface border-border text-muted hover:border-accent/50 hover:text-text"
                         )}
                       >
                         {s === "small" ? "小ロット" : s === "medium" ? "中ロット" : "大ロット"}
                       </button>
                     ))}
                   </div>
                 </div>

                 <div>
                    <label className="text-xs text-muted block mb-2">配信連動の利用</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setStreaming(!streaming)}
                        className={cn(
                          "w-12 h-6 rounded-full transition-colors relative",
                          streaming ? "bg-accent" : "bg-border"
                        )}
                      >
                        <div className={cn(
                          "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform",
                          streaming ? "translate-x-6" : "translate-x-0"
                        )} />
                      </button>
                      <span className="text-sm">{streaming ? "あり" : "なし"}</span>
                    </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Timeline Output */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
               {steps.map((step, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-surface border border-border rounded-lg shadow-sm">
                   <div className="w-24 text-xs font-mono text-muted text-right flex-shrink-0">
                     {step.weeks}
                   </div>
                   <div className="w-8 h-8 rounded-full bg-surface2 border border-border flex items-center justify-center flex-shrink-0 text-muted">
                     {i + 1}
                   </div>
                   <div className="flex-1">
                     <p className="font-bold text-sm md:text-base">{step.title}</p>
                   </div>
                   <div className={cn(
                     "px-3 py-1 text-xs rounded-full border",
                     step.owner === "Shachihata" ? "border-accent/30 text-accent bg-accent/5" :
                     step.owner === "Client" ? "border-border text-muted bg-surface2" :
                     "border-accent2/30 text-accent2 bg-accent2/5"
                   )}>
                     {step.owner === "Shachihata" ? "シヤチハタ" : step.owner === "Client" ? "お客様" : "共同"}
                   </div>
                 </div>
               ))}
            </div>
            <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-lg flex items-start gap-3">
              <FileText className="text-accent flex-shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-muted leading-relaxed">
                ※ グッズの仕様やロット数により制作期間は変動します。<br/>
                ※ 上記はモデルケースです。詳細なスケジュールはお見積り時にご提案します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SettingsIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
    )
}
