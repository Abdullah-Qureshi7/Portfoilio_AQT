"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";

export default function AboutVideo({ videoId, title }) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={`about-video${playing ? " is-playing" : ""}`}>
      {!playing ? (
        <button
          type="button"
          className="about-video-facade"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
        >
          <img src={poster} alt="" className="about-video-poster" />
          <span className="about-video-shade" aria-hidden="true" />
          <span className="about-video-play" aria-hidden="true">
            <Icon name="fa-solid fa-play" />
          </span>
          <span className="about-video-meta">
            <span className="about-video-tag">Watch</span>
            <span className="about-video-caption">{title}</span>
          </span>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&controls=1&fs=0&disablekb=0&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
