"use client";

import { useState } from "react";
import { X, FileDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際のアプリケーションではここでAPIへ送信する
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => {
          if (!isSubmitted) onClose();
          else {
            onClose();
            // 閉じた後に状態をリセットする場合
            setTimeout(() => setIsSubmitted(false), 300);
          }
        }}
      />
      
      {/* Modal */}
      <div className="relative bg-surface border border-border rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => {
             onClose();
             if (isSubmitted) setTimeout(() => setIsSubmitted(false), 300);
          }}
          className="absolute top-4 right-4 text-muted hover:text-text transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg text-accent">
                 <FileDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text leading-tight">導入事例・資料ダウンロード</h3>
                <p className="text-xs text-muted mt-1">フォーム入力後、PDFをダウンロードいただけます。</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-text mb-1" htmlFor="company">貴社名</label>
                <input 
                  type="text" 
                  id="company" 
                  required
                  className="w-full bg-surface2 border border-border rounded-md py-2 px-3 text-sm text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="シヤチハタ株式会社"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-text mb-1" htmlFor="name">ご担当者名</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-surface2 border border-border rounded-md py-2 px-3 text-sm text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-text mb-1" htmlFor="email">メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-surface2 border border-border rounded-md py-2 px-3 text-sm text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  無料で資料をダウンロード
                </button>
                <p className="text-[10px] text-muted text-center mt-3">
                  ご入力いただいた情報から、弊社担当よりご連絡をさせていただく場合がございます。
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">送信完了しました</h3>
            <p className="text-sm text-muted mb-8 max-w-[280px] mx-auto">
              ご入力いただいたメールアドレス宛に、資料のダウンロードURLをお送りしました。
            </p>
            <button 
              onClick={() => {
                onClose();
                setTimeout(() => setIsSubmitted(false), 300);
              }}
              className="px-6 py-2 border border-border text-text hover:bg-surface2 rounded-md text-sm font-bold transition-all"
            >
              閉じる
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
