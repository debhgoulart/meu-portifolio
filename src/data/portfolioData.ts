import type {
  PersonalInfo,
  ExperienceItem,
  EducationItem,
  ExtracurricularItem,
  SkillCategory,
  ProjectItem,
} from '../types/portfolio'

export interface LocalizedContent {
  personalInfo: PersonalInfo
  experiences: ExperienceItem[]
  education: EducationItem
  extracurriculars: ExtracurricularItem[]
  skillCategories: SkillCategory[]
  projects: ProjectItem[]
  navLinks: { label: string; href: string; index: string }[]
  ui: {
    availableStatus: string
    heroCtaResume: string
    heroCtaProjects: string
    heroCtaContact: string
    copySuccess: string
    copyBtn: string
    openBtn: string
    viewGithub: string
    viewDemo: string
    projectView: string
    indexView: string
    allCategories: string
    techStackTag: string
    techStackTitle: string
    techStackSubtitle: string
    projectsTag: string
    projectsTitle: string
    projectsSubtitle: string
    aboutTag: string
    aboutTitle: string
    aboutSubtitle: string
    extracurricularTitle: string
    extracurricularSubtitle: string
    contactTag: string
    contactTitle: string
    contactSubtitle: string
    phoneLabel: string
    whatsappAction: string
    responseTime: string
    rightsReserved: string
  }
}

