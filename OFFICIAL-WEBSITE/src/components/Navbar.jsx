import  { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FCFDFF] border-b fixed top-0 p-4 w-full">
      <div className=" px-2 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Left section: Logo */}
          <div className="flex-shrink-0">
            
          <p className="text-[30px] ml-8 flex items-center">
          <img src="/logo.png" alt="tekktopia" />
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </div>

          {/* Right section: Menu and Button */}
          <div className="flex items-center gap-5 mr-10 space-x-4">
            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex gap-2 space-x-4">
                <a
                  href="#"
                  className="text-[#000000]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#000000]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#000000]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-[#000000]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Project
                </a>
                <a
                  href="#"
                  className="text-[#000000]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-[#000000]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Team
                </a>
              </div>
            </div>

            {/* Button */}
            <button className="bg-[#070223] flex items-center text-[#6797D5] px-4 py-2 rounded-md text-sm font-medium">
              Connect with us <FiChevronRight />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 ml-4 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
          <a
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Project
            </a>
            <a
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Team
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
