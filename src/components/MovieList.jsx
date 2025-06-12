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

  console.log(movies)

  return <div className="movie-list">
    {movies.map((movie) => (
        <Link className='movie-container' to={`/movie/${movie.id}`} key={movie.id}>
           <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
          <div className='movie-details'>
            <h3>{movie.original_title}</h3>
            <p>Released: {movie.release_date}</p>
          </div>
        </Link>
    ))}
  </div>
}