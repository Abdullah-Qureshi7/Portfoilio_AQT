import { projects } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

export default function Works() {
  return (
    <section className="section-pad wrap" id="work">
      <div className="works-head">
        <Reveal as="h2">{projects.title}</Reveal>
        <Reveal as="a" className="works-link" href={projects.githubUrl}>
          {projects.githubLabel} <Icon name="fa-solid fa-arrow-right" />
        </Reveal>
      </div>

      <div className="works-grid">
        {projects.items.map((item, index) => (
          <Reveal key={item.title} delay={index % 3}>
            <TiltCard className="work-card">
              <div className="work-thumb">
                <div className="grid-lines">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <div className="work-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="work-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="work-link" href={item.link}>
                  View Project <Icon name="fa-solid fa-arrow-right" />
                </a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