export const contentPT: LocalizedContent = {
  personalInfo: {
    name: 'Deborah Goulart',
    title: 'Desenvolvedora Full Stack',
    subtitle: 'Ênfase em arquitetura backend, ecossistema Java/Spring Boot e interfaces modernas reativas.',
    shortBio:
      'Estudante de Ciência da Computação na Universidade Veiga de Almeida (CR 8,9) e estagiária de desenvolvimento de software no CREA-RJ. Foco em arquitetura de microsserviços, modelagem de bancos de dados relacionais e sistemas corporativos robustos.',
    aboutParagraphs: [
      'Sou estudante de Ciência da Computação na Universidade Veiga de Almeida (CR 8,9) e atuo como estagiária de desenvolvimento de software no CREA-RJ, onde participo da construção, sustentação e modernização de ecossistemas corporativos de alta demanda.',
      'Minha principal dedicação está no desenvolvimento backend, arquitetura de APIs e bancos de dados relacionais. No meu dia a dia, trabalho com Java, Spring Boot, PostgreSQL, Oracle, modelagem relacional e conteinerização com Docker, além de construir interfaces reativas e intuitivas utilizando Vue.js e TypeScript.',
      'Tenho um perfil curioso, analítico e metódico. Valorizo código limpo, testes automatizados e segurança da informação — interesses que também aprofundo em projetos acadêmicos e grupos de pesquisa como o HackingU (cibersegurança) e o Redbone (robótica).',
    ],
    location: 'Rio de Janeiro, RJ — Brasil',
    phone: '(21) 96599-1791',
    coordinates: "22°54'S 43°12'W",
    status: 'Disponível para novos desafios técnicos',
    social: {
      github: 'https://github.com/debhgoulart',
      linkedin: 'https://www.linkedin.com/in/deborahgoulart/',
      email: 'debh.goulart@gmail.com',
    },
  },
  experiences: [
    {
      id: 'crea-rj',
      role: 'Estagiária de Desenvolvimento de Software',
      company: 'CREA-RJ (Conselho Regional de Engenharia e Agronomia do RJ)',
      location: 'Rio de Janeiro, RJ',
      period: 'Julho / 2024 — Julho / 2026',
      isCurrent: true,
      description:
        'Atuação direta no ciclo de vida de desenvolvimento e sustentação de sistemas corporativos e institucionais que atendem a milhares de profissionais e empresas.',
      achievements: [
        'Desenvolvimento e manutenção de APIs REST robustas utilizando Java e o ecossistema Spring Boot.',
        'Desenvolvimento de interfaces modernas, dinâmicas e responsivas utilizando Vue.js e JavaScript.',
        'Modelagem de banco de dados relacional e otimização de consultas SQL complexas em PostgreSQL e Oracle.',
        'Atuação na migração e modernização de ambientes legados Java e servidores de aplicação WildFly.',
        'Prototipação e desenvolvimento de MVP full stack para validação de novas demandas corporativas.',
        'Implementação de segurança e controle de acesso com JWT (JSON Web Tokens) e fluxo de Refresh Token.',
        'Desenvolvimento de testes unitários com JUnit e Mockito para assegurar a confiabilidade das regras de negócio.',
        'Criação de contêineres Docker, acompanhamento de pipelines CI/CD no Jenkins e monitoramento com Grafana e Graylog.',
      ],
      skills: [
        'Java',
        'Spring Boot',
        'Vue.js',
        'PostgreSQL',
        'Oracle',
        'Docker',
        'Jenkins',
        'JWT',
        'Mockito',
        'Grafana',
        'Graylog',
        'WildFly',
      ],
    },
  ],
  education: {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade Veiga de Almeida (UVA)',
    period: 'Fevereiro / 2023 — Dezembro / 2026',
    grade: 'CR 8,9 / 10',
    status: 'Em andamento',
    description:
      'Formação sólida com ênfase em estruturas de dados, algoritmos, teoria da computação, engenharia de software, redes de computadores e sistemas distribuídos.',
  },
  extracurriculars: [
    {
      id: 'redbone',
      name: 'Redbone',
      badge: 'Robótica Universitária',
      institution: 'Universidade Veiga de Almeida (UVA)',
      period: '2023 — Presente',
      role: 'Desenvolvimento & Lógica de Controle',
      description:
        'Equipe de robótica da UVA com desenvolvimento prático de hardware e software integrados, lógica de controle, automação de mecanismos e preparação de protótipos competitivos para torneios de engenharia.',
      topics: ['Automação', 'Lógica de Controle', 'Trabalho em Equipe', 'Resolução de Problemas Práticos'],
      images: [
        '/images/extracurricular/redbone-1.jpg',
        '/images/extracurricular/redbone-2.jpg',
      ],
    },
    {
      id: 'hackingu',
      name: 'HackingU',
      badge: 'Cibersegurança & Pesquisa',
      institution: 'Universidade Veiga de Almeida (UVA)',
      period: '2023 — Presente',
      role: 'Pesquisadora & Membro de Segurança',
      description:
        'Grupo universitário de pesquisa, estudos avançados e práticas voltado à segurança da informação, análise de vulnerabilidades, conceitos de segurança ofensiva/defensiva e segurança em desenvolvimento de software (AppSec).',
      topics: ['AppSec', 'Segurança de APIs', 'Autenticação & Criptografia', 'Auditoria de Vulnerabilidades'],
      images: [
        '/images/extracurricular/hackingu-1.jpg',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Back-end',
      description: 'Arquitetura em camadas, microsserviços robustos e APIs RESTful escaláveis.',
      items: [
        { name: 'Java (17+)', highlight: true },
        { name: 'Spring Boot', highlight: true },
        { name: 'Node.js' },
        { name: 'APIs RESTful', highlight: true },
        { name: 'JWT & Refresh Token', highlight: true },
        { name: 'Maven' },
      ],
    },
    {
      category: 'Front-end',
      description: 'Interfaces reativas, componentização limpa, foco em usabilidade e performance.',
      items: [
        { name: 'Vue.js 3', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript (ES6+)' },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Quasar Framework' },
        { name: 'Vite' },
      ],
    },
    {
      category: 'Bancos de Dados',
      description: 'Modelagem relacional normalizada, integridade referencial e consultas SQL otimizadas.',
      items: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'Oracle Database', highlight: true },
        { name: 'MySQL' },
        { name: 'SQL (DDL / DML)', highlight: true },
        { name: 'Modelagem Relacional' },
      ],
    },
    {
      category: 'DevOps & Ferramentas',
      description: 'Ambientes conteinerizados, integração contínua e observabilidade em produção.',
      items: [
        { name: 'Docker & Compose', highlight: true },
        { name: 'Jenkins (CI/CD)', highlight: true },
        { name: 'Git & GitHub', highlight: true },
        { name: 'Linux' },
        { name: 'Grafana' },
        { name: 'Graylog' },
        { name: 'WildFly' },
      ],
    },
    {
      category: 'Testes & Qualidade',
      description: 'Validação de regras de negócio, suítes de testes unitários e boas práticas.',
      items: [
        { name: 'JUnit', highlight: true },
        { name: 'Mockito', highlight: true },
        { name: 'Clean Code', highlight: true },
        { name: 'Refatoração' },
      ],
    },
  ],
  projects: [
    {
      id: 'mvp-corporativo',
      index: '01',
      title: 'Sistema Corporativo & Gestão de Terceirizados',
      category: 'Full Stack',
      year: '2024 — 2026',
      date: '2024 — 2026',
      image: '/images/projects/project-demo.jpg',
      role: 'Engenharia Full Stack',
      description:
        'Solução corporativa com backend em Java Spring Boot e frontend dinâmico em Vue.js, integrando autenticação segura via JWT com rotação de refresh tokens, controle de perfis de acesso (RBAC) e persistência relacional normalizada.',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'JWT', 'Docker'],
      architecture: [
        'Arquitetura em Camadas (Controller, Service, Repository)',
        'Autenticação Stateless com JWT e Refresh Token',
        'Modelagem Relacional Normalizada em PostgreSQL / Oracle',
        'Conteinerização Completa com Docker Compose',
      ],
      metrics: 'MVP Corporativo para validação institucional',
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Corporativo // MVP',
    },
    {
      id: 'api-gestao-servicos',
      index: '02',
      title: 'API RESTful de Gestão de Serviços & Microsserviço',
      category: 'Backend',
      year: '2024',
      date: '2024',
      image: '/images/projects/project-demo.jpg',
      role: 'Backend Engineering',
      description:
        'Microsserviço de gestão com regras de negócio críticas, cobertura de testes unitários com Mockito e JUnit, documentação interativa OpenAPI/Swagger e conteinerização completa para deployment com Docker.',
      technologies: ['Java 17+', 'Spring Boot', 'JUnit', 'Mockito', 'Docker', 'PostgreSQL'],
      architecture: [
        'Suítes de Testes Unitários com JUnit e Mockito',
        'Documentação OpenAPI / Swagger para contratos de API',
        'Pronto para Pipeline CI/CD com Jenkins',
        'Observabilidade e Auditoria de Logs',
      ],
      metrics: 'Cobertura de testes para regras de negócio',
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Backend Core',
    },
    {
      id: 'portfolio-pessoal',
      index: '03',
      title: 'Portfólio Pessoal & Vitrine Criativa',
      category: 'Frontend',
      year: '2026',
      date: '2026',
      image: '/images/projects/project-demo.jpg',
      role: 'UI/UX & Creative Engineering',
      description:
        'Portfólio com estética editorial minimalista, apresentando gradiente 3D WebGL (NEAT) reativo no topo, grid de projetos interativo com efeito de foco elástico no hover, suporte a múltiplos idiomas e transições suaves.',
      technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'WebGL (NEAT)', 'Vite'],
      architecture: [
        'Renderização WebGL com Interpolação Lerp Suave',
        'Grid Flexível com expansão elástica de cards no hover',
        'Card Único com carrossel dinâmico para extracurriculares',
        'Alternador de Idioma (PT / EN) e Build Edge Otimizado',
      ],
      metrics: 'Build estático otimizado para Vercel Edge',
      githubUrl: 'https://github.com/debhgoulart/meu-portifolio',
      liveUrl: 'https://github.com/debhgoulart/meu-portifolio',
      featured: true,
      statusBadge: 'Creative Dev',
    },
    {
      id: 'migracao-infra-docker',
      index: '04',
      title: 'Modernização de Ambientes & Docker',
      category: 'DevOps & Backend',
      year: '2024',
      date: '2024',
      image: '/images/projects/project-demo.jpg',
      role: 'DevOps & Backend',
      description:
        'Migração e atualização de servidores legados WildFly e Java 8 para Java 11, configuração de contêineres Docker para serviços corporativos e observabilidade com Graylog e Grafana.',
      technologies: ['Java 11', 'WildFly', 'Docker', 'Linux', 'Graylog', 'Grafana'],
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
    },
    {
      id: 'sistema-gestao-dados',
      index: '05',
      title: 'Modelagem Relacional & Otimização SQL',
      category: 'Banco de Dados',
      year: '2024 — 2025',
      date: '2024 — 2025',
      image: '/images/projects/project-demo.jpg',
      role: 'Engenharia de Dados & SQL',
      description:
        'Modelagem de dados normalizada em PostgreSQL e Oracle Database, criação e manutenção de rotinas DDL/DML, otimização de consultas SQL complexas e relatórios analíticos de produção.',
      technologies: ['PostgreSQL', 'Oracle', 'SQL', 'Modelagem Relacional', 'DBeaver'],
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
    },
  ],
  navLinks: [
    { label: 'início', href: '#hero', index: '01' },
    { label: 'habilidades', href: '#habilidades', index: '02' },
    { label: 'projetos', href: '#projetos', index: '03' },
    { label: 'atividades', href: '#extracurriculares', index: '04' },
    { label: 'contato', href: '#contato', index: '05' },
  ],
  ui: {
    availableStatus: 'DISPONÍVEL // ENGENHARIA DE SOFTWARE',
    heroCtaResume: 'BAIXAR CURRÍCULO (PDF)',
    heroCtaProjects: 'VER PROJETOS',
    heroCtaContact: 'ENTRAR EM CONTATO',
    copySuccess: 'COPIADO!',
    copyBtn: 'COPIAR',
    openBtn: 'ABRIR',
    viewGithub: 'GITHUB',
    viewDemo: 'DEMO',
    projectView: 'PROJECT VIEW',
    indexView: 'INDEX VIEW',
    allCategories: 'Todos',
    techStackTag: '02 // TECH STACK',
    techStackTitle: 'Tecnologias & Habilidades',
    techStackSubtitle: 'Competências técnicas organizadas por camadas de arquitetura e engenharia de software.',
    projectsTag: '03 // PROJETOS EM DESTAQUE',
    projectsTitle: 'Vitrine de Projetos',
    projectsSubtitle: 'Soluções desenvolvidas na prática, com ênfase em arquitetura escalável, regras de negócio e usabilidade.',
    aboutTag: '04 // SOBRE MIM',
    aboutTitle: 'Mentalidade Analítica & Vivência Prática',
    aboutSubtitle: 'Curiosidade investigativa, aprendizado contínuo e dedicação à construção de soluções bem estruturadas.',
    extracurricularTitle: 'Experiências Adicionais & Pesquisa',
    extracurricularSubtitle: 'Atuação prática na equipe de robótica e em grupo acadêmico de cibersegurança.',
    contactTag: '05 // CONTATO',
    contactTitle: 'Iniciar Conexão',
    contactSubtitle: 'Disponível para novas oportunidades profissionais, desafios de engenharia de software e projetos corporativos.',
    phoneLabel: 'Telefone / WhatsApp',
    whatsappAction: 'CHAMAR NO WHATSAPP',
    responseTime: 'RESPOSTA EM MENOS DE 24 HORAS',
    rightsReserved: 'TODOS OS DIREITOS RESERVADOS',
  },
}

