import { useEffect, useState } from 'react';
import { fetchMovies, onFetchError } from 'services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import css from 'pages/Pages.module.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer autoClose={3000} />
    </section>
  );
};

export default Home;
