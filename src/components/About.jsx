import { about, profile } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre" className="section">
      <Reveal as="p" className="queue-tag">
        QUEUE: SOBRE
      </Reveal>
      <Reveal as="h2" className="section__title">
        Sobre mim
      </Reveal>
      <Reveal className="about" delay={100}>
        <p>{about}</p>
        <p className="about__location">📍 {profile.location}</p>
      </Reveal>
    </section>
  )
}
