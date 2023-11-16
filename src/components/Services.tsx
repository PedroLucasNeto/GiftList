import { Link } from "react-router-dom";
import { services } from "../types/Services";

export default function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-700">
            Principais Serviços
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tudo o que você precisa para impulsionar sua empresa
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferecemos soluções personalizadas para atender às necessidades
            únicas da sua organização.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            {services.map((service) => (
              <Link
                to={service.link}
                key={service.name}
                className="transition ease-in-out delay-150 relative pl-16 group p-4 hover:bg-blue-900 border 
                hover:border-white shadow-md rounded-xl cursor-pointer"
              >
                <dt className="transition ease-in-out text-base font-semibold leading-7 text-gray-900 group-hover:text-white ">
                  <div
                    className="transition ease-in-out absolute left-4 top-5 flex h-10 w-10 items-center justify-center rounded-lg
                   bg-blue-900 group-hover:bg-white "
                  >
                    <service.icon
                      className="h-6 w-6 text-white transition ease-in-out  group-hover:text-blue-900"
                      aria-hidden="true"
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="transition ease-in-out mt-2 text-base leading-7 text-gray-600 group-hover:text-white ">
                  {service.description}
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
