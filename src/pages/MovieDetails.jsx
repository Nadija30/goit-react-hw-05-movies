import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails, onFetchError } from 'services/api';
import css from 'pages/Pages.module.css';
import { PLACEHOLDER } from 'utils/constants';
const endPoint = '/movie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    if (!movieId) {
      return;
    }

    fetchMovieDetails(endPoint, movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = movie;
  return (
    <section className={css.section}>
      <Link className={css.back} to={backLinkRef.current}>
        {'<<< BACK'}
      </Link>
      <h2> Movie Details:</h2>
      {loading && <Loader />}
      {movie && (
        <>
          <div className={css.wrapDenails}>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w342${poster_path}`
                  : PLACEHOLDER + '?text=' + title
              }
              alt={title}
              width="200"
            />
            <div className={css.wrapDenailsCard}>
              <h3>{original_title}</h3>
              <p>
                <b>Release date:</b> {release_date}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {genres.map(({ name }) => `${name.toLowerCase()} | `)}
              </p>
              <p>
                <b>Ranking:</b> {vote_average}
              </p>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </div>
          </div>
          <h3>Additional information:</h3>
          <ul className={css.info}>
            <li className={css.additionalInfo}>
              <Link to="cast">
                <button className={css.infoBtn}>Cast</button>
              </Link>
            </li>
            <li className={css.additionalInfo}>
              <Link to="reviews">
                <button className={css.infoBtn}>Reviews</button>
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </section>
  );
};

export default MovieDetails;
