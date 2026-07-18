import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Transformations from '../../components/Transformations'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'
import FinalCTA from '../../components/FinalCTA'
import InquiryForm from '../../components/InquiryForm'
import CampaignHero from '../../components/campaigns/CampaignHero'
import ProblemSolution from '../../components/campaigns/ProblemSolution'
import FeatureGrid from '../../components/campaigns/FeatureGrid'
import CountdownTimer from '../../components/campaigns/CountdownTimer'
import ActivityTicker from '../../components/campaigns/ActivityTicker'
import { eventWebsites, demoActivityEvents } from '../../data/campaigns'

const c = eventWebsites

// Demo date: always ~21 days out so the countdown never reads as stale on
// this marketing page. This is illustrative only — a real client site would
// point at the actual event date.
const demoTargetDate = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString()

export default function EventWebsites() {
  const [selectedTier, setSelectedTier] = useState(null)

  useEffect(() => {
    document.title = c.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', c.meta.description)
  }, [])

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <CampaignHero {...c.hero} />

        <ProblemSolution {...c.problemSolution} />

        {/* Live demo of what an event page's countdown looks like. Clearly
            labelled as an example — this isn't a real event. */}
        <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="container-bw">
            <p className="eyebrow mb-4">See it in action</p>
            <h2 className="font-display text-2xl md:text-3xl mb-8 max-w-lg" style={{ color: 'var(--text-primary)' }}>
              A live countdown, built into the page.
            </h2>
            <div
              className="rounded-2xl border p-8 max-w-md"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <p className="text-xs uppercase tracking-wide font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                Example — not a real event
              </p>
              <p className="font-display text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                Founders Summit 2026
              </p>
              <CountdownTimer targetDate={demoTargetDate} label="Doors open in" />
            </div>
          </div>
        </section>

        <Transformations />

        <FeatureGrid {...c.features} cols={3} />

        <FeatureGrid {...c.benefits} cols={3} />

        <Testimonials />

        <InquiryForm selectedTier={selectedTier} onSelectTier={setSelectedTier} />

        <FAQ {...c.faq} />

        <FinalCTA {...c.finalCta} />
      </main>
      <Footer />

      {/* Activity ticker only mounts on this page, not site-wide, and only
          ever shows clearly-fake demo data (see data/campaigns.js). */}
      <ActivityTicker events={demoActivityEvents} />
    </div>
  )
}
