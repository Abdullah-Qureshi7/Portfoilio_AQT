/**
 * Chat API
 *
 * NOW: answers from local portfolio knowledge (no key needed).
 * LATER: set OPENROUTER_API_KEY in Vercel/.env and it will use the AI API.
 *
 * Optional env:
 *   OPENROUTER_API_KEY=sk-or-...
 *   OPENROUTER_MODEL=openai/gpt-4o-mini
 */

import { buildKnowledgeContext, localChatReply } from "@/data/chatbot";

export async function POST(request) {
  try {
    const body = await request.json();
    const message = String(body?.message || "").trim();
    const history = Array.isArray(body?.history) ? body.history.slice(-8) : [];

    if (!message) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    // --- Local mode (default until you add an API key) ---
    if (!apiKey) {
      return Response.json({
        reply: localChatReply(message),
        mode: "local",
      });
    }

    // --- AI mode (when OPENROUTER_API_KEY is set) ---
    const knowledge = buildKnowledgeContext();
    const messages = [
      {
        role: "system",
        content: knowledge,
      },
      ...history
        .filter((m) => m && (m.role === "user" || m.role === "assistant"))
        .map((m) => ({ role: m.role, content: String(m.content || "") })),
      { role: "user", content: message },
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Abdullah Qureshi Portfolio Chatbot",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini",
        messages,
        temperature: 0.4,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenRouter error:", errText);
      // Fallback to local knowledge if API fails
      return Response.json({
        reply: localChatReply(message),
        mode: "local-fallback",
      });
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      localChatReply(message);

    return Response.json({ reply, mode: "ai" });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json(
      { error: "Chat failed", reply: localChatReply("help") },
      { status: 500 }
    );
  }
}
