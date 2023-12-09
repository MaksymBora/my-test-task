import { useDispatch, useSelector } from 'react-redux';
import { CardAuto } from './CardAuto';
import {
  selectCars,
  selectIsFilterOn,
  selectIsLoading,
  selectTotalCars,
} from '../../Redux/cars/selectors';
import { useEffect, useRef, useState } from 'react';
import { fetchAllCars } from '../../Redux/cars/operations';
import { Loader } from '../../utils/Loader';

export const CatalogList = () => {
  const [page, setPage] = useState(1);
  const allCars = useSelector(selectCars);
  const totalCarsInArr = useSelector(selectTotalCars);
  const isLoading = useSelector(selectIsLoading);
  const isFilter = useSelector(selectIsFilterOn);

  const dispatch = useDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch(fetchAllCars(page));
    }
  });

  useEffect(() => {
    if (page !== 1) dispatch(fetchAllCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const cardsPerLine = [5, 6, 7, 9, 10, 11];
  const isCardsPerLine = cardsPerLine.includes(totalCarsInArr);

  return (
    <div>
      <ul
        className={`mb-[100px] flex justify-center gap-[16px] sm:gap-[16px] mx-auto ${
          isCardsPerLine ? 'md:justify-start' : 'md:justify-center'
        } md:items-center flex-wrap md:gap-[29px]`}
      >
        {allCars.map((car, index) => {
          const { id } = car;

          return (
            <li key={id + 'abc' + index}>
              <CardAuto carData={car} />
            </li>
          );
        })}
      </ul>

      {totalCarsInArr > 0 && totalCarsInArr < 32 && !isLoading && !isFilter && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="text-base font-medium underline text-lightBlueColor dark:text-white mx-auto block"
        >
          Load more
        </button>
      )}

      {totalCarsInArr === 0 && (
        <div className="w-full h-full flex">
          <h2 className="m-auto text-center text-2xl text-darkFontColor dark:text-white">
            Cars Not Found 😊 Try another options.
          </h2>
        </div>
      )}

      {isLoading && (
        <div className="w-full flex justify-center mx-auto">
          <Loader />
        </div>
      )}
    </div>
  );
};
