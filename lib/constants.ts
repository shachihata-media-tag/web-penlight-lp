export const PENLIGHT_COLORS = [
  { name: "Red", value: "#FF0000" },
  { name: "Blue", value: "#0000FF" },
  { name: "White", value: "#FFFFFF" },
  { name: "Orange", value: "#FFA500" },
  { name: "Green", value: "#008000" },
  { name: "Purple", value: "#800080" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Light Green", value: "#90EE90" },
  { name: "Light Blue", value: "#ADD8E6" },
  { name: "Light Pink", value: "#FFB6C1" },
  { name: "Violet", value: "#EE82EE" },
  { name: "Lime", value: "#00FF00" },
  { name: "Turquoise", value: "#40E0D0" },
];

export const DEMO_PRESETS = [
  {
    id: "intro",
    label: "オープニング",
    description: "高揚感を煽る点滅演出",
    sequence: ["Red", "Off", "Blue", "Off", "White"], // Simplified sequence representation
  },
  {
    id: "chorus",
    label: "サビ",
    description: "会場の一体感を生む点灯",
    sequence: ["Pink", "Light Pink", "Pink", "Light Pink"],
  },
  {
    id: "finale",
    label: "エンディング",
    description: "感動的なグラデーション",
    sequence: ["White", "Yellow", "Orange", "Red"],
  },
];

// ============ FAQ Categories ============
export const FAQ_CATEGORIES = [
  { id: "production", label: "グッズ制作・小ロット対応について" },
  { id: "product", label: "スマホペンライト・光るアクスタについて" },
  { id: "streaming", label: "配信連動・オンラインライブについて" },
  { id: "tech", label: "技術仕様・音響透かしについて" },
] as const;

export const FAQS = [
  // --- グッズ制作・小ロット対応について ---
  { q: "最小ロット数はいくつからですか？", a: "クリエイターや配信者の皆様が無理なく始められるよう、スマホ用立体シールは小ロットからの制作に対応しております。物理ペンライト・アクリルスタンドのオリジナルデザインは現在大ロットでのご対応となります。具体的な数量や価格については、無料見積もりフォームよりお気軽にご相談ください。", category: "production" },
  { q: "オリジナルデザインで制作できますか？", a: "はい。ご自身のキャラクターやロゴを使った、世界に一つだけの光るアクリルスタンド（アクスタ）や、オリジナルデザインのスマホペンライト画面を制作することが可能です。", category: "production" },
  { q: "制作にかかる期間はどれくらいですか？", a: "デザインデータを入稿いただいてから、最短数週間で納品可能です。仕様やロット数により異なりますので、詳細はお問い合わせください。", category: "production" },

  // --- スマホペンライト・光るアクスタについて ---
  { q: "スマホペンライトとは何ですか？", a: "専用アプリ不要で、スマートフォンのブラウザ（Safari/Chrome）からQRコードを読み取るだけで、スマホがペンライトとして使える仕組みです。ライブ配信などの音に合わせて画面が自動で光ります。", category: "product" },
  { q: "光るアクスタ（アクリルスタンド）とは何ですか？", a: "推しのキャラクターやご自身のアクリルスタンドが、音楽に合わせて自動でLED発光する新しい推し活グッズです。配信の音に合わせて光るため、ファンと配信者の間に強い一体感が生まれます。", category: "product" },
  { q: "スマホペンライトはファンに負担がかかりますか？", a: "ファン（視聴者）側の利用は完全無料です。アプリのインストールも不要なため、誰でも簡単に参加できます。", category: "product" },

  // --- 配信連動・オンラインライブについて ---
  { q: "アーカイブ配信でもグッズは光りますか？", a: "はい。YouTubeなどのアーカイブ動画であっても、音声に信号が含まれていればリアルタイム配信と同様にグッズやスマホペンライトが連動して光ります。", category: "streaming" },
  { q: "自宅からでも配信に参加できますか？", a: "はい。ご自宅のPCやスマホで配信を視聴する際、その音声に反応して手元の光るアクスタやスマホペンライトが連動するため、まるでライブ会場にいるような体験をファンに提供できます。", category: "streaming" },

  // --- 技術仕様について ---
  { q: "音響透かし技術（Another Track®）とは何ですか？", a: "人間の耳にはほとんど聞こえない高周波の音を使って、データを送る技術です。Bluetoothのような複雑なペアリング設定が不要で、動画の音を流すだけで誰でも簡単にグッズを連動させることができます。", category: "tech" },
  { q: "信号音は配信の邪魔になりませんか？", a: "特殊な高周波帯域を使用しているため、通常の音楽やトークの音声に紛れて人間の耳にはほとんど聞こえません。配信のクオリティを落とすことなく導入可能です。", category: "tech" },
];

export const SITE_METADATA = {
  title: "推し活グッズ・音響連動グッズ制作｜スマホ用立体シールを小ロットから | Shachihata",
  description:
    "あなたの「音」がグッズになる次世代の推し活グッズ制作サービス。スマホ用立体シールならオリジナルデザインで小ロットから制作可能。プロ野球ドーム等で採用されるシヤチハタの音響透かし技術（Another Track®）を使用し、アプリ不要で会場と配信視聴者を完全同期させます。",
  siteName: "Shachihata 音響連動グッズ制作",
  keywords: [
    "推し活グッズ 制作",
    "オリジナルグッズ 小ロット",
    "音響連動グッズ",
    "スマホペンライト",
    "光るアクスタ",
    "アクリルスタンド 光る",
    "配信者 グッズ制作",
    "VTuber グッズ",
    "ライブグッズ 制作",
    "シヤチハタ",
    "Another Track",
  ],
  url: "https://www.shachihata-x-light.com",
  ogImage: "https://www.shachihata-x-light.com/og-image.png",
  lastModified: "2026-05-02",
};

// ============ Comparison Data ============
export const COMPARISON_DATA = {
  title: "従来のグッズ制作と「音響連動グッズ」の違い",
  description: "ただのアクリルスタンドやペンライトとは違う、音と光でファンを魅了する次世代のグッズ体験。",
  rows: [
    { aspect: "ファンとの一体感", bluetooth: "△ 映像とコメントのみ", acoustic: "◎ 配信の音に合わせてグッズが光る" },
    { aspect: "グッズの独自性", bluetooth: "△ デザイン勝負になりがち", acoustic: "◎ 『光と音の連動』という新しい付加価値" },
    { aspect: "ファンの利用ハードル", bluetooth: "専用アプリが必要な場合が多い", acoustic: "QRを読み込むだけ（アプリ不要）" },
    { aspect: "アーカイブ視聴", bluetooth: "× リアルタイムのみ対応", acoustic: "◎ アーカイブ動画でも連動して光る" },
    { aspect: "最小ロット", bluetooth: "数千〜数万個の大量発注が必要", acoustic: "立体シールなら小ロットから対応可能" },
  ],
} as const;

// ============ Statistics Data (RTB for Creators) ============
export const STATISTICS = [
  { value: "100", label: "年以上の歴史と信頼", unit: "年", detail: "1925年創業のシヤチハタが、あなたのグッズ制作を品質面からサポートします" },
  { value: "50,000", label: "ドーム規模での安定実績", unit: "人", detail: "プロ野球や大型ライブで採用される安定した技術を、個人クリエイターも利用可能" },
  { value: "0", label: "ファンの追加費用", unit: "円", detail: "ファンの皆様は専用アプリなどを買う必要はなく、グッズさえあれば楽しめます" },
  { value: "14", label: "対応カラー数", unit: "色", detail: "あなたの「推しカラー」に合わせた多彩な光の表現が可能です" },
] as const;

export const GOODS_METADATA = {
  title: "スマホペンライト・光るアクスタ体験デモ｜Shachihata",
  description:
    "QRコードからアクセスするだけで、スマホがペンライトに。あなたの配信の音に合わせてグッズが光る次世代の推し活グッズ体験デモページです。",
  keywords: [
    "スマホペンライト",
    "Webペンライト体験",
    "推し活グッズ 制作",
    "光るアクスタ 体験",
  ],
};
