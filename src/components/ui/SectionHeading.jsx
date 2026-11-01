import Reveal from "./Reveal";

/** Centered section title + optional subtitle */
export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <Reveal as="h2" className="section-title">
        {title}
      </Reveal>
      {subtitle ? (
        <Reveal as="p" className="section-sub">
          {subtitle}
        </Reveal>
      ) : null}
    </>
  );
}
