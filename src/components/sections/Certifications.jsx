import { certifications } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section className="section-pad cert-section" id="certifications">
      <div className="wrap">
        <SectionHeading
          title={certifications.title}
          subtitle={certifications.subtitle}
        />

        <div className="cert-grid">
          {certifications.items.map((item, index) => (
            <Reveal
              key={item.title}
              className="cert-card"
              delay={index % 3}
            >
              <div className="cert-glow" aria-hidden="true" />
              <div className="cert-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="cert-year">{item.year}</span>
                <div className="cert-shine" aria-hidden="true" />
              </div>

              <div className="cert-body">
                <div className="cert-meta-row">
                  <span className="cert-issuer">
                    <Icon name="fa-solid fa-award" />
                    {item.issuer}
                  </span>
                  <span className="cert-verified">
                    <Icon name="fa-solid fa-circle-check" />
                    Verified
                  </span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                {item.tags?.length ? (
                  <div className="cert-tags">
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
