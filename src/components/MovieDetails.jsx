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
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.65) 80%), url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`
    }}>
      <Link className='back-btn' to="/">
        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrow-ios-back"> <rect width="10" height="10" transform="rotate(90 12 12)" opacity="0"></rect> <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path> </g> </g> </g></svg>
        <span>Movies</span></Link>
      <div className='about-movie'>
        <img className='poster' src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt="" />
        <div className='movie-info'>
          <h1>
            <span className='title'>{movieDetails.original_title}</span>
            <span className='rating'>{movieDetails.vote_average?.toFixed(2)}</span>
          </h1>
          <p>
            {movieDetails.overview}
          </p>
        </div>
      </div>
    </div>
  )
}