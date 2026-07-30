import { profile } from '../data'
import Avatar from './Avatar'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../icons'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <span className="hero__blob hero__blob--a" aria-hidden="true" />
      <span className="hero__blob hero__blob--b" aria-hidden="true" />

      <div className="hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Olá, eu sou</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn btn--ghost" href={profile.resumeFile} download>
              <DownloadIcon className="icon" />
              Baixar currículo
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon className="icon" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon className="icon" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <MailIcon className="icon" />
              Email
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <Avatar initials={profile.initials} name={profile.name} />
        </div>
      </div>
    </section>
  )
}
