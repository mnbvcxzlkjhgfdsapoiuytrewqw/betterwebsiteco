import { motion } from 'framer-motion'

/**
 * Two-panel contrast section: the problem on the left, the reframe/solution
 * on the right. Used to open the "why this matters" beat on campaign pages
 * right after the hero.
 */
export default function ProblemSolution({ eyebrow, headline, problem, solution }) {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        {(eyebrow || headline) && (
          <div className="max-w-xl mb-14">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {headline && (
              <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                {headline}
              </h2>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border p-8 md:p-10"
            style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
          >
            <p className="text-xs font-medium mb-4 font-mono tracking-wide" style={{ color: 'var(--text-muted)' }}>
              {problem.label || 'The problem'}
            </p>
            <h3 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
              {problem.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {problem.copy}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl border p-8 md:p-10"
            style={{ borderColor: 'var(--border-strong)', background: 'var(--card)' }}
          >
            <p className="text-xs font-medium mb-4 font-mono tracking-wide" style={{ color: 'var(--accent)' }}>
              {solution.label || 'The reframe'}
            </p>
            <h3 className="font-display text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>
              {solution.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {solution.copy}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
