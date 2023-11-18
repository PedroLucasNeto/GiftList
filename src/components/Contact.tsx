import { Link } from "react-router-dom";
import { Card } from "./Card";

import { contactInfo } from "../types/ContactInfo";

export const Contact = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen min-w-full ">
        <div className="flex-col text-center p-8 w-full md:w-2/3 ">
          <h2 className=" text-3xl font-bold  text-darkblue sm:text-4xl">
            Entre em contato
          </h2>
          <p className="mt-6 text-lg leading-8 text-darkblue">
            Fale com nossos especialistas pelos seguintes meios.
          </p>
          <div className="flex flex-wrap justify-center p-2 gap-4 mt-8">
            {contactInfo.map((item) => (
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
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-darkblue"
            >
              ←<span aria-hidden="true"> Voltar</span>
            </Link>
            <a
              target="blank"
              href="https://wa.me/558399895050?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informações."
              className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-darkblue shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
