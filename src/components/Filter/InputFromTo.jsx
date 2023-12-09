import { useState } from 'react';

export const InputFromTo = ({ setDataFromForm }) => {
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleMileageFromChange = (e) => {
    const value = e.target.value;
    const numericValue = parseFloat(value);
    setMileageFrom(value);

    setDataFromForm((prevState) => ({
      ...prevState,
      mileageFrom: numericValue,
    }));
  };

  const handleMileageToChange = (e) => {
    const value = e.target.value;
    const numericValue = parseFloat(value);
    setMileageTo(value);

    setDataFromForm((prevState) => ({
      ...prevState,
      mileageTo: numericValue,
    }));
  };

  return (
    <>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-labelsColor dark:text-white"
        >
          Сar mileage / km
        </label>
        <div className="flex">
          <input
            type="text"
            id="from"
            className="w-[160px] inputFromTo"
            placeholder="From"
            value={mileageFrom}
            onChange={handleMileageFromChange}
          />
          <input
            type="text"
            id="to"
            className="w-[160px] bg-[#F7F7FB] border-none rounded-e-[14px] py-[14px] px-[24px] text-lg leading-[20px] font-medium text-darkFontColor placeholder-darkFontColor  focus:ring-blue-500 focus:border-blue-500 block 
			  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
			  dark:focus:border-blue-500"
            placeholder="To"
            value={mileageTo}
            onChange={handleMileageToChange}
          />
        </div>
      </div>
    </>
  );
};
