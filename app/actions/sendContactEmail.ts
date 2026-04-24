"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().optional(),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().optional(),
  message: z.string().min(10, "10文字以上でご入力ください"),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name") as string,
    company: (formData.get("company") as string) || undefined,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    message: formData.get("message") as string,
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "入力内容を確認してください";
    return { status: "error", message: first };
  }

  const { name, company, email, phone, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO ?? "kawamura@grace-foods.com";
  const fromEmail =
    process.env.CONTACT_EMAIL_FROM ?? "noreply@send.grace-foods.com";

  if (!apiKey) {
    // RESEND_API_KEY未設定時はコンソールに出力してエラーとする
    console.error("[FSP Contact] RESEND_API_KEY is not set");
    return {
      status: "error",
      message: "メール送信の設定が完了していません。直接メールでご連絡ください。",
    };
  }

  const subject = `[FSP問い合わせ] ${company ? company + " " : ""}${name} 様`;
  const html = `
    <h2>Food &amp; Sweets Partners へのお問い合わせ</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>お名前</strong></td><td>${name}</td></tr>
      ${company ? `<tr><td><strong>会社名</strong></td><td>${company}</td></tr>` : ""}
      <tr><td><strong>メール</strong></td><td>${email}</td></tr>
      ${phone ? `<tr><td><strong>電話番号</strong></td><td>${phone}</td></tr>` : ""}
    </table>
    <hr/>
    <h3>ご相談内容</h3>
    <p style="white-space:pre-wrap">${message}</p>
  `;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });
    if (error) {
      console.error("[FSP Contact] Resend error:", error);
      return { status: "error", message: "送信に失敗しました。時間を置いてお試しください。" };
    }
    return { status: "success" };
  } catch (err) {
    console.error("[FSP Contact] Unexpected error:", err);
    return { status: "error", message: "送信に失敗しました。時間を置いてお試しください。" };
  }
}
