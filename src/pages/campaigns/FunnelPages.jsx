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
import FlowSteps from '../../components/campaigns/FlowSteps'
import { funnelPages } from '../../data/campaigns'

const c = funnelPages

export default function FunnelPages() {
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
        <FlowSteps {...c.flow} />
        <Transformations />
        <FeatureGrid {...c.features} cols={3} />
        <Testimonials />
        <InquiryForm selectedTier={selectedTier} onSelectTier={setSelectedTier} />
        <FAQ {...c.faq} />
        <FinalCTA {...c.finalCta} />
      </main>
      <Footer />
    </div>
  )
}
