import { services } from "../types/Services";
import "swiper/css/bundle";

const ServicesGallery = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
            <h2 className="text-4xl font-bold text-blue-900 mb-1">
              Todos Serviços
            </h2>
            <p className="font-semibold text-blue-900 ml-1">
              Clique em um dos nossos serviços para saber mais
            </p>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group relative transition ease-in-out delay-250 "
                >
                  <div
                    className="relative h-80 w-full overflow-hidden rounded-lg 
                  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
                  >
                    <img
                      src={service.img}
                      alt={service.imgAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-blue-900  ">
                    <a href={service.link}>
                      <span className="absolute inset-0 text-blue-900 decoration-none" />
                      {service.name.toUpperCase()}
                    </a>
                  </h3>
                  <p className=" font-semibold text-gray-900 pb-2">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGallery;
