import { education, experience } from '../data'

export default function Resume() {
  return (
    <section id="curriculo" className="section">
      <h2 className="section__title">Currículo</h2>

      <div className="resume">
        <div className="resume__column">
          <h3>Experiência</h3>
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
        </div>

        <div className="resume__column">
          <h3>Formação</h3>
          <ol className="timeline">
            {education.map((item) => (
              <li key={`${item.degree}-${item.institution}`}>
                <span className="timeline__period">{item.period}</span>
                <strong>{item.degree}</strong>
                <span className="timeline__place">{item.institution}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
