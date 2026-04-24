# Food & Sweets Partners — LP

食・菓子業界に特化したコンサルティングファーム FSP の公式ランディングページ。

**公開URL**: https://fsp.grace-foods.com

## 技術スタック

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Email**: Resend
- **Hosting**: Vercel
- **Domain**: grace-foods.com サブドメイン

## ローカル開発

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

## 環境変数

Vercel の Settings → Environment Variables に以下を登録してください。

| 変数名 | 値 | 説明 |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxx` | Resend の API Key |
| `CONTACT_EMAIL_TO` | `kawamura@grace-foods.com` | 問い合わせ受信先 |
| `CONTACT_EMAIL_FROM` | `noreply@send.grace-foods.com` | 送信元アドレス |

ローカルでテストする場合は `.env.local` を作成して上記を記載。

## デプロイ手順

### 1. GitHub リポジトリを作成 → push

```bash
git remote add origin https://github.com/kawamura-grace/fsp-website.git
git push -u origin master
```

### 2. Vercel でプロジェクトを接続

1. vercel.com にログイン
2. New Project → GitHub `fsp-website` を選択 → Deploy
3. プレビュー URL (`xxxxx.vercel.app`) で動作確認

### 3. カスタムドメイン設定

Vercel: Settings → Domains → `fsp.grace-foods.com` を追加

お名前.com DNS に CNAME を追加:

| ホスト名 | TYPE | VALUE | TTL |
|---|---|---|---|
| `fsp` | CNAME | `cname.vercel-dns.com.` | 3600 |

## Resend (メール送信) 設定

1. resend.com でアカウント作成・API Key 取得
2. Domains → `send.grace-foods.com` を追加
3. Resend が指示する SPF/DKIM レコードをお名前.com に追加
4. Vercel に環境変数 `RESEND_API_KEY` を登録

**注意**: `send.grace-foods.com` サブドメインで送信するため、
Google Workspace の SPF レコード (`grace-foods.com`) には手を加えないこと。

## コンポーネント構成

- [components/Hero.tsx](components/Hero.tsx)
- [components/About.tsx](components/About.tsx)
- [components/Services.tsx](components/Services.tsx)
- [components/Why.tsx](components/Why.tsx)
- [components/Principal.tsx](components/Principal.tsx)
- [components/Results.tsx](components/Results.tsx)
- [components/Process.tsx](components/Process.tsx)
- [components/Contact.tsx](components/Contact.tsx)
- [components/Footer.tsx](components/Footer.tsx)

OG 画像は `public/og-image.png` (1200×630) を差し替えて更新。

---

## (以下: create-next-app デフォルト)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
