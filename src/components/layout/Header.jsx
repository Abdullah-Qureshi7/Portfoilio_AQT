"use client";

import { useEffect, useState } from "react";
import { site, navLinks, socialPrimary } from "@/data";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`${scrolled ? "is-scrolled" : ""}${open ? " is-menu-open" : ""}`}>
        <div className="navbar">
          <a className="logo" href="#top" onClick={closeMenu}>
            <span className="logo-mark">
              <img src={site.logo} alt="" />
            </span>
            <span className="logo-text">{site.name}</span>
          </a>

          <nav aria-label="Primary">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="nav-cta" href="#contact">
            Let&apos;s Talk
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`nav-toggle${open ? " is-active" : ""}`}
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${open ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-brand">
            <span className="mobile-menu-avatar">
              <img src={site.logo} alt="" />
            </span>
            <div className="mobile-menu-brand-text">
              <strong>{site.name}</strong>
              <span>{site.role}</span>
            </div>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu-link"
                style={{ "--i": index }}
                onClick={closeMenu}
              >
                <span className="mobile-menu-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mobile-menu-label">{link.label}</span>
                <Icon name="fa-solid fa-arrow-right" />
              </a>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a
              className="btn btn-primary mobile-menu-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s Talk <Icon name="fa-solid fa-paper-plane" />
            </a>
            <a
              className="mobile-menu-wa"
              href={`https://wa.me/${site.phoneWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Icon name="fa-brands fa-whatsapp" /> WhatsApp
            </a>
          </div>

          <div className="mobile-menu-social">
            {socialPrimary.map((item) => (
              <a
                key={item.label}
                aria-label={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
