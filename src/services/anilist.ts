import { IAnimeInfo, META } from "@consumet/extensions";

const anilist = new META.Anilist();

export async function getTopAiring() {
  try {
    const { results } = await anilist.fetchTrendingAnime();
    return results;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    return [];
  }
}

export async function getRecentEpisodes() {
  try {
    const { results } = await anilist.fetchPopularAnime();
    return results;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    return [];
  }
}

export async function getAnimeInfo(animeId: string) {
  try {
    const res = await anilist.fetchAnimeInfo(animeId);
    return res;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    return {} as IAnimeInfo;
  }
}
