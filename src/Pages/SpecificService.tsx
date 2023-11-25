interface SpecificServiceProps {
  title: string;
  content: string;
}

export const SpecificService = ({ title, content }: SpecificServiceProps) => {
  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center align-center min-h-full px-6 w-full lg:px-8 lg:max-w-1/2 xl:max-w-1/2 2xl:max-w-1/3 self-center my-12">
        <div className=" lg:mx-0 xl:mx-12">
          <h2 className="mb-2 ">{title}</h2>
          <p className="leading-6 text-lg text-justify">{content}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
          <a
            href="/services"
            className="text-sm font-semibold leading-6 text-darkblue"
          >
            ←<span aria-hidden="true"> Voltar para Serviços</span>
          </a>
          <a
            target="blank"
            href="https://wa.me/558399895050?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informações."
            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-darkblue shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </div>
  );
};