export const contentEN: LocalizedContent = {
  personalInfo: {
    name: 'Deborah Goulart',
    title: 'Full Stack Developer',
    subtitle: 'Emphasis on backend architecture, Java/Spring Boot ecosystem, and modern reactive interfaces.',
    shortBio:
      'Computer Science undergraduate at Universidade Veiga de Almeida (GPA 8.9/10) and software engineering intern at CREA-RJ. Focused on microservice architecture, relational database modeling, and enterprise systems.',
    aboutParagraphs: [
      'I am a Computer Science student at Universidade Veiga de Almeida (GPA 8.9/10) and work as a software development intern at CREA-RJ, where I participate in building, maintaining, and modernizing enterprise software ecosystems.',
      'My primary passion lies in backend development, API architecture, and relational databases. In my daily routine, I work with Java, Spring Boot, PostgreSQL, Oracle, relational modeling, and containerization with Docker, while also building reactive and intuitive interfaces using Vue.js and TypeScript.',
      'I have a curious, analytical, and methodical approach. I value clean code, automated testing, and software security — interests that I also develop in academic research groups like HackingU (cybersecurity) and Redbone (robotics).',
    ],
    location: 'Rio de Janeiro, RJ — Brazil',
    phone: '+55 (21) 96599-1791',
    coordinates: "22°54'S 43°12'W",
    status: 'Available for technical opportunities',
    social: {
      github: 'https://github.com/debhgoulart',
      linkedin: 'https://www.linkedin.com/in/deborahgoulart/',
      email: 'debh.goulart@gmail.com',
    },
  },
  experiences: [
    {
      id: 'crea-rj',
      role: 'Software Development Intern',
      company: 'CREA-RJ (Regional Council of Engineering & Agronomy)',
      location: 'Rio de Janeiro, Brazil',
      period: 'July / 2024 — July / 2026',
      isCurrent: true,
      description:
        'Direct involvement in the lifecycle of developing, scaling, and maintaining enterprise and institutional systems serving thousands of engineers and corporations.',
      achievements: [
        'Development and maintenance of resilient RESTful APIs using Java and the Spring Boot ecosystem.',
        'Development of dynamic, modern, and responsive user interfaces using Vue.js and JavaScript.',
        'Relational database modeling and optimization of complex SQL queries in PostgreSQL and Oracle.',
        'Active participation in legacy Java environment migrations and WildFly application server upgrades.',
        'Prototyping and engineering full-stack MVPs to validate new enterprise requirements.',
        'Implementation of security and role-based access control with JWT and Refresh Token flows.',
        'Unit testing with JUnit and Mockito ensuring business rule reliability and code quality.',
        'Docker containerization, CI/CD pipeline monitoring with Jenkins, and observability with Grafana and Graylog.',
      ],
      skills: [
        'Java',
        'Spring Boot',
        'Vue.js',
        'PostgreSQL',
        'Oracle',
        'Docker',
        'Jenkins',
        'JWT',
        'Mockito',
        'Grafana',
        'Graylog',
        'WildFly',
      ],
    },
  ],
  education: {
    degree: 'B.S. in Computer Science',
    institution: 'Universidade Veiga de Almeida (UVA)',
    period: 'February / 2023 — December / 2026',
    grade: 'GPA 8.9 / 10',
    status: 'In progress',
    description:
      'Rigorous curriculum focusing on data structures, algorithms, computer theory, software engineering, networking, and distributed systems.',
  },
  extracurriculars: [
    {
      id: 'redbone',
      name: 'Redbone',
      badge: 'University Robotics',
      institution: 'Universidade Veiga de Almeida (UVA)',
      period: '2023 — Present',
      role: 'Software & Control Systems',
      description:
        'UVA robotics engineering team developing integrated hardware/software solutions, control logic, automation mechanisms, and competing in national engineering challenges.',
      topics: ['Automation', 'Control Systems', 'Team Collaboration', 'Practical Problem Solving'],
      images: [
        '/images/extracurricular/redbone-1.jpg',
        '/images/extracurricular/redbone-2.jpg',
      ],
    },
    {
      id: 'hackingu',
      name: 'HackingU',
      badge: 'Cybersecurity & Research',
      institution: 'Universidade Veiga de Almeida (UVA)',
      period: '2023 — Present',
      role: 'Research & Security Member',
      description:
        'University research and study group focused on information security, vulnerability assessment, offensive/defensive security concepts, and secure software development (AppSec).',
      topics: ['AppSec', 'API Security', 'Auth & Cryptography', 'Vulnerability Assessment'],
      images: [
        '/images/extracurricular/hackingu-1.jpg',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Back-end',
      description: 'Layered architecture, resilient microservices, and scalable RESTful APIs.',
      items: [
        { name: 'Java (17+)', highlight: true },
        { name: 'Spring Boot', highlight: true },
        { name: 'Node.js' },
        { name: 'RESTful APIs', highlight: true },
        { name: 'JWT & Refresh Token', highlight: true },
        { name: 'Maven' },
      ],
    },
    {
      category: 'Front-end',
      description: 'Reactive interfaces, clean component structures, accessibility, and high performance.',
      items: [
        { name: 'Vue.js 3', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript (ES6+)' },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Quasar Framework' },
        { name: 'Vite' },
      ],
    },
    {
      category: 'Databases',
      description: 'Normalized relational data modeling, referential integrity, and tuned SQL queries.',
      items: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'Oracle Database', highlight: true },
        { name: 'MySQL' },
        { name: 'SQL (DDL / DML)', highlight: true },
        { name: 'Relational Modeling' },
      ],
    },
    {
      category: 'DevOps & Tools',
      description: 'Containerized environments, continuous delivery, and production observability.',
      items: [
        { name: 'Docker & Compose', highlight: true },
        { name: 'Jenkins (CI/CD)', highlight: true },
        { name: 'Git & GitHub', highlight: true },
        { name: 'Linux' },
        { name: 'Grafana' },
        { name: 'Graylog' },
        { name: 'WildFly' },
      ],
    },
    {
      category: 'Testing & Quality',
      description: 'Business rule verification, unit test suites, and clean code principles.',
      items: [
        { name: 'JUnit', highlight: true },
        { name: 'Mockito', highlight: true },
        { name: 'Clean Code', highlight: true },
        { name: 'Refactoring' },
      ],
    },
  ],
  projects: [
    {
      id: 'mvp-corporativo',
      index: '01',
      title: 'Enterprise Management System & RESTful API',
      category: 'Full Stack',
      year: '2024 — 2026',
      date: '2024 — 2026',
      image: '/images/projects/project-demo.jpg',
      role: 'Full Stack Engineering',
      description:
        'Enterprise software solution featuring a Java Spring Boot backend and Vue.js frontend, integrating secure authentication with JWT and refresh token rotation, role-based access control (RBAC), and relational persistence.',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'JWT', 'Docker'],
      architecture: [
        'Layered Architecture (Controller, Service, Repository)',
        'Stateless JWT Authentication with Refresh Token Flow',
        'Normalized Relational Data Modeling in PostgreSQL / Oracle',
        'Complete Docker Compose Containerization',
      ],
      metrics: 'Enterprise MVP for institutional validation',
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Enterprise // MVP',
    },
    {
      id: 'api-gestao-servicos',
      index: '02',
      title: 'Service Management API & Microservice',
      category: 'Backend',
      year: '2024',
      date: '2024',
      image: '/images/projects/project-demo.jpg',
      role: 'Backend Engineering',
      description:
        'Management microservice featuring complex business rules, comprehensive unit test coverage with Mockito and JUnit, OpenAPI/Swagger specifications, and containerized deployment via Docker.',
      technologies: ['Java 17+', 'Spring Boot', 'JUnit', 'Mockito', 'Docker', 'PostgreSQL'],
      architecture: [
        'Unit Test Suites with JUnit and Mockito',
        'OpenAPI / Swagger API Contract Documentation',
        'CI/CD Pipeline Ready for Jenkins',
        'Observability and Log Auditing with Graylog',
      ],
      metrics: 'Comprehensive unit test coverage for business logic',
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Backend Core',
    },
    {
      id: 'portfolio-pessoal',
      index: '03',
      title: 'Single Page Portfolio & Creative Showcase',
      category: 'Frontend',
      year: '2026',
      date: '2026',
      image: '/images/projects/project-demo.jpg',
      role: 'UI/UX & Creative Engineering',
      description:
        'Portfolio featuring minimalist editorial aesthetics, interactive 3D WebGL (NEAT) gradient on intro, interactive flex project cards with smooth hover elastic expansion, dual language switcher, and refined transitions.',
      technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'WebGL (NEAT)', 'Vite'],
      architecture: [
        'WebGL Rendering with Smooth Lerp Mouse Interpolation',
        'Flexible Grid with Elastic Hover Expand and Contract',
        'Single Card with Dynamic Carousel for Extracurriculars',
        'Language Switcher (PT / EN) and Optimized Edge Build',
      ],
      metrics: 'Optimized static build for Vercel Edge',
      githubUrl: 'https://github.com/debhgoulart/meu-portifolio',
      liveUrl: 'https://github.com/debhgoulart/meu-portifolio',
      featured: true,
      statusBadge: 'Creative Dev',
    },
    {
      id: 'migracao-infra-docker',
      index: '04',
      title: 'Infrastructure Modernization & Docker',
      category: 'DevOps & Backend',
      year: '2024',
      date: '2024',
      image: '/images/projects/project-demo.jpg',
      role: 'DevOps & Backend',
      description:
        'Migration and modernization of legacy WildFly and Java 8 application servers to Java 11, setting up Docker containerized environments, and system observability with Graylog and Grafana.',
      technologies: ['Java 11', 'WildFly', 'Docker', 'Linux', 'Graylog', 'Grafana'],
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
    },
    {
      id: 'sistema-gestao-dados',
      index: '05',
      title: 'Relational Data Modeling & SQL Tuning',
      category: 'Databases',
      year: '2024 — 2025',
      date: '2024 — 2025',
      image: '/images/projects/project-demo.jpg',
      role: 'Database Engineering & SQL',
      description:
        'Normalized relational database modeling in PostgreSQL and Oracle Database, creation of DDL/DML routines, optimization of complex SQL queries, and production analytical reporting.',
      technologies: ['PostgreSQL', 'Oracle', 'SQL', 'Data Modeling', 'DBeaver'],
      githubUrl: 'https://github.com/debhgoulart',
      liveUrl: 'https://github.com/debhgoulart',
      featured: true,
    },
  ],
  navLinks: [
    { label: 'home', href: '#hero', index: '01' },
    { label: 'skills', href: '#habilidades', index: '02' },
    { label: 'projects', href: '#projetos', index: '03' },
    { label: 'activities', href: '#extracurriculares', index: '04' },
    { label: 'contact', href: '#contato', index: '05' },
  ],
  ui: {
    availableStatus: 'AVAILABLE // SOFTWARE ENGINEERING',
    heroCtaResume: 'DOWNLOAD CV (PDF)',
    heroCtaProjects: 'VIEW PROJECTS',
    heroCtaContact: 'GET IN TOUCH',
    copySuccess: 'COPIED!',
    copyBtn: 'COPY',
    openBtn: 'OPEN',
    viewGithub: 'GITHUB',
    viewDemo: 'LIVE DEMO',
    projectView: 'PROJECT VIEW',
    indexView: 'INDEX VIEW',
    allCategories: 'All',
    techStackTag: '02 // TECH STACK',
    techStackTitle: 'Tech Stack & Skills',
    techStackSubtitle: 'Technical competencies organized by software architecture and engineering layers.',
    projectsTag: '03 // FEATURED PROJECTS',
    projectsTitle: 'Projects Showcase',
    projectsSubtitle: 'Practical solutions developed with emphasis on scalable architecture, business logic, and usability.',
    aboutTag: '04 // ABOUT ME',
    aboutTitle: 'Analytical Mindset & Practical Experience',
    aboutSubtitle: 'Inquisitive curiosity, continuous learning, and dedication to building well-architected solutions.',
    extracurricularTitle: 'Additional Experiences & Research',
    extracurricularSubtitle: 'Hands-on practice in robotics engineering and academic cybersecurity research.',
    contactTag: '05 // CONTACT',
    contactTitle: 'Start a Conversation',
    contactSubtitle: 'Available for technical opportunities, corporate engineering challenges, and backend architecture discussions.',
    phoneLabel: 'Phone / WhatsApp',
    whatsappAction: 'MESSAGE ON WHATSAPP',
    responseTime: 'RESPONSE IN LESS THAN 24 HOURS',
    rightsReserved: 'ALL RIGHTS RESERVED',
  },
}

export const personalInfo = contentPT.personalInfo
export const experiences = contentPT.experiences
export const education = contentPT.education
export const extracurriculars = contentPT.extracurriculars
export const skillCategories = contentPT.skillCategories
export const projects = contentPT.projects
export const navLinks = contentPT.navLinks
