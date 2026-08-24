import type { Metadata } from "next";
import { getDisclaimerBody } from "@/lib/media";
import MarkdownContent from "@/components/media/MarkdownContent";

const siteUrl = "https://fsp.grace-foods.com";
const pageUrl = `${siteUrl}/media/disclaimer`;

export const metadata: Metadata = {
  title: "免責事項 | Food & Sweets Partners Media",
  description:
    "Food & Sweets Partners Mediaの免責事項です。掲載情報の取り扱い、アフィリエイト広告の利用について明記しています。",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  const body = getDisclaimerBody();

  return (
    <div className="py-24 max-md:py-16">
      <div className="max-w-[760px] mx-auto px-8 max-sm:px-5">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          Disclaimer
        </div>
        <h1 className="font-sm text-[34px] max-md:text-[24px] font-medium leading-[1.5] tracking-[0.04em] text-ink mb-12">
          免責事項
        </h1>

        <MarkdownContent markdown={body} />
      </div>
    </div>
  );
}
