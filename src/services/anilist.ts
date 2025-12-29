import { ANIME, IAnimeEpisode } from "@consumet/extensions";

const hianime = new ANIME.Hianime();

export async function getAnimeInfo(animeId: string) {
  try {
    const res = await hianime.fetchAnimeInfo(animeId);
    return res;
  } catch (error) {
    console.error("Error fetching anime info:", error);
    return null;
  }
}

export async function getEpisodeSources(episodeId: IAnimeEpisode["id"]) {
  try {
    const res = await hianime.fetchEpisodeSources(episodeId);
    return res;
  } catch (error) {
    console.error("Error fetching episode source:", error);
    return null;
  }
}

export async function getPopular() {
  try {
    const { results } = await hianime.fetchMostPopular();
    return results;
  } catch (error) {
    console.error("Error fetching popular animes:", error);
    return [];
  }
}

export async function getTrending() {
  try {
    const { results } = await hianime.fetchTopAiring();
    return results;
  } catch (error) {
    console.error("Error fetching top airing animes:", error);
    return [];
  }
}

export async function getRecentlyUpdated() {
  try {
    const { results } = await hianime.fetchRecentlyUpdated();
    return results;
  } catch (error) {
    console.error("Error fetching recently updated animes:", error);
    return [];
  }
}

export async function searchAnime(input: string, page: number) {
  try {
    const res = await hianime.search(input, page);
    return res;
  } catch (error) {
    console.error("Anime not found", error);
    return { currentPage: 1, hasNextPage: false, results: [] };
  }
}
