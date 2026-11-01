"use client";

/**
 * Soft 3D tilt on mouse move (projects + hero photo).
 */
export default function TiltCard({ children, className = "", as: Tag = "div" }) {
  function onMove(e) {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  }

  function onLeave(e) {
    e.currentTarget.style.transform =
      "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
  }

  return (
    <Tag
      className={`tilt-card ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Tag>
  );
}
