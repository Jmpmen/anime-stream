import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "./Card";
import { IAnimeResult } from "@consumet/extensions/dist/models/types";
import { Separator } from "@/components/ui/separator";

export default function HorizontalScroll({
  title,
  animes,
}: {
  title: string;
  animes: IAnimeResult[];
}) {
  return (
    <>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {/* <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p> */}
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {animes.map((anime) => (
              <Card
                key={anime.id}
                anime={anime}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
