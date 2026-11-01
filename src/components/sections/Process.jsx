import { process } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section className="section-pad alt-bg">
      <div className="wrap">
        <SectionHeading title={process.title} subtitle={process.subtitle} />

        <div className="process-row process-row-6">
          {process.steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="process-step"
              delay={index % 4}
            >
              <div className="process-num">
                <Icon name={step.icon} />
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
