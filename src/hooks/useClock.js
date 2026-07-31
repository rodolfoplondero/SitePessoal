import { useEffect, useMemo, useState } from 'react'

function buildFormatter(timeZone, locale) {
  try {
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone,
    })
  } catch {
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }
}

export default function useClock(timeZone, locale) {
  const formatter = useMemo(() => buildFormatter(timeZone, locale), [timeZone, locale])
  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    setTime(formatter.format(new Date()))
    const id = setInterval(() => {
      setTime(formatter.format(new Date()))
    }, 1000)
    return () => clearInterval(id)
  }, [formatter])

  return time
}
