const steps = [
  {
    num: "01",
    title: "初回ヒアリング",
    body: "現状の課題と目的をお伺いします(90分・オンライン可・無料)。NDAのご希望があれば事前に締結します。",
  },
  {
    num: "02",
    title: "診断・提案",
    body: "論点を整理した診断と、課題に応じたサービス・期間・料金をご提案します。ここまで費用は発生しません。",
  },
  {
    num: "03",
    title: "実行支援",
    body: "ご合意いただけた内容で契約締結。スポット/プロジェクト/顧問のいずれの形態でもご相談ください。",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[120px] max-md:py-20 bg-cream">
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          Process
        </div>
        <h2 className="font-sm text-[36px] max-md:text-[28px] font-medium tracking-[0.08em] text-ink mb-8">
          ご依頼の流れ。
        </h2>
        <p className="font-sm text-[16px] leading-[2.1] text-ink-2 max-w-[680px]">
          初回ヒアリングは無料です。
          <br className="max-md:hidden" />
          まずは課題感の整理からお気軽にご相談ください。
        </p>

        <div
          className="grid grid-cols-3 mt-16 max-md:grid-cols-1"
          style={{ borderTop: "1px solid #E5DDDF" }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="px-9 py-12 max-md:border-r-0 max-md:border-b last:max-md:border-b-0"
              style={{ borderRight: "1px solid #E5DDDF" }}
            >
              <div
                className="font-cg italic text-[44px] font-medium leading-[1] mb-[18px]"
                style={{ color: "#B8860B" }}
              >
                {s.num}
              </div>
              <h3
                className="font-sm text-[20px] font-medium tracking-[0.08em] mb-[14px]"
                style={{ color: "#2A1A24" }}
              >
                {s.title}
              </h3>
              <p className="font-sm text-[13px] leading-[1.95] text-ink-2">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
