import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-[120px] max-md:py-20 bg-bg">
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5">
        <div className="grid grid-cols-[1fr_0.75fr] gap-20 items-center max-md:grid-cols-1 max-md:gap-12">

          {/* テキスト */}
          <div>
            <span
              className="block w-[1.5px] h-[38px] mb-7"
              style={{ background: "#B8860B" }}
            />
            <div className="font-c text-[12px] tracking-[0.55em] text-gold uppercase font-semibold mb-6">
              About
            </div>
            <h2 className="font-sm text-[36px] max-md:text-[28px] font-medium leading-[1.25] tracking-[0.08em] text-ink mb-8">
              私たちについて
            </h2>
            <p className="font-sm text-[22px] max-md:text-[18px] leading-[2] text-ink font-medium mb-7">
              Food &amp; Sweets Partners は、食・菓子業界に特化した
              <br className="max-md:hidden" />
              ブティック型のコンサルティングファームです。
            </p>
            <div className="font-sm text-[15px] leading-[2.2] text-ink-2 space-y-5">
              <p>
                原材料・人件費・家賃の高騰、SNS依存の集客、オーナーシェフへの属人性。
                食・菓子業界では、立ち上がったブランドが続かない構造的な要因が重なり合っています。
              </p>
              <p>
                良い商品を作ることと、事業として成立させることの間には深い溝があります。
                その溝を、現場の感覚と経営の数字の両方から埋めていく。
                それが私たちの役割です。
              </p>
              <p>
                パティスリーの厨房で17年、執行役員としてPL責任を背負う立場で、
                そして事業譲受・工場譲受のプロジェクトマネージャーとして。
                それぞれの立場で積み上げてきた実務知を、あなたのブランドの設計と再生に還元します。
              </p>
            </div>
          </div>

          {/* 画像 */}
          <div
            className="about-image-wrap relative overflow-hidden bg-cream-s max-md:max-h-[400px] max-md:[aspect-ratio:16/10]"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="https://images.pexels.com/photos/6287298/pexels-photo-6287298.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="パティスリーの職人の手元"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.95) saturate(0.9)" }}
              sizes="(max-width: 960px) 100vw, 45vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
