import Recommendations from "@/components/Recommendations";
import { getAnimeInfo } from "@/services/anilist";
import Banner from "@/components/Banner";
import Description from "@/components/Description";
import EpisodeList from "@/components/EpisodeList";

export default async function InfoPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const id = slug.split("-").pop();
  const animeInfo = await getAnimeInfo(id as string);

  return animeInfo ? (
    <>
      <Banner anime={animeInfo} />
      <Description anime={animeInfo} />
      <EpisodeList animeId={animeInfo.id} episodes={animeInfo.episodes} />
      <Recommendations recommendations={animeInfo.recommendations} />
    </>
  ) : (
    <div>Page not found</div>
  );
}

export const revalidate = 3600;

// export async function generateStaticParams() {
//   const trending = await getTrending();
//   const popular = await getPopular();
//   const animes = [...trending, ...popular];

//   return animes.map((anime) => ({ slug: anime.id }));
// }