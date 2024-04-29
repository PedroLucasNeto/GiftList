const Header = () => {
  return (
    <header className='bg-darknude text-white py-4'>
      <div className='container mx-auto flex justify-center items-center'>
        <nav>
          <ul className='flex gap-8 m-0 font-semibold'>
            <li>
              <a
                href='#'
                className='focus:no-underline hover:no-underline text-white text-sm lg:text-lg hover:text-gray-200 focus:text-gray-900 '
              >
                Início
              </a>
            </li>
            <li>
              <a
                href='#our-story'
                className='focus:no-underline hover:no-underline text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-gray-900 '
              >
                Nossa História
              </a>
            </li>
            <li>
              <a
                href='#'
                className='focus:no-underline hover:no-underline text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-gray-900 '
              >
                Lista de Presentes
              </a>
            </li>
            <li>
              <a
                href='#'
                className='focus:no-underline hover:no-underline text-white text-sm  lg:text-lg hover:text-gray-200 focus:text-gray-900 '
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
