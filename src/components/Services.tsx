import {
  UserGroupIcon,
  CogIcon,
  MagnifyingGlassIcon,
  ChevronDoubleUpIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Diagnóstico Organizacional',
    description:
      'É o primeiro passo para entender a saúde da sua empresa. Realizamos uma análise abrangente, identificando pontos fortes e áreas que precisam de melhorias.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Treinamento Comportamental',
    description:
      'Projetado para aprimorar as habilidades interpessoais e de comunicação dos seus funcionários. Nossos programas abordam temas como resolução de conflitos, empatia, trabalho em equipe e liderança.',
    icon: CogIcon,
  },
  {
    name: 'Desenvolvimento de Lideranças',
    description:
      'Nosso Desenvolvimento de Lideranças visa fortalecer a capacidade de liderança em sua organização.',
    icon: StarIcon,
  },
  {
    name: 'Orientação Profissional',
    description:
      'Oferecemos orientação profissional personalizada para indivíduos em busca de clareza em suas carreiras.',
    icon: UserGroupIcon,
  },
];

export default function Services() {
  return (
    <div id='services' className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Principais Serviços
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Tudo o que você precisa para impulsionar sua empresa
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Oferecemos soluções personalizadas para atender às necessidades
            únicas da sua organização. Nossa consultoria está aqui para ajudá-lo
            a alcançar seus objetivos de recursos humanos e sucesso
            organizacional.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
