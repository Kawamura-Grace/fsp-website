import type { Metadata } from "next";
import Link from "next/link";
import { getArticlesByCategory } from "@/lib/media";

const siteUrl = "https://fsp.grace-foods.com";
const pageUrl = `${siteUrl}/media`;

export const metadata: Metadata = {
  title: "Media | Food & Sweets Partners",
  description:
    "菓子店・飲食店の開業と経営を、現場で手を動かしてきた人間の目線で解説するメディア。開業手続き・資金計画・バックオフィスの仕組み化など、実務的な情報を発信しています。",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Media | Food & Sweets Partners",
    description:
      "菓子店・飲食店の開業と経営を、現場で手を動かしてきた人間の目線で解説するメディア。",
    url: pageUrl,
    siteName: "Food & Sweets Partners",
    locale: "ja_JP",
    type: "website",
  },
};

export default function MediaIndexPage() {
  const groups = getArticlesByCategory();

  return (
    <div className="py-24 max-md:py-16">
      <div className="max-w-[900px] mx-auto px-8 max-sm:px-5">
        {/* イントロ */}
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          Media
        </div>
        <h1 className="font-sm text-[38px] max-md:text-[28px] font-medium leading-[1.5] tracking-[0.04em] text-ink mb-8 max-w-[720px]">
          菓子店・飲食店の開業と経営を、
          <br />
          現場で手を動かしてきた人間の目線で。
        </h1>
        <p className="font-sm text-[15px] leading-[2.1] text-ink-2 max-w-[640px] mb-20">
          Food &amp; Sweets Partners代表・河村大輔が、17年の現場経験と、姉妹事業Grace(2026年10月開業予定)を自ら開業準備している当事者としての一次情報をもとに、開業手続き・資金計画・バックオフィスの仕組み化など、菓子店・飲食店の開業と経営に関する実務的な情報を発信します。
        </p>

        {/* カテゴリ別記事一覧 */}
        <div className="space-y-20">
          {groups.map(({ category, articles }) => (
            <section key={category.slug}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-9 h-px" style={{ background: "#D4A43A" }} />
                <h2 className="font-c text-[12px] tracking-[0.4em] uppercase font-semibold text-gold">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-x-10 gap-y-12 max-md:grid-cols-1">
                {articles.map((article) => (
                  <article key={article.slug}>
                    <Link href={`/media/${article.slug}`} className="group block">
                      <h3 className="font-sm text-[19px] leading-[1.6] font-medium text-ink mb-3 group-hover:text-berry transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-sm text-[13.5px] leading-[1.9] text-ink-2 mb-4">
                        {article.description}
                      </p>
                      <span className="font-c text-[11px] tracking-[0.3em] uppercase font-semibold text-gold inline-flex items-center gap-2">
                        続きを読む <span>→</span>
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
