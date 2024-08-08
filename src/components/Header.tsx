import { useState, useEffect } from "react";
import {
  HomeIcon,
  HeartIcon,
  GiftIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const links = [
    { href: "#", text: "Início", icon: HomeIcon },
    { href: "#our-story", text: "Nossa História", icon: HeartIcon },
    { href: "#gifts", text: "Lista de Presentes", icon: GiftIcon },
    { href: "#contact", text: "Recados", icon: EnvelopeIcon },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-darknude text-white p-4">
      <div
        className={`container mx-auto flex justify-center ${
          isMobile ? "" : "items-center"
        }`}
      >
        <nav>
          {isMobile ? (
            <div className="relative">
              <input
                type="checkbox"
                id="menu-toggle"
                className="hidden"
                checked={isMenuOpen}
              />
              <label
                htmlFor="menu-toggle"
                className="block cursor-pointer text-white text-lg lg:hidden"
                onClick={toggleMenu}
              >
                &#9776; Menu
              </label>
            </div>
          ) : (
            <ul className="flex flex-wrap gap-8 m-0 font-semibold ">
              {links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="focus:no-underline hover:no-underline text-white 
                    text-sm lg:text-lg hover:text-gray-200 focus:text-gray-900 flex justify-center text-center items-center"
                  >
                    {link.icon && (
                      <link.icon className="w-6 inline-block mr-2" />
                    )}
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
      {isMenuOpen && (
        <ul
          className={`
                absolute w-screen top-12 left-0 bg-darknude 
                text-white text-left p-4 z-50 space-y-4 lg:hidden
                transition-transform duration-300 transform 
                ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
                `}
        >
          {links.map((link) => (
            <li key={link.text}>
              <a
                onClick={toggleMenu}
                href={link.href}
                className="focus:no-underline hover:no-underline text-white
                 text-sm lg:text-lg hover:text-gray-200 focus:text-gray-900 font-bold"
              >
                {link.icon && <link.icon className="w-6 inline-block mr-2" />}
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
