import { motion } from 'framer-motion'

const ARTICLES = [
  { title: 'Why Your Business Needs a Website', tag: 'Foundations' },
  { title: 'Instagram Is Not Your Website', tag: 'Strategy' },
  { title: 'Landing Page vs Full Website', tag: 'Strategy' },
  { title: 'How Long Does a Website Take?', tag: 'Process' },
  { title: 'What Makes People Trust a Business Online?', tag: 'Trust' },
]

export default function Resources() {
  return (
    <section id="resources" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Resources</p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Learn before you build.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border p-6"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <p className="eyebrow mb-3">{a.tag}</p>
              <p className="font-display text-lg leading-snug" style={{ color: 'var(--text-primary)' }}>
                {a.title}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          More coming soon.
        </p>
      </div>
    </section>
  )
}
