export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Natalino Gomes",
  role: "Frontend & Full-Stack Developer",
  tagline:
    "Desenvolvo aplicações web e mobile modernas com React, Next.js, TypeScript e Node.js.",
  email: "intgomes657@gmail.com",
  location: "Portugal",
  avatarSrc: "/myAvatar.png",
  cvSrc: "/natalino-cv.pdf",
  cvDownloadFileName: "Natalino-Gomes-CV.pdf",
} as const;

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Redux Toolkit",
  "shadcn/ui",
  "REST APIs",
  "Git & GitHub",
  "Docker",
  "AWS Fundamentals",
];

export const projects: Project[] = [
  {
    title: "SmartFactoryPRO",
    description:
      "Plataforma industrial para gestão de produção, ordens de trabalho e monitorização operacional. Participei na análise do sistema, documentação técnica e entendimento da arquitetura frontend/backend com Next.js, TypeScript e Prisma.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },

  {
    title: "Planify - Financial Management App",
    description:
      "Aplicação mobile full-stack para gestão financeira pessoal com autenticação JWT, controlo de despesas, objetivos financeiros e integração de APIs.",
    tags: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
    ],
    repo: "https://github.com/Natalino657/Planify",
  },

  {
    title: "Sal Transfer Website",
    description:
      "Website moderno desenvolvido para uma empresa de transfer na Ilha do Sal, focado em SEO, performance e experiência do utilizador.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Design",
    ],
  },

  {
    title: "E-commerce Mobile App",
    description:
      "Aplicação mobile com autenticação de utilizadores, CRUD de produtos, integração com APIs REST e gestão de estado global com Redux Toolkit.",
    tags: [
      "React Native",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
    ],
    repo: "https://github.com/Natalino657",
  },

  
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Natalino657",
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/natalino-gomes-9846b7303/",
  },
];

export const aboutMe = `
Sou recém-licenciado em Engenharia Informática com foco no desenvolvimento frontend e full-stack utilizando React, Next.js, TypeScript e Node.js.

Tenho experiência no desenvolvimento de aplicações web e mobile, integração de APIs REST, autenticação JWT e construção de interfaces modernas, responsivas e centradas na experiência do utilizador.

Nos últimos meses venho aprofundando conhecimentos em arquitetura frontend, componentes reutilizáveis, Prisma, Tailwind CSS e ecossistema Next.js através de projetos pessoais, aplicações full-stack e colaboração em plataformas empresariais.

Gosto de aprender novas tecnologias, resolver problemas e construir soluções escaláveis que unam boa performance, organização e uma experiência intuitiva para o utilizador.
`;

export const certificates = [
  {
    title: "Full Stack Mobile Development",
    issuer: "Udemy",
    year: "2025",
  },

  {
    title: "JavaScript Certification",
    issuer: "Coursera",
    year: "2025",
  },

  {
    title: "Introduction to AWS Cloud",
    issuer: "IPB",
    year: "2025",
  },

  {
    title: "OutSystems Development",
    issuer: "IPB",
    year: "2025",
  },
];