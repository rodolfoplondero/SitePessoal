export default function Avatar({ initials, name }) {
  return (
    <svg
      className="avatar"
      viewBox="0 0 240 240"
      role="img"
      aria-label={`Retrato ilustrativo de ${name}`}
    >
      <circle className="avatar__glow" cx="120" cy="120" r="98" />
      <circle className="avatar__ring" cx="120" cy="120" r="92" />
      <circle className="avatar__disc" cx="120" cy="120" r="72" />
      <text className="avatar__initials" x="120" y="138" textAnchor="middle">
        {initials}
      </text>
    </svg>
  )
}
