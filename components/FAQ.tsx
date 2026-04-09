"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-transparent" aria-label="よくあるご質問">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-text">よくあるご質問</h2>
        
        <div className="space-y-4" role="list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="border border-border/50 rounded-lg bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              role="listitem"
            >
              <button
                id={`faq-question-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface2 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-bold text-sm md:text-base pr-8">{item.q}</span>
                <ChevronDown
                  className={cn("text-muted transition-transform shrink-0", openIndex === i ? "rotate-180" : "")}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
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
