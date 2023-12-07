export const Button = ({ width, title }) => {
  return (
    <button
      type="button"
      className={`${
        width && width
      } min-w-[150px] m-0 py-[14px] px-[44px] border-none text-white bg-gradient-to-r text-[14px] leading-[20px] self-center from-blue-500
	   via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
	   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
	   rounded-lg text-sm px-auto  text-center`}
    >
      {title}
    </button>
  );
};
