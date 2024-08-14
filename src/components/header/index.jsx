import "./style.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {filterNavlist} from '../../utils'
import { routerLinks } from "../../mocks/router";


const index = () => {

  const filteredList = filterNavlist(routerLinks)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-[96px] fixed top-0 z-10 right-0 left-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6  dark:bg-gray-800">
        <div className="h-[96px] flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
       

          <div className="flex lg:order-2">
          
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {isMenuOpen && (
              <div id="mobile-menu-2" className="absolute top-[70px] left-16 lg:hidden bg-[#1e1d22e8]">
                {/* Your menu items here */}
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-white dark:text-white"
                >
                  About
                </NavLink>
                <NavLink
                  to="/location"
                  className="block px-4 py-2 text-white dark:text-white"
                >
                  Location
                </NavLink>
                <NavLink
                  to="/careers"
                  className="block px-4 py-2 text-white dark:text-white"
                >
                  Careers
                </NavLink>
              </div>
            )}

          </div>

          
          <a href="#" className="flex items-center">
            <span className="self-center font-semibold whitespace-nowrap text-[#495567] text-[44px] dark:text-white">
              scoot
            </span>
          </a>

          <div
            className="hidden justify-between mr-[30%] items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
              
              {
                filteredList.length && filteredList.map((item)=>{
                  return <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:text-orange-500 focus:text-orange-500 focus:font-bold"
                    aria-current="page"
                  >
                    {item.title}
                  </NavLink>
                </li>
                })
              }

            </ul>
          </div>

          <div></div>
          
          <button className="ml-11 btn hidden lg:flex lg:order-3 text-[16px]">Get Scootin</button>


        </div>
      </nav>
    </header>
  );
};

export default index;
