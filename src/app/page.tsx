import HorizontalScroll from "@/components/HorizontalScroll";
import { getRecentEpisodes, getTopAiring } from "@/services/anilist";

export default async function Home() {
  const trending = await getTopAiring();
  const popular = await getRecentEpisodes();
  return (
    <>
      <HorizontalScroll title="Trending" animes={trending} large={true} />
      <HorizontalScroll title="Popular" animes={popular} />
    </>
  );
}
