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

  const details = [
    {
      icon: "fa-solid fa-envelope",
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "fa-solid fa-phone",
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${site.phoneWhatsApp}`,
      external: true,
    },
    {
      icon: "fa-solid fa-location-dot",
      label: "Location",
      value: site.location,
    },
    {
      icon: "fa-solid fa-briefcase",
      label: "Studio",
      value: site.studio,
    },
  ];

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="wrap">
        <Reveal className="contact-intro">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-form-wrap">
            <form className="glass-card contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-head">
                <h3>{contact.formTitle}</h3>
                <span className="contact-form-note">
                  <Icon name="fa-solid fa-clock" /> {contact.formNote}
                </span>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    placeholder="Your name"
                    required
                    type="text"
                    autoComplete="name"
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
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  type="text"
                />
              </div>

              <div className="field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                />
              </div>

              <button
                className="btn btn-primary contact-submit"
                type="submit"
                disabled={sending}
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Icon name="fa-solid fa-paper-plane" />
                  </>
                )}
              </button>

              {status.message ? (
                <div className={`form-status ${status.type}`.trim()} role="status">
                  {status.message}
                </div>
              ) : null}
            </form>
          </Reveal>

          <Reveal className="contact-side" delay={1}>
            <div className="contact-card glass-card">
              <h4>{contact.detailsTitle}</h4>

              <div className="contact-lines">
                {details.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      className="contact-line"
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="ic" aria-hidden="true">
                        <Icon name={item.icon} />
                      </span>
                      <span className="contact-line-text">
                        <span className="contact-line-label">{item.label}</span>
                        <span className="contact-line-value">{item.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="contact-line" key={item.label}>
                      <span className="ic" aria-hidden="true">
                        <Icon name={item.icon} />
                      </span>
                      <span className="contact-line-text">
                        <span className="contact-line-label">{item.label}</span>
                        <span className="contact-line-value">{item.value}</span>
                      </span>
                    </div>
                  )
                )}
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
