// FSPメディア記事内のアフィリエイトリンクブロック
// - PR表記を本文と同程度に視認できる形でブロック冒頭に配置（サイト設計_v1.md §6準拠・グレーアウト不可）
// - リンクはA8.net管理画面の広告リンク作成からコピーしたコードをそのまま使用（a8matパラメータ改変禁止）
// - 計測用1px画像は素の<img>のまま出力する（next/image化するとsrcが書き換わり計測されないため）

type AffiliateLink = {
  label: string;
  href: string;
  imgSrc: string;
};

const AFFILIATE_LINKS: Record<string, AffiliateLink[]> = {
  "accounting-software": [
    {
      label: "クラウド会計シェア　No.1【freee会計】",
      href: "https://px.a8.net/svt/ejp?a8mat=4BAEXI+DQR8HE+3SPO+9FDAJ6",
      imgSrc: "https://www18.a8.net/0.gif?a8mat=4BAEXI+DQR8HE+3SPO+9FDAJ6",
    },
    {
      label: "会計自動化ソフトを今すぐ体験 マネーフォワード クラウド会計",
      href: "https://px.a8.net/svt/ejp?a8mat=4BAEXI+DZOQK2+4JGQ+60WN6",
      imgSrc: "https://www16.a8.net/0.gif?a8mat=4BAEXI+DZOQK2+4JGQ+60WN6",
    },
  ],
};

export default function AffiliateLinkBlock({ id }: { id: string }) {
  const links = AFFILIATE_LINKS[id];
  if (!links || links.length === 0) return null;

  return (
    <div
      className="my-8 rounded-md border px-6 py-5"
      style={{ borderColor: "#E5DDDF", background: "#FBF6EC" }}
    >
      <span
        className="font-c text-[12px] tracking-[0.25em] uppercase font-bold text-berry inline-block mb-3"
        style={{ color: "#6D2E46" }}
      >
        【PR】
      </span>
      <ul className="list-none pl-0 m-0 space-y-3">
        {links.map((link) => (
          <li key={link.href} className="font-sm text-[15.5px] leading-[1.9] text-ink-2">
            <a
              href={link.href}
              rel="sponsored nofollow"
              className="underline underline-offset-4 decoration-[#D4A43A]/60 hover:decoration-[#D4A43A] text-berry transition-colors"
            >
              {link.label}
            </a>
            {/* 計測用1pxピクセル（ASP提供コードそのまま・next/image不使用） */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={link.imgSrc}
              width={1}
              height={1}
              alt=""
              style={{ border: 0 }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
