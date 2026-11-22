import { useEffect, useState } from 'react'
import { formatClock } from './useLenisGsap'

export function useClock() {
  const [time, setTime] = useState(() => formatClock(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatClock(new Date()))
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return time
}
