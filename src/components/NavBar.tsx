import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';

interface Items {
  name: string;
  to: string;
  current: boolean;
}

export default function NavBar() {
  const navigation: Items[] = [
    { name: 'Início', to: '/', current: true }, // Defina o estado inicial para 'false'
    { name: 'Serviços', to: '/#services', current: false },
    { name: 'Contato', to: '/contact', current: false },
  ];
  const [navItems, setNavItems] = useState(navigation);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  function handleNavItemClick(current: string) {
    const updatedNavItems: Items[] = navItems.map((item) => ({
      ...item,
      current: item.name === current,
    }));
    setNavItems(updatedNavItems);
  }

  return (
    <Disclosure as='nav' className='bg-blue-700'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='flex h-16 justify-between items-center w-100'>
          <div className=''>
            <p className='text-sky-50 text-white'>CGRH</p>
          </div>
          <div className='flex space-x-4'>
            {navItems.map((item) => (
              <Link
                onClick={() => handleNavItemClick(item.name)}
                key={item.name}
                to={item.to}
                className={classNames(
                  item.current
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-300 hover:bg-blue-800 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
