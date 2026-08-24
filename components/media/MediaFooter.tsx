import Link from "next/link";

// /media 配下専用のフッター。免責事項・運営者情報への導線をここに集約する。
export default function MediaFooter() {
  return (
    <footer
      className="py-12 px-0 mt-24"
      style={{
        background: "#2A1A24",
        borderTop: "1px solid rgba(242,232,221,0.12)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-8 max-sm:px-5">
        <nav className="flex flex-wrap gap-x-8 gap-y-3 mb-8 font-sm text-[13px]">
          <Link
            href="/media"
            className="text-white/70 hover:text-white transition-colors"
          >
            記事一覧
          </Link>
          <Link
            href="/media/about"
            className="text-white/70 hover:text-white transition-colors"
          >
            運営者情報
          </Link>
          <Link
            href="/media/disclaimer"
            className="text-white/70 hover:text-white transition-colors"
          >
            免責事項（アフィリエイト広告について）
          </Link>
          <Link
            href="/#contact"
            className="text-white/70 hover:text-white transition-colors"
          >
            FSPへのお問い合わせ
          </Link>
        </nav>
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="font-cg text-[14px] tracking-[0.06em] text-white/80">
            Food{" "}
            <span className="font-cg italic" style={{ color: "#D4A43A" }}>
              &amp;
            </span>{" "}
            Sweets Partners
          </div>
          <div
            className="font-c text-[10px] tracking-[0.4em] uppercase"
            style={{ color: "#F2E8DD", opacity: 0.5 }}
          >
            © 2026 Daisuke Kawamura
          </div>
        </div>
      </div>
    </footer>
  );
}
