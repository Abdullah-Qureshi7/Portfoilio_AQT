import { experience } from "@/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section className="section-pad alt-bg">
      <div className="wrap">
        <SectionHeading
          title={experience.title}
          subtitle={experience.subtitle}
        />

        <div className="timeline">
          {experience.items.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <div className="tl-item" key={`${item.company}-${item.date}`}>
                {isRight ? (
                  <>
                    <div className="empty" />
                    <div className="tl-dot" />
                    <Reveal className="tl-card">
                      <span className="tl-role">{item.date}</span>
                      <h4>{item.company}</h4>
                      <p>{item.description}</p>
                    </Reveal>
                  </>
                ) : (
                  <>
                    <Reveal className="tl-card">
                      <span className="tl-role">{item.date}</span>
                      <h4>{item.company}</h4>
                      <p>{item.description}</p>
                    </Reveal>
                    <div className="tl-dot" />
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
