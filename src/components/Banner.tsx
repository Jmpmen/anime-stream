import { IAnimeInfo } from "@consumet/extensions";
import { Badge } from "./ui/badge";

export default function Banner({ anime }: { anime: IAnimeInfo }) {
  const title =
    typeof anime.title === "string" ? anime.title : anime.title.english;
  return (
    <div
      className="h-96 flex items-center bg-cover bg-center rounded-b-lg"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 1), rgba(0, 0, 0, 0)), url(${anime.cover})`,
      }}
    >
      <div className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mx-auto md:ml-24 w-60">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight capitalize">
          {title?.toLowerCase()}
          <Badge className="ml-1">{anime.releaseDate}</Badge>
        </h1>
        {anime.rating && (
          <p className="text-xs md:text-md">⭐️ {anime.rating / 10}</p>
        )}
        <p className="text-xs md:text-md">{anime.genres?.join(", ")}</p>
      </div>
    </div>
  );
}
