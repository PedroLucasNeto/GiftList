import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Início', to: '/', current: true },
  { name: 'Serviços', to: '/categories', current: false },
  { name: 'Contato', to: '/contact', current: false },
  // { name: 'Calendar', to: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-blue-900'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='flex h-16 justify-between items-center w-100'>
          <div className=''>
            <p className='text-sky-50 text-white'>CGRH</p>
            {/* TODO -> alterar logo do site <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='CGRH Logo'
                  /> */}
          </div>
          <div className='flex space-x-4'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
