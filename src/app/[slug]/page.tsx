import Recommendations from "@/components/Recommendations";
import {
  getAnimeInfo,
  getRecentEpisodes,
  getTopAiring,
} from "@/services/anilist";
import Banner from "@/components/Banner";
import Description from "@/components/Description";

export default async function InfoPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const id = slug.split("-").pop();
  const animeInfo = await getAnimeInfo(id as string);

  return (
    <>
      <Banner anime={animeInfo} />
      <Description anime={animeInfo} />
      <Recommendations recommendations={animeInfo.recommendations} />
    </>
  );
}

// export async function generateStaticParams() {
//   const trending = await getTopAiring();
//   const popular = await getRecentEpisodes();
//   const animes = [...trending, ...popular];

//   return animes.map((anime) => ({ slug: anime.id }));
// }