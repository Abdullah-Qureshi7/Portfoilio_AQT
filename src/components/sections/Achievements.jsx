import { achievements } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Achievements() {
  return (
    <section className="section-pad achieve-section" id="achievements">
      <div className="wrap">
        <SectionHeading
          title={achievements.title}
          subtitle={achievements.subtitle}
        />

        <div className="achieve-grid">
          {achievements.items.map((item, index) => (
            <Reveal
              key={item.title}
              className="achieve-card"
              delay={index % 3}
            >
              <div className="achieve-glow" aria-hidden="true" />
              <div className="achieve-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="achieve-year">{item.year}</span>
                <div className="achieve-shine" aria-hidden="true" />
              </div>

              <div className="achieve-body">
                <div className="achieve-meta-row">
                  <span className="achieve-org">
                    <Icon name={item.icon} />
                    {item.org}
                  </span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                {item.tags?.length ? (
                  <div className="achieve-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
