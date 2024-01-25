import Recommendations from "@/components/Recommendations";
import { getAnimeInfo } from "@/services/anilist";
import { Badge } from "@/components/ui/badge";
import Banner from "@/components/Banner";

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
      <Banner anime={animeInfo}></Banner>
      <Recommendations recommendations={animeInfo.recommendations} />
    </>
  );
}
