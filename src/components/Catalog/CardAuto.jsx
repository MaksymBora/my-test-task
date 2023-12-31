import { useEffect, useState } from 'react';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import noresponse from '../../assets/images/noresponse.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../Redux/favoriteCars/slice';
import { favoritesCars } from '../../Redux/favoriteCars/selectors';
import { nanoid } from 'nanoid';

export const CardAuto = ({ carData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteCars = useSelector(favoritesCars);

  const dispatch = useDispatch();

  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
    mileage,
    id,
  } = carData;

  const addressArray = address?.split(', ');
  const updateArray = addressArray?.slice(-2);

  useEffect(() => {
    if (favoriteCars !== null) {
      const carIsInFavList = favoriteCars.some((car) => car.id === id);

      setIsFavorite(carIsInFavList);
    }
  }, [favoriteCars, id]);

  const handleModalOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleModalClose = () => {
    if (isOpenModal) setIsOpenModal(false);
  };

  const handleImageError = (event) => {
    event.target.src = noresponse;
  };

  const handleAddToFavList = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(carData));
      setIsFavorite(true);
    } else {
      dispatch(removeFromFavorites(id));
      setIsFavorite(false);
    }
  };

  return (
    <>
      <div className="w-[274px] bg-transparent">
        <div className="relative h-[268px] mb-[14px]">
          <img
            src={img}
            onError={handleImageError}
            alt={make}
            loading="lazy"
            height="268"
            className="rounded-[14px] h-full "
          />
          <button
            type="button"
            onClick={handleAddToFavList}
            className="cursor-pointer"
          >
            <svg
              className={`${
                isFavorite ? 'text-[#3470ff] fill-[#3470ff]' : 'text-[#dbdfe6]'
              } w-[18px] h-[18px] absolute top-[14px] right-[14px] cursor-pointer text-red`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 19"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mb-[8px]">
          <p className="text-base font-medium dark:text-white text-darkFontColor line-clamp-1">
            {make} <span className="text-lightBlueColor">{model}</span>, {year}
          </p>
          <p className="text-base dark:text-white font-medium text-darkFontColor mr-[9px]">
            {rentalPrice}
          </p>
        </div>
        <div className="text-cardOptionsColor dark:text-white text-xs leading-[18px] mb-[28px]">
          <ul className="mb-[4px] line-clamp-1">
            <li
              key={nanoid()}
              className="relative inline-block pr-[6px] mr-[6px] border-r-[1px] "
            >
              <p>{updateArray[0] || ''}</p>
            </li>
            <li
              key={nanoid()}
              className="relative inline-block pr-[6px] mr-[6px] border-r-[1px] "
            >
              <p>{updateArray[1] || ''}</p>
            </li>
            <li key={nanoid()} className="relative inline-block">
              <p>{rentalCompany}</p>
            </li>
            <li
              key={nanoid()}
              className="relative inline-block border-l-[1px] ml-[6px] pl-[6px]"
            >
              <p>Premium</p>
            </li>
          </ul>
          {/* 2nd line */}
          <ul className="gap-y-1 line-clamp-1">
            <li
              key={nanoid()}
              className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]"
            >
              <p>{type}</p>
            </li>
            <li
              key={nanoid()}
              className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]"
            >
              <p>{model}</p>
            </li>
            <li key={nanoid()} className="relative inline-block ">
              <p>{mileage}</p>
            </li>
            <li
              key={nanoid()}
              className="relative inline-block border-l-[1px] ml-[6px] pl-[6px]"
            >
              <p>{functionalities[0]}</p>
            </li>
          </ul>
        </div>
        <Button
          title={'Learn more'}
          width={'w-full'}
          onClick={handleModalOpen}
        />
      </div>
      <Modal
        isOpenModalProp={isOpenModal}
        handleModalCloseProp={handleModalClose}
        carDataProp={carData}
      />
    </>
  );
};
