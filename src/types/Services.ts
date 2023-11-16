import {
    UserGroupIcon,
    CogIcon,
    MagnifyingGlassIcon,
    StarIcon,
  } from "@heroicons/react/24/outline";

export const services = [
    {
      name: "Diagnóstico Organizacional",
      description:
        "É o primeiro passo para entender a saúde da sua empresa. Realizamos uma análise abrangente, identificando pontos fortes e áreas que precisam de melhorias.",
      icon: MagnifyingGlassIcon,
      link: "/services/diagnostico",
    },
    {
      name: "Treinamento Comportamental",
      description:
        "Projetado para aprimorar as habilidades interpessoais e de comunicação dos seus funcionários. Nossos programas abordam temas como resolução de conflitos, empatia, trabalho em equipe e liderança.",
      icon: CogIcon,
      link: "/services/treinamento-comportamental",
    },
    {
      name: "Desenvolvimento de Lideranças",
      description:
        "Nosso programa de formação de líderes visa desenvolver estrategicamente os talentos da sua empresa, alinhando ciência e técnica na busca do melhor desenvolvimento profissional para os colaboradores.",
      icon: StarIcon,
      link: "/services/desenvolvimento-liderancas",
    },
    {
      name: "Orientação Profissional",
      description:
        "Oferecemos orientação profissional personalizada para indivíduos em busca de clareza em suas carreiras.",
      icon: UserGroupIcon,
      link: "/services/orientacao-profissional",
    },
  ];