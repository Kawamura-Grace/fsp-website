import Link from "next/link";

// /media 配下専用のヘッダー。トップページのHero等は変更せず、
// メディアセクション内の回遊（一覧⇄運営者情報⇄免責事項）のためだけに新設する。
export default function MediaHeader() {
  return (
    <header style={{ background: "#2A1A24" }}>
      <div className="max-w-[900px] mx-auto px-8 max-sm:px-5 h-[86px] flex items-center justify-between">
        <Link
          href="/"
          className="font-cg text-[16px] tracking-[0.06em] text-white hover:opacity-80 transition-opacity"
        >
          Food{" "}
          <span className="font-cg italic" style={{ color: "#D4A43A" }}>
            &amp;
          </span>{" "}
          Sweets Partners
        </Link>
        <Link
          href="/media"
          className="font-c text-[11px] tracking-[0.5em] uppercase font-semibold"
          style={{ color: "#D4A43A" }}
        >
          Media
        </Link>
      </div>
    </header>
  );
}
