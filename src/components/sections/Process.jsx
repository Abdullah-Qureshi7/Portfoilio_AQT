"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const STEP_MS = 2400;

export default function Process() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = process.steps.length;
  const startRef = useRef(performance.now());
  const rowRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    let frame = 0;

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const cycle = total * STEP_MS;
      const t = (elapsed % cycle) / cycle;
      setProgress(t * 100);

      const nextActive = Math.min(total - 1, Math.floor(t * total));
      setActive((prev) => (prev === nextActive ? prev : nextActive));

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [total]);

  useEffect(() => {
    const row = rowRef.current;
    const el = itemRefs.current[active];
    if (!row || !el) return;

    // Scroll only the horizontal row — never the page
    const rowRect = row.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta =
      elRect.left + elRect.width / 2 - (rowRect.left + rowRect.width / 2);

    row.scrollBy({ left: delta, behavior: "smooth" });
  }, [active]);

  function jumpTo(index) {
    startRef.current = performance.now() - index * STEP_MS;
    setActive(index);
    setProgress((index / total) * 100);
  }

  return (
    <section className="section-pad alt-bg" id="process">
      <div className="wrap">
        <SectionHeading title={process.title} subtitle={process.subtitle} />

        <Reveal className="process-journey">
          <div className="process-journey-row" ref={rowRef}>
            <div className="process-journey-spine" aria-hidden="true">
              <span
                className="process-journey-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {process.steps.map((step, index) => {
              const state =
                index === active ? "is-active" : index < active ? "is-done" : "";

              return (
                <button
                  key={step.title}
                  type="button"
                  className={`process-journey-item ${state}`.trim()}
                  onClick={() => jumpTo(index)}
                  style={{ "--step-i": index }}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                >
                  <span className="process-journey-dot">
                    <Icon name={step.icon} />
                  </span>
                  <span className="process-journey-index">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="process-journey-title">{step.title}</span>
                  <span className="process-journey-desc">{step.description}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
