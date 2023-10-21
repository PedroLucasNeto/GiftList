import {
  RocketLaunchIcon,
  UserPlusIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/20/solid";

export default function MainContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-700">
                Não se preocupe!
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nós entendemos a(s) sua(s) necessidade(s)
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Desde o início, estabelecemos nossa missão de ser o parceiro
                estratégico que as empresas precisam para prosperar. Começamos
                com uma visão ousada: compreender profundamente as necessidades
                das organizações e ajudá-las a atingir todo o seu potencial.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="./assets/handshake.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <UserPlusIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-900"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cultivando Ambientes Saudáveis:
                    </strong>{" "}
                    A pesquisa do clima e da cultura organizacional tornou-se
                    uma parte fundamental do nosso processo. Entendemos que um
                    ambiente de trabalho saudável e uma cultura sólida são
                    essenciais para o sucesso de qualquer organização.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PuzzlePieceIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-900"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Desenvolvendo Talentos:
                    </strong>{" "}
                    Ao longo dos anos, desenvolvemos uma ampla gama de serviços
                    para ajudar empresas a identificar, cultivar e reter
                    talentos excepcionais. Desde avaliações psicológicas até
                    treinamentos comportamentais e desenvolvimento de
                    lideranças, nossa equipe altamente experiente e apaixonada
                    trabalha para maximizar o potencial dos colaboradores.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon
                    className="mt-1 h-5 w-5 flex-none text-blue-900"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Inspirando e Motivando:
                    </strong>{" "}
                    Nossos programas motivacionais são projetados para inspirar
                    e engajar os colaboradores com temas personalizados que
                    atendem as necessidades específicas de cada empresa,
                    incluindo palestras, workshops, treinamentos e
                    desenvolvimento individual.
                  </span>
                </li>
              </ul>
              {/* <p className='mt-8'>
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Promovendo o Bem-estar Mental:
              </h2>
              <p className="mt-6">
                A CGRH está comprometida com a sua missão, buscando adaptar-se
                às mudanças e desafios do mundo da gestão de recursos humanos.
                Aliamos parceria e crescimento na busca do sucesso compartilhado
                com os nossos clientes. Estamos aptos ao desenvolvimento de
                diagnósticos de bem-estar e implantação de programas de saúde
                mental no trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
