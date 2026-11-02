import { about } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import AboutVideo from "@/components/sections/AboutVideo";

export default function About() {
  return (
    <section className="section-pad wrap" id="about">
      <div className="about-grid">
        <Reveal className="about-visual" delay={0}>
          <AboutVideo videoId={about.videoId} title={about.videoTitle} />
        </Reveal>

        <Reveal delay={1}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <div className="about-actions">
            {about.actions.map((action) => (
              <a
                key={action.label}
                className={`btn ${action.variant === "primary" ? "btn-primary" : "btn-ghost"}`}
                href={action.href}
              >
                {action.label}
                {action.variant === "primary" ? (
                  <Icon name="fa-solid fa-arrow-right" />
                ) : null}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
