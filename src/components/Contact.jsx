import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contato" className="section">
      <h2 className="section__title">Contato</h2>
      <div className="contact">
        <p>Vamos conversar? Fico à disposição por email ou redes sociais.</p>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
