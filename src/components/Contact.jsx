import { profile } from '../data'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons'

export default function Contact() {
  return (
    <section id="contato" className="section">
      <Reveal as="p" className="queue-tag">
        QUEUE: CONTATO
      </Reveal>
      <Reveal as="h2" className="section__title">
        Contato
      </Reveal>
      <Reveal className="contact" delay={100}>
        <p>Vamos conversar? Fico à disposição por email ou redes sociais.</p>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon className="icon" />
            {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon className="icon" />
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon className="icon" />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
