import { useState, useEffect } from "react";
import { useLocation /*useParams*/ } from "react-router-dom";
import { services } from "../types/Services";
import { SpecificService } from "./SpecificService";
import ServicesGallery from "../components/ServicesGallery";

export const AllServices = () => {
  const location = useLocation();
  // const { serviceId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hasService, setHasService] = useState(false);

  useEffect(() => {
    // Aqui você pode usar serviceId para encontrar o serviço específico
    const selectedService = services.find(
      (service) => service.link === location.pathname
    );

    if (selectedService) {
      setTitle(selectedService.name);
      setContent(selectedService.content);
      setHasService(true);
    }
  }, [location.pathname]);

  return (
    <div className="flex justify-center">
      <div className="min-h-screen text-justify min-h-full px-6 w-full lg:px-8 lg:max-w-2/3 xl:max-w-2/3 2xl:max-w-1/3 self-center my-12 ">
        {hasService && (
          <SpecificService content={content} title={title} key={title} />
        )}
        {!hasService && <ServicesGallery />}
      </div>
    </div>
  );
};
