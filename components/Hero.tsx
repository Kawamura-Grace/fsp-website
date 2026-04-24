export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(rgba(42,26,36,0.88), rgba(42,26,36,0.94)), url('https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=2000') center/cover",
        color: "#fff",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(800px 400px at 75% 20%, rgba(109,46,70,0.38) 0%, transparent 60%), radial-gradient(600px 400px at 10% 90%, rgba(184,134,11,0.14) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-8 max-sm:px-5 w-full">
        {/* Logo A — Horizontal Wordmark */}
        <div className="anim-fade-up-1 mb-14">
          <div
            className="font-eb font-medium tracking-[0.08em] leading-none"
            style={{ color: "#F2E8DD" }}
          >
            <div className="text-[30px]">
              Food{" "}
              <span
                className="font-eb italic font-normal"
                style={{ color: "#D4A43A" }}
              >
                &amp;
              </span>{" "}
              Sweets Partners
            </div>
            <div className="flex items-center gap-3.5 mt-3">
              <div
                className="w-7 h-px opacity-40"
                style={{ background: "#F2E8DD" }}
              />
              <div
                className="font-c text-[10px] tracking-[0.5em] font-medium uppercase opacity-70"
                style={{ color: "#F2E8DD" }}
              >
                Strategy for Food Brands
              </div>
              <div
                className="w-7 h-px opacity-40"
                style={{ background: "#F2E8DD" }}
              />
            </div>
          </div>
        </div>

        <h1 className="font-sm text-[58px] max-md:text-[38px] max-sm:text-[30px] font-medium leading-[1.3] tracking-[0.04em] text-white mb-10 max-w-[920px] anim-fade-up-2">
          食・菓子ブランドの
          <br />
          <span className="font-cg italic font-normal" style={{ color: "#D4A43A" }}>
            再現性
          </span>
          と
          <span className="font-cg italic font-normal" style={{ color: "#D4A43A" }}>
            採算性
          </span>
          を設計する。
        </h1>

        <p
          className="font-eb italic text-[18px] max-sm:text-[15px] tracking-[0.06em] max-w-[640px] leading-[1.7] mb-14 anim-fade-up-3"
          style={{ color: "#F2E8DD" }}
        >
          Brand Strategy · Turnaround · Post-Merger Integration
          <br />
          for Food &amp; Confectionery Businesses.
        </p>

        <div className="flex gap-6 flex-wrap anim-fade-up-4 max-sm:flex-col max-sm:w-full">
          <a href="#contact" className="btn-primary max-sm:justify-center">
            初回相談のお申込み <span>→</span>
          </a>
          <a href="#services" className="btn-ghost max-sm:justify-center">
            サービスを見る <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
