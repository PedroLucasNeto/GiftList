import { useState, useEffect } from 'react';
import { useLocation /*useParams*/ } from 'react-router-dom';
import { services } from '../types/Services';
import { SpecificService } from './SpecificService';
import ServicesGallery from '../components/ServicesGallery';
import { service } from '../types/Services';

export const AllServices = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<service | undefined>();
  const [hasService, setHasService] = useState(false);

  useEffect(() => {
    const foundService = services.find(
      (service) => service.link === location.pathname
    );

    if (foundService) {
      setSelectedService(foundService);
      setHasService(true);
    } else {
      setHasService(false);
      setSelectedService(undefined); // Certifique-se de definir como undefined se o serviço não for encontrado
    }
  }, [location.pathname]);

  return (
    <div className='flex justify-center'>
      <div className='min-h-screen text-justify min-h-full px-6 w-full lg:px-8 lg:max-w-2/3 xl:max-w-2/3 2xl:max-w-2/3 self-center mx-20 my-2 '>
        {hasService && selectedService && (
          <SpecificService
            content={selectedService?.content}
            title={selectedService?.name}
            image={selectedService?.img}
            imgAlt={selectedService?.imgAlt}
            key={selectedService?.name}
          />
        )}
        {!hasService && <ServicesGallery />}
      </div>
    </div>
  );
};
