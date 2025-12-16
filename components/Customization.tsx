import { Image as ImageIcon, Clock } from "lucide-react";

export function Customization() {
  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Customization</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">オリジナルロゴで<br/>ブランドを表現</h2>
          <p className="text-muted leading-relaxed mb-8">
            ペンライトの中央に、イベントやスポンサーのロゴを配置可能です。<br/>
            開催ごとに異なるロゴを設定し、没入感を高めます。
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                <ImageIcon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">画像仕様</h3>
                <p className="text-sm text-muted">PNG形式（背景透過推奨）、正方形、1024x1024px以内。<br/>視認性の高い白抜きロゴを推奨します。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">納期・反映</h3>
                <p className="text-sm text-muted">素材受領から約5営業日で反映可能です。<br/>急な変更にも柔軟に対応します。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] bg-bg rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-50" />
             
             {/* Logo Stack Visualization */}
             <div className="relative z-10 grid grid-cols-2 gap-8">
                 <div className="w-32 h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center animate-float">
                    <span className="font-bold">LOGO A</span>
                 </div>
                 <div className="w-32 h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <span className="font-bold">LOGO B</span>
                 </div>
                 <div className="w-32 h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                    <span className="font-bold">LOGO C</span>
                 </div>
                 <div className="w-32 h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                    <span className="font-bold">LOGO D</span>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
}
