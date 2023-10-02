import { Link } from 'react-router-dom';
import { Card } from './Card';

export const Contact = () => {
  return (
    <>
      <div className='flex flex-wrap gap-4 bg-gray-100 border-t-gray-100'>
        <div className='w-full sm:w-full lg:w-80 xl:w-80 mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left bg-gray-900 p-8'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Entre em contato
          </h2>
          <p className='mt-6 text-lg leading-8 text-white'>
            Fale com nossos especialistas pelos seguintes meios.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
            <Link to='/' className='text-sm font-semibold leading-6 text-white'>
              ←<span aria-hidden='true'> Voltar</span>
            </Link>
            <a
              href='#'
              className='rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className='flex flex-wrap place-content-center p-8 gap-4 '>
          <Card
            title='Carlos Santos'
            key={1}
            email='email@email.com'
            location=''
            phone='(83) 9 9810-7584'
          />
          <Card
            title='Pedro Lucas'
            key={1}
            email='pedrolukasneto@gmail.com'
            location=''
            phone='(83) 9 9810-7584'
          />
          <Card
            title='Localização'
            key={1}
            email=''
            location='Rua João Machado, 267 - Prata, Campina Grande - PB, 58400-510'
            phone=''
          />
          <Card
            title='Redes Sociais'
            key={1}
            socialMidia='Instagram: @CarlosSantos Facebook: @CarlosSantos'
          />
        </div>
      </div>
    </>
  );
};
