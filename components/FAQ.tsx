"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "専用アプリのインストールは必要ですか？", a: "不要です。標準ブラウザ（Safari/Chrome）で動作するため、QRコードを読み込むだけですぐに参加できます。" },
  { q: "オフライン（電波がない環境）でも使えますか？", a: "初回読み込み（ページ表示）には通信が必要ですが、一度読み込めば、演出信号の受信自体はマイクを使用するため通信環境に依存せず動作します。" },
  { q: "バッテリーの消費は激しいですか？", a: "画面を常時点灯させ、マイク機能を使用するため通常のブラウジングよりは消費しますが、ゲームアプリ等と比較すると軽微です。" },
  { q: "アーカイブ配信でも連動しますか？", a: "はい。動画の音声に信号が含まれていれば、YouTube等のアーカイブ配信でも同様に連動します。" },
  { q: "アンドロイド端末でも使えますか？", a: "はい。Android 10以降のChromeブラウザで動作確認を行っております。" },
  { q: "同時に何人まで参加できますか？", a: "音響連動方式のため、サーバー負荷は小さく、理論上人数制限はありません。数万人規模のドーム実績もございます。" },
  { q: "導入にかかる期間は？", a: "最短5営業日での納品が可能です（素材受領後）。カスタマイズ内容により異なります。" },
  { q: "信号音は耳に聞こえますか？", a: "特殊な高周波帯域を使用しているため、通常の音楽や環境音に紛れてほとんど聞こえません。" },
  { q: "ロゴの差し替え費用は？", a: "基本パッケージに含まれます。イベントごとに異なるロゴを設定可能です。" },
  { q: "自分のスマホが対応しているか確認したい", a: "デモページ（このLPのシミュレーター）が動作すれば、本番環境でも問題なく動作します。" },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center">よくあるご質問</h2>
        
        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <div key={i} className="border border-white/5 rounded-lg bg-surface overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-sm md:text-base pr-8">{item.q}</span>
                <ChevronDown
                  className={cn("text-muted transition-transform", openIndex === i ? "rotate-180" : "")}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-muted leading-relaxed text-sm">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
