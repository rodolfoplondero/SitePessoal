export const profile = {
  name: 'Rodolfo Londero',
  initials: 'RL',
  role: 'Senior RPA Engineer | UiPath Specialist | Technical Lead',
  tagline:
    'Arquiteto e desenvolvo automações corporativas de ponta a ponta com UiPath, C#/.NET e integrações via API — do design à governança em produção.',
  location: 'Alegrete, Rio Grande do Sul, Brasil',
  email: 'rodolfopl@gmail.com',
  github: 'https://github.com/rodolfoplondero',
  linkedin: 'https://www.linkedin.com/in/rodolfolondero',
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  bootLine: '$ whoami → Senior RPA Engineer',
  processMeta: 'uptime: 2y 4m',
  timezone: 'America/Sao_Paulo',
  locale: 'pt-BR',
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
  {
    category: 'IA & Claude Code',
    items: ['Anthropic Claude', 'Claude Skills', 'Claude Code Subagents'],
  },
]

export const projects = [
  {
    title: 'Automação Financeira em Escala',
    description:
      'Portfólio de 200+ automações corporativas em produção, cobrindo processos de finanças, operações, RH e supply chain. Solução construída com UiPath REFramework e integrações via API para reduzir a dependência de interface e aumentar a estabilidade em ambientes críticos.',
    tags: ['UiPath', 'REFramework', 'SAP', '.NET'],
    repo: '',
    demo: '',
  },
  {
    title: 'Automações Cross-Plataforma',
    description:
      'Iniciativas de automação ponta a ponta integrando Salesforce, SAP, ServiceNow e Microsoft 365. Componentes customizados em C#, VB.NET e Python, com deploy em orquestradores cloud e on-premises e suporte contínuo em produção.',
    tags: ['UiPath', 'Salesforce', 'C#', 'Python'],
    repo: '',
    demo: '',
  },
  {
    title: 'Biblioteca de Componentes Reutilizáveis',
    description:
      'Criação de bibliotecas reutilizáveis e padrões de code review para um time de automação, reduzindo retrabalho e padronizando entregas. Pipelines de CI/CD via Azure DevOps para versionamento e deploy controlado.',
    tags: ['Azure DevOps', 'Git', 'UiPath', 'Governança'],
    repo: '',
    demo: '',
  },
]

export const experience = [
  {
    role: 'Senior RPA Developer',
    company: 'TQA',
    period: 'Abr 2026 — atual',
    description:
      'Atuação como Senior RPA Developer, aplicando arquitetura UiPath, integrações via API e boas práticas de engenharia em iniciativas corporativas de automação.',
  },
  {
    role: 'ITS Analyst (RPA / Automation Engineer)',
    company: 'Ball Corporation',
    period: 'Jun 2023 — Abr 2026',
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
