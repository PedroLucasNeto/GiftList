import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Items = {
  name: string;
  to: string;
  current: boolean;
  composedItems: Array<Items>;
  isSubmenuOpen: boolean;
};
const navigation: Items[] = [
  {
    name: 'Início',
    to: '/home',
    current: false,
    composedItems: [],
    isSubmenuOpen: false,
  },
  {
    name: 'Serviços',
    to: '/home#services',
    current: false,
    composedItems: [
      {
        name: 'Diagnóstico Organizacional',
        to: '/services/diagnostico',
        current: false,
        composedItems: [],
        isSubmenuOpen: false,
      },
      {
        name: '',
        to: '/services/treinamento-comportamental',
        current: false,
        composedItems: [],
        isSubmenuOpen: false,
      },
      {
        name: '',
        to: '/services/desenvolvimento-liderancas',
        current: false,
        composedItems: [],
        isSubmenuOpen: false,
      },
      {
        name: 'Todos os Serviços',
        to: '/services',
        current: false,
        composedItems: [],
        isSubmenuOpen: false,
      },
    ],
    isSubmenuOpen: false,
  },
  {
    name: 'Contato',
    to: '/contact',
    current: false,
    composedItems: [],
    isSubmenuOpen: false,
  },
  {
    name: 'Mais',
    to: '/contact',
    current: false,
    composedItems: [
      {
        name: 'Política de Privacidade',
        to: '/home#services',
        current: false,
        composedItems: [],
        isSubmenuOpen: false,
      },
    ],
    isSubmenuOpen: false,
  },
];

export default function NavBar() {
  const [navItems, setNavItems] = useState(navigation);
  function toggleSubmenu(item: Items) {
    const updatedNavItems: Items[] = navItems.map((navItem) => {
      if (navItem === item) {
        return {
          ...navItem,
          isSubmenuOpen: !navItem.isSubmenuOpen,
        };
      } else {
        return {
          ...navItem,
          isSubmenuOpen: false,
        };
      }
    });
    setNavItems(updatedNavItems);
  }
  return (
    <Disclosure as='nav' className='bg-darkblue border-gray-100 border-b-2'>
      <div className='mx-auto max-w-7xl px-16 sm:px-6 lg:px-8 '>
        <div className='flex h-16 justify-between items-center w-100'>
          <p className='text-gray-900'>CGRH</p>
          <div className='flex space-x-4'>
            {navItems.map((item) => (
              <div
                key={item.name}
                className='text-white w-32 text-center'
                onMouseEnter={() => toggleSubmenu(item)}
                // onMouseLeave={() => toggleSubmenu(item)}
              >
                <Link
                  to={item.to}
                  // onClick={() => toggleSubmenu(item)}
                  className='focus:outline-none'
                >
                  {item.name}
                </Link>
                {item.isSubmenuOpen && (
                  <div className='transition ease-in-out delay-150 rounded-md w-32 bg-white divide-y shadow-lg z-10 absolute top-11'>
                    {item.composedItems.map((childItem) => (
                      <a
                        key={childItem.name}
                        href={childItem.to}
                        className='block px-4 py-2 text-sm text-darkblue hover:text-blue-900 border border-white rounded-md'
                      >
                        {childItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
