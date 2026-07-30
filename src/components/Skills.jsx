import { skills } from '../data'
import Reveal from './Reveal'
import { MonitorIcon, ServerIcon, TerminalIcon } from '../icons'

const categoryIcons = {
  Frontend: MonitorIcon,
  Backend: ServerIcon,
  'Dados & Ferramentas': TerminalIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal as="h2" className="section__title">
        Skills
      </Reveal>
      <div className="skills">
        {skills.map((group, i) => {
          const Icon = categoryIcons[group.category] ?? TerminalIcon
          return (
            <Reveal key={group.category} className="skills__group" delay={i * 100}>
              <h3>
                <Icon className="icon" />
                {group.category}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
