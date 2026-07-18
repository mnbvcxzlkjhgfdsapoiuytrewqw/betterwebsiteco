import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable countdown, e.g. for an event date or a book launch date.
 * targetDate: ISO string or Date. Renders days/hours/min/sec blocks matching
 * the site's card + mono-number visual language.
 */
function getTimeLeft(target) {
  const diff = +new Date(target) - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  }
}

export default function CountdownTimer({ targetDate, label = 'Doors open in' }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Sec' },
  ]

  return (
    <div>
      {label && (
        <p className="eyebrow mb-4 text-center md:text-left">{time.done ? "We're live" : label}</p>
      )}
      <div className="grid grid-cols-4 gap-3 max-w-sm">
        {units.map((u) => (
          <motion.div
            key={u.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border py-4 text-center"
            style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
          >
            <p className="font-display text-2xl md:text-3xl tabular-nums" style={{ color: 'var(--accent)' }}>
              {String(u.value).padStart(2, '0')}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wide font-mono" style={{ color: 'var(--text-muted)' }}>
              {u.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
