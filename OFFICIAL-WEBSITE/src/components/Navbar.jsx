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

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.isButton
                    ? "bg-[#070223] hover:bg-blue-500 text-[#6797D5] hover:text-white px-4 py-2 rounded-full flex items-center transition"
                    : "text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                }`}
              >
                {item.name}
                {item.isButton && <FiChevronRight className="ml-2" />}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-[#FCFDFF] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block ${
                  item.isButton
                    ? "bg-[#070223] hover:bg-blue-500 text-[#6797D5] hover:text-white px-4 py-2 rounded-full"
                    : "text-gray-800 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                } flex items-center justify-between`}
              >
                {item.name}
                {item.isButton && <FiChevronRight className="ml-2" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
