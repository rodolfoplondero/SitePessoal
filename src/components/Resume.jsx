import { education, experience } from '../data'
import Reveal from './Reveal'
import { BriefcaseIcon, GraduationCapIcon } from '../icons'

export default function Resume() {
  return (
    <section id="curriculo" className="section">
      <Reveal as="h2" className="section__title">
        Currículo
      </Reveal>

      <div className="resume">
        <Reveal as="div" className="resume__column">
          <h3>
            <BriefcaseIcon className="icon" />
            Experiência
          </h3>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={`${item.role}-${item.company}`}>
                <span className="timeline__period">{item.period}</span>
                <strong>{item.role}</strong>
                <span className="timeline__place">{item.company}</span>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="div" className="resume__column" delay={120}>
          <h3>
            <GraduationCapIcon className="icon" />
            Formação
          </h3>
          <ol className="timeline">
            {education.map((item) => (
              <li key={`${item.degree}-${item.institution}`}>
                <span className="timeline__period">{item.period}</span>
                <strong>{item.degree}</strong>
                <span className="timeline__place">{item.institution}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
