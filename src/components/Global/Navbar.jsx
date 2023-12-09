import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IoMoon } from 'react-icons/io5';
// import { IoMoon, IoSunny } from 'react-icons/io5';

export const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { pathname } = useLocation();

  const handleOpenMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="border-gray-200 shadow-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700 p-[10px] md:p-0">
      <div className="max-w-[1280px] flex flex-wrap items-center justify-between mx-auto px-[15px]">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8 " alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <span className="text-logoColor">R</span>ent{' '}
            <span className="text-logoColor">Y</span>our{' '}
            <span className="text-logoColor">D</span>ream
          </span>
        </a>
        {/* Mob Menu Button */}
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={handleOpenMenu}
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

        {/* <IoSunny
            // onClick={toggleUiTheme}
            className="cursor-pointer text-black dark:text-mainTextColo hidden md:block text-[21px] ml-auto mt-[8px] mr-[40px]"
          /> */}

        <IoMoon
          // onClick={toggleUiTheme}
          className="cursor-pointer text-black dark:text-mainTextColo hidden md:block text-[21px] ml-auto mt-[8px] mr-[40px]"
        />

        <div
          className={`${isMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-[24px] rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block pb-[8px] px-[12px] pt-[24px] md:pt-[24px] md:pb-[14px] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                md:border-0 md:hover:text-blue-700 dark:text-white 
                md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
                cursor-pointer hover:animate-pulse ${
                  pathname === '/' &&
                  'md:border-b md:border-indigo-700 md:rounded-none'
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
                className={`block py-2 px-3 md:pt-[24px] md:pb-[14px] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
                 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer hover:animate-pulse ${
                   pathname === '/catalog' &&
                   'md:border-b md:border-indigo-700 md:rounded-none'
                 }`}
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
                className={`block py-2 px-3 md:pt-[24px] md:pb-[14px] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                md:dark:hover:bg-transparent cursor-pointer hover:animate-pulse ${
                  pathname === '/favorites' &&
                  'md:border-b md:border-indigo-700 md:rounded-none'
                }`}
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
