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
    heroCtaProjects?: string
    heroCtaContact: string
    copySuccess: string
    copyBtn: string
    openBtn: string
    viewGithub: string
    viewDemo: string
    projectView: string
    indexView: string
    allCategories: string
    contactTitle: string
    contactSubtitle: string
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
      name: 'HackingU',
      badge: 'Cibersegurança & Pesquisa',
      description:
        'Grupo universitário de pesquisa, estudos e práticas voltado à segurança da informação, análise de vulnerabilidades, conceitos de segurança ofensiva/defensiva e segurança em desenvolvimento de software.',
      topics: ['AppSec', 'Segurança de APIs', 'Autenticação & Criptografia', 'Auditoria de Vulnerabilidades'],
    },
    {
      name: 'Redbone',
      badge: 'Robótica Universitária',
      description:
        'Equipe de robótica da UVA com desenvolvimento prático de hardware/software integrados, algoritmos de controle, automação e participação em desafios e competições de engenharia.',
      topics: ['Automação', 'Lógica de Controle', 'Trabalho em Equipe', 'Resolução de Problemas'],
    },
  ],
  skillCategories: [
    {
      category: 'Backend',
      description: 'Arquitetura de serviços, microsserviços e APIs REST escaláveis.',
      items: [
        { name: 'Java', highlight: true },
        { name: 'Spring Boot', highlight: true },
        { name: 'Node.js' },
        { name: 'APIs REST', highlight: true },
        { name: 'JWT & Refresh Token' },
        { name: 'Arquitetura em Camadas' },
      ],
    },
    {
      category: 'Frontend',
      description: 'Interfaces reativas, componentização e foco em usabilidade e performance.',
      items: [
        { name: 'Vue.js', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript (ES6+)' },
        { name: 'HTML5 & CSS3' },
        { name: 'Tailwind CSS' },
        { name: 'Vite' },
      ],
    },
    {
      category: 'Banco de Dados',
      description: 'Modelagem relacional, integridade referencial e consultas SQL otimizadas.',
      items: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'Oracle Database', highlight: true },
        { name: 'SQL & DDL/DML' },
        { name: 'Modelagem de Dados' },
      ],
    },
    {
      category: 'Infraestrutura & Ferramentas',
      description: 'Ambientes conteinerizados, integração contínua e observabilidade em produção.',
      items: [
        { name: 'Docker', highlight: true },
        { name: 'Jenkins (CI/CD)' },
        { name: 'Linux' },
        { name: 'Git & GitHub' },
        { name: 'Grafana' },
        { name: 'Graylog' },
        { name: 'WildFly' },
      ],
    },
    {
      category: 'Testes & Qualidade',
      description: 'Validação de regras de negócio, testes unitários e padrões de código limpo.',
      items: [
        { name: 'JUnit', highlight: true },
        { name: 'Mockito', highlight: true },
        { name: 'Clean Code' },
        { name: 'Refatoração' },
      ],
    },
  ],
  projects: [
    {
      id: 'mvp-corporativo',
      index: '01',
      title: 'Sistema Corporativo & API RESTful',
      category: 'Full Stack',
      year: '2024 — 2026',
      role: 'Engenharia Full Stack',
      description:
        'Solução corporativa com backend em Java Spring Boot e frontend em Vue.js, integrando autenticação segura via JWT com rotação de refresh tokens, controle de perfis de acesso e persistência em banco relacional.',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'JWT', 'Docker'],
      architecture: [
        'Arquitetura em Camadas (Controller, Service, Repository)',
        'Autenticação Stateless com JWT e Refresh Token',
        'Modelagem Relacional Normalizada em PostgreSQL / Oracle',
        'Conteinerização Completa com Docker',
      ],
      metrics: 'MVP Corporativo para validação institucional',
      githubUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Corporativo / MVP',
    },
    {
      id: 'api-gestao-servicos',
      index: '02',
      title: 'API de Gestão e Serviços com Spring Boot',
      category: 'Backend',
      year: '2024',
      role: 'Backend Engineering',
      description:
        'Microsserviço de gestão com regras de negócio complexas, cobertura de testes unitários com Mockito e JUnit, documentação OpenAPI e conteinerização completa para deployment com Docker.',
      technologies: ['Java 17+', 'Spring Boot', 'JUnit', 'Mockito', 'Docker', 'PostgreSQL'],
      architecture: [
        'Suítes de Testes Unitários com JUnit e Mockito',
        'Documentação OpenAPI / Swagger para contratos de API',
        'Pronto para Pipeline CI/CD com Jenkins',
        'Observabilidade e Auditoria de Logs',
      ],
      metrics: 'Cobertura de testes para regras de negócio',
      githubUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Backend Core',
    },
    {
      id: 'portfolio-pessoal',
      index: '03',
      title: 'Single Page Portfolio Monopo / Better Half',
      category: 'Frontend',
      year: '2026',
      role: 'UI/UX & Creative Engineering',
      description:
        'Portfólio com estética editorial minimalista inspirada na monopo.vn e bttrhlf.com, apresentando gradiente 3D WebGL (NEAT) reativo no topo da introdução, transições limpas de tema e Project View da Better Half.',
      technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'WebGL (NEAT)', 'Vite'],
      architecture: [
        'Renderização WebGL com Interpolação Lerp Suave',
        'Background WebGL exclusivo na introdução, com fundo sólido ao rolar',
        'Project View e Index View inspirados em bttrhlf.com',
        'Alternador de Idioma (PT / EN) e Tema Claro/Escuro',
      ],
      metrics: 'Build estático otimizado para Vercel Edge',
      githubUrl: 'https://github.com/debhgoulart/meu-portifolio',
      liveUrl: '#',
      featured: true,
      statusBadge: 'Creative Dev',
    },
  ],
  navLinks: [
    { label: 'sobre', href: '#sobre', index: '01' },
    { label: 'experiência', href: '#experiencia', index: '02' },
    { label: 'formação', href: '#formacao', index: '03' },
    { label: 'habilidades', href: '#habilidades', index: '04' },
    { label: 'projetos', href: '#projetos', index: '05' },
    { label: 'contato', href: '#contato', index: '06' },
  ],
  ui: {
    availableStatus: 'DISPONÍVEL // ESTÁGIO CREA-RJ',
    heroCtaResume: 'BAIXAR CURRÍCULO',
    heroCtaProjects: 'VER PROJETOS',
    heroCtaContact: 'ENTRAR EM CONTATO',
    copySuccess: 'COPIADO!',
    copyBtn: 'COPIAR',
    openBtn: 'ABRIR',
    viewGithub: 'VER NO GITHUB',
    viewDemo: 'DEMONSTRAÇÃO',
    projectView: 'PROJECT VIEW',
    indexView: 'INDEX VIEW',
    allCategories: 'Todos',
    contactTitle: 'Iniciar Conexão',
    contactSubtitle: 'Disponível para novas oportunidades, projetos corporativos e conversas sobre desenvolvimento backend.',
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
    coordinates: "22°54'S 43°12'W",
    status: 'Available for technical opportunities',
    social: {
      github: 'https://github.com/debhgoulart',
      linkedin: 'https://www.linkedin.com/in/debhgoulart/',
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
      name: 'HackingU',
      badge: 'Cybersecurity & Research',
      description:
        'University research and study group focused on information security, vulnerability assessment, offensive/defensive security concepts, and secure software development.',
      topics: ['AppSec', 'API Security', 'Auth & Cryptography', 'Vulnerability Assessment'],
    },
    {
      name: 'Redbone',
      badge: 'University Robotics',
      description:
        'UVA robotics engineering team developing integrated hardware/software solutions, control logic, automation, and competing in national robotics tournaments.',
      topics: ['Automation', 'Control Systems', 'Team Collaboration', 'Problem Solving'],
    },
  ],
  skillCategories: [
    {
      category: 'Backend',
      description: 'Service architecture, domain-driven design, and scalable REST APIs.',
      items: [
        { name: 'Java', highlight: true },
        { name: 'Spring Boot', highlight: true },
        { name: 'Node.js' },
        { name: 'REST APIs', highlight: true },
        { name: 'JWT & Refresh Token' },
        { name: 'Layered Architecture' },
      ],
    },
    {
      category: 'Frontend',
      description: 'Reactive interfaces, clean component hierarchies, performance, and accessibility.',
      items: [
        { name: 'Vue.js', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript (ES6+)' },
        { name: 'HTML5 & CSS3' },
        { name: 'Tailwind CSS' },
        { name: 'Vite' },
      ],
    },
    {
      category: 'Databases',
      description: 'Relational data modeling, referential integrity, and SQL query tuning.',
      items: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'Oracle Database', highlight: true },
        { name: 'SQL & DDL/DML' },
        { name: 'Data Modeling' },
      ],
    },
    {
      category: 'Infrastructure & Tools',
      description: 'Containerized environments, continuous delivery, and production observability.',
      items: [
        { name: 'Docker', highlight: true },
        { name: 'Jenkins (CI/CD)' },
        { name: 'Linux' },
        { name: 'Git & GitHub' },
        { name: 'Grafana' },
        { name: 'Graylog' },
        { name: 'WildFly' },
      ],
    },
    {
      category: 'Testing & Quality',
      description: 'Business logic verification, unit testing suites, and clean code standards.',
      items: [
        { name: 'JUnit', highlight: true },
        { name: 'Mockito', highlight: true },
        { name: 'Clean Code' },
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
      role: 'Full Stack Engineering',
      description:
        'Enterprise software solution featuring a Java Spring Boot backend and Vue.js frontend, integrating secure authentication with JWT and refresh token rotation, permission management, and relational persistence.',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'PostgreSQL', 'JWT', 'Docker'],
      architecture: [
        'Layered Architecture (Controller, Service, Repository)',
        'Stateless JWT Authentication with Refresh Token Flow',
        'Normalized Relational Data Modeling in PostgreSQL / Oracle',
        'Complete Docker Containerization',
      ],
      metrics: 'Enterprise MVP for institutional validation',
      githubUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Enterprise / MVP',
    },
    {
      id: 'api-gestao-servicos',
      index: '02',
      title: 'Service Management API with Spring Boot',
      category: 'Backend',
      year: '2024',
      role: 'Backend Engineering',
      description:
        'Management microservice featuring complex business rules, comprehensive unit test coverage with Mockito and JUnit, OpenAPI specifications, and containerized deployment via Docker.',
      technologies: ['Java 17+', 'Spring Boot', 'JUnit', 'Mockito', 'Docker', 'PostgreSQL'],
      architecture: [
        'Unit Test Suites with JUnit and Mockito',
        'OpenAPI / Swagger API Contract Documentation',
        'CI/CD Pipeline Ready for Jenkins',
        'Observability and Log Auditing with Graylog',
      ],
      metrics: 'Comprehensive unit test coverage for business logic',
      githubUrl: 'https://github.com/debhgoulart',
      featured: true,
      statusBadge: 'Backend Core',
    },
    {
      id: 'portfolio-pessoal',
      index: '03',
      title: 'Single Page Portfolio Monopo / Better Half',
      category: 'Frontend',
      year: '2026',
      role: 'UI/UX & Creative Engineering',
      description:
        'Portfolio featuring minimalist editorial aesthetics inspired by monopo.vn and bttrhlf.com, including interactive 3D WebGL (NEAT) gradient on intro only, clean theme transitions, and Better Half Project View.',
      technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'WebGL (NEAT)', 'Vite'],
      architecture: [
        'WebGL Rendering with Smooth Lerp Mouse Interpolation',
        'Introduction-only WebGL Background with Solid Contrast on Scroll',
        'Project View and Index View inspired by bttrhlf.com',
        'Language Switcher (PT / EN) and Dark/Light Mode',
      ],
      metrics: 'Optimized static build for Vercel Edge',
      githubUrl: 'https://github.com/debhgoulart/meu-portifolio',
      liveUrl: '#',
      featured: true,
      statusBadge: 'Creative Dev',
    },
  ],
  navLinks: [
    { label: 'about', href: '#sobre', index: '01' },
    { label: 'experience', href: '#experiencia', index: '02' },
    { label: 'education', href: '#formacao', index: '03' },
    { label: 'skills', href: '#habilidades', index: '04' },
    { label: 'projects', href: '#projetos', index: '05' },
    { label: 'contact', href: '#contato', index: '06' },
  ],
  ui: {
    availableStatus: 'AVAILABLE // CREA-RJ INTERN',
    heroCtaResume: 'DOWNLOAD CV',
    heroCtaProjects: 'VIEW PROJECTS',
    heroCtaContact: 'GET IN TOUCH',
    copySuccess: 'COPIED!',
    copyBtn: 'COPY',
    openBtn: 'OPEN',
    viewGithub: 'VIEW ON GITHUB',
    viewDemo: 'LIVE DEMO',
    projectView: 'PROJECT VIEW',
    indexView: 'INDEX VIEW',
    allCategories: 'All',
    contactTitle: 'Start a Conversation',
    contactSubtitle: 'Available for technical opportunities, corporate engineering challenges, and backend architecture discussions.',
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
