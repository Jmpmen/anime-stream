import { IAnimeInfo } from "@consumet/extensions/dist/models/types";

export default function Description({ anime }: { anime: IAnimeInfo }) {
  return (
    <div className="bg-slate-800 min-h-48 rounded-b-lg text-slate-100 p-5 flex flex-col gap-1">
      <div>
        <span className="font-bold">Status: </span>
        <span className="text-sm text-slate-400">{anime.status}</span>
      </div>
      <div>
        <span className="font-bold">Duration: </span>
        <span className="text-sm text-slate-400">{anime.duration} min</span>
      </div>
      <div>
        <span className="font-bold">Description: </span>
        <span className="text-sm text-slate-400">
          {anime.description?.split("<br>")[0]}
        </span>
      </div>
      <div>
        <span className="font-bold">Studios: </span>
        <span className="text-sm text-slate-400">
          {anime.studios?.join(", ")}
        </span>
      </div>
    </div>
  );
}
