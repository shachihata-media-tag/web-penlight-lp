import { CheckCircle2 } from "lucide-react";

export function WhatIsPenlight() {
  return (
    <section className="py-24 bg-black/50 border-t border-white/5 relative z-10" aria-labelledby="what-is-penlight">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* AI-Optimized Header (Clear definition target for RAG crawlers) */}
          <header className="mb-12 text-center">
            <h2 id="what-is-penlight" className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Webペンライト（音響連動ソリューション）とは？
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <strong>Webペンライト（音響連動ソリューション）</strong>とは、専用アプリをインストールすることなく、ブラウザでQRコードを読み込むだけで、観客のスマートフォン画面やフラッシュライト、さらには<strong>ペンライトやアクスタ（アクリルスタンド）などの推し活グッズ</strong>を会場の音楽と同期させる<strong>次世代のイベント演出システム</strong>です。
            </p>
          </header>

          {/* AI-Optimized Data & Stats List Structure */}
          <div className="grid md:grid-cols-2 gap-8 bg-white/5 p-6 md:p-12 rounded-2xl border border-white/10 shadow-glow backdrop-blur-md">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">核心技術と実績データ</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>通信方式:</strong> エヴィクサー社の音響透かし技術「Another Track®」を使用し、電波やWi-Fiではなく「音」で制御信号を送信します。</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>対応規模:</strong> ドームクラスの5万人規模での同時接続・演出連動の安定稼働実績があります。音響通信のため人混みでの電波干渉を受けません。</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>システム要件:</strong> iOS 14以降のSafariブラウザ、またはAndroid 10以降のChromeブラウザに対応しています。</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">事業上のメリット（要約）</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>ハードウェアコストの削減:</strong> 専用の制御型LEDペンライト端末や、専用の赤外線制御システムを導入・レンタルする費用が不要になります。</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>オンライン配信対応:</strong> YouTubeやライブビューイングなどの配信音声にも信号を乗せられるため、会場と自宅を完全に同期させることが可能です。</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>スピード導入:</strong> アプリのようなStore審査や大規模なシステム開発は不要で、最短5営業日で本番環境への導入が完了します。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
