import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { insights } from '../data/insights'

export default function InsightArticle() {
  const { slug } = useParams()
  const article = insights.find((a) => a.slug === slug)

  useEffect(() => {
    if (!article) return
    document.title = `${article.title} | Better Website Co.`
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', article.dek)
    window.scrollTo(0, 0)
  }, [article])

  if (!article) return <Navigate to="/insights" replace />

  const related = insights.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 2)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <article className="pt-20 md:pt-28 pb-24">
          <div className="container-bw max-w-2xl">
            <Link
              to="/insights"
              className="text-sm inline-flex items-center gap-2 mb-10"
              style={{ color: 'var(--text-muted)' }}
            >
              ← All Insights
            </Link>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="eyebrow mb-4" style={{ color: 'var(--accent)' }}>
                {article.category} · {article.readTime}
              </p>
              <h1
                className="font-display font-semibold leading-[1.05] text-[34px] sm:text-[44px]"
                style={{ color: 'var(--text-primary)' }}
              >
                {article.title}
              </h1>
              <p className="mt-6 text-lg" style={{ color: 'var(--text-secondary)' }}>
                {article.dek}
              </p>
            </motion.div>

            <div className="mt-12 flex flex-col gap-6">
              {article.body.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div
              className="mt-16 rounded-2xl border p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <div>
                <p className="font-display text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                  Want this thinking applied to your business?
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  A free strategy call costs nothing and tells you exactly where you stand.
                </p>
              </div>
              <Button href="/#inquiry" variant="primary" className="shrink-0">
                Book a Free Strategy Call
              </Button>
            </div>

            {related.length > 0 && (
              <div className="mt-16">
                <p className="eyebrow mb-6">More on {article.category}</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {related.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/insights/${a.slug}`}
                      className="block rounded-2xl border p-6"
                      style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                    >
                      <p className="font-display text-lg leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
                        {a.title}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {a.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
