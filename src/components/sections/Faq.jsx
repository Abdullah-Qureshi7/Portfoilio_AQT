"use client";

import { useState } from "react";
import { faq } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="section-pad faq-section" id="faq">
      <div className="wrap">
        <SectionHeading title={faq.title} subtitle={faq.subtitle} />

        <div className="faq-wrap">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal key={item.question} delay={index % 3}>
                <div className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className="faq-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-q-text">{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <Icon name="fa-solid fa-plus" />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    className="faq-a"
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
