import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
