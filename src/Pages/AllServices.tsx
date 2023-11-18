import { useState, useEffect } from 'react';
import { useLocation /*useParams*/ } from 'react-router-dom';
import { services } from '../types/Services';
import { SpecificService } from './SpecificService';

export const AllServices = () => {
  const location = useLocation();
  // const { serviceId } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hasService, setHasService] = useState(false);

  useEffect(() => {
    // Aqui você pode usar serviceId para encontrar o serviço específico
    const selectedService = services.find(
      (service) => service.link === location.pathname
    );

    if (selectedService) {
      setTitle(selectedService.name);
      setContent(selectedService.description);
      setHasService(true);
    }
  }, [location.pathname]);

  return (
    <div className='flex justify-center'>
      <div className='min-h-screen text-justify min-h-full px-6 w-full lg:px-8 lg:max-w-1/2 xl:max-w-1/2 2xl:max-w-1/3 self-center my-12 '>
        {hasService && (
          <SpecificService content={content} title={title} key={title} />
        )}
      </div>
    </div>
  );
};
