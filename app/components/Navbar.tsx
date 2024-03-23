import React from "react";

interface Props {
  handleTabClick: Function;
  handlesideBar: any;
}

const Navbar = ({ handleTabClick, handlesideBar }: Props) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sm:hidden">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="block py-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
          aria-current="page"
          onClick={() => handleTabClick("forums")}
        >
          Forums
        </div>
        <div
          className="block py-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
          aria-current="page"
          onClick={() => handleTabClick("marketStories")}
        >
          Market Stories
        </div>
        <button
          onClick={handlesideBar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
