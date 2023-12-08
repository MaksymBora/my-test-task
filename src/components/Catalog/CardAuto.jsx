import { useState } from 'react';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

export const CardAuto = ({ carData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
  } = carData;

  const addressArray = address.split(', ');
  const updateArray = addressArray.slice(-2);

  const handleModalOpen = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleModalClose = () => {
    if (isOpenModal) setIsOpenModal(false);
  };

  return (
    <>
      <div className="w-[274px] bg-transparent">
        <div className="relative">
          <img
            src={img}
            alt={make}
            loading="lazy"
            height="268"
            className="rounded-[14px] h-[268px] mb-3.5"
          />

          {/* text-[#dbdfe6] fill-[#3470ff] */}
          <svg
            className="w-[18px] h-[18px] text-[#dbdfe6] absolute top-[14px] right-[14px] cursor-pointer text-red "
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
        </div>

        <div className="flex justify-between">
          <p className="text-base font-medium text-darkFontColor">
            {make} <span className="text-lightBlueColor">{model}</span>, {year}
          </p>
          <p className="text-base font-medium text-darkFontColor mr-[9px] mb-2">
            {rentalPrice}
          </p>
        </div>
        <div className="text-cardOptionsColor text-xs leading-[18px] mb-7 ">
          <ul className="flex flex-row items-start flex-nowrap mb-[4px] ">
            <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
              <p>{updateArray[0]}</p>
            </li>
            <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
              <p>{updateArray[1]}</p>
            </li>
            <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
              <p>{rentalCompany}</p>
            </li>
            {/* <li className="relative inline-block pr-[6px] mr-[6px]">
              <p>Premium</p>
            </li> */}
          </ul>
          {/* 2nd line */}
          <ul className="flex flex-row items-start flex-nowrap gap-y-1">
            <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
              <p>{type}</p>
            </li>
            <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
              <p>{model}</p>
            </li>
            <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
              <p>{mileage}</p>
            </li>
            <li className="relative inline-block pr-[6px] mr-[6px] ">
              <p>{functionalities[0].slice(0, 10)}</p>
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
