import { experience } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function ExperienceCard({ item, index }) {
  return (
    <Reveal className="tl-card" delay={index % 3}>
      <div className="tl-card-glow" aria-hidden="true" />
      <div className="tl-card-top">
        <span className="tl-date">
          <Icon name="fa-solid fa-calendar" />
          {item.date}
        </span>
        <span className="tl-type">{item.type}</span>
      </div>

      <div className="tl-card-head">
        <div className="tl-logo" aria-hidden="true">
          <img src={item.logo} alt="" loading="lazy" />
        </div>
        <div className="tl-copy">
          <h4>{item.company}</h4>
          <span className="tl-role">{item.role}</span>
        </div>
      </div>

      <p>{item.description}</p>

      {item.skills?.length ? (
        <div className="tl-skills">
          <span className="tl-skills-label">Skills</span>
          <div className="tl-tags">
            {item.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ) : null}
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section className="section-pad exp-section" id="experience">
      <div className="wrap">
        <SectionHeading
          title={experience.title}
          subtitle={experience.subtitle}
        />

        <div className="timeline">
          <div className="timeline-spine" aria-hidden="true" />

          {experience.items.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                className={`tl-item${isRight ? " is-right" : " is-left"}`}
                key={`${item.company}-${item.date}`}
              >
                {isRight ? (
                  <>
                    <div className="empty" />
                    <div className="tl-node">
                      <span className="tl-dot" />
                      <span className="tl-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <ExperienceCard item={item} index={index} />
                  </>
                ) : (
                  <>
                    <ExperienceCard item={item} index={index} />
                    <div className="tl-node">
                      <span className="tl-dot" />
                      <span className="tl-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="empty" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
