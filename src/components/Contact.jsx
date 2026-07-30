import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contato" className="section">
      <Reveal as="h2" className="section__title">
        Contato
      </Reveal>
      <Reveal className="contact" delay={100}>
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
      </Reveal>
    </section>
  )
}
