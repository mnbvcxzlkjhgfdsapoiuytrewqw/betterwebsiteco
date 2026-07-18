import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Bee, { BEE_MASCOT } from './Bee/Bee'
import Button from './Button'
import Logo from './Logo'

const CHECKLIST = [
  'Build trust quickly.',
  'Be easy to navigate.',
  'Load fast.',
  'Work beautifully on mobile.',
  'Help visitors take action.',
  'Leave a memorable first impression.',
]

const DISLIKES = ['Slow websites.', 'Broken links.', 'Tiny text.', 'Confusing navigation.', 'Hidden buttons.', 'No call-to-action.']

const IN_ACTION = [
  'Points toward the primary call to action in the hero — once, then stays still.',
  'Introduces Website Transformations before you scroll into the case studies.',
  'Celebrates quietly when your message goes through.',
  'Leans in with an idea when you open a question in the FAQ.',
  'Shows up beside each pricing plan, matched to how that plan feels to choose.',
]

const FUTURE = ['Social Media', 'Website Reviews', 'Case Studies', 'YouTube', 'Email Newsletters', 'Presentations', 'Merchandise', 'Client Welcome Kits']

export default function MeetBee() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header className="container-bw flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-8 w-8 rounded-md" />
          <span className="font-display text-[15px] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Better Website Co.
          </span>
        </Link>
        <Link to="/" className="text-sm underline underline-offset-4" style={{ color: 'var(--text-muted)' }}>
          Back home
        </Link>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-20 text-center overflow-hidden">
        <div className="container-bw max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto mb-8 flex items-center justify-center max-w-[280px]"
          >
            <Bee size="xl" animateIn={false} className="!h-64" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-semibold text-[44px] sm:text-[64px] leading-[0.98] tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Meet Bee.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-lg max-w-lg mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            The smallest member of the Better Website Co. team. The biggest believer that every
            business deserves a website that works.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-bw max-w-xl">
          <p className="eyebrow mb-4">Bee's Story</p>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            Bee was created to remind us that great websites aren't built by accident. They're
            built by paying attention to the small things. The details people rarely notice are
            often the ones that build the most trust. That's Bee's job — noticing the little
            things, so your customers notice the big picture.
          </p>
        </div>
      </section>

      {/* Personality profile card */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-bw max-w-xl">
          <div className="rounded-2xl border p-8 md:p-10" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Name</p>
                <p className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>Bee</p>
              </div>
              <Bee size="sm" animateIn={false} />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Role</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Website Inspector</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Mission</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Helping businesses build websites people trust.</p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>Favourite thing</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Watching businesses launch websites they're proud of.</p>
              </div>
            </div>
            <div>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Dislikes</p>
              <div className="flex flex-wrap gap-2">
                {DISLIKES.map((d) => (
                  <span key={d} className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-bw max-w-xl">
          <p className="eyebrow mb-6">Bee's Checklist</p>
          <ul className="flex flex-col gap-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--accent)' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bee in action */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-bw max-w-xl">
          <p className="eyebrow mb-6">Bee in Action</p>
          <ul className="flex flex-col gap-4">
            {IN_ACTION.map((line) => (
              <li key={line} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Future vision */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-bw max-w-xl">
          <p className="eyebrow mb-6">Where You'll See Bee Next</p>
          <div className="flex flex-wrap gap-2">
            {FUTURE.map((f) => (
              <span key={f} className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Secret reward */}
      <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-bw max-w-md text-center">
          <Bee size="lg" className="mx-auto mb-6" />
          <p className="font-display text-2xl mb-3" style={{ color: 'var(--text-primary)' }}>
            You found Bee's hideout.
          </p>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            Thanks for being curious. Here's a wallpaper, just for you.
          </p>
          <a href={BEE_MASCOT.src} download="bee-mascot.webp">
            <Button variant="secondary">Download Bee wallpaper</Button>
          </a>
        </div>
      </section>
    </div>
  )
}
