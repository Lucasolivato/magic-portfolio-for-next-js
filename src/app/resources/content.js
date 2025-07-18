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

// Newsletter object updated to include title and description
const newsletter = {
  display: false, // Mantido como false
  title: "Assine a Newsletter", // Added placeholder title
  description: "Receba atualizações sobre meus projetos e artigos.", // Added placeholder description
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
      Olá, sou Lucas — Analista de Qualidade de Software.<br />
      Atuo garantindo a excelência de produtos digitais por meio de testes manuais e automatizados, sempre com foco na entrega de valor, estabilidade e experiência do usuário.<br />
      Tenho experiência em ambientes diversos, como SAP e APIs, e estou em constante evolução técnica e profissional.<br /><br />
      Fique à vontade para explorar meus projetos e conhecer mais sobre minha trajetória!
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
        Profissional de Qualidade de Software com sólida atuação em testes manuais e automação, aplicando metodologias ágeis em times multidisciplinares.<br />
        Atuo com foco em qualidade desde o planejamento até a entrega, garantindo eficiência e confiabilidade nos sistemas.<br />
        Possuo conhecimentos consolidados em ferramentas como Postman, Robot Framework, Cypress e práticas de CI/CD.<br />
        Tenho facilidade em transitar entre áreas técnicas e de negócio, sempre buscando evoluir soluções e entregar valor real ao produto.
      </>
    ), // Descrição atualizada
  },
  work: {
    display: true,
    title: "Experiência Profissional", // Título mantido
    experiences: [
      {
        company: "NuageIT",
        timeframe: "2025 - Atual",
        role: "Analista de Qualidade de Software",
        achievements: [
          <>Implementação de estratégias de teste para aplicações web e APIs, utilizando Cypress, Playwright e Postman para automação de testes.</>,
          <>Desenvolvimento de frameworks de teste escaláveis com integração contínua via GitHub Actions e Jenkins, garantindo qualidade em ambientes de entrega contínua.</>,
          <>Elaboração de GMUDs (Guias de Mudança) e Handovers detalhados para implantações em produção, garantindo transições seguras e rastreabilidade das alterações.</>,
          <>Colaboração direta com desenvolvedores e product owners para implementar práticas de Shift-Left Testing e BDD, melhorando a qualidade desde as fases iniciais do desenvolvimento.</>,
          <>Criação e manutenção de documentação técnica de testes e gerenciamento de casos de teste no ClickUp, centralizando todo o fluxo de trabalho da equipe.</>,
          <>Participação ativa em cerimônias ágeis e reuniões de planejamento, contribuindo com perspectivas de qualidade para decisões de produto.</>,
        ],
        images: [],
      },
      {
        company: "Tecnologia Única",
        timeframe: "2023 - 2025 (1 ano e 6 meses)",
        role: "Analista de Garantia de Qualidade JR",
        achievements: [
          <>Automação de testes funcionais e de API (Robot Framework, Selenium, Postman, Python) para sistemas críticos, validação de regras de negócio e fluxos de pedidos.</>,
          <>Execução e análise de testes de carga e performance para garantir escalabilidade e estabilidade das soluções.</>,
          <>Experiência em garantia de qualidade para SAP, incluindo análise de dados, automação de validações com SQL e colaboração na implementação de regras fiscais e integrações.</>,
          <>Aplicação de práticas ágeis (TDD/BDD) e colaboração em pipelines de CI/CD.</>,
          <>Elaboração de casos de teste, planos de teste e documentação técnica.</>,
          <>**Conquista:** Implementei automação de criação de pedidos via UI com Robot Framework para superar a limitação de acesso à API e a lentidão do processo manual. O script gerou com sucesso aproximadamente 600 pedidos ao longo de 10 horas de execução contínua, viabilizando testes de carga essenciais para um novo microsserviço de logística e otimizando significativamente o tempo da equipe.</>
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
        description: <>Robot Framework, Selenium WebDriver, Cypress, Playwright, Postman/Newman, Python (PyTest), JUnit, TestNG, RestAssured.</>,
        images: [],
      },
      {
        title: "Tipos de Teste",
        description: <>Funcionais, Integração, API, UI, Performance (Carga/Stress), Regressão, Exploração, Segurança Básica, Usabilidade, BDD/TDD.</>,
        images: [],
      },
      {
        title: "Ferramentas e Plataformas",
        description: <>JIRA, Azure DevOps, ClickUp, Swagger, Grafana, Jenkins, GitHub Actions, SonarQube, Notion.</>,
        images: [],
      },
      {
        title: "Tecnologias",
        description: <>SQL (SQL Server, SAP HANA, MySQL), SAP B1, Git, CI/CD, Docker, AWS/GCP/Azure (Serviços Básicos), APIs REST/SOAP.</>,
        images: [],
      },
      {
        title: "Linguagens",
        description: <>Python, JavaScript, Java (Básico), HTML/CSS, SQL, Gherkin (Cucumber).</>,
        images: [],
      },
      {
        title: "Metodologias Ágeis",
        description: <>Scrum, Kanban, SAFe (Básico), DevOps, Shift-Left Testing.</>,
        images: [],
      },
      {
        title: "Habilidades Complementares",
        description: <>Documentação Técnica, GMUDs, Handovers, Relatórios de Teste, Comunicação com Stakeholders, Mentoria de Testes, Identificação e Relato de Bugs.</>,
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

