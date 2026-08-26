import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// FSPメディア記事本文のMarkdown→JSXレンダラー
// content/media/*.md の見出し・段落・表・リスト・リンク等を、
// サイトの既存タイポグラフィ（Shippori Mincho / Cormorant / berry・gold・ink 配色）に合わせて表示する

const components: Components = {
  h2: ({ children }) => (
    <h2
      className="font-sm text-[26px] max-md:text-[21px] font-medium leading-[1.5] tracking-[0.04em] text-ink mt-16 mb-6 pt-10 border-t"
      style={{ borderColor: "#E5DDDF" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-c text-[12px] tracking-[0.5em] uppercase font-semibold text-gold mt-12 mb-5">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="font-sm text-[15.5px] leading-[2.1] text-ink-2 mb-6">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong style={{ color: "#6D2E46", fontWeight: 600 }}>{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline underline-offset-4 decoration-[#D4A43A]/60 hover:decoration-[#D4A43A] text-berry transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc marker:text-gold space-y-3 mb-6 pl-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal marker:text-gold marker:font-semibold space-y-3 mb-6 pl-5">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="font-sm text-[15px] leading-[1.9] text-ink-2 pl-1">
      {children}
    </li>
  ),
  hr: () => (
    <hr className="my-12 border-0 h-px" style={{ background: "#E5DDDF" }} />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-8 -mx-1">
      <table
        className="w-full border-collapse text-[13.5px] font-sm min-w-[480px]"
        style={{ borderColor: "#E5DDDF" }}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: "#F4EDE0" }}>{children}</thead>
  ),
  th: ({ children }) => (
    <th
      className="font-c text-[11px] tracking-[0.15em] uppercase font-semibold text-ink text-left px-4 py-3 border"
      style={{ borderColor: "#E5DDDF" }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td
      className="text-ink-2 leading-[1.8] px-4 py-3 border align-top"
      style={{ borderColor: "#E5DDDF" }}
    >
      {children}
    </td>
  ),
  blockquote: ({ children }) => (
    <blockquote
      className="pl-6 my-8 italic text-ink-2"
      style={{ borderLeft: "2px solid #B8860B" }}
    >
      {children}
    </blockquote>
  ),
};

export default function MarkdownContent({
  markdown,
  isFirstBlock = true,
}: {
  markdown: string;
  // 記事本文を途中（例：アフィリエイトリンクブロックの前後）で分割してレンダリングする場合、
  // 先頭ブロック以外はfalseにする（見出しの上余白・区切り線を通常通り表示するため）
  isFirstBlock?: boolean;
}) {
  return (
    <div
      className={
        isFirstBlock
          ? "media-prose [&>*:first-child]:mt-0 [&>*:first-child]:border-t-0 [&>*:first-child]:pt-0"
          : "media-prose"
      }
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
