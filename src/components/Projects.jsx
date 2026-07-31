import { projects } from '../data'
import Reveal from './Reveal'
import { ExternalLinkIcon, GitHubIcon } from '../icons'
import {
  AutomationGridIllustration,
  ComponentTreeIllustration,
  IntegrationHubIllustration,
} from '../illustrations'

const illustrations = [AutomationGridIllustration, IntegrationHubIllustration, ComponentTreeIllustration]

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <Reveal as="p" className="queue-tag">
        QUEUE: PROJETOS
      </Reveal>
      <Reveal as="h2" className="section__title">
        Projetos
      </Reveal>
      <div className="projects">
        {projects.map((project, i) => {
          const Illustration = illustrations[i % illustrations.length]
          return (
            <Reveal key={project.title} as="article" className="project-card" delay={i * 100}>
              <div className="project-card__cover">
                <Illustration />
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.repo || project.demo ? (
                  <div className="project-card__links">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        <GitHubIcon className="icon" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLinkIcon className="icon" />
                        Demo
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="project-card__note">Projeto corporativo — detalhes confidenciais</p>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
