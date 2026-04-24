const pillars = [
  {
    num: "01",
    title: "ブランド価値が利益の源泉",
    body: "単純なコスト削減は顧客離反と価格競争を招く。ブランドを守りながら採算を立て直す設計が不可欠です。",
  },
  {
    num: "02",
    title: "属人化された現場",
    body: "職人個人のノウハウに依存する製造現場では、数字の予測と再現が効かない。標準化と属人性の両立を設計します。",
  },
  {
    num: "03",
    title: "揺れる原価構造",
    body: "原材料相場・季節需要・廃棄率の変動で、固定的な管理が通じない。業界特有の原価管理手法で対応します。",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-[120px] max-md:py-20 bg-ink">
      <div className="max-w-[860px] mx-auto px-8 max-sm:px-5">
        <span
          className="block w-[1.5px] h-[38px] mb-7"
          style={{ background: "#D4A43A" }}
        />
        <div
          className="font-c text-[12px] tracking-[0.55em] uppercase font-semibold mb-6"
          style={{ color: "#D4A43A" }}
        >
          Why Food &amp; Sweets
        </div>
        <h2
          className="font-cg text-[44px] max-md:text-[32px] font-medium leading-[1.25] tracking-[0.02em] mb-8"
          style={{ color: "#fff" }}
        >
          なぜ、食・菓子業界に特化するのか。
        </h2>
        <p
          className="font-sm text-[17px] leading-[2.1] max-md:text-[15px]"
          style={{ color: "#F2E8DD" }}
        >
          一般の経営コンサルでは扱いきれない、業界固有の論点があります。
          <br className="max-md:hidden" />
          現場の職人との言葉、原材料市場の感覚、店舗オペレーションの肌感。
          <br className="max-md:hidden" />
          これらを実務経験として内包していることが、計画と現場をつなぐ唯一の方法です。
        </p>

        <div className="grid grid-cols-3 gap-12 mt-20 max-md:grid-cols-1 max-md:gap-8">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="pillar-bar relative pt-9"
              style={{ borderTop: "1px solid rgba(242,232,221,0.2)" }}
            >
              <div
                className="font-cg italic text-[14px] tracking-[0.3em] mb-[18px] font-medium"
                style={{ color: "#D4A43A" }}
              >
                {p.num}
              </div>
              <h3
                className="font-sm text-[20px] font-medium leading-[1.5] mb-5 tracking-[0.05em]"
                style={{ color: "#fff" }}
              >
                {p.title}
              </h3>
              <p
                className="font-sm text-[13px] leading-[2]"
                style={{ color: "#F2E8DD", opacity: 0.85 }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
