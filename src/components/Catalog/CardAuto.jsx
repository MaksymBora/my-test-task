import { Button } from '../common/Button';

export const CardAuto = ({
  carData: {
    make,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
  },
}) => {
  return (
    <>
      <div className="w-[274px] bg-transparent">
        <div className="relative">
          <img
            src={img}
            alt="car"
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
            Buick <span className="text-lightBlueColor">Eclave</span>, 2008
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
        <Button title={'Learn more'} width={'w-full'} />
      </div>
    </>
  );
};
