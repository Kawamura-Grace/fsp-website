import Link from "next/link";
import {
  CATEGORIES,
  getArticleBody,
  getArticleBySlug,
  type Article,
} from "@/lib/media";
import { hasAffiliateLinks } from "@/components/media/AffiliateLinkBlock";

// トップページに出す記事（表示順）。題名・カテゴリ・説明は lib/media.ts の定義をそのまま使う
const FEATURED_SLUGS = [
  "square-setup-before-opening",
  "square-cake-reservation-setup",
  "pos-register-selection-criteria",
  "accounting-backoffice-before-opening",
];

// 記事ページと同じ判定：本文に表示されるアフィリエイトリンクがあるか（あればカードに「PR」を出す）
function hasAffiliate(article: Article): boolean {
  const body = getArticleBody(article);
  const ids = Array.from(body.matchAll(/\{\{AFFILIATE:([a-z0-9-]+)\}\}/g)).map((m) => m[1]);
  return ids.some((id) => hasAffiliateLinks(id));
}

export default function MediaSection() {
  const articles = FEATURED_SLUGS.map((slug) => getArticleBySlug(slug)).filter(
    (a): a is Article => a !== undefined
  );

  return (
    <section id="media" className="py-[120px] max-md:py-20" style={{ background: "#F8F2EE" }}>
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          Media
        </div>
        <h2 className="font-sm text-[36px] max-md:text-[28px] font-medium tracking-[0.08em] text-ink mb-8">
          開業前に決めること。
        </h2>
        <p className="font-sm text-[16px] leading-[2.1] text-ink-2 max-w-[680px]">
          開業準備の実務を、筆者の経験と公式の情報にもとづいてまとめています。一部の記事にはアフィリエイト広告（PR）を含みます。
        </p>

        <div className="grid grid-cols-2 gap-6 mt-14 max-md:grid-cols-1">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/media/${article.slug}`}
              className="group block bg-white px-8 py-8 max-sm:px-6"
              style={{ border: "1px solid #E5DDDF" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-c text-[11px] tracking-[0.3em] uppercase font-semibold text-gold">
                  {CATEGORIES[article.category].name}
                </span>
                {hasAffiliate(article) && (
                  <span
                    className="font-c text-[10px] tracking-[0.2em] font-semibold px-2 py-[1px]"
                    style={{ color: "#6D2E46", border: "1px solid #6D2E46" }}
                  >
                    PR
                  </span>
                )}
              </div>
              <h3 className="font-sm text-[18px] leading-[1.6] font-medium text-ink mb-3 group-hover:text-berry transition-colors">
                {article.title}
              </h3>
              <p className="font-sm text-[13.5px] leading-[1.9] text-ink-2 line-clamp-3">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/media"
            className="font-c text-[12px] tracking-[0.3em] uppercase font-semibold text-gold inline-flex items-center gap-2"
          >
            記事一覧を見る <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
