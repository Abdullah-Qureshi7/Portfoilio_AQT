"use client";

import { useState } from "react";
import { education } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  const [flipped, setFlipped] = useState({});

  function toggleFlip(index) {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section className="section-pad wrap" id="education">
      <SectionHeading title={education.title} subtitle={education.subtitle} />

      <div className="edu-grid">
        {education.items.map((item, index) => (
          <Reveal
            key={item.title}
            className={`edu-flip${flipped[index] ? " flipped" : ""}`}
            delay={index % 2}
          >
            <div
              className="edu-flip-inner"
              onClick={() => toggleFlip(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleFlip(index);
              }}
            >
              <div className="edu-face edu-front">
                <div className="row-top">
                  <div className="ic-box">
                    <Icon name={item.icon} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
                <span className="meta">{item.meta}</span>
                <p>{item.summary}</p>
                <div className="edu-hint">
                  <Icon name="fa-solid fa-arrows-rotate" /> Hover / tap to flip
                </div>
              </div>

              <div className="edu-face edu-back">
                <h5>HIGHLIGHTS</h5>
                <ul>
                  {item.highlights.map((line) => (
                    <li key={line}>
                      <Icon name="fa-solid fa-check" /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
