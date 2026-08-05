import { sections } from '../data'
import useActiveSection from '../hooks/useActiveSection'
import { scrollToSection } from '../scrollToSection'

const CENTER_X = 110
const RADIUS = 18
const SPACING = 84
const START_Y = 36
const LABEL_OFFSET = 36

export default function ProcessFlow({ name }) {
  const active = useActiveSection(sections)
  const activeIndex = sections.findIndex((section) => section.href === active)

  const lastY = START_Y + (sections.length - 1) * SPACING
  const motionPath = sections
    .slice(1)
    .map((_, i) => `L0,${(i + 1) * SPACING}`)
    .join(' ')

  return (
    <svg className="process-flow" viewBox={`0 0 220 ${lastY + LABEL_OFFSET + 12}`}>
      <title>{`Progresso de navegação pelas seções — ${name}`}</title>

      <line
        className="process-flow__rail"
        x1={CENTER_X}
        y1={START_Y}
        x2={CENTER_X}
        y2={lastY}
        aria-hidden="true"
      />
      <circle className="process-flow__pulse" r="4" cx={CENTER_X} cy={START_Y} aria-hidden="true">
        <animateMotion dur="4s" repeatCount="indefinite" path={`M0,0 ${motionPath}`} />
      </circle>

      {sections.map((section, i) => {
        const cy = START_Y + i * SPACING
        let modifier = ''
        if (activeIndex !== -1) {
          if (i < activeIndex) modifier = ' process-flow__node--done'
          else if (i === activeIndex) modifier = ' process-flow__node--active'
        }

        return (
          <a
            key={section.id}
            href={section.href}
            className={`process-flow__node${modifier}`}
            onClick={(e) => scrollToSection(e, section.href)}
          >
            <circle cx={CENTER_X} cy={cy} r={RADIUS} className="process-flow__ring" />
            <circle cx={CENTER_X} cy={cy} r="5" className="process-flow__dot" />
            <text x={CENTER_X} y={cy + LABEL_OFFSET} textAnchor="middle" className="process-flow__label">
              {section.label.toUpperCase()}
            </text>
          </a>
        )
      })}
    </svg>
  )
}
