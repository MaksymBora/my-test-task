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
      <ul className="mb-[100px] flex flex-wrap gap-[29px]">
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

      <Modal />
    </>
  );
};

// {
//         "id": 95822,
//         "year": 2008,
//         "make": "Buick",
//         "model": "Enclave",
//         "type": "SUV",
//         "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
//         "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//         "fuelConsumption": "10.5",
//         "engineSize": "3.6L V6",
//         "accessories": [
//             "Leather seats",
//             "Panoramic sunroof",
//             "Premium audio system"
//         ],
//         "functionalities": [
//             "Power liftgate",
//             "Remote start",
//             "Blind-spot monitoring"
//         ],
//         "rentalPrice": "$40",
//         "rentalCompany": "Luxury Car Rentals",
//         "address": "123 Example Street, Kiev, Ukraine",
//         "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//         "mileage": 5858
//     }
