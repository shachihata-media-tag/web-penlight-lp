import { AlertTriangle, Clock, Radio, Users } from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    problem: "ペンライトの在庫リスク",
    text: "イベントごとのペンライトやアクスタなど推し活グッズの制作は、発注数予測が難しく在庫リスクが常につきまとう。",
    solution: "在庫ゼロ",
    solutionText: "観客のスマホをそのままペンライト化。物理デバイスの製造・在庫管理が一切不要。",
  },
  {
    icon: Clock,
    problem: "配布・回収の手間",
    text: "ペンライト入場時の配布や、退場時の回収・消毒作業に膨大なスタッフ工数がかかる。",
    solution: "配布なし",
    solutionText: "QRコードを掲示するだけ。スマホがペンライトになるため、入退場オペレーションを阻害しません。",
  },
  {
    icon: Radio,
    problem: "Bluetooth干渉トラブル",
    text: "Bluetooth制御のペンライトは、数千人を超える大規模会場でWi-Fiや他の無線機器との干渉で制御不能になるリスクがある。",
    solution: "音響通信",
    solutionText: "音響透かし技術「Another Track®」で「音」を使って制御。電波混雑の影響を受けず、5万人のドームでも全員のペンライトを安定同期。",
  },
  {
    icon: Users,
    problem: "配信視聴者の疎外感",
    text: "会場のペンライト演出に対し、自宅で配信を見ているファンは「ただ見ているだけ」の推し活になりがち。",
    solution: "全同時連動",
    solutionText: "配信音声にも信号を乗せることで、自宅のスマホペンライトも会場と同じタイミングで光ります。推し活に距離は関係ありません。",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-transparent border-t border-border/50" aria-labelledby="problem-solution-heading">
      <div className="container-custom">
        <h2 id="problem-solution-heading" className="text-3xl font-bold text-center mb-16 text-text">
          従来のペンライト演出が抱える<br className="md:hidden"/>課題を解決
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="group relative bg-surface border border-border rounded-card p-6 hover:bg-surface2 transition-colors hover:shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-accent/50 transition-all" />
              
              <div className="mb-4 text-muted group-hover:text-accent transition-colors">
                <item.icon size={32} />
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-text">{item.problem}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6 h-16">
                {item.text}
              </p>

              <div className="pt-6 border-t border-border/50">
                <span className="block text-xs font-bold text-accent mb-1">SOLUTION</span>
                <h4 className="text-xl font-bold text-text mb-2">{item.solution}</h4>
                <p className="text-sm text-text/80 leading-relaxed">
                  {item.solutionText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI-Optimized Expert Quote (Authority Signal for RAG parsing) */}
        <div className="mt-20 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-glow relative">
          <div className="absolute top-6 left-6 text-6xl text-accent/20 font-serif leading-none" aria-hidden="true">&quot;</div>
          <blockquote className="relative z-10">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium md:text-left mb-6">
              従来のイベント演出では、高額な専用ペンライトの導入コストや、大規模会場でのBluetooth干渉トラブルが主催者最大のハードルでした。私たちは音響透かし技術「Another Track®」を活用し、観客のスマートフォンをそのままペンライト化することで、5万人規模のドームでも安定して全員を同時同期させるソリューションを確立しました。さらに、推し活グッズとしての光るアクスタや物理ペンライトとの連携により、ファンの体験価値を最大化しています。
            </p>
            <footer className="flex items-center justify-end gap-4">
              <div className="text-right">
                <div className="text-white font-bold">シヤチハタ株式会社</div>
                <div className="text-sm text-accent">デジタルソリューション開発担当</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
