"use client";

import { Smartphone, Volume2 } from "lucide-react";
import Image from "next/image";

export function DemoSection() {
  return (
    <section
      id="demos"
      className="py-24 bg-transparent border-t border-border/50 relative overflow-hidden"
      aria-label="デモ体験"
    >
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">
            DEMO EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            スマホペンライトを実際に体験
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            お手持ちのスマートフォンで、ペンライトの音響連動を実際に体験できます。<br className="hidden md:block"/>
            QRコードを読み取り、下記の動画を再生するだけでスマホがペンライトに。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Step 1: QR Code */}
          <article className="bg-surface border border-border rounded-card p-8 text-center relative group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 to-transparent opacity-50" />
            
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface2 border border-border text-text mb-6" aria-hidden="true">
              <Smartphone size={24} />
            </div>

            <h3 className="text-xl font-bold mb-4">1. スマホでスキャン</h3>
            <p className="text-sm text-muted mb-8">
              カメラアプリでQRコードを読み取ってください。<br/>
              ブラウザで専用ページが開きます。
            </p>

            <div className="bg-white p-4 rounded-xl inline-block mx-auto mb-4">
              <Image 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://d2gj7fm9gwjygp.cloudfront.net"
                alt="デモ体験用QRコード - スマートフォンで読み取ってください" 
                width={224}
                height={224}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-xs text-muted/50">※画面はイメージです</p>
          </article>

          {/* Step 2: Vimeo */}
          <article className="bg-surface border border-border rounded-card p-8 text-center relative group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-accent/50 opacity-50" />

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface2 border border-border text-text mb-6" aria-hidden="true">
              <Volume2 size={24} />
            </div>

            <h3 className="text-xl font-bold mb-4">2. 音源を再生</h3>
            <p className="text-sm text-muted mb-8">
              スマホの画面を開いたまま、<br/>
              この動画を再生すると光が連動します。
            </p>

            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden border border-border/50 relative shadow-inner">
               <iframe 
                src="https://player.vimeo.com/video/812654612?title=0&byline=0&portrait=0" 
                className="absolute top-0 left-0 w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
                loading="lazy"
                title="音響連動デモ音源 - ペンライト連動体験用動画"
              ></iframe>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
