import type { Metadata } from "next";
import { getAboutBody } from "@/lib/media";
import MarkdownContent from "@/components/media/MarkdownContent";

const siteUrl = "https://fsp.grace-foods.com";
const pageUrl = `${siteUrl}/media/about`;

export const metadata: Metadata = {
  title: "運営者情報 | Food & Sweets Partners Media",
  description:
    "Food & Sweets Partners Mediaの運営者・河村大輔のプロフィールです。パティシエとしての現場経験、事業再生PMとしての実績、姉妹事業Graceの開業準備について紹介します。",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "運営者情報 | Food & Sweets Partners Media",
    description: "Food & Sweets Partners Mediaの運営者・河村大輔のプロフィールです。",
    url: pageUrl,
    siteName: "Food & Sweets Partners",
    locale: "ja_JP",
    type: "profile",
  },
};

export default function AboutPage() {
  const body = getAboutBody();

  return (
    <div className="py-24 max-md:py-16">
      <div className="max-w-[760px] mx-auto px-8 max-sm:px-5">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          About the Author
        </div>
        <h1 className="font-sm text-[34px] max-md:text-[24px] font-medium leading-[1.5] tracking-[0.04em] text-ink mb-12">
          運営者情報
        </h1>

        <MarkdownContent markdown={body} />
      </div>
    </div>
  );
}
