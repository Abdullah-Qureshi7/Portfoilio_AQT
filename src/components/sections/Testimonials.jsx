import { testimonials } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Slider from "@/components/ui/Slider";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Testimonials() {
  return (
    <section className="section-pad testimonial-section" id="testimonials">
      <div className="wrap">
        <SectionHeading
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <Reveal>
          <Slider trackClassName="testimonial-track">
            {testimonials.items.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="testimonial-glow" aria-hidden="true" />
                <div className="testimonial-top">
                  <span className="quote-ic" aria-hidden="true">
                    <Icon name="fa-solid fa-quote-left" />
                  </span>
                  {item.focus ? (
                    <span className="testimonial-focus">{item.focus}</span>
                  ) : null}
                </div>

                <p className="testimonial-quote">{item.quote}</p>

                <div className="testimonial-person">
                  <div className="t-avatar" aria-hidden="true">
                    {initials(item.name)}
                  </div>
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
}
