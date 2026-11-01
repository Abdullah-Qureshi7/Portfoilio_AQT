"use client";

import Icon from "./Icon";

/**
 * Horizontal slider used by Services + Testimonials.
 * On small screens CSS stacks cards vertically (see globals.css).
 */
export default function Slider({ trackClassName = "", children }) {
  function scrollByAmount(track, direction) {
    const card = track.firstElementChild;
    if (!card) return;
    const style = getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap || "18", 10);
    const amount = card.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  function handlePrev(e) {
    const track = e.currentTarget.parentElement.querySelector(".slider-track");
    if (track) scrollByAmount(track, -1);
  }

  function handleNext(e) {
    const track = e.currentTarget.parentElement.querySelector(".slider-track");
    if (track) scrollByAmount(track, 1);
  }

  return (
    <div className="slider" data-slider="">
      <button
        type="button"
        aria-label="Previous"
        className="slider-btn prev"
        onClick={handlePrev}
      >
        <Icon name="fa-solid fa-chevron-left" />
      </button>

      <div className={`slider-track ${trackClassName}`.trim()}>{children}</div>

      <button
        type="button"
        aria-label="Next"
        className="slider-btn next"
        onClick={handleNext}
      >
        <Icon name="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
}
