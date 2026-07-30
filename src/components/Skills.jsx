import { skills } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal as="h2" className="section__title">
        Skills
      </Reveal>
      <div className="skills">
        {skills.map((group, i) => (
          <Reveal key={group.category} className="skills__group" delay={i * 100}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
