import { useEffect } from 'react';
import noresponse from '../../assets/images/noresponse.jpg';

export const Modal = ({
  isOpenModalProp,
  handleModalCloseProp,
  carDataProp,
}) => {
  useEffect(() => {
    if (isOpenModalProp) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpenModalProp]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleModalCloseProp();
      }
    };

    if (isOpenModalProp) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenModalProp, handleModalCloseProp]);

  const {
    id,
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
    accessories,
    mileage,
    description,
    rentalConditions,
  } = carDataProp;

  const addressArray = address.split(', ');
  const updateArray = addressArray.slice(-2);

  const listData = [
    updateArray[0],
    updateArray[1],
    rentalCompany,
    'Premium',
    type,
    model,
    mileage,
    functionalities[0],
  ];

  const minimumAgeRegex = /Minimum age: (\d+)/;
  const match = rentalConditions.match(minimumAgeRegex);

  const minAge = match && match[1] ? match[1] : 18;

  const conditionsArray = rentalConditions.split('\n');

  const mileAgeString = String(mileage);
  const updatedMileAge =
    mileAgeString.slice(0, 1) + ',' + mileAgeString.slice(1);

  const handleImageError = (event) => {
    event.target.src = noresponse;
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="false"
        onClick={handleModalCloseProp}
        className={`${
          isOpenModalProp ? '' : 'hidden'
        } fix bg-backdropColor overflow-y-auto overflow-x-hidden fixed top-0 right-0 
        left-0 z-50 justify-center items-center w-full md:inset-0 h-full`}
      >
        <div className="absolute w-full max-w-full">
          {/*  Modal content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[541px] p-[40px] left-[50%] top-[50%] translate-x-[-50%]  bg-white rounded-[24px] shadow dark:bg-gray-700"
          >
            {/*  Modal header  */}
            <div className="flex items-center justify-between rounded-t ">
              {/* -------- Close Modal Button ------- */}
              <button
                type="button"
                onClick={handleModalCloseProp}
                className="absolute top-4 right-4 text-darkFontColor bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
				text-sm w-[24px] h-[24px] ms-auto inline-flex justify-center items-center 
				dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* --------- Modal body -------- */}
            <div className="">
              <img
                src={img}
                onError={handleImageError}
                className="rounded-[14px]"
              />

              <h2 className="mt-[14px] mb-[8px] text-lg leading-6 font-medium text-darkFontColor dark:text-white">
                {make} <span className="text-lightBlueColor">{model}</span>,{' '}
                {year}
              </h2>

              <div className="text-cardOptionsColor text-xs leading-[18px] mb-[14px]">
                <ul className="flex flex-row items-start flex-wrap gap-y-1">
                  {listData.map((item, index) => (
                    <li
                      key={index}
                      className="relative inline-block pr-[6px] mr-[6px] border-r-[1px] last:border-0"
                    >
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mb-[24px] text-sm text-darkFontColor dark:text-white">
                {description}
              </p>

              {/* ---------- Accessories ---------- */}
              <div className="mb-[24px]">
                <p className="mb-[8px] text-sm text-darkFontColor dark:text-white">
                  Accessories and functionalities:
                </p>

                <div className="text-cardOptionsColor text-xs leading-[18px] mb-[24px]">
                  <ul className="flex flex-row items-start flex-wrap gap-y-1 mb-[4px]">
                    {accessories.map((item, index) => (
                      <li
                        key={`${id}-${index}`}
                        className="relative inline-block pr-[6px] mr-[6px] border-r-[1px] last:border-0"
                      >
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-row items-start flex-wrap gap-y-1">
                    {functionalities.map((item, index) => (
                      <li
                        key={`${id}-${index}`}
                        className="relative inline-block pr-[6px] mr-[6px] border-r-[1px] last:border-0"
                      >
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/*---------- Rental Conditions ---------*/}
              <h3 className="mb-[8px] text-sm text-darkFontColor dark:text-white font-medium">
                Rental Conditions:{' '}
              </h3>
              <div className="mb-[24px] flex flex-wrap gap-[8px] items-center justify-start">
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Minimum age :{' '}
                  <span className="text-lightBlueColor text-xs leading-[18px] font-semibold -tracking-[0.24]">
                    {minAge}
                  </span>
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  {conditionsArray[1]}
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  {conditionsArray[2]}
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Mileage:{' '}
                  <span className="text-lightBlueColor text-xs leading-[18px] font-semibold -tracking-[0.24]">
                    {updatedMileAge}
                  </span>
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Price:{' '}
                  <span className="text-lightBlueColor text-xs leading-[18px] font-semibold -tracking-[0.24]">
                    {rentalPrice.slice(1) + '$'}
                  </span>
                </p>
              </div>
            </div>

            <a
              href="tel:+380730000000"
              type="button"
              className="w-[168px] m-0 py-[12px] px-[50px] border-none text-white bg-gradient-to-r text-[14px] leading-[20px] self-center from-blue-500
	   via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
	   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
	   rounded-lg text-sm px-auto  text-center cursor-pointer"
            >
              Rental car
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
