import type { Metadata, Viewport } from "next";
import { GOODS_METADATA, SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: GOODS_METADATA.title,
  description: GOODS_METADATA.description,
  keywords: GOODS_METADATA.keywords,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${SITE_METADATA.url}/goods`,
    title: `${GOODS_METADATA.title} | ${SITE_METADATA.siteName}`,
    description: GOODS_METADATA.description,
    siteName: SITE_METADATA.siteName,
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: "スマホペンライト体験 - 14色のカラーでライブを楽しもう",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${GOODS_METADATA.title} | ${SITE_METADATA.siteName}`,
    description: GOODS_METADATA.description,
    images: [SITE_METADATA.ogImage],
  },
  alternates: {
    canonical: `${SITE_METADATA.url}/goods`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function GoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
