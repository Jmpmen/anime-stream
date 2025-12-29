import HorizontalScroll from "@/components/HorizontalScroll";
import {
  getPopular,
  getRecentlyUpdated,
  getTrending,
} from "@/services/anilist";

export default async function Home() {
  const trending = await getTrending();
  const popular = await getPopular();
  const recent = await getRecentlyUpdated();
  return (
    <>
      <HorizontalScroll title="Trending" animes={trending} large={true} />
      <HorizontalScroll title="Popular" animes={popular} />
      <HorizontalScroll title="Recently Updated" animes={recent} />
    </>
  );
}
