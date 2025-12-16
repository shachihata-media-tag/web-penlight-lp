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

export const FAQS = [
  { q: "専用アプリのインストールは必要ですか？", a: "不要です。標準ブラウザ（Safari/Chrome）で動作するため、QRコードを読み込むだけですぐに参加できます。" },
  { q: "オフライン（電波がない環境）でも使えますか？", a: "初回読み込み（ページ表示）には通信が必要ですが、一度読み込めば、演出信号の受信自体はマイクを使用するため通信環境に依存せず動作します。" },
  { q: "バッテリーの消費は激しいですか？", a: "画面を常時点灯させ、マイク機能を使用するため通常のブラウジングよりは消費しますが、ゲームアプリ等と比較すると軽微です。" },
  { q: "アーカイブ配信でも連動しますか？", a: "はい。動画の音声に信号が含まれていれば、YouTube等のアーカイブ配信でも同様に連動します。" },
  { q: "アンドロイド端末でも使えますか？", a: "はい。Android 10以降のChromeブラウザで動作確認を行っております。" },
  { q: "同時に何人まで参加できますか？", a: "音響連動方式のため、サーバー負荷は小さく、理論上人数制限はありません。数万人規模のドーム実績もございます。" },
  { q: "導入にかかる期間は？", a: "最短5営業日での納品が可能です（素材受領後）。カスタマイズ内容により異なります。" },
  { q: "信号音は耳に聞こえますか？", a: "特殊な高周波帯域を使用しているため、通常の音楽や環境音に紛れてほとんど聞こえません。" },
  { q: "ロゴの差し替え費用は？", a: "基本パッケージに含まれます。イベントごとに異なるロゴを設定可能です。" },
  { q: "自分のスマホが対応しているか確認したい", a: "デモページ（このLPのシミュレーター）が動作すれば、本番環境でも問題なく動作します。" },
];

export const SITE_METADATA = {
  title: "音響連動WEBペンライト | Shachihata Inc.",
  description: "シヤチハタ株式会社が提供する「音響連動WEBペンライト」。専用アプリ不要、QRコードを読み込むだけでスマホがペンライトに早変わり。ライブ会場と配信視聴者を光でつなぐ次世代のイベント演出ソリューションです。",
};
