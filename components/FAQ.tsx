"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

import { FAQS } from "@/lib/constants";

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
