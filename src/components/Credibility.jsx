const STANDARDS = [
  'Mobile First',
  'Lightning Fast',
  'SEO Ready',
  'Secure',
  'GitHub Version Controlled',
  'Modern Development Stack',
  'Accessibility Focused',
]

export default function Credibility() {
  return (
    <section className="py-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center">
          {STANDARDS.map((item) => (
            <span key={item} className="text-xs font-mono tracking-wide" style={{ color: 'var(--text-muted)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
