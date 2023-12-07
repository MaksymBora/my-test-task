import modalimg from '../../assets/images/modalimg.png';
import { Button } from './Button';

export const Modal = () => {
  return (
    <>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="false"
        className=" fix bg-backdropColor overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="absolute  left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-full max-w-[461px]">
          {/* <!-- Modal content --> */}
          <div className="relative p-[40px] bg-white rounded-[24px] shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            {/* <div className="flex items-center justify-between rounded-t ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div> */}
            {/* <!-- Modal body --> */}
            <div className="space-y-4">
              <img src={modalimg} className="rounded-[14px]" />
              <div className="flex justify-between">
                <p className="text-base font-medium text-darkFontColor">
                  Buick <span className="text-lightBlueColor">Eclave</span>,
                  2008
                </p>
                <p className="text-base font-medium text-darkFontColor mr-[9px] mb-2">
                  $40
                </p>
              </div>
              <div className="text-cardOptionsColor text-xs leading-[18px] mb-7">
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
              <p>
                The Buick Enclave is a stylish and spacious SUV known for its
                comfortable ride and luxurious features.
              </p>
              <p>Accessories and functionalities:</p>
              <div className="text-cardOptionsColor text-xs leading-[18px] mb-7">
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

              <h3>Rental Conditions: </h3>
              <p>Minimum age : 25</p>
              <p>Minimum age : 25</p>
              <p>Minimum age : 25</p>
              <p>Minimum age : 25</p>
              <p>Minimum age : 25</p>
            </div>
            {/* padding 12px */}
            <Button title={'Rental car'} width={'168px'} />
          </div>
        </div>
      </div>
    </>
  );
};
