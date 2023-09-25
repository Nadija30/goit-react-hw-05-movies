import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    //НТТР запитза едпоінтом /trending/get-trending
  }, []);

  return <div>Тут буде список найпопулярніших фільмів на сьогодні</div>;
};

export default Home;
