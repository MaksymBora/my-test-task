import { Button } from '../Button';

export const CardAuto = () => {
  return (
    <>
      <div className="w-[274px] bg-transparent ">
        <img
          src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?impolicy=resize&imwidth=480"
          alt="car"
          className="rounded-[14px] h-[268px] mb-3.5"
        />
        <div className="flex justify-between">
          <p className="text-base font-medium text-darkFontColor">
            Buick <span className="text-lightBlueColor">Eclave</span>, 2008
          </p>
          <p className="text-base font-medium text-darkFontColor mr-[9px] mb-2">
            $40
          </p>
        </div>
        <div className="text-cardOptionsColor text-xs leading-[18px] mb-7">
          <ul className="flex flex-row items-start flex-wrap gap-x-1.5 gap-y-1">
            {/* Add nth ::before and afrer */}
            <li className="flex gap-x-1.5">
              <p>Kiev</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>Ukraine</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>Luxury Car Rentals</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>Premiem</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>Suv</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>Enclave</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>9582</p>
              <p>|</p>
            </li>
            <li className="flex gap-x-1.5">
              <p>Power liftgate </p>
            </li>
          </ul>
        </div>
        <Button title={'Learn more'} width={'w-full'} />
      </div>
    </>
  );
};
