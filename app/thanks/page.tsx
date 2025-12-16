"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function ThanksPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("shachihata_lp_contact_summary");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed.name) setName(parsed.name);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return (
    <main className="bg-bg text-text min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center py-32 px-6">
         <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-8 animate-bounce">
            <CheckCircle2 size={40} />
         </div>

         <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">お問い合わせありがとうございます</h1>
         
         <p className="text-muted text-center max-w-lg mb-12 leading-relaxed">
           {name ? `${name} 様、` : ""}お問い合わせを受け付けました。<br/>
           内容を確認の上、担当者（support@shachihata.co.jp）より<br className="hidden md:block"/>
           通常1営業日以内にご返信させていただきます。
         </p>

         <div className="bg-surface p-6 rounded-xl border border-white/10 max-w-md w-full mb-12">
           <h3 className="font-bold mb-4 border-b border-white/5 pb-2">今後の流れ</h3>
           <ol className="space-y-4 text-sm text-text/80">
             <li className="flex gap-3">
               <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">1</span>
               <span>担当者よりヒアリングのご連絡（メール/電話）</span>
             </li>
             <li className="flex gap-3">
               <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">2</span>
               <span>概算お見積りのご提示</span>
             </li>
             <li className="flex gap-3">
               <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">3</span>
               <span>音源データ・ロゴ素材のご共有</span>
             </li>
           </ol>
         </div>

         <Link href="/" className="px-8 py-3 bg-white text-bg font-bold rounded-pill hover:bg-white/90 transition-colors">
            トップページへ戻る
         </Link>
      </div>

      <Footer />
    </main>
  );
}
