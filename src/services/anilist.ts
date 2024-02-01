import { META } from "@consumet/extensions";

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
    console.error("Error fetching anime info:", error);
    return null;
  }
}

export async function getEpisodeSources(episodeId: string) {
  try {
    console.log("hello");
    const res = await anilist.fetchEpisodeSources(episodeId);
    console.log("hi");
    console.log(res);
    return res;
  } catch (error) {
    console.error("Error fetching anime info:", error);
    return null;
  }
}
