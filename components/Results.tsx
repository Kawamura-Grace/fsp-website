const results = [
  {
    tag: "TURNAROUND — 2018",
    project: "有名洋菓子ブランド 事業譲受PM",
    metric: "年間 約2億円赤字 → 初月黒字化",
    body: "折衝・従業員受入・商品改廃・物流効率化・原価改善をPMとして統括。9名体制で陣頭指揮。",
  },
  {
    tag: "NEW BRAND — 2020",
    project: "新スイーツ業態 店舗展開",
    metric: "月 2,000万円 → 1億5,800万円",
    body: "コロナ禍で既存店70店舗超のリニューアルを7ヶ月で完遂。外部施工業者含む7名体制で推進。",
  },
  {
    tag: "PMI — 2020",
    project: "地方製菓工場 事業譲受",
    metric: "月 160万円赤字 → 稼働初月黒字化",
    body: "契約・従業員受入・ライン適正化を含む業務全般を実質PMとして統括。年間売上4億円規模の基盤を構築。",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-[120px] max-md:py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          Results
        </div>
        <h2 className="font-sm text-[36px] max-md:text-[28px] font-medium tracking-[0.08em] text-ink mb-8">
          数字で語る仕事。
        </h2>
        <p className="font-sm text-[16px] leading-[2.1] text-ink-2 max-w-[680px]">
          M&amp;A・事業再生・新ブランド立ち上げの実例から、
          <br className="max-md:hidden" />
          代表的な実績を抜粋してご紹介します。
        </p>

        <div className="grid grid-cols-3 gap-10 mt-[72px] max-md:grid-cols-1 max-md:gap-6">
          {results.map((r, i) => (
            <div
              key={i}
              className="p-10 bg-cream-s transition-transform duration-300 hover:-translate-y-1"
              style={{ borderTop: "2px solid #B8860B" }}
            >
              <div
                className="font-c text-[9.5px] tracking-[0.4em] uppercase font-semibold mb-[14px]"
                style={{ color: "#8B7B82" }}
              >
                {r.tag}
              </div>
              <h3
                className="font-sm text-[16px] font-medium tracking-[0.05em] leading-[1.5] mb-5"
                style={{ color: "#2A1A24" }}
              >
                {r.project}
              </h3>
              <div
                className="font-cg text-[24px] font-medium leading-[1.3] mb-4 tracking-[0.02em]"
                style={{ color: "#6D2E46" }}
              >
                {r.metric.split(" → ").map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span className="font-cg italic mx-[0.2em]" style={{ color: "#B8860B" }}>
                        {" "}→{" "}
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <p className="font-sm text-[12px] leading-[1.9] text-ink-2">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-center font-sm text-[12px] italic"
          style={{ color: "#8B7B82" }}
        >
          ※ 過去在職時(大手洋菓子・ベーカリーグループ内)の実績より抜粋。詳細は NDA 締結後に個別にご説明します。
        </p>
      </div>
    </section>
  );
}
