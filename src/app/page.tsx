import HorizontalScroll from "@/components/HorizontalScroll";
import { getPopular, getTrending } from "@/services/anilist";

export default async function Home() {
  const trending = await getTrending();
  const popular = await getPopular();
  return (
    <>
      <HorizontalScroll title="Trending" animes={trending} large={true} />
      <HorizontalScroll title="Popular" animes={popular} />
    </>
  );
}
