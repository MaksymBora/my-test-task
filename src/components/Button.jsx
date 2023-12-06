export const Button = (props) => {
  return (
    <button
      type="button"
      className={`${
        props.width && props.width
      } min-w-[150px] text-white bg-gradient-to-r text-[14px] leading-[20px] self-center from-blue-500
	   via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
	   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
	   rounded-lg text-sm px-auto py-3 text-center me-2 mb-2`}
    >
      {props.title}
    </button>
  );
};
