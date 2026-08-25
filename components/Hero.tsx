import { ImageSlideshow } from "./ImageSlideshow";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
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
          title="音響連動グッズのイメージ動画"
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
            <span className="sr-only">推し活グッズ・音響連動グッズ制作｜スマホ用立体シールを小ロットから</span>
            <span aria-hidden="true" className="block">
              音のしるしで、<br />
              配信に<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF8C00]">魔法</span>を。<br />
              <span className="inline-block whitespace-nowrap text-3xl md:text-4xl xl:text-5xl mt-2">次世代の推し活グッズ</span>
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 pt-4">
             <Link
               href="#contact"
               className="flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
               style={{ whiteSpace: "nowrap" }}
             >
               資料請求
               <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
             <div className="text-white">
               <div className="text-2xl font-bold mb-1">0秒</div>
               <div className="text-xs text-white/70">アプリDL不要<br/>即座に反応</div>
             </div>
             <div className="text-white">
               <div className="text-2xl font-bold mb-1">∞</div>
               <div className="text-xs text-white/70">会場・配信<br/>どこでも連動</div>
             </div>
          </div>

          <div className="mt-2">
            <p className="text-[10px] text-white/50">※「Another Track®」は、エヴィクサー株式会社の音響通信技術の名称です。</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl border border-white/30 bg-neutral-300/70 backdrop-blur-md shadow-2xl">
            <ImageSlideshow
              images={[
                "/images/9_L.Bl.jpg",
                "/images/4_pink.jpg",
                "/images/13_L.Yellow.jpg",
              ]}
              interval={2200}
              altPrefix="色が切り替わる音響連動型ペンライト"
              imageClassName="object-contain scale-[1.22] mix-blend-multiply"
            />
          </div>
          <p className="mt-4 text-xs font-medium tracking-wide text-white/70">
            音に合わせてペンライトのカラーが切り替わります
          </p>
        </div>
      </div>

    </section>
  );
}
