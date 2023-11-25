import {
  UserGroupIcon,
  CogIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export type service = {
    content: string,
    description: string,
    display: boolean,
    icon: React.ElementType,
    img: string,
    imgAlt: string,
    link: string,
    name: string,
}

export const services: service[] = [
  {
    name: "Diagnóstico Organizacional",
    description:
      "É o primeiro passo para entender a saúde da sua empresa. Realizamos uma análise abrangente, identificando pontos fortes e áreas que precisam de melhorias.",
    icon: MagnifyingGlassIcon,
    content:
      "Nosso serviço de Diagnóstico Organizacional oferece uma visão detalhada do estado atual da sua empresa. Utilizamos métodos avançados de análise para identificar oportunidades de melhoria e fortalecer os pontos positivos.",
    link: "/services/diagnostico",
    imgAlt: "Diagnóstico",
    img: "/assets/images/diagnostico-organizacional.jpg",
    display: true,
  },
  {
    name: "Treinamento Comportamental",
    description:
      "Projetado para aprimorar as habilidades interpessoais e de comunicação dos seus funcionários. Nossos programas abordam temas como resolução de conflitos, empatia, trabalho em equipe e liderança.",
    icon: CogIcon,
    content:
      "Investir no Treinamento Comportamental é investir no desenvolvimento humano. Nossos programas são cuidadosamente elaborados para aprimorar as habilidades essenciais dos seus colaboradores, promovendo um ambiente de trabalho mais saudável e produtivo.",
    link: "/services/treinamento-comportamental",
    imgAlt: "Treinamento",
    img: "/assets/images/treinamento-comportamental.jpg",
    display: true,
  },
  {
    name: "DESENVOLVIMENTO DE LIDERANÇAS",
    description:
      "Nosso programa de formação de líderes visa desenvolver estrategicamente os talentos da sua empresa, alinhando ciência e técnica na busca do melhor desenvolvimento profissional para os colaboradores.",
    icon: StarIcon,
    content:
      "Nosso programa de formação de líderes visa desenvolver estrategicamente os talentos da sua empresa, alinhando ciência e técnica na busca do melhor desenvolvimento profissional para os colaboradores.",
    link: "/services/desenvolvimento-de-liderancas",
    imgAlt: "DESENVOLVIMENTO",
    img: "/assets/images/desenvolvimento-de-liderancas.jpg",
    display: true,
  },
  {
    name: "ORIENTAÇÃO PROFISSIONAL E DE CARREIRA",
    description:
      "Oferecemos orientação profissional personalizada para indivíduos em busca de clareza em suas carreiras.",
    icon: UserGroupIcon,
    content:
      "A orientação profissional auxilia diretamente no plano de carreira, cargos e salários. Caso a empresa ainda não disponha de um planejamento salarial, a CGRH está apta a desenvolver o PCCS, seguindo todas as etapas e processos técnicos envolvidos. Com expertise de profissionais capacitados e mais de 15 anos na área de orientação de carreira, orientação profissional e PCCS, desenvolvemos um processo de estudo do perfil psicológico e das habilidades e competências necessárias à ocupação do cargo, transição ou crescimento ne carreira.",
    link: "/services/orientacao-profissional-carreira",
    imgAlt: "ORIENTAÇÃO",
    img: "/assets/images/orientaca-de-carreira.jpg",
    display: true,
  },
  {
    name: "Recrutamento e seleção de pessoas",
    description:
      "Encontre os melhores talentos para sua empresa com nosso serviço de recrutamento e seleção. Utilizamos ferramentas avançadas, incluindo entrevistas, dinâmicas e testes.",
    content:
      "Atualmente, os processos de recrutamento e seleção de pessoas privilegiam o uso de ferramentas virtuais de captação e testagem. Estamos equipados para aplicação de testes, entrevistas, aplicação de dinâmicas e outros processos de forma virtual e/ou presencial, sempre garantindo os melhores resultados para a sua empresa. Nosso pessoal atua na captação e seleção de pessoas desde 2002 nos estados de Pernambuco, Paraíba, Rio Grande do Norte, Piauí e Maranhão. Conte com a nossa expertise em captação, seleção e contratação de pessoal.",
    icon: UserGroupIcon,
    imgAlt: "Recrutamento",
    img: "/assets/images/recrutamento-e-selecao.jpg",
    link: "/services/recrutamento",
    display: false,
  },
  {
    name: "Avaliação de desempenho",
    description:
      "Avalie o desempenho individual e coletivo de sua equipe com nossos programas especializados. Utilizamos ferramentas tradicionais e modernas para garantir análises precisas.",
    icon: UserGroupIcon,
    content:
      "Nossos programas de avaliação de desempenho e competências garantem uma análise acurada da produtividade dos colaboradores e da empresa como um todo. Esses programas possibilitam acompanhamento em ciclos curtos do desempenho individual e coletivo. Dispomos de ferramentas de avaliação de desempenho tradicionais de fácil manejo e de ferramentas ultramodernas para avaliação online em casos que se fizerem necessários. Os resultados das avaliações são fontes seguras para o planejamento e implantação de outros processos importantíssimos para a empresa como os programas de treinamento e desenvolvimento de pessoal. Podem ainda fornecer critérios para programas de remuneração, bonificações, premiações, promoções e transferências, além de propiciarem um acompanhamento do perfil individual do colaborador.",
    link: "/services/avaliacao-de-desempenho",
    imgAlt: "Avaliação",
    img: "/assets/images/avaliacao-de-desempenho.jpg",
    display: false,
  },
  {
    name: "PROGRAMAS DE SAÚDE MENTAL",
    description:
      "Promova o bem-estar psicológico em sua organização. Diagnosticamos fatores associados à perda de qualidade de vida no trabalho e oferecemos intervenções personalizadas.",
    icon: UserGroupIcon,
    content:
      "Nos dias atuais, o adoecimento psíquico dos colaboradores é cada vez mais frequente. Pessoas adoecidas, ansiosas, depressivas ou mesmo desmotivadas estão relacionadas com baixa produtividade e maiores índices de acidentes de trabalho nas organizações. Nossos programas de bem estar psicológico preveem a aplicação de diagnósticos de saúde mental para detecção dos principais fatores associados a perda da qualidade de vida no trabalho. As intervenções são feitas de forma individual e em grupo, proporcionando um clima de motivação e confiança nos objetivos da organização e adesão aos seus valores.",
    link: "/services/programas-de-saude-mental",
    imgAlt: "PROGRAMAS",
    img: "/assets/images/saude-mental.jpg",
    display: false,
  },
  {
    name: "TREINAMENTO E DESENVOLVIMENTO DOS COLABORADORES",
    description:
      "Invista no crescimento profissional de sua equipe com nossos programas de treinamento. Desde treinamento técnico até desenvolvimento comportamental.",
    icon: UserGroupIcon,
    content:
      "Nossa empresa fornece diversas possibilidades de treinamento que vão do treinamento técnico até a preparação comportamental. Dispomos também de programas de desenvolvimento profissional que envolvem o planejamento para a mudança organizacional, transferências, promoções e preparação para outplacements. Trabalhamos com diagnósticos técnicos e científicos no levantamento das necessidades de treinamento, considerando os objetivos da organização como um todo, bem como a sua missão, visão e planejamento estratégico de longo prazo.",
    link: "/services/treinamento-e-desenvolvimento",
    imgAlt: "TREINAMENTO",
    img: "/assets/images/treinamento-colaboradores.jpg",
    display: false,
  },
  {
    name: "AVALIAÇÃO PSICOLÓGICA",
    description:
      "Garanta a adequação de perfis psicológicos em situações que demandem segurança e confidencialidade.",
    icon: UserGroupIcon,
    content:
      "A avaliação psicológica torna-se necessária nas situações em que seja necessário um grau maior de segurança e/ou confidencialidade, identificando corretamente os perfis psicológicos adequados a cada caso. Ainda conduzimos avaliação de perfil profissional e de equipes de trabalho com profissionais qualificados com mais de 20 anos de experiência no ramo da avaliação psicológica nas organizações. Todo o trabalho psicotécnico é conduzido por psicólogos devidamente registrados em seus conselhos de classe com instrumentos e ferramentas reconhecidas pelo Conselho Federal de Psicologia.",
    link: "/services/avaliacao-psicologica",
    imgAlt: "AVALIAÇÃO",
    img: "/assets/images/avaliacao-psicologica.jpg",
    display: false,
  },
  {
    name: "PESQUISA DE CLIMA ORGANIZACIONAL",
    description:
      "Obtenha insights sobre o moral da sua organização com nossa pesquisa de clima. Identificamos pontos fortes e fracos, promovendo ações estratégicas para criar um ambiente sinérgico e motivado.",
    icon: UserGroupIcon,
    content:
      "As pesquisas de clima organizacional têm a finalidade de levantar dados que revelem o moral da organização. Um clima organizacional positivo alavanca resultados e proporciona excelência nas relações com clientes e colaboradores. Os dados levantados são tratados e discutidos com a direção e, eventualmente, com as gerências de alto nível no sentido de determinar os fatores de ataque e desenvolvimento de um plano de ação na intervenção organizacional para alavancar os pontos fracos detectados. A participação de todos os colaboradores se torna essencial para a instalação de um clima sinérgico de participação e motivação rumo aos objetivos da empresa.",
    link: "/services/pesquisa-de-clima-organizacional",
    imgAlt: "PESQUISA",
    img: "/assets/images/clima-organizacional.jpg",
    display: false,
  },
  {
    name: "PALESTRAS MOTIVACIONAIS",
    description:
      "Inspire sua equipe com nossas palestras dinâmicas e participativas. Abordamos temas relevantes utilizando ferramentas modernas de gestão de pessoas para estimular a motivação e o engajamento.",
    icon: UserGroupIcon,
    content:
      "As palestras motivacionais têm a finalidade de despertar reflexões nos colaboradores, notadamente quando são dinâmicas e participativas. Nossas modalidades de palestras englobam ferramentas eletrônicas, digitais e de gestão de pessoas capazes de estimular a sua equipe de trabalho, seguindo as sinalizações fornecidas pela empresa. Podemos desenvolver virtualmente qualquer tema de interesse da sua organização com um mínimo de investimento e bom retorno motivacional para a sua empresa.",
    link: "/services/palestras-motivacionais",
    imgAlt: "PALESTRAS",
    img: "/assets/images/palestras-motivacionais.jpg",
    display: false,
  },
  {
    name: "CLIENTE OCULTO",
    description:
      "Obtenha uma visão imparcial da experiência do cliente com nosso programa de cliente oculto. Nossos observadores fornecem feedback confidencial sobre o atendimento e a performance do serviço ou produto.",
    icon: UserGroupIcon,
    content:
      "A CGRH possui pessoal treinado para programas de cliente oculto. Esses programas visam inserir um observador para experimentar o serviço ou produto desejado, recolhendo as impressões previamente combinadas sobre o atendimento ou outro fator desejado. Esses programas são totalmente seguros e confidenciais, uma vez que seus resultados somente podem ser acessados pelas altas cúpulas administrativas ou gerenciais que os solicitaram. De posse dos dados das observações, medidas podem ser tomadas a fim de melhorar o atendimento ou a performance do serviço ou produto desejado.",
    link: "/services/cliente-oculto",
    imgAlt: "CLIENTE",
    img: "/assets/images/cliente-oculto.jpg",
    display: false,
  },
];
