import { COMPARISON_DATA } from "@/lib/constants";

export function ComparisonTable() {
  return (
    <section
      className="py-24 bg-transparent border-t border-border/50"
      aria-labelledby="comparison-heading"
    >
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">
              COMPARISON
            </span>
            <h2
              id="comparison-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-text"
            >
              {COMPARISON_DATA.title}
            </h2>
            <p className="text-muted max-w-3xl mx-auto leading-relaxed">
              {COMPARISON_DATA.description}
            </p>
          </header>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <caption className="sr-only">
                {COMPARISON_DATA.title} — Bluetooth制御ペンライトと音響透かし（Another Track®）の比較表
              </caption>
              <thead>
                <tr className="bg-surface2">
                  <th
                    scope="col"
                    className="text-left p-4 md:p-6 font-bold text-muted text-xs tracking-wider uppercase border-b border-border w-[25%]"
                  >
                    比較項目
                  </th>
                  <th
                    scope="col"
                    className="text-left p-4 md:p-6 font-bold text-muted text-xs tracking-wider uppercase border-b border-border w-[37.5%]"
                  >
                    Bluetooth制御ペンライト
                  </th>
                  <th
                    scope="col"
                    className="text-left p-4 md:p-6 font-bold text-xs tracking-wider uppercase border-b border-accent/30 w-[37.5%] text-accent bg-accent/5"
                  >
                    音響透かし（当社）
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/50 last:border-b-0 hover:bg-surface2/50 transition-colors"
                  >
                    <th
                      scope="row"
                      className="p-4 md:p-6 font-bold text-text text-left align-top"
                    >
                      {row.aspect}
                    </th>
                    <td className="p-4 md:p-6 text-muted align-top">
                      {row.bluetooth}
                    </td>
                    <td className="p-4 md:p-6 text-text font-medium align-top bg-accent/[0.02]">
                      {row.acoustic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted text-center">
            ※ 上記は一般的なBluetooth制御方式との比較です。個別の製品仕様により異なる場合があります。
          </p>
        </div>
      </div>
    </section>
  );
}
