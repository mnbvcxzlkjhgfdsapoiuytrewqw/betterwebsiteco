import { motion } from 'framer-motion'

/**
 * Reusable stats row, e.g. "8M+ views generated", "36 products shipped".
 * stats: [{ value: '8M+', label: 'Views generated' }, ...]
 */
export default function StatsBar({ stats }) {
  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-3xl md:text-4xl" style={{ color: 'var(--accent)' }}>
                {s.value}
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
