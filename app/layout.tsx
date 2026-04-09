import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google"; // Corrected import
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
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  alternates: {
    canonical: SITE_METADATA.url,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.variable, notoSansJP.variable, "font-sans min-h-screen flex flex-col bg-transparent tracking-wide")}>
        <DynamicBackground />
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
