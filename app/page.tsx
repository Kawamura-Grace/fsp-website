export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-8 max-sm:px-5"
      style={{ background: "#F2E8DD", color: "#2A1A24" }}
    >
      <div className="flex flex-col items-center text-center">
        {/* ワードマーク */}
        <div
          className="font-cg font-medium tracking-[0.08em] leading-none text-[34px] max-sm:text-[26px]"
        >
          Food{" "}
          <span
            className="font-cg italic font-normal"
            style={{ color: "#D4A43A" }}
          >
            &amp;
          </span>{" "}
          Sweets Partners
        </div>

        {/* 金の横線 */}
        <div className="w-16 h-px my-8" style={{ background: "#D4A43A" }} />

        {/* 準備中メッセージ */}
        <p className="font-sm text-[20px] max-sm:text-[16px] tracking-[0.08em] mb-3">
          ただいま準備中です
        </p>
        <p className="font-c text-[12px] tracking-[0.5em] uppercase opacity-70">
          Coming Soon
        </p>
      </div>
    </main>
  );
}
