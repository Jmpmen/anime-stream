"use client";

import { IAnimeEpisode } from "@consumet/extensions/dist/models/types";
import { Card } from "./Card";
import { Separator } from "./ui/separator";
import HLSPlayer from "./ReactPlayer";
import { useState } from "react";

export default function EpisodeList({
  episodes,
}: {
  episodes: IAnimeEpisode[] | undefined;
}) {
  const [play, setPlay] = useState(false);
  const [episodeId, setEpisodeId] = useState("");
  return (
    <>
      {play && <HLSPlayer episodeId={episodeId} />}
      <div className="mt-6 space-y-1 px-5">
        <h2 className="text-2xl font-semibold tracking-tight">Episodes</h2>
        {/* <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p> */}
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-5">
        {episodes?.slice(0, 20).map((episode) => (
          <p
            key={episode.id}
            onClick={() => {
              setPlay(true);
              setEpisodeId(episode.id);
            }}
          >
            {episode.title}
          </p>
        ))}
      </div>
    </>
  );
}
