"use client";

import { Button } from "./ui/button";
import HLSPlayer from "./ReactPlayer";
import { IAnimeEpisode } from "@consumet/extensions/dist/models/types";
import { Separator } from "./ui/separator";
import { useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function EpisodeList({
  episodes,
}: {
  episodes: IAnimeEpisode[] | undefined;
}) {
  const playerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentEpisodeId = searchParams.get("episode") || null;

  const pathname = usePathname();

  function handleClick(episode: IAnimeEpisode) {
    const params = new URLSearchParams(searchParams.toString());
    if (currentEpisodeId === episode.id) {
      params.delete("episode");
      router.replace(
        `${pathname}${params.toString() ? `?${params.toString()}` : ""}`
      );
      return;
    }

    params.set("episode", episode.id);
    router.replace(`${pathname}?${params.toString()}`);

    setTimeout(() => {
      playerRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }, 50);
  }

  return (
    <>
      <div ref={playerRef}>{currentEpisodeId && <HLSPlayer />}</div>
      <div className="mt-6 space-y-1 px-5">
        <h2 className="text-2xl font-semibold tracking-tight">Episodes</h2>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2 px-5">
        {episodes?.map((episode) => (
          <Button
            key={episode.id}
            onClick={() => handleClick(episode)}
            className={currentEpisodeId === episode.id ? "text-yellow-400" : ""}
          >
            {episode.number}
          </Button>
        ))}
      </div>
    </>
  );
}
