import { site, footerLinks, socialPrimary, socialSecondary } from "@/data";
import Icon from "@/components/ui/Icon";

function SocialRow({ items }) {
  return (
    <div className="social-row">
      {items.map((item) => (
        <a
          key={item.label}
          aria-label={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={item.icon} />
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#top">
              <span className="logo-mark">
                <img src={site.logo} alt="" />
              </span>
              <span className="logo-text">{site.name}</span>
            </a>
            <p>{site.tagline}</p>
            <p className="founder-line">Founder, {site.studio}</p>
            <div className="social-stack">
              <SocialRow items={socialPrimary} />
              <SocialRow items={socialSecondary} />
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Icon name="fa-solid fa-envelope" /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                  <Icon name="fa-solid fa-phone" /> {site.phone}
                </a>
              </li>
              <li>
                <a href="#contact">
                  <Icon name="fa-solid fa-location-dot" /> {site.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. {site.studio}.
          </span>
          <a className="back-top" href="#top">
            Back to top <Icon name="fa-solid fa-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
