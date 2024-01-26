import Recommendations from "@/components/Recommendations";
import { getAnimeInfo } from "@/services/anilist";
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
      {JSON.stringify(animeInfo)}
      {/* <Banner anime={animeInfo} />
      <Description anime={animeInfo} />
      <Recommendations recommendations={animeInfo.recommendations} /> */}
    </>
  );
}
