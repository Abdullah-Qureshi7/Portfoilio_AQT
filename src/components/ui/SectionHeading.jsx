"use client";

import Reveal from "./Reveal";

/** Centered section title + optional subtitle */
export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <Reveal>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {subtitle ? (
        <Reveal>
          <p className="section-sub">{subtitle}</p>
        </Reveal>
      ) : null}
    </>
  );
}
