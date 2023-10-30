const Footer = () => {
  return (
    <footer className='bg-gray-900 py-4'>
      <div className='relative container mx-auto flex items-center justify-center'>
        <div className='absolute fixed text-sm left-0 text-white text-left'>
          &copy; 2023 CGRH INC. | Todos os direitos reservados
        </div>
        <div className='ml-4'>
          <a
            href='https://www.instagram.com'
            className='text-white hover:text-blue-700 mx-2 font-medium'
            target='blank'
          >
            Instagram
          </a>
          <a
            href='https://wa.me/5583999895059?text=Olá%Gostaria%20de%20mais%20informações'
            className='text-white hover:text-blue-700 mx-2 font-medium'
            target='blank'
          >
            WhatsApp
          </a>
          <a
            href='mailto:cgrh@gmail.com'
            className='text-white hover:text-blue-700 mx-2 font-medium'
            target='blank'
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
