import { certifications } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section className="section-pad alt-bg" id="certifications">
      <div className="wrap">
        <SectionHeading
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <div className="badge-grid">
          {certifications.items.map((item, index) => (
            <Reveal
              key={item.title}
              className="badge-card"
              delay={index % 2}
            >
              <div className="badge-image">
                <Icon name="fa-solid fa-certificate" />
                <span>
                  <img src={item.image} alt={item.title} />
                </span>
              </div>
              <div className="badge-body">
                <h4>{item.title}</h4>
                <span className="meta">{item.meta}</span>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
