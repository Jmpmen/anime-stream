import HorizontalScroll from "@/components/HorizontalScroll";
import { getRecentEpisodes, getTopAiring } from "@/services/gogoanime";

export default async function Home() {
  const topAiring = await getTopAiring();
  const recentEpisodes = await getRecentEpisodes();
  return (
    <>
      <HorizontalScroll title="Top Airing" animes={topAiring} large={true} />
      <HorizontalScroll title="Recent Episodes" animes={recentEpisodes} />
    </>
  );
}
