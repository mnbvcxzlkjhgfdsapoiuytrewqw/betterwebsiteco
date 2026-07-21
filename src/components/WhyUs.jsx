import { motion } from 'framer-motion'

const POINTS = [
  { title: 'Trusted in seconds', copy: 'Visitors decide in seconds whether to take you seriously. We design for that second.' },
  { title: 'Built to convert', copy: 'Every layout choice removes friction between interest and enquiry.' },
  { title: 'Meets people on their phone', copy: 'Most of your customers will find you on mobile. So does your site, first.' },
  { title: 'Loads before they leave', copy: 'A slow site loses customers before they ever see what you offer.' },
  { title: 'Built to be found', copy: 'Structured for Google, not just for looking good once someone already arrives.' },
  { title: 'Yours to update', copy: 'You should be able to update your own site without calling us.' },
]

export default function WhyUs() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Why Better Website Co.</p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            A website is a first impression. We design for that moment.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
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
