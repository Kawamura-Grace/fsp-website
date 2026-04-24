const career = [
  {
    year: "2024 — 現在",
    detail: "有名パティスリーブランド",
    role: "執行役員",
  },
  {
    year: "2022 — 2024",
    detail: "大手経営コンサルファーム",
    role: "PMOコンサルタント",
  },
  {
    year: "2013 — 2022",
    detail: "大手洋菓子・ベーカリーグループ",
    role: "マネージャー → 新規事業準備室長",
  },
  {
    year: "2009 — 2013",
    detail: "外資系ホテル / ウェディング企業",
    role: "パティシエ",
  },
];

export default function Principal() {
  return (
    <section id="principal" className="py-[120px] max-md:py-20 bg-bg-2">
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1fr_1.4fr] gap-20 items-start max-md:grid-cols-1 max-md:gap-10">

          {/* 名前・肩書き */}
          <div>
            <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
            <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
              Principal
            </div>
            <div
              className="font-sm text-[48px] max-md:text-[36px] font-medium tracking-[0.2em] leading-[1.1] mb-4"
              style={{ color: "#2A1A24" }}
            >
              河村 大輔
            </div>
            <div
              className="font-cg italic text-[18px] tracking-[0.12em] mb-6"
              style={{ color: "#5A4750" }}
            >
              Daisuke Kawamura
            </div>
            <div className="font-c text-[11px] tracking-[0.5em] text-gold uppercase font-semibold">
              REPRESENTATIVE ／ PRINCIPAL
            </div>
          </div>

          {/* 略歴・キャリア */}
          <div>
            <div className="space-y-5 mb-8">
              <p className="font-sm text-[14px] leading-[2.1] text-ink-2">
                ウェディング業態・外資系ホテル・個店パティスリーで
                パティシエとして現場経験を積む。その後、全国展開する大手洋菓子・ベーカリーグループに転籍し、
                店舗統括・サプライチェーン・マーケティング・新規事業まで横断的に事業運営に携わる。
              </p>
              <p className="font-sm text-[14px] leading-[2.1] text-ink-2">
                事業譲受PMとして有名洋菓子ブランドの再生(年間約2億円赤字→初月黒字化)、
                地方工場の譲受・再生(月160万円赤字→稼働初月黒字化)など複数の再生案件を主導。
                その後、大手経営コンサルファームに転じて大規模DXプロジェクトの実行支援を経験し、
                現在は有名パティスリーブランドの執行役員として経営改革を統括している。
              </p>
            </div>

            <div
              className="border-t pt-8 mt-8"
              style={{ borderColor: "#E5DDDF" }}
            >
              {career.map((c, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[140px_1fr] max-sm:grid-cols-1 gap-6 max-sm:gap-1.5 py-[14px] max-sm:last:border-b-0"
                  style={{
                    borderBottom: i < career.length - 1 ? "1px solid #E5DDDF" : "none",
                  }}
                >
                  <div
                    className="font-cg italic text-[13px] tracking-[0.08em] pt-0.5"
                    style={{ color: "#B8860B" }}
                  >
                    {c.year}
                  </div>
                  <div className="font-sm text-[13px] leading-[1.8] text-ink">
                    <strong style={{ color: "#6D2E46", fontWeight: 600 }}>
                      {c.detail}
                    </strong>{" "}
                    {c.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
