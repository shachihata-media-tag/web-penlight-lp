import { FAQS, SITE_METADATA, COMPARISON_DATA, STATISTICS } from "@/lib/constants";

export const StructuredData = () => {
  const baseUrl = SITE_METADATA.url;

  const websiteData = {
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
    knowsAbout: [
      "ペンライト",
      "スマホペンライト",
      "音響透かし技術",
      "イベント演出",
      "コンサート演出",
      "ライブ演出",
      "推し活グッズ",
      "アクスタ",
      "アクリルスタンド",
    ],
  };

  const productData = {
    "@type": "SoftwareApplication",
    "@id": `${baseUrl}/#product`,
    name: "音響連動スマホペンライト",
    alternateName: ["Webペンライト", "Sound-Synced WEB Penlight", "音響連動ソリューション", "スマホペンライト"],
    description:
      "会場と配信を\"ひとつ\"にする、音響連動スマホペンライト。専用アプリ不要、QRコードで即参加できるライブ・コンサート・推し活の演出ソリューション。音響透かし技術「Another Track®」を採用し、5万人規模のドームでも安定動作。スマホ画面だけでなく物理ペンライトやアクスタ（光るアクリルスタンド）との連携も可能。",
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
    audience: {
      "@type": "Audience",
      audienceType: "イベント主催者、コンサートプロモーター、ライブ演出プランナー、スポーツイベント運営者、推し活ファン、ライブ配信者",
    },
    keywords: "ペンライト,スマホペンライト,推し活,アクスタ,ライブ演出,コンサート演出,イベント演出,音響連動,配信連動,客席演出,観客参加型演出",
    featureList: [
      "専用アプリ不要 - QRコードで即参加",
      "会場・配信同時連動 - 自宅からも推し活参加",
      "音響透かし通信でBluetooth干渉なし",
      "5万人同時アクセス実績（ドーム規模）",
      "14色の推しカラー対応",
      "物理ペンライト・アクスタ連動対応",
      "最短5営業日で導入可能",
      "観客側の利用完全無料",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
      description: "観客（ファン）側の利用は完全無料。主催者様向け導入費用は別途お問い合わせください。",
    },
  };

  const faqData = {
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
    "@type": "VideoObject",
    "@id": `${baseUrl}/#demo-video`,
    name: "音響連動スマホペンライト 導入イメージ動画｜ライブ・イベント演出デモ",
    description:
      "シヤチハタの音響連動ソリューションの実際の導入イメージをご紹介。会場のスマートフォンが一斉にペンライトとして光り、推し活・ライブ・イベント演出体験を革新します。アクスタ（光るアクリルスタンド）や物理ペンライトとの連動も可能。",
    thumbnailUrl: `${baseUrl}/og-image.png`,
    uploadDate: "2024-01-01",
    duration: "PT2M30S",
    contentUrl: "https://vimeo.com/1148225012",
    embedUrl: "https://player.vimeo.com/video/1148225012",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "ja",
  };

  const howToData = {
    "@type": "HowTo",
    "@id": `${baseUrl}/#howto`,
    name: "スマホをペンライトにする方法｜アプリ不要・QRコードで即参加",
    description:
      "スマホをペンライトとして使う方法を解説。専用アプリのインストールは不要で、QRコードを読み取りマイクを許可するだけの簡単3ステップ。ライブ会場でも自宅の配信視聴でも、推し活・イベント演出がもっと楽しくなります。",
    totalTime: "PT30S",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "QRコードをスキャン",
        text: "会場に掲示されたQRコードをスマートフォンのカメラで読み取り、専用ページにアクセスします。アプリのダウンロードは不要です。",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "マイクのアクセスを許可",
        text: "ブラウザがマイクへのアクセス許可を求めたら「許可」をタップします。音響信号の検出に使用します（録音はしません）。",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "音楽に合わせて自動で光る",
        text: "楽曲に埋め込まれた音響信号を検出し、スマートフォンの画面やフラッシュライトが推しカラーで自動的に演出に連動します。ペンライトやアクスタ（光るアクリルスタンド）も同時に光ります。",
      },
    ],
  };

  const articlePageData = {
    "@type": ["WebPage", "ItemPage", "TechArticle"],
    "@id": `${baseUrl}/#article`,
    url: baseUrl,
    name: "スマホペンライト（音響連動ソリューション）とは｜ペンライト・アクスタ・イベント演出の新定番",
    headline: "会場と配信をひとつにする、ペンライト・アクスタ連動の音響連動ソリューション",
    description: "シヤチハタ株式会社が提供する、アプリ不要のスマホ音響連動ペンライトシステム。推し活・ライブ・コンサート・イベント演出を革新する次世代ソリューションの公式機能・導入メリット解説ページです。光るアクスタ（アクリルスタンド）との連動にも対応。",
    image: `${baseUrl}/og-image.png`,
    datePublished: "2024-01-01T00:00:00+09:00",
    dateModified: new Date().toISOString(),
    about: [
      { "@type": "DefinedTerm", name: "スマホペンライト", description: "専用アプリ不要で、スマートフォンのブラウザだけでペンライトとして使えるシステム。QRコードを読み取るだけで即座に参加でき、音響透かし技術により楽曲と自動連動する。" },
      { "@type": "DefinedTerm", name: "ペンライト", description: "コンサートやライブイベントで観客が手に持って振る発光スティック。従来は物理デバイスだったが、スマホペンライトの登場によりスマートフォンでも代替可能に。" },
      { "@type": "DefinedTerm", name: "アクスタ", description: "アクリルスタンドの略称。推し活グッズとして人気のキャラクターやアーティストを印刷したアクリル製スタンド。音響連動型はLEDで音楽に合わせて自動発光する。正式名称は「光るアクスタ（音響連動アクリルスタンド）」。" },
      { "@type": "DefinedTerm", name: "イベント演出", description: "コンサート・ライブ・スポーツ・企業イベントなどで行われる視覚的・聴覚的な演出。スマホペンライトは客席全体を光で統一する観客参加型のイベント演出手法。" },
      { "@type": "DefinedTerm", name: "音響透かし技術", description: "人間の耳にはほとんど聞こえない高周波帯域（18kHz〜20kHz）にデジタルデータを重畳する技術。Another Track®はエヴィクサー株式会社が開発。Bluetoothと違い電波干渉が発生しない。" },
      { "@type": "DefinedTerm", name: "推し活", description: "応援対象（推し）を応援する活動全般のこと。ペンライトやアクスタなどの推し活グッズを使ったライブ参加も推し活の一環。" },
    ],
    publisher: {
      "@id": `${baseUrl}/#organization`
    },
    author: {
      "@id": `${baseUrl}/#organization`
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#what-is-penlight", "#what-is-penlight + p", "#comparison-heading"]
    },
    proficiencyLevel: "Beginner",
  };

  // ItemList for product lineup (リッチリザルト対応)
  const itemListData = {
    "@type": "ItemList",
    "@id": `${baseUrl}/#product-lineup`,
    name: "音響連動ソリューション製品ラインナップ｜ペンライト・アクスタ・スマホライト",
    description: "シヤチハタの音響連動ペンライト・推し活グッズの全ラインナップ。スマホペンライト、物理ペンライト、光るアクスタ（アクリルスタンド）、立体シールの4製品を展開。",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "音響連動型スマホライト＆立体シール",
        description: "スマホの背面フラッシュライトを音響信号で制御し、推し活デコシールを貼って楽しむ新体験。物販グッズとして展開可能。",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "音響連動型物理ペンライト",
        description: "推し活に欠かせない物理ペンライトも音響連動に対応。Bluetoothを使わない音響制御で、ドーム5万人規模でも安定同期。",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "音響連動スマホペンライト",
        description: "アプリダウンロード不要・無料でスマホがペンライトに変わる。QRコードで即参加、14色の推しカラーに対応。",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "音響連動アクスタ（光るアクリルスタンド）",
        description: "推しのアクスタが音楽に合わせて自動で光る。自宅での配信視聴を最前列の体験に変える推し活グッズ。",
      },
    ],
  };

  // OfferCatalog for services
  const offerCatalogData = {
    "@type": "OfferCatalog",
    "@id": `${baseUrl}/#services`,
    name: "ペンライト・アクスタ音響連動ソリューション サービス一覧",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "イベント演出導入パッケージ",
          description: "音響透かし埋め込み・専用ページ制作・ホスティングを含むイベント演出導入サービス。最短5営業日で稼働。",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "オリジナル推し活グッズ制作",
          description: "オリジナルデザインの物理ペンライト・光るアクスタ（アクリルスタンド）・立体シールなどの推し活グッズ制作サービス。",
        },
      },
    ],
  };

  // Consolidate all structured data into a single @graph (Google recommended)
  const graphData = {
    "@context": "https://schema.org",
    "@graph": [
      websiteData,
      organizationData,
      articlePageData,
      productData,
      faqData,
      breadcrumbData,
      videoData,
      howToData,
      itemListData,
      offerCatalogData,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
    />
  );
};
