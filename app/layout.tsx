import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_METADATA } from "@/lib/constants";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DynamicBackground } from "@/components/DynamicBackground";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.siteName}`,
  },
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  authors: [{ name: "Shachihata Inc.", url: "https://www.shachihata.co.jp/" }],
  creator: "Shachihata Inc.",
  publisher: "Shachihata Inc.",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.siteName,
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: "音響連動グッズ制作 – スマホ用立体シール・光るアクスタ・ペンライト | Shachihata",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage],
  },
  alternates: {
    canonical: SITE_METADATA.url,
    languages: {
      'ja': SITE_METADATA.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://api.qrserver.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* AI Engine Discovery - llms.txt standard */}
        <link rel="author" href="/llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM-readable full guide" />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          notoSansJP.variable,
          "font-sans min-h-screen flex flex-col bg-transparent tracking-wide"
        )}
      >
        <StructuredData />
        <DynamicBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
