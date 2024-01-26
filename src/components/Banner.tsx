import { IAnimeInfo } from "@consumet/extensions";
import { Badge } from "./ui/badge";

export default function Banner({ anime }: { anime: IAnimeInfo }) {
  const title =
    typeof anime.title === "string" ? anime.title : anime.title.english;
  return (
    <div
      className="h-96 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${anime.cover})` }}
    >
      <div className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ml-24">
        <h1 className="text-xl md:text-5xl font-semibold tracking-tight">
          {title}
          <Badge className="ml-1">{anime.releaseDate}</Badge>
        </h1>
        {anime.rating && (
          <p className="text-xs md:text-lg">⭐️ {anime.rating / 10}</p>
        )}
        <p className="text-xs md:text-lg">{anime.genres?.join(" ,")}</p>
      </div>
    </div>
  );
}
