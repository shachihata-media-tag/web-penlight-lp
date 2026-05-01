"use client";

import { useState } from "react";
import { TorchSimulator, TorchSimulatorProps } from "./TorchSimulator";
import { PhoneSimulator } from "./PhoneSimulator";
import { PENLIGHT_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, Play, Settings2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [activeColor, setActiveColor] = useState<string>(PENLIGHT_COLORS[0].value);
  const [pattern, setPattern] = useState<TorchSimulatorProps["pattern"]>("steady");
  const [status, setStatus] = useState<TorchSimulatorProps["status"]>("detecting");
  const [mode, setMode] = useState<"venue" | "stream">("venue");
  const [activeTab, setActiveTab] = useState<"torch" | "screen">("torch");

  const toggleMode = () => setMode((p) => (p === "venue" ? "stream" : "venue"));

  return (
    <section id="hero" className="relative z-0 pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover bg-black"
        >
          <source src="/video/webpenlight.mp4" type="video/mp4" />
        </video>
        {/* Overlay for video visibility while ensuring contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/30 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-white/80">「Another Track®」採用</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white relative">
            <span className="sr-only">スマホペンライト｜ペンライト・アクスタ・イベント演出を音響連動で会場と配信をひとつにするソリューション｜推し活グッズ連動対応</span>
            <span aria-hidden="true" className="block">
              会場と配信を<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF8C00]">{"\u201C"}ひとつ{"\u201D"}にする、</span><br />
              <span className="inline-block whitespace-nowrap">音響連動ソリューション</span>
            </span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            スマホがペンライトに。アクスタも光る。<br className="md:hidden" />推し活グッズが音で同期する新体験。<br className="hidden md:block" />
            専用アプリ不要で、ライブ会場も<br className="md:hidden" />自宅の配信視聴も、<br className="hidden md:block" />
            音に込めた信号で一斉にシンクロします。
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
             <Link
               href="#demos"
               className="flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
               style={{ whiteSpace: "nowrap" }}
             >
               デモを体験
               <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
             <div className="text-white">
               <div className="text-2xl font-bold mb-1">0秒</div>
               <div className="text-xs text-white/70">アプリDL不要<br/>即座に参加</div>
             </div>
             <div className="text-white">
               <div className="text-2xl font-bold mb-1">∞</div>
               <div className="text-xs text-white/70">会場・配信<br/>どこでも連動</div>
             </div>
             <div className="text-white">
               <div className="text-2xl font-bold mb-1">安価</div>
               <div className="text-xs text-white/70">専用端末不要<br/>コスト大幅減</div>
             </div>
          </div>

          <div className="mt-2">
            <p className="text-[10px] text-white/50">※「Another Track®」は、エヴィクサー株式会社の音響通信技術の名称です。</p>
          </div>
        </div>

        {/* Right: Simulator + Controls */}
        <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
          
          {/* Simulator View Toggle */}
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/20 mb-8 relative z-20 shadow-xl">
             <button
               onClick={() => setActiveTab("torch")}
               className={cn(
                 "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
                 activeTab === "torch" ? "bg-accent text-white shadow-sm" : "text-white/60 hover:text-white"
               )}
             >
               背面 (Torch)
             </button>
             <button
               onClick={() => setActiveTab("screen")}
               className={cn(
                 "px-4 py-1.5 rounded-full text-xs font-bold transition-all",
                 activeTab === "screen" ? "bg-accent text-white shadow-sm" : "text-white/60 hover:text-white"
               )}
             >
               表面 (Screen)
             </button>
          </div>

          <div className="relative">
             {activeTab === "torch" ? (
               <TorchSimulator
                 color={activeColor}
                 pattern={pattern}
                 status={status}
                 className="transform scale-90 md:scale-100 transition-transform"
               />
             ) : (
               <PhoneSimulator
                 color={activeColor}
                 pattern={pattern}
                 status={status}
                 className="transform scale-90 md:scale-100 transition-transform"
               />
             )}
             
             {/* Floating Controls for Demo A */}
             <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 p-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-subtle">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/70 text-center font-bold mb-1">
                    {activeTab === "torch" ? "シール" : "COLOR"}
                  </span>
                  {PENLIGHT_COLORS.slice(0, 5).map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setActiveColor(c.value);
                        setStatus("synced");
                      }}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                        activeColor === c.value ? "border-white scale-110" : "border-transparent"
                      )}
                      style={{ backgroundColor: c.value }}
                      title={c.name}
                      aria-label={`カラーを${c.name}に変更`}
                    />
                  ))}
                  <button
                     onClick={() => {
                       setActiveColor("#000000");
                       setStatus("waiting");
                     }}
                     className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[8px] text-white hover:border-white"
                  >OFF</button>
                </div>
                
                <div className="h-px bg-white/20 w-full my-1" />

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/70 text-center font-mono">MODE</span>
                   <button
                     onClick={() => setPattern((p) => p === "steady" ? "blink" : "steady")}
                     className={cn(
                       "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                       pattern === "blink" ? "bg-accent text-white" : "bg-white/10 text-white"
                     )}
                   >
                     <Settings2 size={14} />
                   </button>
                </div>
             </div>
          </div>
          
          <div className="mt-8 flex items-center gap-4 bg-black/50 p-1 rounded-full border border-white/20">
             <button
               onClick={() => { setMode("venue"); setStatus("detecting"); }}
               className={cn(
                 "px-6 py-2 rounded-full text-xs font-bold transition-all",
                 mode === "venue" ? "bg-accent text-white shadow-sm" : "text-white/60 hover:text-white"
               )}
             >
               会場モード
             </button>
             <button
               onClick={() => { setMode("stream"); setStatus("detecting"); }}
               className={cn(
                 "px-6 py-2 rounded-full text-xs font-bold transition-all",
                 mode === "stream" ? "bg-accent text-white shadow-sm" : "text-white/60 hover:text-white"
               )}
             >
               配信モード
             </button>
          </div>
          <p className="mt-4 text-xs text-white/70 text-center max-w-xs">
            {mode === "venue" 
              ? "登録済みの音響に連動して光ります" 
              : "PCやTVから流れる配信音声に反応して同期します。"}
          </p>
        </div>
      </div>

    </section>
  );
}
