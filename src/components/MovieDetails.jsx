import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetails = () => {
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState([])

  const movieDetailsApi = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}&language=en-US`

  const fetchMoveDetails = () => {
    fetch(movieDetailsApi)
    .then((res) => {
      return res.json()
    }).then(data => setMovieDetails(data))
  }

  useEffect(() => {
    fetchMoveDetails()
  }, [])

  console.log(movieDetails)

  return (
    <div className="background" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`
    }}>
      <Link to="/">Movies</Link>
      <h1>Movie Details</h1>
      {movieDetails.original_title}
    </div>
  )
}