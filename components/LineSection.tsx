import { MessageSquare } from "lucide-react";

export function LineSection() {
  return (
    <section className="py-24 bg-[#06C755]/5 border-y border-[#06C755]/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06C755]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-16 h-16 bg-[#06C755] text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#06C755]/20">
                <MessageSquare size={32} fill="currentColor" />
            </div>
            
            <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">LINE公式アカウント連携</h2>
                <p className="text-text/90 leading-relaxed max-w-2xl">
                    LINE公式アカウントからリッチメニュー経由でペンライトを起動可能。<br/>
                    アプリ内ブラウザでシームレスに動作し、参加ログを活用したイベント後のメッセージ配信やキャンペーン展開へ繋げることができます。
                </p>
            </div>

            <div className="flex-shrink-0">
                <div className="px-6 py-3 bg-[#06C755]/10 border border-[#06C755]/30 rounded-lg text-[#06C755] text-sm font-bold">
                    要・別途ご相談
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
