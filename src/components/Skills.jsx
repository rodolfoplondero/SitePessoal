import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
