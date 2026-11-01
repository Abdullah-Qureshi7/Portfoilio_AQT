import { stack } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Stack() {
  return (
    <section className="section-pad alt-bg" id="stack">
      <div className="wrap">
        <SectionHeading title={stack.title} subtitle={stack.subtitle} />

        <div className="stack-grid">
          {stack.groups.map((group, index) => (
            <Reveal
              key={group.title}
              className="stack-card"
              delay={index % 3}
            >
              <h4>
                <span className="stack-icon">
                  <Icon name={group.icon} />
                </span>
                {group.title}
              </h4>
              <p className="stack-note">{group.note}</p>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
