import Recommendations from "@/components/Recommendations";
import { getAnimeInfo } from "@/services/anilist";
import { IAnimeInfo } from "@consumet/extensions";

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
      {/* <div>{JSON.stringify(animeInfo)}</div>; */}
      <Recommendations recommendations={animeInfo.recommendations} />
    </>
  );
}
