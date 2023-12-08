import { useSelector } from 'react-redux';
import { favoritesCars } from '../../Redux/favoriteCars/selectors';
import { CardAuto } from '../Catalog/CardAuto';

export const FavoritesList = () => {
  const favoriteCars = useSelector(favoritesCars);

  return (
    <>
      <ul className="mb-[100px] flex justify-start items-center flex-wrap gap-[29px]">
        {favoriteCars.map((car) => {
          const { id } = car;

          return (
            <li key={id}>
              <CardAuto carData={car} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
