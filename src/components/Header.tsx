const Header = () => {
  return (
    <header className="bg-darknude text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <nav>
          <ul className="flex gap-8 m-0 font-bold ">
            <li>
              <a
                href="#"
                className="text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-red-200 "
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#our-story"
                className="text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-red-200 "
              >
                Nossa História
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-red-200 "
              >
                Lista de Presentes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-red-200 "
              >
                Recados
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
