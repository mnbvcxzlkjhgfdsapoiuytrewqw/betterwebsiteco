import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { insights } from '../data/insights'

// Homepage teaser for the Insights library. Shows a handful of real articles,
// links out to the full /insights index.
const FEATURED_SLUGS = [
  'why-your-business-needs-a-website',
  'instagram-is-not-your-website',
  'first-five-seconds',
  'real-cost-of-waiting',
]

export default function Resources() {
  const featured = FEATURED_SLUGS.map((slug) => insights.find((a) => a.slug === slug)).filter(Boolean)

  return (
    <section id="insights" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
              We don't just build websites. We teach businesses how to win online.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={`/insights/${a.slug}`}
                className="group block rounded-2xl border p-6 h-full transition-colors"
                style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
              >
                <p className="eyebrow mb-3" style={{ color: 'var(--accent)' }}>
                  {a.category}
                </p>
                <p className="font-display text-lg leading-snug mb-3" style={{ color: 'var(--text-primary)' }}>
                  {a.title}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {a.readTime}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to="/insights"
          className="inline-block mt-8 text-sm font-medium underline underline-offset-4"
          style={{ color: 'var(--accent)' }}
        >
          Read all Insights →
        </Link>
      </div>
    </section>
  )
}
