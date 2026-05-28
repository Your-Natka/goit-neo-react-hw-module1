import axios from "axios";

const API_KEY = "тут_твій_ключ";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );

  return response.data.results;
}
