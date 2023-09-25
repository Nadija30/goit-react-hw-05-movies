import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    //НТТР запит за едпоінтом /search/search-movies
  }, []);

  return <div>Тут буде сторінка пошуку кінофільмів за ключовим словом</div>;
};

export default Movies;
