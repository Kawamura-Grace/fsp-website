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
  // POSレジ（記事10: pos-register-selection-criteria）は2026-09-02時点で
  // スマレジ3件が審査中・Square/Airレジ/クックビズは未申請のため、リンク未実装
  // （決裁ログ 3c6ac4b0-e272-81bb「リンクなし先行公開→審査通過後差し替え」に準拠）。
  // 審査通過後、A8管理画面から広告リンクコードを取得し、下記のように
  // "pos-tablet" 等のキーでエントリを追加したうえで、
  // content/media/article-7.md の該当箇所に {{AFFILIATE:pos-tablet}} マーカーを追加する。
  // 注意：app/media/[slug]/page.tsx のマーカー検出は body.match()（1件のみ）のため、
  // 記事内に複数のPOSリンクを差し込む場合はマーカー処理を複数件対応に拡張すること。
  // 担当：shift-dev（POSレジ審査通過の連絡を受け次第、河村決裁を経て対応）
  // "pos-tablet": [ { label: "...", href: "...", imgSrc: "..." } ],

  // 記事8（ロードマップ外・新規記事21「店舗の電話番号と店舗用端末の選び方」）
  // afb承認2件（決裁ログ 3d0ac4b0-e272-815e-a88e-d09bd423b8a2、2026-09-03）
  // リンクコードはafb管理画面「広告原稿取得」＞テキスト原稿から取得（2026-09-03取得・改変禁止）
  "phone-and-tablet-startup": [
    {
      label: "信用性アップ！固定電話をスマホで【03plus】",
      href: "https://t.afi-b.com/visit.php?a=Z16404R-P5294388&p=J991735t",
      imgSrc: "https://t.afi-b.com/lead/Z16404R/J991735t/P5294388",
    },
    {
      label: "法人・店舗向けタブレット【BiZiMo】",
      href: "https://t.afi-b.com/visit.php?a=r142984-M469801x&p=J991735t",
      imgSrc: "https://t.afi-b.com/lead/r142984/J991735t/M469801x",
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
        className="font-sm text-[15.5px] font-bold text-berry inline-block mb-3"
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
