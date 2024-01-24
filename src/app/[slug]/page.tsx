import { getAnimeInfo } from "@/services/anilist";

export default async function InfoPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const id = slug.split("-").pop();

  const animeInfo = await getAnimeInfo(id);
  console.log(animeInfo);

  return <div>{JSON.stringify(animeInfo)}</div>;
}
