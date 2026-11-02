"use client";

import { stack } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Stack() {
  return (
    <section className="section-pad alt-bg" id="stack">
      <div className="wrap">
        <SectionHeading title={stack.title} subtitle={stack.subtitle} />

        <div className="stack-grid">
          {stack.groups.map((group, index) => (
            <Reveal key={group.title} delay={index % 4}>
              <article className="stack-card">
                <div className="stack-card-glow" aria-hidden="true" />
                <div className="stack-card-glow stack-card-glow-2" aria-hidden="true" />
                <h4>
                  <span className="stack-icon">
                    <Icon name={group.icon} />
                  </span>
                  {group.title}
                </h4>
                <p className="stack-note">{group.note}</p>
                <div className="pill-row">
                  {group.items.map((item, itemIndex) => (
                    <span
                      className="pill pill-skill"
                      key={item.name}
                      style={{
                        "--pill-i": itemIndex,
                        "--brand": item.color,
                      }}
                    >
                      <span className="pill-skill-icon" aria-hidden="true">
                        <Icon name={item.icon} />
                      </span>
                      <span className="pill-skill-name">{item.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
