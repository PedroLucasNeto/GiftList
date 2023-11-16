import { useState, useEffect } from "react";
import { useLocation /*useParams*/ } from "react-router-dom";
import { services } from "../types/Services";

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

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
