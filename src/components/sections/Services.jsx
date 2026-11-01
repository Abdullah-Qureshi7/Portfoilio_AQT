import { services } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Slider from "@/components/ui/Slider";

export default function Services() {
  return (
    <section className="section-pad wrap" id="services">
      <SectionHeading title={services.title} subtitle={services.subtitle} />

      <Reveal>
        <Slider trackClassName="services-track">
          {services.items.map((item) => (
            <div className="service-card" key={item.title}>
              <div className="service-icon">
                <Icon name={item.icon} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="service-meta">{item.meta}</div>
            </div>
          ))}
        </Slider>
      </Reveal>
    </section>
  );
}
