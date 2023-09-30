import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import LinesEllipsis from 'react-lines-ellipsis';
import { PLACEHOLDER } from 'utils/constants';
const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {films.map(({ id, title, overview, poster_path }) => (
        <li className={css.moviesLink} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              className={css.imgItem}
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : PLACEHOLDER + '?text=' + title
              }
              alt={title}
              width="154"
              height="231"
            />
            <div className={css.cardWrap}>
              <h3>{title}</h3>
              <LinesEllipsis
                text={overview}
                maxLine="4"
                ellipsis="..."
              ></LinesEllipsis>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
