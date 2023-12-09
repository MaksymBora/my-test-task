import { useSelector } from 'react-redux';
import { favoritesCars } from '../../Redux/favoriteCars/selectors';
import { CardAuto } from '../Catalog/CardAuto';

export const FavoritesList = () => {
  const favoriteCars = useSelector(favoritesCars);

  return (
    <>
      <ul className="mb-[100px] pt-[20px]  md:pt-[50px]  flex justify-center gap-[16px] sm:gap-[16px] mx-auto md:justify-start md:items-center flex-wrap md:gap-[29px]">
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
