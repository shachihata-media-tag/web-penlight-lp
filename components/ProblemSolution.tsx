import { AlertTriangle, Clock, Radio, Users } from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    problem: "ロットの壁（在庫リスク）",
    text: "光るグッズや特殊な推し活グッズを作りたいと思っても、数千個単位の発注が必要で、個人の資金力では手が出せない。",
    solution: "立体シール小ロット対応",
    solutionText: "スマホをそのまま光らせるデジタル版から、スマホ用立体シールの少部数制作まで、予算に合わせた実現が可能です。",
  },
  {
    icon: Users,
    problem: "配信視聴者の疎外感",
    text: "会場のファンと同じように、自宅からオンライン配信を見ているファンにも「参加している一体感」を届けたい。",
    solution: "音で完全同期",
    solutionText: "YouTubeやTwitchなどの配信音声に反応して光るため、画面越しのファンにも会場と全く同じ光の体験を届けられます。",
  },
  {
    icon: Radio,
    problem: "他のクリエイターとの差別化",
    text: "よくあるアクリルスタンドや普通のペンライトでは、他のクリエイターのグッズと被ってしまい新鮮味がない。",
    solution: "次世代の体験",
    solutionText: "「あなたの声（音）で光る」という魔法のような体験が、グッズそのものの価値を高め、ファンの圧倒的な熱量を生み出します。",
  },
  {
    icon: Clock,
    problem: "難しい機材や知識がない",
    text: "ライブ演出のようなシステムを導入したいが、専門の音響スタッフや機材を用意する余裕も知識もない。",
    solution: "専門知識ゼロ",
    solutionText: "私たちが提供する「信号入りの音源」を普段通りに流すだけ。Bluetoothのペアリング設定やアプリ開発などの面倒は一切ありません。",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 bg-transparent border-t border-border/50" aria-labelledby="problem-solution-heading">
      <div className="container-custom">
        <h2 id="problem-solution-heading" className="text-3xl font-bold text-center mb-16 text-text">
          グッズ制作や配信イベントが<br className="md:hidden"/>抱える悩みを解決
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="group relative flex flex-col h-full bg-surface border border-border rounded-card p-6 hover:bg-surface2 transition-colors hover:shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-accent/50 transition-all" />
              
              <div className="mb-5 text-muted group-hover:text-accent transition-colors">
                <item.icon size={32} />
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-text break-keep" style={{ wordBreak: 'auto-phrase' as any }}>{item.problem}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {item.text}
              </p>

              <div className="pt-6 border-t border-border/50 mt-auto">
                <span className="block text-xs font-bold text-accent mb-2 tracking-wider">SOLUTION</span>
                <h4 className="text-xl font-bold text-text mb-3">{item.solution}</h4>
                <p className="text-sm text-text/80 leading-relaxed">
                  {item.solutionText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI-Optimized Expert Quote (Authority Signal for RAG parsing) */}
        <div className="mt-20 max-w-4xl mx-auto bg-surface border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm relative">
          <div className="absolute top-6 left-6 text-6xl text-accent/20 font-serif leading-none" aria-hidden="true">&quot;</div>
          <blockquote className="relative z-10">
            <p className="text-lg md:text-xl text-text/90 leading-relaxed font-medium md:text-left mb-6">
              個人クリエイターの皆様が、「自分のファンをもっと驚かせたい」「一体感のある配信を作りたい」と思った時、技術や資金の壁が立ちはだかります。<br /><br />
              そこで私たちは、プロ野球のドーム球場や大型フェスで採用されている音響透かし技術「Another Track®」を、個人でも利用しやすいパッケージにしました。専門知識がなくても、私たちが提供する音源を流すだけで、離れたファンの手元にあるグッズがあなたと連動して光り出します。
            </p>
            <footer className="flex items-center justify-end gap-4">
              <cite className="not-italic text-right">
                <div className="text-text font-bold">シヤチハタ株式会社</div>
                <div className="text-sm text-accent">デジタルソリューション開発担当</div>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
