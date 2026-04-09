export function LogoCloud() {
  return (
    <section className="py-12 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-xs font-bold tracking-widest text-muted uppercase mb-8">
          導入実績・活用想定シーン
        </p>
        
        {/* We use a simple flex wrap for the logos. In a real scenario, this could be a marquee. */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* Placeholder Logos */}
          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
               <span className="font-bold text-sm">A</span>
             </div>
             <span className="font-bold tracking-wider text-sm">ArenaLive</span>
          </div>

          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
             <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
               <span className="font-bold text-sm">V</span>
             </div>
             <span className="font-bold tracking-wider text-sm">V-Tuber Fes</span>
          </div>

          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
             <div className="w-8 h-8 rotate-45 bg-white/20 flex items-center justify-center">
               <span className="font-bold text-sm -rotate-45">G</span>
             </div>
             <span className="font-bold tracking-wider text-sm">GlobalStage</span>
          </div>

          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
             <div className="w-8 h-8 rounded-lg border-2 border-white/20 flex items-center justify-center">
               <span className="font-bold text-sm">D</span>
             </div>
             <span className="font-bold tracking-wider text-sm">DomeTours</span>
          </div>

          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
             <div className="w-8 h-8 flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
               </svg>
             </div>
             <span className="font-bold tracking-wider text-sm">EventCorp</span>
          </div>

        </div>
      </div>
    </section>
  );
}
