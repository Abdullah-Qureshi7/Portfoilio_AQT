"use client";

import { useState } from "react";
import { faq } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-pad wrap">
      <SectionHeading title={faq.title} />

      <div className="faq-wrap">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal key={item.question} className={`faq-item${isOpen ? " open" : ""}`}>
              <div
                className="faq-q"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setOpenIndex(isOpen ? null : index);
                  }
                }}
              >
                {item.question} <Icon name="fa-solid fa-plus" />
              </div>
              <div className="faq-a">
                <p>{item.answer}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
