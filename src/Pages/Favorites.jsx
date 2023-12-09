import { useSelector } from 'react-redux';
import { totalFavoritesCars } from '../Redux/favoriteCars/selectors';
import { FavoritesList } from '../components/Favorites/FavoritesList';

const Favorites = () => {
  const totalCars = useSelector(totalFavoritesCars);

  return (
    <section className="pb-[100px] md:max-w-[1280px] min-h-[calc(100vh-308px)] md:px-[16px] mx-auto">
      {totalCars > 0 ? (
        <FavoritesList />
      ) : (
        <div className="w-full h-full flex">
          <h2 className="m-auto text-center text-2xl text-darkFontColor dark:text-white">
            There are no cars in the Favorites List :(
          </h2>
        </div>
      )}
    </section>
  );
};

export default Favorites;
