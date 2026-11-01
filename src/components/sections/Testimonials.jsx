import { testimonials } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Slider from "@/components/ui/Slider";

export default function Testimonials() {
  return (
    <section className="section-pad alt-bg" id="testimonials">
      <div className="wrap">
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <Reveal>
          <Slider trackClassName="testimonial-track">
            {testimonials.items.map((item) => (
              <div className="testimonial-card" key={item.name}>
                <Icon name="fa-solid fa-quote-left quote-ic" />
                <p>&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-person">
                  <div className="t-avatar">
                    <Icon name="fa-solid fa-user" />
                  </div>
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
}
