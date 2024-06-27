import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BiStore } from "react-icons/bi"; // Importing an example icon from react-icons library

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-white");
  const [logoColor, setLogoColor] = useState("text-emerald-600");
  const [menuItemColor, setMenuItemColor] = useState("text-gray-600");
  const [iconColor, setIconColor] = useState("text-gray-600");
  const [showBorder, setShowBorder] = useState(true);

  const navbarData = {
    navbar: [
      { name: "Home", link: "home" },
      { name: "Nos Produits", link: "product-list" },
      { name: "Les Partenaires", link: "les-partenaires" },
      { name: "Offres Spéciales", link: "specialoffer" },
    ],
  };

  useEffect(() => {
    // Always set background to white
    setNavBackground("bg-white");
    setLogoColor("text-emerald-600");
    setMenuItemColor("text-gray-600");
    setIconColor("text-gray-600");
    setShowBorder(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Fixed Notification Bar */}
      <div className="fixed top-0 w-full bg-red-100 text-red-700 text-center py-2 font-bold z-50">
        🚚 Livraison dans tout le Maroc !
      </div>

      {/* Fixed Navbar */}
      <nav
        className={`w-full fixed top-10 z-40 ${navBackground} backdrop-blur-lg transition duration-300`}
        style={{ height: "64px" }} // Adjust height as needed
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Border Line */}
            <div className="flex items-center">
              <h3 className={`text-2xl font-bold ${logoColor}`}>Parapharmacie</h3>
              {showBorder && (
                <div className="h-px bg-emerald-600 ml-4 flex-grow"></div>
              )}
            </div>

            {/* Desktop navigation */}
            <ul className="hidden lg:flex space-x-8">
              {navbarData.navbar.map((item, index) => (
                <li
                  key={index}
                  className={`text-base ${menuItemColor} transition duration-300 cursor-pointer`}
                >
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Visit Us button */}
              <li className="ml-4">
                <Link
                  to="visit-us-section"
                  smooth={true}
                  duration={500}
                  className="flex items-center text-base text-emerald-600 font-semibold hover:text-emerald-500 transition duration-300 cursor-pointer"
                >
                  <BiStore className="w-6 h-6 mr-1" />
                  Visitez-nous
                </Link>
              </li>
            </ul>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`text-white focus:outline-none ${iconColor}`}
              >
                <svg
                  className={`w-6 h-6 ${iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isOpen && (
          <div className="lg:hidden z-50 absolute w-full">
            <ul className="px-5 pt-5 pb-5 space-y-1 sm:px-3 bg-emerald-600">
              {navbarData.navbar.map((item, index) => (
                <li
                  key={index}
                  className="block text-white font-semibold text-lg hover:text-gray-400 transition duration-300"
                >
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                    className="cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Visit Us button */}
              <li>
                <Link
                  to="visit-us-section"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="block text-white font-semibold text-lg hover:text-gray-400 transition duration-300 mt-4"
                >
                  Visitez-nous
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
