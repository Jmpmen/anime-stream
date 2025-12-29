import { IAnimeInfo } from "@consumet/extensions/dist/models/types";

export default function Description({ anime }: { anime: IAnimeInfo }) {
  return (
    <div className="min-h-48 p-5 flex flex-col gap-1">
      <div>
        <span className="font-bold">Status: </span>
        <span className="text-sm text-slate-400">{anime.status}</span>
      </div>
      <div>
        <span className="font-bold">Description: </span>
        <span className="text-sm text-slate-400">
          {anime.description?.split("<br>")[0]}
        </span>
      </div>
    </div>
  );
}
