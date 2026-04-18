"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

import { FAQS, FAQ_CATEGORIES } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-transparent" aria-label="よくあるご質問">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-text">ペンライト・アクスタ・イベント演出 FAQ</h2>
        <p className="text-sm text-muted text-center mb-12">スマホペンライト・光るアクスタ・音響連動イベント演出に関するよくあるご質問</p>
        
        {FAQ_CATEGORIES.map((cat) => {
          const catFaqs = FAQS.filter((f) => 'category' in f && f.category === cat.id);
          if (catFaqs.length === 0) return null;
          return (
            <div key={cat.id} className="mb-10">
              <h3 className="text-lg font-bold text-text mb-4 border-l-4 border-accent pl-4">{cat.label}</h3>
              <div className="space-y-3" role="list">
                {catFaqs.map((item, i) => {
                  const globalIdx = FAQS.indexOf(item);
                  return (
                    <div
                      key={globalIdx}
                      className="border border-border/50 rounded-lg bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      role="listitem"
                    >
                      <button
                        id={`faq-question-${globalIdx}`}
                        onClick={() => setOpenIndex(openIndex === globalIdx ? null : globalIdx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-surface2 transition-colors"
                        aria-expanded={openIndex === globalIdx}
                        aria-controls={`faq-answer-${globalIdx}`}
                      >
                        <span className="font-bold text-sm md:text-base pr-8">{item.q}</span>
                        <ChevronDown
                          className={cn("text-muted transition-transform shrink-0", openIndex === globalIdx ? "rotate-180" : "")}
                          aria-hidden="true"
                        />
                      </button>
                      <div
                        id={`faq-answer-${globalIdx}`}
                        role="region"
                        aria-labelledby={`faq-question-${globalIdx}`}
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          openIndex === globalIdx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="p-6 pt-0 text-muted leading-relaxed text-sm">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
