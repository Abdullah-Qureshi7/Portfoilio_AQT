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
          <Reveal key={item.title} delay={index % 2}>
            <div
              className={`edu-flip${flipped[index] ? " is-flipped" : ""}`}
            >
              <button
                type="button"
                className="edu-flip-inner"
                onClick={() => toggleFlip(index)}
                aria-label={
                  flipped[index]
                    ? `Hide highlights for ${item.title}`
                    : `Show highlights for ${item.title}`
                }
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
                    <Icon name="fa-solid fa-arrows-rotate" /> Tap to flip
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
                  <div className="edu-hint edu-hint-back">
                    <Icon name="fa-solid fa-arrows-rotate" /> Tap to flip back
                  </div>
                </div>
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
