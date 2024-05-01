const Header = () => {
  const links = [
    { href: '#', text: 'Início' },
    { href: '#our-story', text: 'Nossa História' },
    { href: '#gifts', text: 'Lista de Presentes' },
    { href: '#contact', text: 'Recados' },
  ];
  return (
    <header className='bg-darknude text-white py-4'>
      <div className='container mx-auto flex justify-center items-center'>
        <nav>
          <ul className='flex gap-8 m-0 font-semibold'>
            {links.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className='focus:no-underline hover:no-underline text-white text-sm lg:text-lg hover:text-gray-200 focus:text-gray-900 '
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
