import Image from "next/image";

const services = [
  {
    id: "s1",
    num: "01",
    label: "Brand Strategy",
    title: "ブランド設計\n& 商品開発",
    body: "「なぜこのブランドが必要か」を判断基準にまで翻訳する。コンセプト設計から主力商品の企画・原価設計まで、美意識と採算性を同時に成立させます。",
    items: [
      "ブランドコンセプト・世界観の言語化",
      "主力商品の企画・原価設計・価格戦略",
      "パッケージ・店舗フォーマットの方針",
      "OEM・PB商品の規格化",
    ],
    img: {
      src: "https://images.pexels.com/photos/34596956/pexels-photo-34596956.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "洋菓子・パティスリー",
    },
    bg: "#F8F2EE",
    numColor: "#6D2E46",
    labelColor: "#B8860B",
    titleColor: "#2A1A24",
    bodyColor: "#5A4750",
    listColor: "#5A4750",
    dashColor: "#B8860B",
  },
  {
    id: "s2",
    num: "02",
    label: "Turnaround · PMI",
    title: "事業再生\n& PMI 実行支援",
    body: "譲受直後100日のクリティカルフェーズを、現場で手を動かして推進する。財務・現場・ブランドの3面から、数字に表れないリスクと機会を抽出します。",
    items: [
      "事業デューデリジェンス(財務・現場・ブランド)",
      "PMIタスク設計・従業員受入・労務統合",
      "商品改廃・レシピ標準化・原価再設計",
      "赤字事業の黒字化プロジェクト推進",
    ],
    img: {
      src: "https://images.pexels.com/photos/7947993/pexels-photo-7947993.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "事業分析・データ",
    },
    bg: "#1E2761",
    numColor: "#D4A43A",
    labelColor: "#D4A43A",
    titleColor: "#fff",
    bodyColor: "#CADCFC",
    listColor: "#DCE5F5",
    dashColor: "#D4A43A",
  },
  {
    id: "s3",
    num: "03",
    label: "Operations",
    title: "経営伴走\n& 運営設計",
    body: "ブランドと商品を「現場で続く」状態に落とす。属人的な運営から、誰が入っても同じ品質が再現できる仕組みへの転換を支援します。",
    items: [
      "オペレーション設計・マニュアル整備",
      "KPI設計・週次PDCAの仕組み化",
      "人材採用・教育プログラム構築",
      "幹部育成・経営会議運用支援",
    ],
    img: {
      src: "https://images.pexels.com/photos/10438814/pexels-photo-10438814.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "店舗・カフェ空間",
    },
    bg: "#EDE4D7",
    numColor: "#2A1A24",
    labelColor: "#B8860B",
    titleColor: "#2A1A24",
    bodyColor: "#5A4750",
    listColor: "#5A4750",
    dashColor: "#B8860B",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white pt-[120px] max-md:pt-20">
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5 mb-[100px]">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#B8860B" }} />
        <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
          Services
        </div>
        <h2 className="font-sm text-[36px] max-md:text-[28px] font-medium leading-[1.25] tracking-[0.08em] text-ink mb-8">
          提供するサービス
        </h2>
        <p className="font-sm text-[16px] leading-[2.1] text-ink-2 max-w-[680px]">
          ブランド設計から事業再生・M&amp;A統合まで、
          <br className="max-md:hidden" />
          食・菓子事業の課題に応じた3つのサービス領域で伴走します。
        </p>
      </div>

      <div
        className="max-w-[1100px] mx-auto px-8 max-sm:px-5 grid grid-cols-3 max-md:grid-cols-1"
        style={{ borderTop: "1px solid #E5DDDF" }}
      >
        {services.map((s) => (
          <div
            key={s.id}
            className="service-card relative flex flex-col overflow-hidden transition-transform duration-[400ms] hover:-translate-y-1 max-md:border-b max-md:last:border-b-0"
            style={{
              background: s.bg,
              borderRight: "1px solid #E5DDDF",
            }}
          >
            {/* サービス画像 */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={s.img.src}
                alt={s.img.alt}
                fill
                className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                sizes="(max-width: 960px) 100vw, 33vw"
                loading="lazy"
              />
            </div>

            {/* コンテンツ */}
            <div
              className="service-content-bar relative flex-1 px-11 pt-11 pb-[52px]"
            >
              <div
                className="font-cg italic text-[20px] font-medium mb-[14px] tracking-[0.03em]"
                style={{ color: s.numColor }}
              >
                {s.num}
              </div>
              <span
                className="font-c text-[10px] tracking-[0.5em] uppercase font-semibold block mb-4"
                style={{ color: s.labelColor }}
              >
                {s.label}
              </span>
              <h3
                className="font-sm text-[22px] font-medium tracking-[0.06em] leading-[1.4] mb-5 whitespace-pre-line"
                style={{ color: s.titleColor }}
              >
                {s.title}
              </h3>
              <p
                className="font-sm text-[13.5px] leading-[2] mb-6"
                style={{ color: s.bodyColor }}
              >
                {s.body}
              </p>
              <ul className="list-none p-0 space-y-0">
                {s.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-sm text-[12.5px] leading-[1.7] py-1.5 pl-[18px] relative"
                    style={{ color: s.listColor }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: s.dashColor }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
