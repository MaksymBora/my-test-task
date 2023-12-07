import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../common/Modal';
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
      <ul className="mb-[100px]">
        {allCars.map((car) => {
          const { id, year, make, model, type, img, description } = car;

          return (
            <li key={id}>
              <CardAuto />
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

      <Modal />
    </>
  );
};
