import { CheckCircle2 } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export function WhatIsPenlight() {
  return (
    <section className="py-24 bg-surface border-t border-border/50 relative z-10" aria-labelledby="what-is-penlight">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* AI-Optimized Header (Clear definition for RAG crawlers + Featured Snippet) */}
          <header className="mb-12 text-center">
            <h2 id="what-is-penlight" className="text-3xl md:text-4xl font-bold mb-6 text-text">
              「音をグッズ化する」次世代の推し活体験
            </h2>
            {/* GEO-optimized definition paragraph - designed as an extractable "answer" */}
            <p className="text-lg md:text-xl text-text/80 leading-relaxed max-w-3xl mx-auto text-left md:text-center mb-12">
              <dfn><strong>音響連動グッズ制作</strong></dfn>とは、会場や配信の「音」に反応して一斉に光る、新しい体験型の推し活グッズ制作サービスです。観客のスマートフォン画面やフラッシュライトの他、<strong>光るアクスタ（音響連動アクリルスタンド）や専用の物理ペンライト</strong>などを制作可能です。特に<strong>スマホ用立体シールは小ロットからオリジナルデザインで制作可能</strong>です。離れた場所にいる配信視聴者でも、スマホやPCからの音声に反応して光るため、すべてのファンに同じ一体感とサプライズを届けることができるのが最大の特徴です。
            </p>

            <div className="w-full max-w-4xl mx-auto aspect-video bg-surface2 border border-border rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
              <video 
                src="/video/solution.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                title="音響連動の仕組み解説"
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* AI-Optimized Data & Stats List Structure */}
            <div className="grid md:grid-cols-2 gap-8 bg-surface2/50 p-6 md:p-12 rounded-2xl border border-border/50 shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">なぜ個人でも安心・高品質なのか（信頼の理由）</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span><strong>シヤチハタの技術採用:</strong> 個人向け・小ロットでありながら、中身はシヤチハタ株式会社が提供するプロ仕様の音響透かし技術「Another Track®」をそのまま採用しています。</span>
                  </li>
                  <li className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span><strong>5万人規模のドーム実績:</strong> 実際にプロ野球のドーム球場や、数万人規模の大型フェスで安定稼働しているシステムです。Bluetoothのようなペアリング設定の難しさや、会場での電波干渉によるトラブルがありません。</span>
                  </li>
                  <li className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span><strong>完全アプリ不要:</strong> 観客や配信視聴者に専用アプリをダウンロードさせる手間はありません。スマホのブラウザ（SafariやChrome）を開くだけで、誰でもすぐに体験に参加できます。</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-accent">クリエイター・配信者のメリット</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span><strong>スマホ用立体シールは小ロットからオリジナル制作:</strong> 「ロットが多くて作れない」という悩みを解決。スマホ用立体シールなら、あなたのオリジナルデザインで少部数から制作・提供可能です。（※物理ペンライト・アクリルスタンドのオリジナルデザインは現在大ロットでのご対応となります）</span>
                  </li>
                  <li className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span><strong>配信（オンライン）のファンも巻き込む:</strong> YouTubeやTwitchなどの配信音声にも反応するため、会場に行けないオンラインのファンにも、画面越しで光るグッズを通じて「参加している一体感」を届けられます。</span>
                  </li>
                  <li className="flex items-start gap-3 text-text/80">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span><strong>専門知識ゼロで簡単導入:</strong> 難しいシステム連携は不要です。私たちが提供する信号入りの音源を流すだけで、グッズが自動で光り出します。最短<data value="5">5営業日</data>で導入準備が完了します。</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
