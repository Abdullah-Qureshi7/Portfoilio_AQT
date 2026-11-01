"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data";

/**
 * Full-bleed hero background slider.
 * Auto-plays all project UIs in an endless loop.
 */
export default function HeroBgSlider({
  intervalMs = 4000,
  index: controlledIndex,
  onChange,
}) {
  const items = projects.items;
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = typeof controlledIndex === "number";
  const index = isControlled ? controlledIndex : internalIndex;

  useEffect(() => {
    if (!items.length) return undefined;
    const id = setInterval(() => {
      const next = (index + 1) % items.length;
      if (!isControlled) setInternalIndex(next);
      onChange?.(items[next], next);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items, intervalMs, index, isControlled, onChange]);

  // Initial notify
  useEffect(() => {
    if (items[index]) onChange?.(items[index], index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!items.length) return null;

  return (
    <div className="hero-bg-slider" aria-hidden="true">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`hero-bg-slide${i === index ? " is-active" : ""}`}
        >
          <img src={item.image} alt="" />
        </div>
      ))}
      <div className="hero-bg-overlay" />
    </div>
  );
}
