import { profile, analytics } from '../data'
import useViewCount from '../hooks/useViewCount'

export default function Footer() {
  const views = useViewCount(analytics.goatCounterCode, analytics.countPath)

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
      </p>
      {views && (
        <p className="queue-tag queue-tag--views">
          VIEWS: <span className="queue-tag__count">{views}</span>
        </p>
      )}
    </footer>
  )
}
