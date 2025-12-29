"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function HLSPlayer() {
  const searchParams = useSearchParams();
  const episodeId = searchParams.get("episode");
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let mounted = true;
    if (!episodeId) {
      setSourceUrl(null);
      setSubtitle(null);
      return;
    }

    async function fetchSource() {
      try {
        const res = await fetch(`/api/episodes/${episodeId}`);
        if (!res.ok) throw new Error("bad response");
        const json = await res.json();
        const src =
          json.sources?.find((s: any) => s.isM3U8) || json.sources?.[0];
        const sub = json.subtitles?.[0]?.url;
        if (mounted) {
          setSourceUrl(json.url || src?.url || null);
          setSubtitle(sub || null);
        }
      } catch (err) {
        console.error("Failed to fetch episode source:", err);
        if (mounted) setSourceUrl(null);
      }
    }

    fetchSource();
    return () => {
      mounted = false;
    };
  }, [episodeId]);

  useEffect(() => {
    if (!sourceUrl) return;
    const el = videoRef.current;
    if (!el) return;

    let hls: any | null = null;
    const isM3U8 = sourceUrl.includes(".m3u8");

    const attach = async () => {
      if (isM3U8) {
        if (el.canPlayType("application/vnd.apple.mpegurl")) {
          el.src = sourceUrl;
          el.load();
          return;
        }

        try {
          const HlsModule = await import("hls.js");
          const Hls = HlsModule.default || HlsModule;
          if (Hls.isSupported()) {
            hls = new Hls();
            hls.loadSource(sourceUrl);
            hls.attachMedia(el);
          } else {
            el.src = sourceUrl;
          }
        } catch (e) {
          console.error(
            "Failed to load hls.js, falling back to native src:",
            e
          );
          el.src = sourceUrl;
        }
      } else {
        el.src = sourceUrl;
      }
    };

    attach();

    return () => {
      if (hls) {
        try {
          hls.destroy();
        } catch (e) {
          /* ignore */
        }
      }
      try {
        el.pause();
        el.removeAttribute("src");
        el.load();
      } catch (e) {
        /* ignore */
      }
    };
  }, [sourceUrl]);

  if (!episodeId) return null;

  return (
    <div className="w-full">
      <video
        ref={videoRef}
        controls
        playsInline
        autoPlay
        style={{ width: "100%", height: "auto" }}
      >
        {subtitle && (
          <track kind="captions" srcLang="en" src={subtitle} default />
        )}
      </video>
    </div>
  );
}
