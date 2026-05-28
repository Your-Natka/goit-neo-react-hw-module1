import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchTrendingMovies();
      setMovies(data);
    }

    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
