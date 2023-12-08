import { useDispatch, useSelector } from 'react-redux';
import { CardAuto } from './CardAuto';
import {
  selectCars,
  selectIsLoading,
  selectTotalCars,
} from '../../Redux/cars/selectors';
import { useEffect, useRef, useState } from 'react';
import { fetchAllCars } from '../../Redux/cars/operations';

export const CatalogList = () => {
  const [page, setPage] = useState(1);
  const allCars = useSelector(selectCars);
  const totalCarsInArr = useSelector(selectTotalCars);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch(fetchAllCars(page));
    }
  }, []);

  useEffect(() => {
    if (page !== 1) dispatch(fetchAllCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ul className="mb-[100px] flex justify-start items-center flex-wrap gap-[29px]">
        {allCars.map((car, index) => {
          const { id } = car;

          return (
            <li key={id + index}>
              <CardAuto carData={car} />
            </li>
          );
        })}
      </ul>

      {totalCarsInArr < 32 && !isLoading && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="text-base font-medium underline text-lightBlueColor dark:text-white mx-auto block"
        >
          Load more
        </button>
      )}

      {totalCarsInArr >= 12 && isLoading && (
        <div className="w-full flex justify-center mx-auto">Loading...</div>
      )}
    </>
  );
};
