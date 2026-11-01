import { about } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section className="section-pad wrap" id="about">
      <div className="about-grid">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 40)}>{text}</p>
          ))}
          <a className="about-link" href={about.link.href}>
            {about.link.label} <Icon name="fa-solid fa-arrow-right" />
          </a>
        </Reveal>

        <Reveal className="about-visual" delay={1}>
          <span>{about.visualLabel}</span>
        </Reveal>
      </div>
    </section>
  );
}
