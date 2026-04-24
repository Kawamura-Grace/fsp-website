export default function Footer() {
  return (
    <footer
      className="py-12 px-0"
      style={{
        background: "#2A1A24",
        borderTop: "1px solid rgba(242,232,221,0.12)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5 flex justify-between items-center flex-wrap gap-6">
        <div className="font-cg text-[16px] tracking-[0.06em] text-white">
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
          © 2026 Daisuke Kawamura · Photos courtesy of Pexels
        </div>
      </div>
    </footer>
  );
}
