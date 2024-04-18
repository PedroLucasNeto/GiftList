const Header = () => {
  return (
    <header className="bg-gray-600 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <nav>
          <ul className="flex space-x-4 m-0 ">
            <li>
              <a
                href="#"
                className="text-white text-sm hover:text-gray-200 focus:text-red-200 "
              >
                Início
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="text-white text-sm hover:text-gray-200 focus:text-red-200 "
              >
                Sobre
              </a>
            </li> */}
            <li>
              <a
                href="#"
                className="text-white text-sm hover:text-gray-200 focus:text-red-200 "
              >
                Recados
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm hover:text-gray-200 focus:text-red-200 "
              >
                Presentes
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
