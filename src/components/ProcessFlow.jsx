const nodes = [
  { id: 'init', label: 'INIT' },
  { id: 'process', label: 'PROCESS' },
  { id: 'done', label: 'DONE' },
]

export default function ProcessFlow({ name }) {
  return (
    <svg
      className="process-flow"
      viewBox="0 0 220 320"
      role="img"
      aria-label={`Diagrama de estados do processo de automação de ${name}`}
    >
      <line className="process-flow__rail" x1="110" y1="46" x2="110" y2="274" />
      <circle className="process-flow__pulse" r="4" cx="110" cy="46">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path="M0,0 L0,114 L0,228"
        />
      </circle>

      {nodes.map((node, i) => (
        <g key={node.id} className={`process-flow__node process-flow__node--${node.id}`}>
          <circle cx="110" cy={46 + i * 114} r="30" className="process-flow__ring" />
          <circle cx="110" cy={46 + i * 114} r="5" className="process-flow__dot" />
          <text x="110" y={46 + i * 114 + 52} textAnchor="middle" className="process-flow__label">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
