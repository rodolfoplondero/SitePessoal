import { useEffect, useState } from 'react'

export default function useViewCount(code, path) {
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (!code) return

    const controller = new AbortController()
    const url = `https://${code}.goatcounter.com/counter/${encodeURIComponent(path)}.json`

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`GoatCounter request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        const value = data?.count
        setCount(typeof value === 'string' || typeof value === 'number' ? String(value) : null)
      })
      .catch(() => {
        setCount(null)
      })

    return () => controller.abort()
  }, [code, path])

  return count
}
