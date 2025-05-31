import { InlineCode } from "@/once-ui/components";

// Informações Pessoais (Atualizadas com base no CV e conversa)
const person = {
  firstName: "Lucas",
  lastName: "Santos Olivato", // Nome completo atualizado
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Analista de Qualidade (QA)", // Cargo atualizado
  avatar: "/images/avatar.jpg", // Manter avatar padrão
  location: "America/Sao_Paulo", // Localização atualizada
  languages: ["Português Nativo", "Inglês (Técnico)"], // Idiomas atualizados
};

const newsletter = {
  display: false, // Mantido como false
};

// Redes Sociais e Contatos (Atualizados - GitHub removido, mantendo nomes internos)
const social = [
  // GitHub removido conforme solicitado
  {
    name: "LinkedIn", // Nome interno mantido
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lucas-olivato/",
  },
  {
    name: "Email", // Nome interno mantido
    icon: "email",
    link: "mailto:lucasolivato@gmail.com",
  },
];

// Página Home (Atualizada)
const home = {
  label: "Home", // Label mantido
  title: `Portfólio de ${person.name}`, // Título atualizado
  description: `Portfólio profissional destacando experiência como ${person.role}. Conheça meus projetos, habilidades e trajetória na área de QA.`, // Descrição atualizada
  headline: <>Analista de Qualidade | Automação de Testes | SAP QA</>, // Headline atualizada
  subline: (
    <>
      Olá! Sou Lucas, Analista de QA dedicado à garantia da qualidade de software, com foco em automação de testes e experiência em ambientes SAP.
      <br /> Explore meu portfólio para conhecer meus projetos e habilidades.
    </>
  ), // Subline atualizado
};

