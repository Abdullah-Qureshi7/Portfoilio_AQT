import { achievements } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Achievements() {
  return (
    <section className="section-pad wrap" id="achievements">
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
            <div className="achieve-image">
              <Icon name={item.icon} />
              <span>
                <img src={item.image} alt={item.title} />
              </span>
            </div>
            <div className="achieve-body">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
