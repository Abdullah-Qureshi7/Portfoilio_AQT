import { services } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="wrap">
        <SectionHeading title={services.title} subtitle={services.subtitle} />

        <div className="service-rows">
          {services.items.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            const reversed = index % 2 === 1;

            return (
              <article
                key={item.title}
                className={`service-row${reversed ? " is-reversed" : ""}`}
              >
                <Reveal className="service-copy" delay={0}>
                  <span className="service-tag">
                    {number} {item.tag}
                  </span>
                  <h3>{item.title}</h3>
                  <p className="service-desc">{item.description}</p>
                  <div className="service-highlight">{item.highlight}</div>
                  <ul className="service-points">
                    {item.points.map((point) => (
                      <li key={point}>
                        <Icon name="fa-solid fa-circle-check" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="service-more" href={item.href}>
                    Let&apos;s Talk <Icon name="fa-solid fa-arrow-right" />
                  </a>
                </Reveal>

                <Reveal className="service-media" delay={1}>
                  <div className="service-media-frame">
                    <img src={item.image} alt={item.imageAlt} />
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
