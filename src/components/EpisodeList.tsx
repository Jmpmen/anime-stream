"use client";

import { Button } from "./ui/button";
import HLSPlayer from "./ReactPlayer";
import { IAnimeEpisode } from "@consumet/extensions/dist/models/types";
import { Separator } from "./ui/separator";
import { useState } from "react";

export default function EpisodeList({
  animeId,
  episodes,
}: {
  animeId: string;
  episodes: IAnimeEpisode[] | undefined;
}) {
  const [play, setPlay] = useState(false);
  const [episodeInfo, setEpisodeInfo] = useState<IAnimeEpisode | null>(null);
  return (
    <>
      {play && episodeInfo && (
        <HLSPlayer animeId={animeId} episode={episodeInfo} />
      )}
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
            onClick={() => {
              setPlay(true);
              setEpisodeInfo(episode);
            }}
            className={episodeInfo?.id === episode.id ? "text-yellow-400" : ""}
          >
            {episode.number}
          </Button>
        ))}
      </div>
    </>
  );
}
