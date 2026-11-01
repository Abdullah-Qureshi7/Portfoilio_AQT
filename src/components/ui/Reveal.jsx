"use client";

import { useEffect, useRef } from "react";

/**
 * Fade/slide-in when the element enters the viewport.
 * delay: 0 | 1 | 2 | 3  → matches .reveal-delay-* in CSS
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety: always show after 2.5s if observer fails
    const fallback = setTimeout(() => el.classList.add("is-visible"), 2500);

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return () => clearTimeout(fallback);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
