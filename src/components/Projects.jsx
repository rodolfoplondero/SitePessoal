import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <h2 className="section__title">Projetos</h2>
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project-card__links">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Código
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
