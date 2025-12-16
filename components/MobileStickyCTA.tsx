"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 p-4 bg-bg/80 backdrop-blur-lg border-t border-white/10 z-40 transition-transform duration-300 md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Link
        href="#contact"
        className="flex items-center justify-center w-full py-3.5 text-sm font-bold text-bg bg-accent rounded-pill shadow-glow"
      >
        お問い合わせ
      </Link>
    </div>
  );
}
