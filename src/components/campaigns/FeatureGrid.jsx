import { motion } from 'framer-motion'

/**
 * Reusable feature/benefit grid. Same visual pattern as the homepage's
 * WhyUs section, generalized to take content as props so it can serve as
 * both the "Features" and "Benefits" beats on any campaign page.
 * cols: 2 | 3 (defaults to 3 on desktop)
 */
export default function FeatureGrid({ eyebrow, headline, items, cols = 3 }) {
  const colClass = cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

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
        <div className={`grid ${colClass} gap-x-10 gap-y-12`}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {item.icon && (
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 text-lg"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
              )}
              <h3 className="font-display text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
