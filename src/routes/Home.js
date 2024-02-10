import React, { useEffect, useState } from "react";
import { Movie } from './movie'
const BASE_URL_API = `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`;

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const movies = await (await fetch(BASE_URL_API)).json();
    //원래는 const movies = async () => {
    //   const movies = await fetch(BASE_URL_API)
    //   const result = await movies.json();
    // }
    // 을 축약해서 위에 처럼 명령했다.
    setMovies(movies.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} title={movie.title} url={movie.medium_cover_image} summary={movie.summary} genres={movie.genres} />
          ))}
        </div>
      )}
    </div>
  );
}