import { ANIME, IAnimeEpisode, META } from "@consumet/extensions";

const anilist = new META.Anilist();
const gogoanime = new ANIME.Gogoanime();
const zoro = new ANIME.Zoro();
const anify = new ANIME.Anify();

export async function getAnimeInfo(animeId: string) {
  try {
    const res = await anilist.fetchAnimeInfo(animeId);
    return res;
  } catch (error) {
    console.error("Error fetching anime info:", error);
    return null;
  }
}

export async function getEpisodeSources(
  episode: IAnimeEpisode,
  animeId: string
) {
  try {
    const res = await anify.fetchEpisodeSources(
      episode.id,
      episode.number,
      +animeId
    );
    const video = res.sources.find((video) => video.quality === "default");
    return video ? video.url : "";
  } catch (error) {
    console.error("Error fetching episode source:", error);
    return "";
  }
}

export async function getRecentEpisodes() {
  try {
    const { results } = await anilist.fetchPopularAnime();
    return results;
  } catch (error) {
    console.error("Error fetching recent episodes:", error);
    return [];
  }
}

export async function getTopAiring() {
  try {
    const { results } = await anilist.fetchTrendingAnime();
    return results;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    return [];
  }
}

export async function searchAnime(input: string) {
  try {
    const { results } = await anilist.search(input);
    return results;
  } catch (error) {
    console.error("Anime not found", error);
    return [];
  }
}