import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme'
import { profile } from '../data'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#curriculo', label: 'Currículo' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [theme, toggleTheme] = useTheme()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (event, href) => {
    const target = document.querySelector(href)
    if (target) {
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', href)
    }
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <span className="navbar__brand">
          <a
            href="#top"
            className="navbar__brand-id"
            data-hover={profile.processMeta}
            onClick={(e) => handleNavClick(e, '#top')}
          >
            RL-01
          </a>
          <span className="navbar__brand-clock" />
        </span>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-switch"
          role="switch"
          aria-checked={theme === 'dark'}
          aria-label="Alternar modo claro/escuro"
          onClick={toggleTheme}
        >
          <span className="theme-switch__track">
            <span className="theme-switch__thumb" />
          </span>
          <span className="theme-switch__label">{theme === 'dark' ? 'dark' : 'light'}</span>
        </button>

        <span className="navbar__status" aria-hidden="true">
          <span className="navbar__status-dot" />
          online
        </span>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
