"use client";

import { useState } from "react";
import { youtube } from "@/data";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function YoutubeCard({ video, index }) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;

  return (
    <Reveal delay={index % 3}>
      <div className={`yt-card${playing ? " is-playing" : ""}`}>
        <div className="yt-glow" aria-hidden="true" />

        <div className={`yt-media${playing ? " is-playing" : ""}`}>
          {!playing ? (
            <button
              type="button"
              className="yt-facade"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${video.title}`}
            >
              <img src={poster} alt="" className="yt-poster" loading="lazy" />
              <span className="yt-shade" aria-hidden="true" />
              <span className="yt-play" aria-hidden="true">
                <Icon name="fa-solid fa-play" />
              </span>
              <span className="yt-badge">
                <Icon name="fa-brands fa-youtube" /> Watch
              </span>
            </button>
          ) : (
            <iframe
              className="yt-embed"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        <div className="yt-card-body">
          <h4>{video.title}</h4>
          <p>{video.description}</p>
          {video.tags?.length ? (
            <div className="yt-tags">
              {video.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export default function Youtube() {
  return (
    <section className="section-pad yt-section" id="youtube">
      <div className="wrap">
        <SectionHeading title={youtube.title} subtitle={youtube.subtitle} />

        <div className="yt-grid">
          {youtube.videos.map((video, index) => (
            <YoutubeCard key={video.videoId} video={video} index={index} />
          ))}
        </div>

        <Reveal className="yt-cta">
          <a
            className="btn btn-primary yt-channel-btn"
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
