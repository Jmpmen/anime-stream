import { ANIME } from "@consumet/extensions";

const gogoanime = new ANIME.Gogoanime();

export async function getTopAiring() {
  try {
    const { results } = await gogoanime.fetchTopAiring();
    return results;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    return [];
  }
}

export async function getRecentEpisodes() {
  try {
    const { results } = await gogoanime.fetchRecentEpisodes();
    return results;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    return [];
  }
}
