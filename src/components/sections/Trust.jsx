import { trust } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export default function Trust() {
  return (
    <div className="wrap">
      <Reveal className="trust-row">
        {trust.items.map((item) => (
          <div className="trust-item" key={item.label}>
            <Icon name={item.icon} /> {item.label}
          </div>
        ))}
      </Reveal>
    </div>
  );
}
