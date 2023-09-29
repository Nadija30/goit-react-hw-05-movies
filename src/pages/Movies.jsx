import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies, onFetchError } from 'services/api';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import css from 'pages/Pages.module.css';
import { Loader } from 'components/Loader/Loader';
import Searchbar from 'components/Search/Search';
const endPoint = '/search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    if (films.length > 0) {
      return;
    }

    setLoading(true);
    fetchSearchMovies(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [films, searchQuery]);
  const onSubmitSearchBar = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');

    if (searchValue === '') {
      toast.info('Enter your request, please!');
      setSearchParams({});
      setFilms([]);
      return;
    }

    if (searchValue === searchQuery) {
      toast.info('Enter new request, please!');
      return;
    }

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <div>
      <Searchbar onSubmitSearchBar={onSubmitSearchBar} value={searchQuery} />
      <section className={css.section}>
        {loading && <Loader />}
        <MoviesList films={films} />
      </section>
    </div>
  );
};

export default Movies;
