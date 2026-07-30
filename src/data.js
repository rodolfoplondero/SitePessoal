export const profile = {
  name: 'Rodolfo Londero',
  initials: 'RL',
  role: 'Desenvolvedor de Software',
  tagline:
    'Construo aplicações web do frontend ao backend, com foco em código limpo e experiências rápidas.',
  location: 'Brasil',
  email: 'rodolfopl@gmail.com',
  github: 'https://github.com/rodolfoplondero',
  linkedin: 'https://www.linkedin.com/in/rodolfoplondero',
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const about = `Sou desenvolvedor com experiência em construir aplicações web completas,
da interface ao banco de dados. Gosto de resolver problemas reais com código simples e
manutenível, e estou sempre aprendendo novas ferramentas para entregar produtos melhores.`

export const skills = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'PHP', 'Laravel'],
  },
  {
    category: 'Dados & Ferramentas',
    items: ['SQL', 'Git', 'PostgreSQL', 'Linux'],
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
    role: 'Cargo',
    company: 'Empresa',
    period: '20XX — atual',
    description: 'Principais responsabilidades e conquistas nessa posição.',
  },
  {
    role: 'Cargo anterior',
    company: 'Empresa anterior',
    period: '20XX — 20XX',
    description: 'Principais responsabilidades e conquistas nessa posição.',
  },
]

export const education = [
  {
    degree: 'Curso',
    institution: 'Instituição',
    period: '20XX — 20XX',
  },
]
