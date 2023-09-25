import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  useEffect(() => {
    //НТТР запит за едпоінтом /movies/get-movie-details
  }, []);

  return (
    <>
      <h1> Тут буде сторінка з детальною інформацією про кінофільм</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
