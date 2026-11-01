"use client";

import { useState } from "react";
import { site, contact } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ type: "ok", message: contact.successMessage });
      form.reset();
    } catch {
      setStatus({ type: "err", message: contact.errorMessage });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-pad contact-section alt-bg" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal className="contact-left">
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>

            <form className="glass-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="field full" style={{ marginBottom: 14 }}>
                <label htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  type="text"
                />
              </div>

              <div className="field full" style={{ marginBottom: 18 }}>
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                />
              </div>

              <button className="btn btn-primary" type="submit" disabled={sending}>
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Icon name="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>

              <div className={`form-status ${status.type}`.trim()}>
                {status.message}
              </div>
            </form>
          </Reveal>

          <Reveal delay={1}>
            <div className="contact-card glass-card">
              <h4>{contact.detailsTitle}</h4>
              <div className="contact-line">
                <span className="ic">
                  <Icon name="fa-solid fa-envelope" />
                </span>
                {site.email}
              </div>
              <div className="contact-line">
                <span className="ic">
                  <Icon name="fa-solid fa-phone" />
                </span>
                {site.phone}
              </div>
              <div className="contact-line">
                <span className="ic">
                  <Icon name="fa-solid fa-location-dot" />
                </span>
                {site.location}
              </div>
              <div className="contact-line">
                <span className="ic">
                  <Icon name="fa-solid fa-briefcase" />
                </span>
                {site.studio}
              </div>
              <a className="cv-btn" download href={site.resume}>
                <Icon name="fa-solid fa-download" /> {contact.cvLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
