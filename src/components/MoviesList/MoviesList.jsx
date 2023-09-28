import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {films.map(({ id, title, overview, poster_path }) => (
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <li className={css.moviesLink} key={id}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              width="154"
              height="231"
            />
            <div className={css.cardWrap}>
              <h3>{title}</h3>
              <p>{overview}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
