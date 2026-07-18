import { motion } from 'framer-motion'

const POINTS = [
  { title: 'Build instant trust', copy: 'Visitors decide in seconds whether to take you seriously. We design for that second.' },
  { title: 'Convert more visitors', copy: 'Every layout choice removes friction between interest and enquiry.' },
  { title: 'Mobile-first', copy: 'Most of your customers will meet you on a phone. So do we, first.' },
  { title: 'Lightning fast', copy: 'A slow site loses customers before they ever see what you offer.' },
  { title: 'SEO-ready', copy: 'Structured to be found, not just to look good once someone arrives.' },
  { title: 'Easy to manage', copy: 'You should be able to update your own site without calling us.' },
]

export default function WhyUs() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Why Better Website Co.</p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Designed around your customers.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-display text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
