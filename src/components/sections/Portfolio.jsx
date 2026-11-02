"use client";

import { projects, featuredProjects } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

export default function Portfolio() {
  return (
    <section className="section-pad portfolio-section" id="portfolio">
      <div className="wrap">
        <div className="portfolio-head">
          <SectionHeading title={projects.title} subtitle={projects.subtitle} />
          <Reveal className="portfolio-head-link">
            <a className="works-link" href={projects.githubUrl} target="_blank" rel="noreferrer">
              {projects.githubLabel} <Icon name="fa-solid fa-arrow-right" />
            </a>
          </Reveal>
        </div>

        <div className="portfolio-grid">
          {featuredProjects.map((item, index) => (
            <Reveal key={item.title} delay={index % 3}>
              <TiltCard className="portfolio-card">
                <div className="portfolio-card-glow" aria-hidden="true" />
                <div className="portfolio-thumb">
                  <img src={item.image} alt={item.title} />
                  <span className="portfolio-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="portfolio-body">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="portfolio-link" href={item.link}>
                    View Project <Icon name="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
