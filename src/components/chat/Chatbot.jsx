"use client";

import { useEffect, useRef, useState } from "react";
import { chatbotConfig } from "@/data/chatbot";
import { hero } from "@/data/hero";
import Icon from "@/components/ui/Icon";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: chatbotConfig.welcome },
  ]);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(text) {
    const message = String(text || input).trim();
    if (!message || sending) return;

    const nextHistory = [...messages, { role: "user", content: message }];
    setMessages(nextHistory);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: nextHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json().catch(() => ({}));
      const reply =
        data?.reply ||
        "Sorry, I couldn't answer right now. Please use the Contact section or WhatsApp me.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection issue. Please try again, or WhatsApp / email me from the Contact section.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <div className={`aqt-chat${open ? " is-open" : ""}`}>
      {open && (
        <div className="aqt-chat-panel" role="dialog" aria-label="Portfolio chatbot">
          <div className="aqt-chat-header">
            <div className="aqt-chat-title">
              <span className="aqt-chat-avatar">
                <img src={hero.photo} alt="Abdullah Qureshi" />
              </span>
              <div>
                <strong>Abdullah Qureshi</strong>
              </div>
            </div>
            <button
              type="button"
              className="aqt-chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <Icon name="fa-solid fa-xmark" />
            </button>
          </div>

          <div className="aqt-chat-body">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`aqt-chat-bubble ${m.role === "user" ? "is-user" : "is-bot"}`}
              >
                {m.content.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < m.content.split("\n").length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            ))}

            {sending && (
              <div className="aqt-chat-bubble is-bot is-typing">
                <span />
                <span />
                <span />
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length <= 2 && (
            <div className="aqt-chat-suggestions">
              {chatbotConfig.suggestions.map((s) => (
                <button key={s} type="button" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <form className="aqt-chat-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={chatbotConfig.placeholder}
              disabled={sending}
              aria-label="Chat message"
            />
            <button type="submit" disabled={sending || !input.trim()} aria-label="Send">
              <Icon name="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
      )}

      {!open && (
        <button
          type="button"
          className="aqt-chat-fab"
          aria-label="Open chatbot"
          onClick={() => setOpen(true)}
        >
          <Icon name="fa-solid fa-comments" />
        </button>
      )}
    </div>
  );
}
