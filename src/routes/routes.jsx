import { Route } from 'react-router-dom';
import { MovieList } from '../components/MovieList'
import { MovieDetails } from '../components/MovieDetails'

export const routes = () => {
  return <>
    <Route path="/" element={<MovieList />}></Route>
    <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
  </>
}