// Página Sobre (Atualizada com base no CV e conversa)
const about = {
  label: "Sobre", // Label mantido
  title: "Sobre Mim", // Título atualizado
  description: `Conheça ${person.name}, ${person.role} apaixonado por tecnologia e qualidade.`, // Descrição atualizada
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
  },
  intro: {
    display: true,
    title: "Introdução", // Título mantido
    description: (
      <>
        Sou um profissional de tecnologia dedicado e proativo, com sólida formação em Gestão de TI e Desenvolvimento de Sistemas, e experiência prática como Analista de Qualidade.
        Minha paixão é garantir a robustez e a eficiência de softwares através de testes manuais e automatizados, aplicando boas práticas como TDD/BDD em ambientes ágeis.
        <br /> Tenho um forte compromisso em aprimorar constantemente minhas habilidades, buscando novas tecnologias e metodologias que agreguem valor. Sou comunicativo, valorizo o trabalho em equipe e tenho facilidade para aprender e resolver problemas.
      </>
    ), // Descrição atualizada
  },
  work: {
    display: true,
    title: "Experiência Profissional", // Título mantido
    experiences: [
      {
        company: "Tecnologia Única",
        timeframe: "2023 - 2025 (1 ano e 3 meses)",
        role: "Analista de Garantia de Qualidade JR",
        achievements: [
          <>Automação de testes funcionais e de API (Robot Framework, Selenium, Postman, Python) para sistemas críticos, validação de regras de negócio e fluxos de pedidos.</>,
          <>Execução e análise de testes de carga e performance para garantir escalabilidade e estabilidade das soluções.</>,
          <>Experiência em garantia de qualidade para SAP, incluindo análise de dados, automação de validações com SQL e colaboração na implementação de regras fiscais e integrações.</>,
          <>Aplicação de práticas ágeis (TDD/BDD) e colaboração em pipelines de CI/CD.</>,
          <>Elaboração de casos de teste, planos de teste e documentação técnica.</>,
          <>**Conquista:** Implementei automação de criação de pedidos via UI com Robot Framework para superar a limitação de acesso à API e a lentidão do processo manual. O script gerou com sucesso aproximadamente 600 pedidos ao longo de 10 horas de execução contínua, viabilizando testes de carga essenciais para um novo microsserviço de logística e otimizando significativamente o tempo da equipe.</> // Conquista adicionada aqui
        ],
        images: [],
      },
      {
        company: "Zella Sistemas",
        timeframe: "2019 - 2020 (1 ano)",
        role: "Assistente Técnico Eletrônico",
        achievements: [
          <>Suporte técnico e manutenção de sistemas e equipamentos eletrônicos.</>,
        ],
        images: [],
      },
      {
        company: "L&L Tecnologia",
        timeframe: "2010 - 2018",
        role: "Instalador e Técnico de Sistemas de Energia Solar",
        achievements: [
          <>Planejamento de projetos, instalação e manutenção de sistemas de energia solar.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação Acadêmica", // Título atualizado
    institutions: [
      {
        name: "Etec Comendador João Rays",
        description: <>Técnico em Desenvolvimento de Sistemas - 2024</>,
      },
      {
        name: "Fatec Jaú",
        description: <>Bacharelado em Gestão de Tecnologia da Informação - 2022</>,
      },
      {
        name: "Etec Comendador João Rays",
        description: <>Técnico em Informática – 2013</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas", // Título mantido
    skills: [
      {
        title: "Automação de Testes",
        description: <>Robot Framework, Selenium WebDriver, Cypress, Postman, Python (Test Scripts), Flask.</>,
        images: [],
      },
      {
        title: "Tipos de Teste",
        description: <>Manuais, Funcionais, API, Performance (Carga/Stress), Regressão, BDD/TDD.</>,
        images: [],
      },
      {
        title: "Tecnologias",
        description: <>SQL (SQL Server, SAP HANA), SAP B1, Git, CI/CD (Conceitos), Docker/K8s (Conceitos), AWS/GCP/Azure (Conceitos).</>,
        images: [],
      },
      {
        title: "Linguagens",
        description: <>Python, JavaScript, HTML/CSS.</>,
        images: [],
      },
      {
        title: "Metodologias Ágeis",
        description: <>Scrum, Kanban.</>,
        images: [],
      },
    ],
  },
};

// Página Contato (Mantendo nome interno 'blog', mas atualizando conteúdo visível)
const blog = {
  label: "Contato", // Label atualizado para Contato
  title: "Entre em Contato", // Título atualizado
  description: `Fale com ${person.name}. Envie uma mensagem ou conecte-se através dos canais abaixo. Telefone: 14-991993618`, // Descrição atualizada + Telefone
};

// Página Projetos (Mantendo nome interno 'work', mas atualizando conteúdo visível e imagens)
const work = {
  label: "Projetos", // Label atualizado
  title: "Meus Projetos", // Título atualizado
  description: `Conheça alguns projetos desenvolvidos por ${person.name}.`, // Descrição atualizada
  projects: [
    {
      name: "PlantãoFarma App (TCC)",
      description: "Co-desenvolvi um aplicativo mobile em React Native, com backend em Node.js e banco de dados MongoDB, para localizar farmácias de plantão próximas. O aplicativo simplifica a busca e integra-se com apps de mapa (Google Maps/Waze) para navegação direta, solucionando uma necessidade local e demonstrando habilidades em desenvolvimento full-stack mobile.", // Descrição atualizada do TCC
      link: "https://github.com/Heloisa-Moraes/PlantaoFarma", // Link ATUALIZADO para o GitHub
      image: "/images/projects/plantaofarma_info.jpg", // Imagem ATUALIZADA
    },
    {
      name: "Automação de Pedidos (Tecnologia Única)",
      description: "Script de automação (Robot Framework) para criação de pedidos via UI, gerando ~600 pedidos em 10h para viabilizar testes de carga de um novo microsserviço de logística e otimizar o tempo da equipe.", // Descrição da conquista do CV
      link: "#", // Sem link aplicável
      image: "/images/projects/plantaofarma_icon.png", // Imagem ATUALIZADA (usando o ícone como placeholder)
    },
    // Adicionar outros projetos se houver
  ],
};

// Página Galeria (Mantida como no original para evitar alterações internas)
const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "portrait", // Corrigido para portrait conforme imagem
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "portrait", // Corrigido para portrait conforme imagem
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "portrait", // Corrigido para portrait conforme imagem
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "portrait", // Corrigido para portrait conforme imagem
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "portrait", // Corrigido para portrait conforme imagem
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "landscape", // Corrigido para landscape conforme imagem
    },
  ],
};

// Exportações mantidas como no original
export { person, social, newsletter, home, about, blog, work, gallery };

