import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { fetchMovieCast, onFetchError } from 'services/api';

import { PLACEHOLDERINFO } from 'utils/constants';
const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <ul className={css.castList}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li className={css.castLink} key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : PLACEHOLDERINFO + '?text= ' + name
                }
                alt={name}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Вибачте! У нас немає інформації про акторський склад</p>
      )}
    </>
  );
};
export default Cast;
