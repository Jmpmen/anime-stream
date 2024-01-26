import { IAnimeResult } from "@consumet/extensions/dist/models/types";
import { Card } from "./Card";
import { Separator } from "./ui/separator";

export default function Recommendations({
  recommendations,
}: {
  recommendations: IAnimeResult[] | undefined;
}) {
  return (
    <>
      <div className="mt-6 space-y-1 px-5">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recommendations
        </h2>
        {/* <p className="text-sm text-muted-foreground">
          Your personal playlists. Updated daily.
        </p> */}
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-5">
        {recommendations?.slice(0, 20).map((recommendation) => (
          <Card
            key={recommendation.id}
            anime={recommendation}
            className={"w-[150px] mx-auto"}
            aspectRatio={"portrait"}
            width={150}
            height={200}
          />
        ))}
      </div>
    </>
  );
}
