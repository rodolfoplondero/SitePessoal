export function scrollToSection(event, href) {
  const target = document.querySelector(href)
  if (!target) return
  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.pushState(null, '', href)
}
