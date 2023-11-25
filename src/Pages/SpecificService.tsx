interface SpecificServiceProps {
  title: string;
  content: string;
}

export const SpecificService = ({ title, content }: SpecificServiceProps) => {
  return (
    // <div className="flex justify-center">
    //   <div className="flex-col justify-center align-center min-h-full px-6 w-full lg:px-8 lg:max-w-1/2 xl:max-w-1/2 2xl:max-w-1/3 self-center my-12">
    //     <div className=" lg:mx-0 xl:mx-12">
    //       <h2 className="mb-2 ">{title}</h2>
    //       <p className="leading-6 text-lg text-justify">{content}</p>
    //     </div>
    //     <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
    //       <a
    //         href="/services"
    //         className="text-sm font-semibold leading-6 text-darkblue"
    //       >
    //         ←<span aria-hidden="true"> Voltar para Serviços</span>
    //       </a>
    //       <a
    //         target="blank"
    //         href="https://wa.me/558399895050?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20mais%20informações."
    //         className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-darkblue shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    //       >
    //         Entrar em Contato
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{content}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Orçamento
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Para entender melhor suas necessidades, e poder proporcionar o
              melhor serviço entre em contato e faça um orçamento
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                Você vai contar com!
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  Contato
                </span>
                <p className="mt-5 text-base font-semibold text-gray-600">
                  Nos conte um pouco mais!
                </p>
                <p className="mt-2 flex items-baseline justify-center gap-x-2">
                  {/* <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                    Reais
                  </span> */}
                </p>
                <a
                  target="blank"
                  href={`https://wa.me/558399895050?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20${title}.`}
                  className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Orçar Agora!
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Não perca mais tempo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const includedFeatures = [
  "Consultas personalizadas adaptadas às necessidades únicas da sua organização",
  "Orientação especializada em psicologia organizacional e dinâmica de trabalho",
  "Acesso exclusivo a uma variedade de recursos e insights para membros",
  "Participação em nossa prestigiada conferência anual sobre excelência organizacional",
  "Camiseta oficial de membro como um gesto de nossa gratidão",
];
