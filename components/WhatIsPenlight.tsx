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
              楽曲連動ソリューションとは？
            </h2>
            {/* GEO-optimized definition paragraph - designed as an extractable "answer" */}
            <p className="text-lg md:text-xl text-text/80 leading-relaxed max-w-3xl mx-auto text-left md:text-center mb-12">
              <dfn><strong>楽曲連動ソリューション</strong></dfn>とは、シヤチハタ株式会社が提供する<strong>アプリ不要の次世代イベント演出・ライブ演出システム</strong>です。会場の音楽（音響信号）と自動で同期し、観客のスマートフォン画面やフラッシュライトだけでなく、<strong>光るアクスタ（音響連動アクリルスタンド）や専用の物理ペンライトなどの推し活グッズ</strong>も一斉に連動して光ります。コンサート・ライブ・スポーツ・企業イベントの客席演出から、自宅での配信視聴まで、ハードウェアの壁を越えてすべての人に同じ一体感を届けることができるのが最大の特徴です。
            </p>

            <div className="w-full max-w-4xl mx-auto aspect-video bg-surface2 border border-border rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
              <video 
                src="/video/solution.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
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
                  <span><strong>対応規模:</strong> ドームクラスの<strong><data value="50000">5万人規模</data></strong>での同時接続・イベント演出連動の安定稼働実績。アイドル・VTuber・K-POP・スポーツなど幅広いジャンルのイベント演出で採用されています。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>対応デバイス:</strong> iOS 14以降のSafari、Android 10以降のChrome。スマホの他、音響連動モジュール搭載の<strong>物理ペンライト</strong>や<strong><dfn>光るアクスタ（音響連動アクリルスタンド）</dfn></strong>にも対応。</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">推し活・イベント主催者のメリット</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>専門の音響スペシャリスト不要:</strong> 大規模なシステム構築や専門知識は必要ありません。音源に信号を埋め込むだけでイベント演出に利用できるため、特別な設備なしで簡単にコンサート・ライブ演出を導入できます。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>配信視聴者も参加可能:</strong> YouTubeやライブビューイングなどの配信音声にも信号を乗せられるため、自宅でも推し活ペンライトで会場と完全同期。</span>
                </li>
                <li className="flex items-start gap-3 text-text/80">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span><strong>スピード導入:</strong> アプリのStore審査不要。最短<data value="5">5営業日</data>でイベント演出の導入が完了し、ペンライト・光るアクスタ・立体シールなどのオリジナル推し活グッズ制作も対応可能。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
