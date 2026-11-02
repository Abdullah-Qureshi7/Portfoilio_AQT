/**
 * Chat API
 *
 * Works without any key (local portfolio answers).
 * When OPENROUTER_API_KEY is set in Vercel, uses AI replies.
 *
 * Vercel → Settings → Environment Variables:
 *   OPENROUTER_API_KEY = sk-or-...          (required for AI)
 *   OPENROUTER_MODEL   = openai/gpt-4o-mini (optional)
 *   NEXT_PUBLIC_SITE_URL = https://your-domain.com (optional)
 */

import { buildKnowledgeContext, localChatReply } from "@/data/chatbot";

export const runtime = "nodejs";
export const maxDuration = 30;

function safeReply(message) {
  try {
    return localChatReply(message);
  } catch {
    return "Thanks for your message. Please email or WhatsApp me from the Contact section and I'll get back to you.";
  }
}

function siteUrlFromRequest(request) {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const origin = request.headers.get("origin");
  if (origin) return origin;

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return new URL(referer).origin;
    } catch {
      /* ignore */
    }
  }

  return "https://openrouter.ai";
}

export async function POST(request) {
  let message = "";

  try {
    const body = await request.json();
    message = String(body?.message || "").trim();
    const rawHistory = Array.isArray(body?.history) ? body.history : [];

    if (!message) {
      return Response.json(
        { reply: "Please type a question about my work or how to contact me." },
        { status: 200 }
      );
    }

    const apiKey = String(process.env.OPENROUTER_API_KEY || "").trim();

    // --- Local mode (no key / empty key) ---
    if (!apiKey) {
      return Response.json({
        reply: safeReply(message),
        mode: "local",
      });
    }

    // History without the latest user turn (we add it once below)
    const history = rawHistory
      .filter((m) => m && (m.role === "user" || m.role === "assistant"))
      .map((m) => ({
        role: m.role,
        content: String(m.content || "").trim(),
      }))
      .filter((m) => m.content)
      .slice(-10);

    if (
      history.length &&
      history[history.length - 1].role === "user" &&
      history[history.length - 1].content === message
    ) {
      history.pop();
    }

    const messages = [
      { role: "system", content: buildKnowledgeContext() },
      ...history,
      { role: "user", content: message },
    ];

    const model =
      String(process.env.OPENROUTER_MODEL || "").trim() || "openai/gpt-4o-mini";

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    let response;
    try {
      response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": siteUrlFromRequest(request),
          "X-Title": "Abdullah Qureshi Portfolio Chatbot",
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.4,
          max_tokens: 500,
        }),
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error("OpenRouter error:", response.status, errText.slice(0, 500));
      return Response.json({
        reply: safeReply(message),
        mode: "local-fallback",
      });
    }

    const data = await response.json();
    const reply =
      String(data?.choices?.[0]?.message?.content || "").trim() ||
      safeReply(message);

    return Response.json({ reply, mode: "ai" });
  } catch (err) {
    console.error("Chat API error:", err?.name || err);
    return Response.json({
      reply: safeReply(message || "help"),
      mode: "local-fallback",
    });
  }
}
