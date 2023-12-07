import { useEffect } from 'react';
import modalimg from '../../assets/images/modalimg.png';
import { Button } from './Button';

export const Modal = ({ isOpenModalProp, handleModalCloseProp }) => {
  useEffect(() => {
    if (isOpenModalProp) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpenModalProp]);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleModalCloseProp();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

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
          <div className="relative max-w-[541px] p-[40px] left-[50%] top-[50%] translate-x-[-50%]  bg-white rounded-[24px] shadow dark:bg-gray-700">
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
              <img src={modalimg} className="rounded-[14px]" />

              <h2 className="mt-[14px] mb-2 text-lg leading-6 font-medium text-darkFontColor dark:text-white">
                Buick <span className="text-lightBlueColor">Eclave</span>, 2008
              </h2>

              <div className="text-cardOptionsColor text-xs leading-[18px] mb-[14px]">
                <ul className="flex flex-row items-start flex-wrap gap-y-1">
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Kiev</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Ukraine</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Luxury Car Rentals</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Premiem</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Suv</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Enclave</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>9582</p>
                  </li>
                  <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                    <p>Power liftgate </p>
                  </li>
                </ul>
              </div>
              <p className="mb-[24px] text-sm text-darkFontColor dark:text-white">
                The Buick Enclave is a stylish and spacious SUV known for its
                comfortable ride and luxurious features.
              </p>

              {/* ---------- Accessories ---------- */}
              <div className="mb-[24px]">
                <p className="mb-2 text-sm text-darkFontColor dark:text-white">
                  Accessories and functionalities:
                </p>

                <div className="text-cardOptionsColor text-xs leading-[18px] mb-7">
                  <ul className="flex flex-row items-start flex-wrap gap-y-1">
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Leather seats</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Panoramic sunroof</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Power liftgate</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Premium audio system</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Remote start</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Blind-spot monitoring</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>9582</p>
                    </li>
                    <li className="relative inline-block pr-[6px] mr-[6px] border-r-[1px]">
                      <p>Power liftgate </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/*---------- Rental Conditions ---------*/}
              <h3 className="mb-2 text-sm text-darkFontColor dark:text-white font-medium">
                Rental Conditions:{' '}
              </h3>
              <div className="mb-[24px] flex flex-wrap gap-2">
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Minimum age :{' '}
                  <span className="text-lightBlueColor text-xs leading-[18px] font-semibold -tracking-[0.24]">
                    25
                  </span>
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Valid driver&rsquo;s license
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Security deposite required{' '}
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Mileage:{' '}
                  <span className="text-lightBlueColor text-xs leading-[18px] font-semibold -tracking-[0.24]">
                    5,858
                  </span>
                </p>
                <p className="text-modalRentalColor darl:text-white text-xs leading-[18px] bg-[#f9f9f9] rounded-[35px] py-[7px] px-[14px]">
                  Price:{' '}
                  <span className="text-lightBlueColor text-xs leading-[18px] font-semibold -tracking-[0.24]">
                    40$
                  </span>
                </p>
              </div>
            </div>
            {/* padding 12px */}
            <Button title={'Rental car'} width={'168px'} />
          </div>
        </div>
      </div>
    </>
  );
};
