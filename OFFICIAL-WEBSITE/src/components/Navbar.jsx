import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa"; // For open/close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array of nav items with name, href, and optional isButton flag
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Project", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Our Team", href: "/our-team" },
    { name: "Connect with us", href: "/contact-us", isButton: true } // Button item
  ];

  return (
    <nav className="bg-[#FCFDFF] border-b fixed top-0 p-4 w-full z-10 flex flex-col lg:flex-row justify-center">
      <div className="px-2 sm:px-6 lg:px-8 flex items-center justify-between  w-full h-16 lg:container mx-auto">
        
        {/* Left section: Logo */}
        <div className="flex-shrink-0 flex items-center ml-0">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="tekktopia" className="w-8 h-8" />
            <p className="text-[30px] ml-2">
              <span className="text-[#F5901F]">t</span>ekk
              <span className="text-[#137CC6]">t</span>opia
            </p>
          </a>
        </div>
    <nav className="bg-[#FCFDFF] border-b fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="tekktopia" className="w-8 h-8" />
              <p className="text-2xl ml-2 font-semibold">
                <span className="text-[#F5901F]">t</span>ekk
                <span className="text-[#137CC6]">t</span>opia
              </p>
            </a>
          </div>

        {/* Right section: Menu and Button */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.isButton
                    ? "bg-[#070223] hover:bg-blue-500 text-[#6797D5] hover:text-white px-4 py-2 rounded-full flex items-center transition"
                    : "text-gray-800 hover:text-blue-600 lg:px-3 py-2 rounded-md text-xs sm:text-base font-medium"
                }`}
              >
                {item.name}
                {item.isButton && <FiChevronRight className="ml-2" />}
              </a>
            ))}
          </div>

        {/* Mobile menu button */}
        <div className="absolute inset-y-0 right-0 ml-4 flex items-center lg:hidden">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-2 w-full pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`${
                item.isButton
                  ? "bg-[#070223] hover:bg-blue-500 text-center text-[#6797D5] hover:text-white px-4 py-2"
                  : "text-[#000000] hover:bg-gray-700 hover:text-white px-3 py-2"
              } block rounded-md text-base font-medium flex items-center`}
            >
              {item.name}
              {item.isButton && <FiChevronRight className="ml-2" />}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
