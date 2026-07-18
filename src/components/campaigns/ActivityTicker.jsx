import { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * ⚠️ PLACEHOLDER DATA — swap `events` for a real registration feed before
 * this page goes live behind any ad spend. This ships with realistic-looking
 * demo data (see /src/data/campaigns.js -> demoActivityEvents) so the
 * component can be reviewed and styled now, but the entries are not real
 * registrations. Wire a real events prop (from your registration backend)
 * to replace the demo data — the component itself doesn't care where the
 * data comes from, it just displays whatever `events` array it's given.
 *
 * events: [{ id, text }]
 * minDelay/maxDelay: ms between notifications (kept irregular on purpose —
 * a perfectly even interval is what makes these feel fake)
 */
export default function ActivityTicker({ events, minDelay = 6000, maxDelay = 16000 }) {
  const [current, setCurrent] = useState(null)
  const [visible, setVisible] = useState(false)
  const indexRef = useRef(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!events || events.length === 0) return

    function showNext() {
      const event = events[indexRef.current % events.length]
      indexRef.current += 1
      setCurrent(event)
      setVisible(true)

      const hideAfter = 4200
      const nextDelay = minDelay + Math.random() * (maxDelay - minDelay)

      timeoutRef.current = setTimeout(() => {
        setVisible(false)
        timeoutRef.current = setTimeout(showNext, nextDelay)
      }, hideAfter)
    }

    const firstDelay = 2500 + Math.random() * 2000
    timeoutRef.current = setTimeout(showNext, firstDelay)

    return () => clearTimeout(timeoutRef.current)
  }, [events, minDelay, maxDelay])

  if (!events || events.length === 0) return null

  return (
    <div
      className="fixed bottom-6 left-6 z-40 pointer-events-none"
      aria-live="polite"
    >
      <AnimatePresence>
        {visible && current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex items-center gap-3 rounded-xl border px-4 py-3 max-w-[280px] shadow-lg"
            style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', boxShadow: '0 8px 24px var(--shadow)' }}
          >
            <span
              className="h-2 w-2 rounded-full shrink-0 animate-pulse"
              style={{ background: 'var(--accent)' }}
              aria-hidden="true"
            />
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              {current.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
