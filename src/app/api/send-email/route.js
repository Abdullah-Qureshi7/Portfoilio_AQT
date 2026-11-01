/**
 * Contact form API (Next.js App Router)
 *
 * Setup on Vercel:
 * 1. Add env var: RESEND_API_KEY=re_xxxxxxxx
 * 2. Update `to` below to your inbox
 * 3. After verifying a domain in Resend, update `from`
 */

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["imtiazabdullah900@gmail.com"],
        reply_to: email,
        subject: `New portfolio message: ${subject}`,
        html: `
          <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return Response.json({ error: "Email service error" }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Send email error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
