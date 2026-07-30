import { useEffect, useRef, useState } from 'react'

export default function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px', ...options })

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}
