import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FCFDFF] border-b top-0 p-4 w-full">
      <div className="px-2 sm:px-6 lg:px-8 w-full flex items-center justify-between h-16">
        
        {/* Left section: Logo */}
        <div className="flex-shrink-0 flex items-center ml-8">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="tekktopia" className="w-8 h-8" />
            <p className="text-[30px] ml-2">
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </a>
        </div>

        {/* Right section: Menu and Button */}
        <div className="hidden sm:flex items-center gap-5 mr-10">
          <div className="flex gap-4">
            {["Home", "About", "Services", "Our Project", "Blog", "Our Team"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#000000] hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-[#070223] hover:bg-blue-500 flex items-center text-[#6797D5] hover:text-white px-4 py-2 rounded-md text-sm font-medium">
            Connect with us <FiChevronRight />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="absolute inset-y-0 right-0 ml-4 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
          {["Home", "About", "Services", "Our Project", "Blog", "Our Team"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#000000] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
