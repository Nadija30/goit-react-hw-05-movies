import { useEffect, useState } from 'react';
import { fetchMovies, onFetchError } from 'services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import css from 'pages/Pages.module.css';

const endPoint = '/trending/movie/day';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films]);

  return (
    <section className={css.section}>
      <h2>Movies in trend</h2>
      {loading && <Loader />}
      <MoviesList films={films} />
    </section>
  );
};

export default Home;
