"use client";

import { getEpisodeSources } from "@/services/anilist";
import { IAnimeEpisode } from "@consumet/extensions/dist/models/types";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function HLSPlayer({
  animeId,
  episode,
}: {
  animeId: string;
  episode: IAnimeEpisode;
}) {
  const [url, setUrl] = useState("");
  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  useEffect(() => {
    // fetch(videoUrl, options)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     setUrl(URL.createObjectURL(blob));
    //   });
    async function getURL() {
      const res = await getEpisodeSources(episode, animeId);
      setUrl(res);
    }
    getURL();
  }, [episode]);

  return url.length ? (
    <ReactPlayer
      controls
      pip
      playing
      stopOnUnmount={false}
      url={url}
      width="100%"
    />
  ) : null;
}
