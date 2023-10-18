import { Disclosure } from '@headlessui/react';
import { useState } from 'react';

interface Items {
  name: string;
  to: string;
  current: boolean;
}

export default function NavBar() {
  const navigation: Items[] = [
    { name: 'Início', to: '/home', current: false }, // Defina o estado inicial para 'false'
    { name: 'Serviços', to: '/home#services', current: false },
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
    <Disclosure as='nav' className='bg-darkblue border-gray-100 border-b-2 '>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='flex h-16 justify-between items-center w-100'>
          <div className=''>
            <p className='text-gray-50'>CGRH</p>
          </div>
          <div className='flex space-x-4'>
            {navItems.map((item) => (
              <a
                onClick={() => handleNavItemClick(item.name)}
                key={item.name}
                href={item.to}
                className={classNames(
                  item.current
                    ? 'bg-gray-400 text-gray-50'
                    : 'text-gray-300 hover:bg-sky-50 hover:text-darkblue',
                  'rounded-md px-3 py-2 text-sm font-medium text-gray-50'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
