import { ANIME } from "@consumet/extensions";
import HorizontalScroll from "@/components/HorizontalScroll";

export default async function Home() {
  const gogoanime = new ANIME.Gogoanime();
  const { results } = await gogoanime.fetchTopAiring();
  return <HorizontalScroll title="Top Airing" animes={results} />;
}
