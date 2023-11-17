import { useState, useEffect } from 'react';
import { useLocation /*useParams*/ } from 'react-router-dom';
import { services } from '../types/Services';

export const SpecificService = () => {
  const location = useLocation();
  // const { serviceId } = useParams();

  useEffect(() => {
    // Aqui você pode usar serviceId para encontrar o serviço específico
    const selectedService = services.find(
      (service) => service.link === location.pathname
    );

    if (selectedService) {
      setTitle(selectedService.name);
      setContent(selectedService.description);
    }
  }, [location.pathname]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className='flex justify-center'>
      <div className='min-h-screen text-justify min-h-full px-6 w-full lg:px-8 lg:max-w-1/2 xl:max-w-1/2 2xl:max-w-1/3 self-center my-12 '>
        <h1 className='mb-2'>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};
