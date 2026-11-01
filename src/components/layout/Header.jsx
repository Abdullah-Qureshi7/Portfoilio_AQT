"use client";

import { useState } from "react";
import { site, navLinks } from "@/data";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header>
        <div className="navbar">
          <a className="logo" href="#top" onClick={closeMenu}>
            <span className="logo-mark">
              <img src={site.logo} alt={`${site.name} logo`} />
            </span>
            <span className="logo-text">{site.name}</span>
          </a>

          <nav>
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
            className="nav-toggle"
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`} id="mobile-menu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={closeMenu}>
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
