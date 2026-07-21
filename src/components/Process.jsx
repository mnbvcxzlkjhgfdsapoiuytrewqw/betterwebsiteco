import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Discovery', copy: 'We learn your business, your customers and what\'s stopping them from buying today.' },
  { n: '02', title: 'Strategy', copy: 'We map the site around one goal: turning visitors into enquiries.' },
  { n: '03', title: 'Design', copy: 'A visual identity and homepage concept built specifically for your brand.' },
  { n: '04', title: 'Development', copy: 'Clean, fast, production-ready code — built to last, not to patch.' },
  { n: '05', title: 'Launch', copy: 'Your site goes live, with everything you need to manage it going forward.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-6 md:pl-0"
            >
              <div
                className="hidden md:block h-px w-full mb-6"
                style={{ background: 'var(--border)' }}
              />
              <p className="font-mono text-xs mb-3" style={{ color: 'var(--accent)' }}>
                {s.n}
              </p>
              <h3 className="font-display text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {s.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
