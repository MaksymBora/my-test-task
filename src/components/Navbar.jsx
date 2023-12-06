import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const pathName = useLocation();

  return (
    <nav className="border-darkBlueColor bg-darkBlueColor dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            Rent Your Dream
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto text-white"
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent  md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent cursor-pointer ${
                  pathName === '/' && 'border-b-1 border-indigo-500'
                }`}
                spy="true"
                smooth="true"
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                spy="true"
                smooth="true"
                duration={500}
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                spy="true"
                smooth="true"
                duration={500}
              >
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
