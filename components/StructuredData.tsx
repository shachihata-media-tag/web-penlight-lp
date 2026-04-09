import { FAQS, SITE_METADATA } from "@/lib/constants";

export const StructuredData = () => {
  const baseUrl = SITE_METADATA.url;

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: SITE_METADATA.siteName,
    url: baseUrl,
    description: SITE_METADATA.description,
    inLanguage: "ja",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://www.google.com/search?q=site:${new URL(baseUrl).hostname}+{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Shachihata Inc.",
    alternateName: "シヤチハタ株式会社",
    url: "https://www.shachihata.co.jp/",
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/shachihata-logo.png`,
      width: 120,
      height: 40,
    },
    image: `${baseUrl}/og-image.png`,
    foundingDate: "1925",
    legalName: "シヤチハタ株式会社",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 700,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "天塚町四丁目69番地",
      addressLocality: "名古屋市西区",
      addressRegion: "愛知県",
      postalCode: "451-0021",
      addressCountry: "JP",
    },
    sameAs: [
      "https://www.shachihata.co.jp/",
      "https://www.instagram.com/artline.japan",
      "https://www.facebook.com/shachihata.official",
      "https://www.youtube.com/@shachihataxstamper7890",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+81-52-521-3600",
      availableLanguage: ["Japanese", "English"],
    },
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": ["Product", "SoftwareApplication"],
    "@id": `${baseUrl}/#product`,
    name: "音響連動ソリューション（スマホペンライト）",
    alternateName: "Sound-Synced WEB Penlight",
    description:
      "会場と配信を\"ひとつ\"にする、音響連動スマホペンライト。専用アプリインストール不要、QRコードで即参加できるイベント演出ソリューション。音響透かし技術「Another Track®」を採用し、5万人規模のドームでも安定動作。",
    image: `${baseUrl}/og-image.png`,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS 14+, Android 10+",
    brand: {
      "@type": "Brand",
      name: "Shachihata",
    },
    manufacturer: {
      "@id": `${baseUrl}/#organization`,
    },
    category: "イベント演出ソリューション",
    offers: {
      "@type": "Offer",
      priceCurrency: "JPY",
      availability: "https://schema.org/OnlineOnly",
      url: baseUrl,
    },
    featureList: [
      "専用アプリ不要 - QRコードで即参加",
      "会場・配信同時連動",
      "音響透かし通信でBluetooth干渉なし",
      "5万人同時アクセス実績",
      "14色のカラーバリエーション",
      "最短5営業日で導入可能",
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: baseUrl,
      },
    ],
  };

  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${baseUrl}/#demo-video`,
    name: "音響連動ソリューション 導入イメージ動画",
    description:
      "シヤチハタの音響連動ソリューションの実際の導入イメージをご紹介。会場のスマートフォンが一斉にペンライトとして光り、ライブ体験を革新します。",
    thumbnailUrl: `${baseUrl}/og-image.png`,
    uploadDate: "2024-01-01",
    contentUrl: "https://vimeo.com/1148225012",
    embedUrl: "https://player.vimeo.com/video/1148225012",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "ja",
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${baseUrl}/#howto`,
    name: "音響連動スマホペンライトの使い方",
    description:
      "数タップで誰でもスマホペンライトに参加できます。専用アプリのインストールは不要です。",
    totalTime: "PT30S",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "QRコードをスキャン",
        text: "会場に掲示されたQRコードをスマートフォンのカメラで読み取り、専用ページにアクセスします。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "マイクのアクセスを許可",
        text: "ブラウザがマイクへのアクセス許可を求めたら「許可」をタップします。音響信号の検出に使用します。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "音楽に合わせて自動で光る",
        text: "楽曲に埋め込まれた音響信号を検出し、スマートフォンの画面やフラッシュライトが自動で演出に連動します。",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
    </>
  );
};
