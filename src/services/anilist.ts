import { ANIME, IAnimeEpisode, META } from "@consumet/extensions";

const anilist = new META.Anilist();
const anify = new ANIME.Anify();
// const animefox = new ANIME.AnimeFox();
// const animesaturn = new ANIME.AnimeSaturn();
// const gogoanime = new ANIME.Gogoanime();
// const zoro = new ANIME.Zoro();

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

export async function getPopular() {
  try {
    const { results } = await anilist.fetchPopularAnime();
    return results;
  } catch (error) {
    console.error("Error fetching popular animes:", error);
    return [];
  }
}

export async function getTrending() {
  try {
    const { results } = await anilist.fetchTrendingAnime();
    return results;
  } catch (error) {
    console.error("Error fetching top airing animes:", error);
    return [];
  }
}

export async function searchAnime(input: string, page: number) {
  try {
    const res = await anilist.search(input, page, 20);
    return res;
  } catch (error) {
    console.error("Anime not found", error);
    return { currentPage: 1, hasNextPage: false, results: [] };
  }
}