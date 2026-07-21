import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { insights, insightCategories } from '../data/insights'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'Insights | Better Website Co.'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) {
      desc.setAttribute(
        'content',
        'Practical, no-fluff advice on websites, conversion, and building an online presence that actually works.'
      )
    }
    window.scrollTo(0, 0)
  }, [])

  const filtered =
    activeCategory === 'All' ? insights : insights.filter((a) => a.category === activeCategory)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <section className="pt-20 md:pt-28 pb-16">
          <div className="container-bw max-w-3xl">
            <p className="eyebrow mb-4">Insights</p>
            <h1
              className="font-display font-semibold leading-[1.02] tracking-tight text-[40px] sm:text-[52px]"
              style={{ color: 'var(--text-primary)' }}
            >
              We don't just build websites.
              <br />
              <span className="italic font-normal" style={{ color: 'var(--accent)' }}>
                We teach businesses how to win online.
              </span>
            </h1>
            <p className="mt-6 text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Practical advice on websites, conversion, and building an online presence that
              actually works — no fluff, no filler, nothing written just to fill a schedule.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-bw">
            <div className="flex flex-wrap gap-2 mb-12">
              {['All', ...insightCategories].map((cat) => {
                const active = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-xs px-3.5 py-1.5 rounded-full border transition-colors"
                    style={{
                      borderColor: active ? 'var(--accent)' : 'var(--border)',
                      color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                    }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a, i) => (
                <motion.div
                  key={a.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Link
                    to={`/insights/${a.slug}`}
                    className="group block rounded-2xl border p-7 h-full"
                    style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                  >
                    <p className="eyebrow mb-3" style={{ color: 'var(--accent)' }}>
                      {a.category}
                    </p>
                    <p
                      className="font-display text-xl leading-snug mb-3"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {a.title}
                    </p>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {a.dek}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {a.readTime}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
