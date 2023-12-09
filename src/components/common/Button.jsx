export const Button = ({ width, title, onClick, type, paddingY }) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick}
      className={`${width && width} min-w-[150px] m-0 ${
        paddingY ? paddingY : 'py-[12px]'
      } px-[44px] btn-primary`}
    >
      {title}
    </button>
  );
};
