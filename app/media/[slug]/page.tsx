import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ARTICLES,
  CATEGORIES,
  getArticleBody,
  getArticleBySlug,
} from "@/lib/media";
import MarkdownContent from "@/components/media/MarkdownContent";
import AffiliateLinkBlock, {
  hasAffiliateLinks,
} from "@/components/media/AffiliateLinkBlock";

const siteUrl = "https://fsp.grace-foods.com";

// 記事本文中の {{AFFILIATE:xxx}} マーカーを検出し、その位置にAffiliateLinkBlockを差し込む。
// 1記事に複数のマーカーを置ける（記事3は会計ソフト節とPOSレジ節の2か所）。
// マーカーが無い記事は従来通りMarkdownContent一本、1つの記事は従来と同じ「前半＋ブロック＋後半」で描画される
const AFFILIATE_MARKER_RE = /\{\{AFFILIATE:([a-z0-9-]+)\}\}/g;

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `${siteUrl}/media/${article.slug}`;
  return {
    title: `${article.title} | Food & Sweets Partners Media`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "Food & Sweets Partners",
      locale: "ja_JP",
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["河村大輔"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const body = getArticleBody(article);
  const category = CATEGORIES[article.category];
  const url = `${siteUrl}/media/${article.slug}`;

  // 本文をマーカー位置で分割する。segments = [本文, ブロックID, 本文, ブロックID, 本文, ...]
  // （split に捕捉グループ付きの正規表現を渡すと、偶数番目が本文・奇数番目がマーカーのIDになる）
  const segments = body.split(AFFILIATE_MARKER_RE);

  // 実際に表示されるアフィリエイトリンクがある記事か（奇数番目＝マーカーのID）
  // ステマ規制（景品表示法の告示・2023年10月施行）の運用基準に合わせ、
  // 該当記事は冒頭（タイトル直下）にPR表記を出し、末尾の注記も「含みます」と言い切る
  const hasAffiliate = segments.some(
    (segment, index) => index % 2 === 1 && hasAffiliateLinks(segment)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: "河村大輔",
      url: `${siteUrl}/media/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Food & Sweets Partners",
      url: siteUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <article className="py-24 max-md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[760px] mx-auto px-8 max-sm:px-5">
        {/* パンくず */}
        <Link
          href="/media"
          className="font-c text-[11px] tracking-[0.3em] uppercase font-semibold text-gold inline-flex items-center gap-2 mb-10"
        >
          <span>←</span> 記事一覧
        </Link>

        {/* ヘッダー */}
        <div className="font-c text-[11px] tracking-[0.4em] uppercase font-semibold text-gold mb-5">
          {category.name}
        </div>
        <h1 className="font-sm text-[34px] max-md:text-[24px] font-medium leading-[1.55] tracking-[0.02em] text-ink mb-8">
          {article.title}
        </h1>

        {/* アフィリエイトリンクがある記事のみ：タイトル直下に広告である旨を表示（本文と同サイズ・グレーアウトしない） */}
        {hasAffiliate && (
          <p
            className="font-sm text-[15.5px] leading-[1.9] text-ink-2 rounded-md border px-5 py-3 mb-8"
            style={{ borderColor: "#E5DDDF", background: "#FBF6EC" }}
          >
            <span className="font-bold" style={{ color: "#6D2E46" }}>
              【PR】
            </span>
            この記事にはアフィリエイト広告（PR）を含みます。
          </p>
        )}

        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-8 mb-10 border-b font-sm text-[13px] text-ink-3"
          style={{ borderColor: "#E5DDDF" }}
        >
          <span>
            執筆：
            <Link href="/media/about" className="text-berry underline underline-offset-4 decoration-[#D4A43A]/60">
              河村大輔（Food &amp; Sweets Partners代表）
            </Link>
          </span>
          <span aria-hidden="true">・</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>

        {/* 本文 */}
        {segments.map((segment, index) =>
          index % 2 === 1 ? (
            <AffiliateLinkBlock key={`affiliate-${index}`} id={segment} />
          ) : (
            <MarkdownContent
              key={`body-${index}`}
              markdown={segment}
              isFirstBlock={index === 0}
            />
          )
        )}

        {/* アフィリエイト表示（サイト全体ルールに基づく注記） */}
        <p
          className="font-sm text-[12px] leading-[1.9] text-ink-3 mt-12 pt-8 border-t"
          style={{ borderColor: "#E5DDDF" }}
        >
          {hasAffiliate
            ? "本記事にはアフィリエイト広告（PR）を含みます。詳細は"
            : "本記事は将来的にアフィリエイト広告を含む場合があります。詳細は"}
          <Link href="/media/disclaimer" className="underline underline-offset-4 decoration-[#D4A43A]/60 text-berry">
            免責事項
          </Link>
          をご確認ください。
        </p>
      </div>
    </article>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}
