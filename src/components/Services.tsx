import {
  UserGroupIcon,
  CogIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
      'Nosso programa de formação de líderes visa desenvolver estrategicamente os talentos da sua empresa, alinhando ciência e técnica na busca do melhor desenvolvimento profissional para os colaboradores.',
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
          <h2 className='text-base font-semibold leading-7 text-blue-700'>
            Principais Serviços
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Tudo o que você precisa para impulsionar sua empresa
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Oferecemos soluções personalizadas para atender às necessidades
            únicas da sua organização.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 '>
            {features.map((feature) => (
              <Link
                to={''}
                key={feature.name}
                className='relative pl-16 group p-4 hover:bg-blue-900 border border-white rounded-xl cursor-pointer'
              >
                <dt className='text-base font-semibold leading-7 text-gray-900 group-hover:text-white '>
                  <div className='absolute left-2 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 group-hover:bg-white '>
                    <feature.icon
                      className='h-6 w-6 text-white group-hover:text-blue-900'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600 group-hover:text-white '>
                  {feature.description}
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
