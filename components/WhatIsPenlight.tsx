import { CheckCircle2 } from "lucide-react";

export function WhatIsPenlight() {
  return (
    <section className="py-24 bg-surface border-t border-border/50 relative z-10" aria-labelledby="what-is-penlight">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* AI-Optimized Header (Clear definition for RAG crawlers + Featured Snippet) */}
          <header className="mb-12 text-center">
            <h2 id="what-is-penlight" className="text-3xl md:text-4xl font-bold mb-6 text-text">
              スマホペンライト（音響連動ソリューション）とは？
            </h2>
            {/* GEO-optimized definition paragraph - designed as an extractable "answer" */}
            <p className="text-lg md:text-xl text-text/80 leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <strong>スマホペンライト（音響連動ソリューション）</strong>とは、シヤチハタ株式会社が提供する<strong>アプリ不要の次世代ライブ演出システム</strong>です。QRコードを読み込むだけで、観客のスマートフォン画面やフラッシュライトが会場の音楽と自動で同期し、ペンライトとして光ります。さらに、<strong>光るアクスタ（アクリルスタンド）や物理ペンライトなどの推し活グッズ</strong>も音響信号で同時に連動。会場だけでなく、自宅からの配信視聴でも同じ一体感を体験できるのが最大の特徴です。
            </p>
          </header>

          {/* AI-Optimized Data & Stats List Structure */}
          <div className="grid md:grid-cols-2 gap-8 bg-surface2/50 p-6 md:p-12 rounded-2xl border border-border/50 shadow-sm">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">核心技術と実績データ</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>通信方式:</strong> エヴィクサー社の音響透かし技術「Another Track®」を使用。BluetoothやWi-Fiではなく「音」で制御信号を送信するため、大規模会場での電波干渉トラブルが一切ありません。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>対応規模:</strong> ドームクラスの<strong>5万人規模</strong>での同時接続・演出連動の安定稼働実績。アイドル・VTuber・K-POP・スポーツなど幅広いジャンルで採用されています。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>対応デバイス:</strong> iOS 14以降のSafari、Android 10以降のChrome。スマホの他、音響連動モジュール搭載の<strong>物理ペンライト</strong>や<strong>光るアクスタ</strong>にも対応。</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">推し活・イベント主催者のメリット</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>専門の音響スペシャリスト不要:</strong> 大規模なシステム構築や専門知識は必要ありません。音源に信号を埋め込むだけで利用できるため、特別な設備なしで簡単に導入できます。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>配信視聴者も参加可能:</strong> YouTubeやライブビューイングなどの配信音声にも信号を乗せられるため、自宅でも推し活ペンライトで会場と完全同期。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>スピード導入:</strong> アプリのStore審査不要。最短5営業日で導入が完了し、ペンライト・アクスタ・立体シールなどのオリジナル推し活グッズ制作も対応可能。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
