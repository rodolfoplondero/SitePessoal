import { useEffect, useState } from 'react'

const OBSERVER_OPTIONS = { rootMargin: '-45% 0px -50% 0px' }

export default function useActiveSection(sections) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = sections
      .map((section) => document.querySelector(section.href))
      .filter(Boolean)

    if (!elements.length) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
      if (visible.length > 0) {
        setActive(`#${visible[0].target.id}`)
      }
    }, OBSERVER_OPTIONS)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return active
}
