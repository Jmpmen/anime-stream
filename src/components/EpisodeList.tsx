"use client";

import { Button } from "./ui/button";
import HLSPlayer from "./ReactPlayer";
import { IAnimeEpisode } from "@consumet/extensions/dist/models/types";
import { Separator } from "./ui/separator";
import { useRef, useState } from "react";

export default function EpisodeList({
  animeId,
  episodes,
}: {
  animeId: string;
  episodes: IAnimeEpisode[] | undefined;
}) {
  const [play, setPlay] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const [episodeInfo, setEpisodeInfo] = useState<IAnimeEpisode | null>(null);

  function handleClick(episode: IAnimeEpisode) {
    if (episodeInfo?.id !== episode.id) {
      setPlay(true);
      setEpisodeInfo(episode);
      playerRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      setPlay(!play);
      setEpisodeInfo(null);
    }
  }
  return (
    <>
      <div ref={playerRef}>
        {play && episodeInfo && <HLSPlayer episode={episodeInfo} />}
      </div>
      <div className="mt-6 space-y-1 px-5">
        <h2 className="text-2xl font-semibold tracking-tight">Episodes</h2>
        {/* <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p> */}
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2 px-5">
        {episodes?.map((episode) => (
          <Button
            key={episode.id}
            onClick={() => handleClick(episode)}
            className={episodeInfo?.id === episode.id ? "text-yellow-400" : ""}
          >
            {episode.number}
          </Button>
        ))}
      </div>
    </>
  );
}
