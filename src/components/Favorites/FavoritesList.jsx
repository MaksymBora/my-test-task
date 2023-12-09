import { useSelector } from 'react-redux';
import {
  favoritesCars,
  totalFavoritesCars,
} from '../../Redux/favoriteCars/selectors';
import { CardAuto } from '../Catalog/CardAuto';

export const FavoritesList = () => {
  const favoriteCars = useSelector(favoritesCars);
  const totalCarsInArr = useSelector(totalFavoritesCars);

  console.log(totalCarsInArr);
  const cardsPerLine = [5, 6, 7, 9, 10, 11];
  const isCardsPerLine = cardsPerLine.includes(totalCarsInArr);
  return (
    <>
      <ul
        className={`mb-[100px] pt-[20px] md:pt-[50px]  flex justify-center gap-[16px] sm:gap-[16px] mx-auto ${
          isCardsPerLine ? 'md:justify-start' : 'md:justify-center'
        }  md:items-center flex-wrap md:gap-[29px]`}
      >
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
