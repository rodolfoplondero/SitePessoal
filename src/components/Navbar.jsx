import { useEffect, useState } from 'react'
import useTheme from '../hooks/useTheme'
import useClock from '../hooks/useClock'
import useActiveSection from '../hooks/useActiveSection'
import { profile, sections as links } from '../data'
import { scrollToSection } from '../scrollToSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, toggleTheme] = useTheme()
  const clock = useClock(profile.timezone, profile.locale)
  const active = useActiveSection(links)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (event, href) => {
    scrollToSection(event, href)
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
          <span className="navbar__brand-clock">{clock}</span>
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
