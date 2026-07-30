import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <span className="hero__blob hero__blob--a" aria-hidden="true" />
      <span className="hero__blob hero__blob--b" aria-hidden="true" />

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
            Baixar currículo
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  )
}
