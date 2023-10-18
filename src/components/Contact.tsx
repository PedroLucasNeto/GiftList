import { Link } from 'react-router-dom';
import { Card } from './Card';
import ContactForm from './ContactForm';

// Defina um array de objetos com os dados
const cardsData = [
  {
    title: 'Carlos Santos',
    key: 1,
    profession: 'Gerente técnico e comercial',
    email: 'cgrh@gmail.com',
    location: '',
    phone: '(83) 9 9989-5059',
  },
  {
    title: 'Alcione Barbosa',
    key: 2,
    profession: 'Gerente administrativa e financeira',
    email: 'cgrh@gmail.com',
    location: '',
    phone: '(86) 9 9930-7243',
  },
  {
    title: 'Pedro Lucas',
    key: 3,
    profession: 'Analísta de sistemas e dev',
    email: 'pedrolukasneto@gmail.com',
    location: '',
    phone: '(83) 9 9810-7584',
  },
  {
    title: 'Localização',
    key: 4,
    email: '',
    location: 'Rua João Machado, 267 - Prata, Campina Grande - PB, 58400-510',
    phone: '',
  },
  {
    title: 'Ambiente Virtual',
    key: 5,
    socialMedia: 'Marque sua reunião no meet através dos meios de contato',
  },
];

export const Contact = () => {
  return (
    <>
      <div>
        <div className='flex flex-wrap lg:flex-nowrap gap-4 bg-gray-100 border-t-gray-100 min-h-screen'>
          <div className='w-full lg:w-7/12 mx-auto text-center lg:mx-0 lg:flex-auto lg:text-center bg-gray-900 p-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Entre em contato
            </h2>
            <p className='mt-6 text-lg leading-8 text-white'>
              Fale com nossos especialistas pelos seguintes meios.
            </p>
            <div className='flex flex-wrap place-content-center p-2 gap-4 mt-8'>
              {cardsData.map((item) => (
                <Card
                  title={item.title}
                  email={item.email}
                  key={item.key}
                  location={item.location}
                  phone={item.phone}
                  profession={item.profession}
                  socialMedia={item.socialMedia}
                />
              ))}
            </div>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-center'>
              <Link
                to='/'
                className='text-sm font-semibold leading-6 text-white'
              >
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
          <ContactForm />
        </div>
      </div>
    </>
  );
};
