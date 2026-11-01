import { youtube } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Youtube() {
  return (
    <section className="section-pad alt-bg" id="youtube">
      <div className="wrap">
        <SectionHeading title={youtube.title} subtitle={youtube.subtitle} />

        <div className="yt-grid">
          {youtube.videos.map((video, index) => (
            <Reveal key={video.embedUrl} className="yt-card" delay={index % 3}>
              <iframe
                allowFullScreen
                className="yt-embed"
                frameBorder="0"
                loading="lazy"
                src={video.embedUrl}
                title={video.title}
              />
              <div className="yt-card-body">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="yt-cta">
          <a
            className="btn btn-ghost"
            href={youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="fa-brands fa-youtube" /> {youtube.channelLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
