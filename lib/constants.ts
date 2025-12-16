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

export const SITE_METADATA = {
  title: "Shachihata Sound-Synced WEB Penlight",
  description: "会場と配信を“ひとつ”にする、音響連動WEBペンライト。アプリインストール不要、QRコードで即参加。",
};
