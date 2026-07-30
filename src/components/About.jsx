import { about, profile } from '../data'

export default function About() {
  return (
    <section id="sobre" className="section">
      <h2 className="section__title">Sobre mim</h2>
      <div className="about">
        <p>{about}</p>
        <p className="about__location">📍 {profile.location}</p>
      </div>
    </section>
  )
}
