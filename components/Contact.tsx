"use client";

import { useActionState } from "react";
import { sendContactEmail, ContactState } from "@/app/actions/sendContactEmail";

const initialState: ContactState = { status: "idle" };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <section
      id="contact"
      className="py-[140px] max-md:py-20 relative"
      style={{
        background:
          "linear-gradient(rgba(42,26,36,0.95), rgba(42,26,36,0.98)), url('https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg?auto=compress&cs=tinysrgb&w=2000') center/cover",
        color: "#fff",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-8 max-sm:px-5">
        <span className="block w-[1.5px] h-[38px] mb-7" style={{ background: "#D4A43A" }} />
        <div
          className="font-c text-[12px] tracking-[0.55em] uppercase font-semibold mb-6"
          style={{ color: "#D4A43A" }}
        >
          Contact
        </div>
        <h2
          className="font-sm text-[42px] max-md:text-[28px] font-medium leading-[1.5] tracking-[0.06em] mb-7"
          style={{ color: "#fff" }}
        >
          まずは{" "}
          <span className="font-cg italic" style={{ color: "#D4A43A" }}>
            90分
          </span>
          、<br />
          話を聞かせてください。
        </h2>
        <p
          className="font-sm text-[15px] leading-[2] mb-16 max-md:mb-12"
          style={{ color: "#F2E8DD", opacity: 0.9 }}
        >
          初回ヒアリングは無料です。現状の整理だけでもお気軽にどうぞ。
          <br className="max-md:hidden" />
          メールでの直接のお問い合わせ、もしくは下記フォームからご連絡ください。
        </p>

        <div className="grid grid-cols-[1fr_1.4fr] gap-[72px] items-start max-md:grid-cols-1 max-md:gap-12">

          {/* 直接連絡 */}
          <div
            className="pr-12 max-md:pr-0 max-md:pb-12"
            style={{
              borderRight: "1px solid rgba(242,232,221,0.2)",
            }}
          >
            <div
              className="font-c text-[11px] tracking-[0.5em] uppercase font-semibold mb-5"
              style={{ color: "#D4A43A" }}
            >
              Direct
            </div>
            <div className="space-y-[22px]">
              <div>
                <div
                  className="font-sm text-[11px] tracking-[0.2em] uppercase mb-1.5"
                  style={{ color: "#8B7B82" }}
                >
                  Email
                </div>
                <div className="font-eb text-[18px] tracking-[0.04em]">
                  <a
                    href="mailto:kawamura@grace-foods.com"
                    className="contact-link"
                  >
                    kawamura@grace-foods.com
                  </a>
                </div>
              </div>
            </div>
            <p
              className="font-sm text-[12px] italic leading-[1.9] mt-8"
              style={{ color: "#F2E8DD", opacity: 0.7 }}
            >
              お急ぎの場合や、具体的な案件内容をすでにお持ちの方は、
              <br className="max-md:hidden" />
              直接メールでのご連絡をおすすめします。
            </p>
          </div>

          {/* フォーム */}
          <div>
            <div
              className="font-c text-[11px] tracking-[0.5em] uppercase font-semibold mb-8"
              style={{ color: "#D4A43A" }}
            >
              Inquiry Form
            </div>

            {state.status === "success" ? (
              <div
                className="font-sm text-[16px] leading-[2]"
                style={{ color: "#F2E8DD" }}
              >
                <p className="mb-4">
                  お問い合わせありがとうございます。<br />
                  内容を確認のうえ、2営業日以内にご連絡いたします。
                </p>
                <p style={{ color: "#D4A43A" }}>
                  kawamura@grace-foods.com よりご返信します。
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-[22px]">
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  <Field label="お名前" name="name" required />
                  <Field label="会社名 / 屋号" name="company" />
                </div>
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  <Field label="メールアドレス" name="email" type="email" required />
                  <Field label="電話番号" name="phone" type="tel" />
                </div>
                <Field label="ご相談内容" name="message" textarea required />

                {state.status === "error" && (
                  <p className="font-sm text-[13px]" style={{ color: "#D4A43A" }}>
                    {state.message}
                  </p>
                )}

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex items-center gap-3 px-9 py-[18px] font-c text-[12px] tracking-[0.4em] uppercase font-semibold transition-all duration-300 disabled:opacity-50"
                    style={{
                      background: "#B8860B",
                      color: "#2A1A24",
                      cursor: isPending ? "wait" : "pointer",
                    }}
                  >
                    {isPending ? "送信中..." : "送信する →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const inputStyle: React.CSSProperties = {
    fontFamily: "inherit",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(242,232,221,0.3)",
    padding: "12px 2px",
    fontSize: "14px",
    color: "#fff",
    letterSpacing: "0.03em",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s ease",
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-sm text-[12px] tracking-[0.15em]"
        style={{ color: "#F2E8DD", opacity: 0.85 }}
      >
        {label}
        {required && (
          <span className="font-cg italic ml-1" style={{ color: "#D4A43A" }}>
            *
          </span>
        )}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          placeholder="現在の課題、ご検討中の施策、ご依頼の背景などをお知らせください。"
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.8 }}
          onFocus={(e) => {
            (e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = "#D4A43A";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLTextAreaElement).style.borderBottomColor =
              "rgba(242,232,221,0.3)";
          }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          style={inputStyle}
          onFocus={(e) => {
            (e.currentTarget as HTMLInputElement).style.borderBottomColor = "#D4A43A";
          }}
          onBlur={(e) => {
            (e.currentTarget as HTMLInputElement).style.borderBottomColor =
              "rgba(242,232,221,0.3)";
          }}
        />
      )}
    </div>
  );
}
