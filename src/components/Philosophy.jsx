import { motion } from 'framer-motion'

const BEATS = [
  "Is your business still relying entirely on Instagram and WhatsApp?",
  'What happens when someone Googles your business right now?',
  'Do they find a real website — or nothing at all?',
]

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw max-w-3xl">
        <div className="flex flex-col gap-5">
          {BEATS.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="font-display text-xl md:text-2xl"
              style={{ color: 'var(--text-muted)' }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-display text-3xl md:text-5xl leading-tight mt-8"
          style={{ color: 'var(--text-primary)' }}
        >
          That's exactly what we build.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-base max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Social platforms are rented space — an algorithm change or a suspended account, and
          the audience you built is gone. A website is the one part of your business online that
          answers to nobody but you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="eyebrow mt-8"
          style={{ color: 'var(--accent)' }}
        >
          Own your online presence.
        </motion.p>
      </div>
    </section>
  )
}
