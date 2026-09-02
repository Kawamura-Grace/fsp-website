import { readFileSync } from "fs";
import path from "path";

// FSPメディア（/media）のカテゴリ・記事メタデータ
// 本文は content/media/*.md（media_draft配下の確定版mdを機械的に加工したもの）を読み込む

export type CategorySlug =
  | "startup-procedures"
  | "back-office"
  | "hiring"
  | "product-manufacturing"
  | "management-turnaround";

export type Category = {
  slug: CategorySlug;
  name: string;
};

export const CATEGORIES: Record<CategorySlug, Category> = {
  "startup-procedures": { slug: "startup-procedures", name: "開業手続き" },
  "back-office": { slug: "back-office", name: "バックオフィス・仕組み化" },
  hiring: { slug: "hiring", name: "採用・人材" },
  "product-manufacturing": { slug: "product-manufacturing", name: "商品・製造" },
  "management-turnaround": { slug: "management-turnaround", name: "経営・再生" },
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  publishedAt: string; // ISO date (YYYY-MM-DD)
  contentFile: string; // content/media/ 配下のファイル名
};

export const ARTICLES: Article[] = [
  {
    slug: "confectionery-vs-restaurant-license",
    title: "菓子製造業許可と飲食店営業許可の違い・取り方",
    description:
      "菓子店の開業で最初につまずきやすい「どちらの許可が必要か」を整理。菓子製造業許可と飲食店営業許可の違い、判断の考え方、許可取得の流れを解説します。",
    category: "startup-procedures",
    publishedAt: "2026-08-24",
    contentFile: "article-1.md",
  },
  {
    slug: "patisserie-startup-funding-plan",
    title: "パティスリー開業の資金計画の考え方",
    description:
      "開業資金は「いくら」という単一の数字ではなく、設備投資・運転資金・予備費の3項目で考えるのが基本。資金計画を立てる順番と、自己資金・融資のバランスの考え方を整理します。",
    category: "startup-procedures",
    publishedAt: "2026-08-24",
    contentFile: "article-2.md",
  },
  {
    slug: "accounting-backoffice-before-opening",
    title: "開業前に決めるべき会計・バックオフィスの仕組み",
    description:
      "開業前に決めておかないと後で痛い目を見るバックオフィスの仕組みを、優先度順に整理。会計ソフト・POSレジ・証憑管理・税理士・シフト管理の5項目を解説します。",
    category: "back-office",
    publishedAt: "2026-08-24",
    contentFile: "article-3.md",
  },
  {
    slug: "hokenjo-pre-consultation-guide",
    title: "菓子製造業の許可申請で保健所に聞かれること・準備する書類",
    description:
      "保健所への事前相談では何を聞かれ、許可申請時にはどんな書類が必要になるのか。事前相談のポイントと申請書類の一般的な構成、早めに動くべき理由を整理します。",
    category: "startup-procedures",
    publishedAt: "2026-08-24",
    contentFile: "article-4.md",
  },
  {
    slug: "startup-schedule-planning",
    title: "開業スケジュールの立て方：何ヶ月前から何を準備するか",
    description:
      "資金調達・物件と許認可・仕入先・採用・バックオフィスなど、複数のタスクが同時並行で進む開業準備。開業希望日から逆算して、何ヶ月前に何を始めるべきかを項目ごとに整理します。",
    category: "startup-procedures",
    publishedAt: "2026-08-24",
    contentFile: "article-5.md",
  },
  {
    slug: "accounting-software-selection-guide",
    title: "個人店におすすめの会計ソフトの選び方",
    description:
      "会計ソフト選びで見るべきは価格の安さではなく、青色申告特別控除65万円・インボイス制度・電子帳簿保存法への対応と、税理士との連携のしやすさ。個人店向けの選定基準を整理します。",
    category: "back-office",
    publishedAt: "2026-09-02",
    contentFile: "article-6.md",
  },
  {
    slug: "pos-register-selection-criteria",
    title: "飲食店・菓子店のPOSレジ、選定基準の考え方",
    description:
      "決済手数料・会計ソフト連携・軽減税率対応・インボイス対応など、POSレジ選びで具体的にチェックすべき8つの基準を整理します。",
    category: "back-office",
    publishedAt: "2026-09-02",
    contentFile: "article-7.md",
  },
];

const CONTENT_DIR = path.join(process.cwd(), "content", "media");

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticleBody(article: Article): string {
  return readFileSync(path.join(CONTENT_DIR, article.contentFile), "utf-8");
}

export function getAboutBody(): string {
  return readFileSync(path.join(CONTENT_DIR, "about.md"), "utf-8");
}

export function getDisclaimerBody(): string {
  return readFileSync(path.join(CONTENT_DIR, "disclaimer.md"), "utf-8");
}

export function getArticlesByCategory(): { category: Category; articles: Article[] }[] {
  const order: CategorySlug[] = [
    "startup-procedures",
    "back-office",
    "hiring",
    "product-manufacturing",
    "management-turnaround",
  ];
  return order
    .map((slug) => ({
      category: CATEGORIES[slug],
      articles: ARTICLES.filter((a) => a.category === slug),
    }))
    .filter((group) => group.articles.length > 0);
}
