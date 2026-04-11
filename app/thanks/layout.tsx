import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ完了 | Shachihata 音響連動ソリューション",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
