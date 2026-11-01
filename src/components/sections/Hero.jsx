"use client";

import { useCallback, useState } from "react";
import { hero } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import HeroBgSlider from "@/components/ui/HeroBgSlider";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((_item, index) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="hero hero-with-bg" id="hero">
      <HeroBgSlider index={activeIndex} onChange={handleSlideChange} />

      <div className="wrap hero-content">
        <div className="hero-grid">
          <Reveal className="is-visible hero-copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>{hero.name}</h1>
            <span className="role">{hero.role}</span>

            <div className="founder-tag">
              <Icon name="fa-solid fa-briefcase" /> {hero.founderTag}
            </div>

            <p className="desc">{hero.description}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label} <Icon name="fa-solid fa-arrow-right" />
              </a>
              <a className="btn btn-ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-visual is-visible" delay={1}>
            <div className="hero-portrait">
              <div className="hero-portrait-ring" aria-hidden="true" />
              <div className="hero-portrait-glow" aria-hidden="true" />

              <div className="hero-portrait-photo">
                <img src={hero.photo} alt={hero.photoAlt} />
              </div>

              <div className="hero-portrait-badge" aria-hidden="true">
                <Icon name="fa-solid fa-bolt" />
              </div>

              <div className="hero-orbit" aria-hidden="true">
                <span className="hero-orbit-icon hero-orbit-1">
                  <Icon name="fa-brands fa-python" />
                </span>
                <span className="hero-orbit-icon hero-orbit-2">
                  <Icon name="fa-solid fa-code" />
                </span>
                <span className="hero-orbit-icon hero-orbit-3">
                  <Icon name="fa-solid fa-robot" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="stats-row">
          {hero.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="stat-card"
              delay={index % 4}
            >
              <Icon name={stat.icon} />
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
