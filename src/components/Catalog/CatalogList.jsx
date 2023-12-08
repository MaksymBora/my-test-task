import { useDispatch, useSelector } from 'react-redux';

import { CardAuto } from './CardAuto';
import { selectCars } from '../../Redux/cars/selectors';
import { useEffect } from 'react';
import { fetchAllCars } from '../../Redux/cars/operations';

export const CatalogList = () => {
  const allCars = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <>
      <ul className="mb-[100px] flex justify-center items-center flex-wrap gap-[29px]">
        {allCars.map((car) => {
          const { id } = car;

          return (
            <li key={id}>
              <CardAuto carData={car} />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="text-base font-medium underline text-lightBlueColor dark:text-white mx-auto block"
      >
        Load more
      </button>
    </>
  );
};
