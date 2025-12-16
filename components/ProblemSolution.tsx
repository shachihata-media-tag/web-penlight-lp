import { AlertTriangle, Clock, Radio, Users } from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    problem: "在庫リスク",
    text: "イベントごとのグッズ制作は、発注数予測が難しく在庫リスクが常につきまとう。",
    solution: "在庫ゼロ",
    solutionText: "スマホを使用するため、物理デバイスの製造・在庫管理が一切不要。",
  },
  {
    icon: Clock,
    problem: "配布・回収の手間",
    text: "入場時の配布や、退場時の回収・消毒作業に膨大なスタッフ工数がかかる。",
    solution: "配布なし",
    solutionText: "QRコードを掲示するだけ。入場・退場のオペレーションを阻害しません。",
  },
  {
    icon: Radio,
    problem: "電波干渉トラブル",
    text: "Bluetooth制御のライトは、Wi-Fiや他の無線機器との干渉で制御不能になるリスクがある。",
    solution: "音響通信",
    solutionText: "「音」で制御するため、電波混雑の影響を受けません。数万人のドームでも安定動作。",
  },
  {
    icon: Users,
    problem: "配信参加者の疎外感",
    text: "会場の盛り上がりに対し、配信視聴者は「ただ見ているだけ」になりがち。",
    solution: "全同時連動",
    solutionText: "配信音声にも信号を乗せることで、地球の裏側でも同じタイミングで光ります。",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-bg border-t border-white/5">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-16">
          従来の演出デバイスが抱える<br className="md:hidden"/>課題を解決
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="group relative bg-surface border border-white/5 rounded-card p-6 hover:bg-surface2 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent/50 transition-all" />
              
              <div className="mb-4 text-muted group-hover:text-accent transition-colors">
                <item.icon size={32} />
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white">{item.problem}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6 h-16">
                {item.text}
              </p>

              <div className="pt-6 border-t border-white/5">
                <span className="block text-xs font-bold text-accent mb-1">SOLUTION</span>
                <h4 className="text-xl font-bold text-white mb-2">{item.solution}</h4>
                <p className="text-sm text-text/80 leading-relaxed">
                  {item.solutionText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
