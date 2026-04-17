import { PENLIGHT_COLORS } from "@/lib/constants";

export function Specs() {
  return (
    <section className="py-24 bg-transparent border-t border-border/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center text-text">仕様スペック</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colors */}
          <div>
            <h3 className="text-sm font-bold text-muted mb-6 tracking-wider">対応カラー（14色）</h3>
            <div className="grid grid-cols-5 gap-3">
              {PENLIGHT_COLORS.map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-12 h-12 rounded-full border border-border shadow-sm"
                    style={{ backgroundColor: c.value }} 
                  />
                  <span className="text-[10px] text-muted">{c.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border border-border bg-surface2 flex items-center justify-center text-[10px] text-muted shadow-sm">OFF</div>
                  <span className="text-[10px] text-muted">消灯</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
                ※ 画面輝度は端末の設定に依存します。
            </p>
          </div>

          {/* Technical Specs */}
          <div>
            <h3 className="text-sm font-bold text-muted mb-6 tracking-wider">動作環境・技術仕様</h3>
            <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted">対応OS</span>
                    <span className="font-medium text-text">iOS 14+, Android 10+</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted">ブラウザ</span>
                    <span className="font-medium text-text">Safari, Chrome (LINE内ブラウザ対応)</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted">通信</span>
                    <span className="font-medium text-text">3G/4G/5G/Wi-Fi</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted">マイク権限</span>
                    <span className="font-medium text-text">必須（音響信号検出のため）</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted">遅延</span>
                    <span className="font-medium text-text">0.1秒未満（環境による）</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted">サーバー負荷耐性</span>
                    <span className="font-medium text-text text-accent">5万人同時アクセステストクリア</span>
                </div>
            </div>
            <div className="mt-6 p-4 bg-surface rounded-lg border border-border/50 text-xs text-muted leading-relaxed space-y-3">
                <p>
                    本システムはShachihataの独自技術「音響透かし」を使用しています。<br/>
                    人間の耳には聞こえにくい高周波帯域にデータを重畳します。
                </p>
                <div className="flex items-start gap-2 bg-accent/10 p-3 rounded-md text-accent/90 border border-accent/20">
                    <div className="font-bold shrink-0">エンタープライズ実績:</div>
                    <div className="leading-tight text-muted">
                      <strong>【札幌ドーム規模での実証環境】</strong><br/>
                      50,000台のデバイスからの同時リクエストを処理可能なサーバーインフラを構築。大規模なドームツアーでも遅延なく光の同期を制御できます。
                    </div>
                </div>
                <div className="pt-3 border-t border-border">
                    <p className="font-bold text-text mb-2">音響透かしの埋め込みについて</p>
                    <p className="mb-2">
                        お客様自身で音源への透かし埋め込み・演出調整が可能です。<br/>
                        詳しい手順は以下の仕様書をご確認ください。
                    </p>
                    <a 
                        href="https://drive.google.com/file/d/19TD_W8XqiWhcZgkpU0Nu2446Kqz4xNu4/view" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 underline decoration-accent/50 underline-offset-4 transition-colors"
                    >
                        演出指示動画作成マニュアル (PDF)
                    </a>
                    <p className="mt-2 text-[10px] opacity-70">
                        ※ 弊社にて透かし埋め込み・調整を代行することも可能です（別途有償オプション）。
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
