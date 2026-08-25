import Image from "next/image";
import { ImageSlideshow } from "./ImageSlideshow";
import { Sparkles, MonitorPlay, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
const PRODUCTS = [
  {
    id: "physical-penlight",
    title: "音響連動型ペンライト",
    description:
      "推し活に欠かせない物理ペンライトも音響連動に対応。Bluetoothを使わない音響制御で、ドーム5万人規模でも安定同期。圧倒的な輝度と没入感を生み出す、推し活グッズの主力アイテムです。",
    icon: Sparkles,
    features: [
      "圧倒的な光量と没入感",
      "物販の主力アイテム",
      "プレミアムな所有感",
      "専用アプリ不要",
    ],
    status: "highlight",
    placeholderAspect: "aspect-square",
  },
  {
    id: "acrylic-stand",
    title: "音響連動アクスタ（光るアクリルスタンド）",
    description:
      "推しのアクスタが音楽に合わせて自動で光る。自宅での配信視聴を最前列の体験に変える、まったく新しい推し活グッズです。",
    icon: MonitorPlay,
    features: [
      "配信視聴に最適",
      "推し活グッズとして",
      "インテリアに馴染む",
    ],
    status: "coming_soon",
    placeholderAspect: "aspect-square",
  },
];

export function ProductLineup() {
  return (
    <section id="lineup" className="py-32 bg-transparent text-text relative overflow-hidden">
      {/* Refined background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] bg-accent2/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-6 text-text leading-tight">
              あらゆるシーンを、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-[#FF8C00]">
                光でハックする。
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
              物販からデジタル体験まで。シヤチハタの音響連動技術は、ハードウェアの壁を越え、会場と配信をシームレスに繋ぎます。
            </p>
          </div>

          {/* Video Player */}
          <div className="w-full aspect-video bg-surface2 border border-border rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group">
            <video 
              src="/video/m_choco.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              title="音響連動グッズの活用シーン"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Merged Layout for remaining products */}
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-text text-center">ペンライト・アクスタ・推し活グッズ 取扱アイテム</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* Secondary Product */}
          <div className="group relative overflow-hidden rounded-2xl bg-border p-[1px] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-accent)_50%,transparent_100%)]" />
            <div className="relative flex h-full w-full flex-col bg-surface rounded-[15px] z-10 overflow-hidden transition-colors group-hover:bg-surface/95">
              <div className="p-6 lg:p-8 pb-0 flex-1">
                 <h3 className="text-xl font-bold mb-3">{PRODUCTS[0].title}</h3>
                 <p className="text-muted text-sm leading-relaxed mb-4">
                   {PRODUCTS[0].description}
                 </p>
                 <div className="flex flex-wrap gap-2 mb-6">
                    {PRODUCTS[0].features.map((feature, fIdx) => (
                      <div key={fIdx} className="text-[11px] text-muted bg-black/5 px-2 py-1 rounded">
                          {feature}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-4 mt-auto">
                  <div className={cn(
                    PRODUCTS[0].placeholderAspect,
                    "w-full max-w-[200px] mx-auto border border-border bg-gradient-to-tr from-surface2 to-surface relative overflow-hidden transition-all duration-500 rounded-xl"
                  )}>
                    <ImageSlideshow
                      images={[
                        "/images/4_pink.jpg",
                        "/images/9_L.Bl.jpg",
                        "/images/13_L.Yellow.jpg"
                      ]}
                      interval={3000}
                      altPrefix="音響連動型ペンライト"
                    />
                  </div>
              </div>
            </div>
          </div>

          {/* Fourth Product */}
          <div className="group relative overflow-hidden rounded-2xl bg-border p-[1px] shadow-sm hover:shadow-lg transition-all duration-300">
             <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-accent)_50%,transparent_100%)]" />
             <div className="relative flex h-full w-full flex-col bg-surface rounded-[15px] z-10 overflow-hidden transition-colors group-hover:bg-surface/95">
               <div className="p-6 lg:p-8 pb-0 flex-1 relative z-10">
                  <div className="flex justify-between items-start mb-3 gap-2">
                     <h3 className="text-xl font-bold">{PRODUCTS[1].title}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {PRODUCTS[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {PRODUCTS[1].features.map((feature, fIdx) => (
                      <div key={fIdx} className="text-[11px] text-muted bg-black/5 px-2 py-1 rounded">
                          {feature}
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-4 mt-auto relative z-10">
                  <div className={cn(
                    PRODUCTS[1].placeholderAspect,
                    "w-full max-w-[200px] mx-auto border border-border bg-surface2 relative overflow-hidden transition-all duration-500 rounded-xl"
                  )}>
                    <ImageSlideshow
                      images={[
                        "/images/akusuta02_2.jpg",
                        "/images/akusuta04_2.jpg",
                        "/images/akusuta01_2.jpg"
                      ]}
                      interval={3500}
                      altPrefix="光るアクスタ（音響連動アクリルスタンド）"
                    />
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
