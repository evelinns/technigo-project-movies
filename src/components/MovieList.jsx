import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const movieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  
  const fetchMovies = () => {

    fetch(movieApi)
    .then((res) => {
      return res.json();
    }).then(data => setMovies(data.results))
  } 

  useEffect(() => {
    fetchMovies();
  }, [])

  return <div className="movie-list">
    <h1>Top Movies</h1>
    <div>
    {movies.map((movie) => (
      <div className='movie-container' key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
           <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
        </Link>
      </div>
    ))}
    </div>
  </div>
}