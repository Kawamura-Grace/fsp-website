import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Cormorant,
  EB_Garamond,
  Shippori_Mincho,
} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--fsp-cg",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const cormorant = Cormorant({
  variable: "--fsp-c",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const ebGaramond = EB_Garamond({
  variable: "--fsp-eb",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
const shipporiMincho = Shippori_Mincho({
  variable: "--fsp-sm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://fsp.grace-foods.com";

export const metadata: Metadata = {
  title: "Food & Sweets Partners — 食・菓子業界に特化したブランド戦略とPMIの実行支援",
  description:
    "Food & Sweets Partners は、食・菓子業界に特化したブランド設計・事業再生・PMI(M&A統合)の実行支援を行うブティック型コンサルティングファームです。",
  openGraph: {
    title: "Food & Sweets Partners",
    description: "食・菓子業界に特化したブランド戦略とPMIの実行支援",
    url: siteUrl,
    siteName: "Food & Sweets Partners",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  metadataBase: new URL(siteUrl),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Food & Sweets Partners",
  description:
    "食・菓子業界に特化したブランド設計・事業再生・PMI実行支援のブティック型コンサルティングファーム",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "春日井市",
    addressRegion: "愛知県",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "kawamura@grace-foods.com",
    contactType: "customer service",
  },
  founder: {
    "@type": "Person",
    name: "河村 大輔",
    alternateName: "Daisuke Kawamura",
    jobTitle: "代表 / プリンシパル",
  },
  knowsAbout: [
    "ブランド戦略",
    "事業再生",
    "PMI",
    "M&A統合",
    "食品業界コンサルティング",
    "菓子業界コンサルティング",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${cormorantGaramond.variable} ${cormorant.variable} ${ebGaramond.variable} ${shipporiMincho.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
