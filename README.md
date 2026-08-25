# シヤチハタ 音響ペンライト ランディングページ

シヤチハタの音響ペンライト＆スマホペンライトのランディングページです。

## 技術スタック

- **Framework**: Next.js 16.0.10
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.1.18
- **Icons**: Lucide React

## セットアップ

### 必要な環境

- Node.js 20.9以上（`.node-version` を参照）
- pnpm 11

### インストール

```bash
pnpm install --frozen-lockfile
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルド

本番用のビルドを作成する場合：

```bash
pnpm build
```

ビルド後のサーバーを起動する場合：

```bash
pnpm start
```

## プロジェクト構造

```
├── app/              # Next.js App Router
│   ├── page.tsx      # メインページ
│   ├── layout.tsx    # レイアウト
│   ├── globals.css   # グローバルスタイル
│   └── thanks/       # サンクスページ
├── components/       # Reactコンポーネント
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/             # ユーティリティ関数
└── ref/             # 参考資料
```

## 主な機能

- レスポンシブデザイン
- 動画コンテンツ表示
- お見積もり機能
- チェックリストビルダー
- お問い合わせフォーム
- Salesforce連携

## 開発コマンド

- `pnpm dev` - 開発サーバーを起動
- `pnpm build` - 本番用ビルドを作成
- `pnpm start` - 本番サーバーを起動
- `pnpm lint` - ESLintでコードをチェック
- `pnpm typecheck` - TypeScriptの型をチェック
- `pnpm check` - lint・型チェック・本番ビルドをまとめて実行

### Codex・Claude Codeでの開発

共通の作業ルールは `AGENTS.md` にあります。Claude Codeは `CLAUDE.md` から同じルールを参照します。
環境変数が必要な場合は、
`.env.example` を `.env.local` にコピーして値を設定してください。`.env.local` はGitにコミットされません。

## ライセンス

Private
