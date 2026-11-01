import { site, footerLinks, socialLinks } from "@/data";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#top">
              <span className="logo-mark">
                <img src={site.logo} alt={`${site.name} logo`} />
              </span>
              {site.name}
            </a>
            <p>{site.tagline}</p>
            <p className="founder-line">Founder, {site.studio}</p>
            <div className="social-row">
              {socialLinks.map((item) => (
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
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href="#contact">{site.location}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name} | {site.studio}.
          </span>
          <a className="back-top" href="#top">
            Back to top <Icon name="fa-solid fa-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
