import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <>
      <div className='flex'>
        <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left bg-gray-900 p-8'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Entre em contato
          </h2>
          <p className='mt-6 text-lg leading-8 text-white'>
            Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
            <a
              href='#'
              className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              WhatsApp
            </a>
            <Link to='/' className='text-sm font-semibold leading-6 text-white'>
              Início <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
        <div className='bg-gray-100 flex-col p-10 rounded-xl w-80 h-44'>
          <h6 className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-xl pb-4'>
            Entre em contato
          </h6>
          <a href='#' className='text-blue-700 font-semibold pb-4'>
            email@email.com
          </a>
          <p className='text-gray-900'>+1 (555) 905-2345</p>
        </div>
      </div>
    </>
  );
};
