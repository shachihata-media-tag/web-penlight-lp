import Image from "next/image";

export function MessageSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/50 to-surface relative z-10 overflow-hidden">
      {/* Decorative bright bloom reflecting the "illuminated" theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 leading-snug text-text">
            「いつか」の夢を「いま」叶えよう。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF8C00] mt-2 inline-block">
              あなたの第一歩を照らすオリジナルグッズ。
            </span>
          </h2>

          <div className="space-y-6 text-lg text-text/80 leading-relaxed md:text-xl font-medium">
            <p>
              「ロット数が多くてグッズが作れない…」<br />
              そんな悩みを抱える配信者さん、インフルエンサー候補の皆様へ。
            </p>
            <p className="text-xl md:text-2xl font-bold text-text py-4">
              シヤチハタは、これから輝くあなたの挑戦を全力で応援します。
            </p>
            <p>
              小規模から無理なく作れる本格的なペンライトや光るアクスタ台座で、<br className="hidden lg:block" />
              ファンにあなたの「好き」を届けませんか？
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/shachihata_100.jpg"
              alt="シヤチハタ 100周年"
              width={240}
              height={222}
              className="rounded-xl shadow-md"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
