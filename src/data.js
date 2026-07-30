export const profile = {
  name: 'Rodolfo Londero',
  initials: 'RL',
  role: 'Senior RPA Engineer | UiPath Specialist',
  tagline:
    'Arquiteto e desenvolvo automações corporativas de ponta a ponta com UiPath, C#/.NET e integrações via API — do design à governança em produção.',
  location: 'Santa Maria, Rio Grande do Sul, Brasil',
  email: 'rodolfopl@gmail.com',
  github: 'https://github.com/rodolfoplondero',
  linkedin: 'https://www.linkedin.com/in/rodolfoplondero',
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const about = `Sou Engenheiro de RPA sênior, especializado em UiPath, com experiência no desenho,
desenvolvimento e suporte de automações de nível corporativo em ambientes complexos. Foco em
soluções robustas e escaláveis com UiPath REFramework, estendidas por integrações via API e
componentes customizados em C#, VB.NET e Python — reduzindo a dependência de interface e
fortalecendo processos críticos de finanças, operações, RH e supply chain. Atuo como referência
técnica em times de automação, orientando decisões de arquitetura, revisões de código e a criação
de bibliotecas reutilizáveis, sempre em ambientes ágeis (Scrum/Kanban) com CI/CD via Azure DevOps.`

export const skills = [
  {
    category: 'RPA & Automação',
    items: ['UiPath', 'REFramework', 'Automação de Processos', 'OCR & IA'],
  },
  {
    category: 'Linguagens & .NET',
    items: ['C#', 'VB.NET', '.NET', 'Python', 'VBA', 'HTML'],
  },
  {
    category: 'Integrações & DevOps',
    items: ['SQL', 'API REST', 'SAP', 'SharePoint', 'Azure DevOps', 'Git'],
  },
]

export const projects = [
  {
    title: 'Nome do Projeto 1',
    description:
      'Breve descrição do projeto: o problema que resolve e as principais tecnologias usadas.',
    tags: ['React', 'Node.js'],
    repo: 'https://github.com/rodolfoplondero',
    demo: '',
  },
  {
    title: 'Nome do Projeto 2',
    description:
      'Breve descrição do projeto: o problema que resolve e as principais tecnologias usadas.',
    tags: ['Python', 'Django'],
    repo: 'https://github.com/rodolfoplondero',
    demo: '',
  },
  {
    title: 'Nome do Projeto 3',
    description:
      'Breve descrição do projeto: o problema que resolve e as principais tecnologias usadas.',
    tags: ['PHP', 'Laravel'],
    repo: 'https://github.com/rodolfoplondero',
    demo: '',
  },
]

export const experience = [
  {
    role: 'ITS Analyst (RPA / Automation Engineer)',
    company: 'Ball Corporation',
    period: 'Jun 2023 — atual',
    description:
      'Suporte e evolução de um portfólio de 200+ automações em produção, com soluções UiPath (REFramework) sobre .NET, integrações via API (SAP, SharePoint, SuccessFactors, Microsoft 365) e liderança técnica do time de automação — da arquitetura ao code review.',
  },
  {
    role: 'RPA Developer',
    company: 'Smarthis',
    period: 'Fev 2022 — Mai 2023',
    description:
      'Liderança de iniciativas de automação ponta a ponta para plataformas corporativas (Salesforce, SAP, ServiceNow, Microsoft 365), com desenvolvimento em UiPath, C#/VB.NET e Python, e suporte a produção em ambientes cloud e on-premises.',
  },
  {
    role: 'PHP Developer',
    company: 'Meta IT Services',
    period: 'Jul 2014 — Set 2014',
    description:
      'Desenvolvimento e manutenção de aplicações web em PHP e MySQL, com melhorias em ambientes SAP via ABAP, em equipe ágil (Scrum/Kanban).',
  },
  {
    role: 'Systems Analyst and Developer',
    company: 'WebSeller',
    period: 'Mar 2013 — Jun 2014',
    description:
      'Desenvolvimento de aplicações desktop e web com Delphi, PHP, MySQL e PostgreSQL para sistemas de RH, leilões e faturamento de transporte, incluindo integrações via SOAP.',
  },
]

export const education = [
  {
    degree: 'Mestrado em Engenharia Elétrica',
    institution: 'Universidade Federal de Santa Maria',
    period: 'Ago 2019 — Jan 2022',
  },
  {
    degree: 'Bacharelado em Engenharia Elétrica',
    institution: 'Universidade Federal do Pampa',
    period: 'Mar 2015 — Ago 2019',
  },
  {
    degree: 'Especialização em Tecnologias para Aplicações Web (Webmaster)',
    institution: 'Universidade Norte do Paraná',
    period: '2013 — 2014',
  },
  {
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Instituto Federal Farroupilha',
    period: '2010 — 2013',
  },
]
