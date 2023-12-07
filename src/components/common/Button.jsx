export const Button = ({ width, title }) => {
  return (
    <button
      type="button"
      className={`${width && width} min-w-[150px] m-0 ${
        title === 'Rental car' ? 'py-[12px]' : 'py-[14px]'
      } ${
        title === 'Rental car' ? 'px-[50px]' : 'px-[44px]'
      }  border-none text-white bg-gradient-to-r text-[14px] leading-[20px] self-center from-blue-500
	   via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
	   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
	   rounded-lg text-sm font-normal px-auto text-center`}
    >
      {title}
    </button>
  );
};
