import { motion } from 'framer-motion'
import { projects, upcomingProjects } from '../data/projects'

export default function SocialProof() {
  return (
    <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <p className="eyebrow text-center mb-10">Businesses We've Transformed</p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {projects.map((p, i) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="font-display text-xl md:text-2xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {p.name}
            </motion.span>
          ))}
          {upcomingProjects.map((p, i) => (
            <span
              key={p.id}
              className="font-display text-xl md:text-2xl"
              style={{ color: 'var(--text-muted)' }}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
