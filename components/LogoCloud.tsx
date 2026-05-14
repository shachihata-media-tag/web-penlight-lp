export function LogoCloud() {
  return (
    <section className="py-12 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-xs font-bold tracking-widest text-muted uppercase mb-8">
          導入実績・活用想定シーン
        </p>
        
        <div className="relative flex flex-col gap-4 md:gap-5 overflow-hidden py-4 max-w-[100vw] mx-auto opacity-90">
          {/* 左右のフェードエッジ */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-bg to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-bg to-transparent z-10"></div>

          {/* 1行目（左へスクロール） */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex gap-3 md:gap-4 px-1.5 md:px-2">
              {[
                "大型音楽フェス", "VTuber配信", "オンラインライブ", 
                "クラウドファンディング", "限定グッズ", "アクリルスタンド", 
                "スマホペンライト", "立体シール", "プロ野球実績"
              ].map((tag, i) => (
                <div key={`r1-1-${i}`} className="group flex items-center justify-center px-5 py-2.5 rounded-full border border-border bg-surface shadow-sm hover:border-accent hover:shadow-[0_0_15px_rgba(255,59,124,0.2)] transition-all duration-300 cursor-default hover:-translate-y-0.5 whitespace-nowrap shrink-0">
                   <span className="text-accent/60 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)] transition-all duration-300 mr-1 font-bold">#</span>
                   <span className="font-bold tracking-widest text-sm text-muted group-hover:text-text transition-colors">{tag}</span>
                </div>
              ))}
            </div>
            {/* シームレス切り替え用の複製 */}
            <div className="flex gap-3 md:gap-4 px-1.5 md:px-2">
              {[
                "大型音楽フェス", "VTuber配信", "オンラインライブ", 
                "クラウドファンディング", "限定グッズ", "アクリルスタンド", 
                "スマホペンライト", "立体シール", "プロ野球実績"
              ].map((tag, i) => (
                <div key={`r1-2-${i}`} className="group flex items-center justify-center px-5 py-2.5 rounded-full border border-border bg-surface shadow-sm hover:border-accent hover:shadow-[0_0_15px_rgba(255,59,124,0.2)] transition-all duration-300 cursor-default hover:-translate-y-0.5 whitespace-nowrap shrink-0">
                   <span className="text-accent/60 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)] transition-all duration-300 mr-1 font-bold">#</span>
                   <span className="font-bold tracking-widest text-sm text-muted group-hover:text-text transition-colors">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2行目（右へスクロール） */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            <div className="flex gap-3 md:gap-4 px-1.5 md:px-2">
              {[
                "同人イベント", "ゲーム実況", "歌ってみた", 
                "リリース記念", "推し活", "ファンクラブ特典", 
                "オンラインファンミ", "舞台・ミュージカル", "メタバース"
              ].map((tag, i) => (
                <div key={`r2-1-${i}`} className="group flex items-center justify-center px-5 py-2.5 rounded-full border border-border bg-surface shadow-sm hover:border-accent hover:shadow-[0_0_15px_rgba(255,59,124,0.2)] transition-all duration-300 cursor-default hover:-translate-y-0.5 whitespace-nowrap shrink-0">
                   <span className="text-accent/60 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)] transition-all duration-300 mr-1 font-bold">#</span>
                   <span className="font-bold tracking-widest text-sm text-muted group-hover:text-text transition-colors">{tag}</span>
                </div>
              ))}
            </div>
            {/* シームレス切り替え用の複製 */}
            <div className="flex gap-3 md:gap-4 px-1.5 md:px-2">
              {[
                "同人イベント", "ゲーム実況", "歌ってみた", 
                "リリース記念", "推し活", "ファンクラブ特典", 
                "オンラインファンミ", "舞台・ミュージカル", "メタバース"
              ].map((tag, i) => (
                <div key={`r2-2-${i}`} className="group flex items-center justify-center px-5 py-2.5 rounded-full border border-border bg-surface shadow-sm hover:border-accent hover:shadow-[0_0_15px_rgba(255,59,124,0.2)] transition-all duration-300 cursor-default hover:-translate-y-0.5 whitespace-nowrap shrink-0">
                   <span className="text-accent/60 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_var(--color-accent)] transition-all duration-300 mr-1 font-bold">#</span>
                   <span className="font-bold tracking-widest text-sm text-muted group-hover:text-text transition-colors">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
