import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Philosophy from './components/Philosophy'
import Transformations from './components/Transformations'
import Credibility from './components/Credibility'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import AboutFounder from './components/AboutFounder'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import InquiryForm from './components/InquiryForm'
// import Resources from './components/Resources' // re-enable once real articles are written
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MeetBee from './components/MeetBee'
import NotFound from './components/NotFound'
import WebsitesThatSell from './pages/campaigns/WebsitesThatSell'
import BusinessWebsites from './pages/campaigns/BusinessWebsites'
import EventWebsites from './pages/campaigns/EventWebsites'
import WebsiteRedesign from './pages/campaigns/WebsiteRedesign'
import FunnelPages from './pages/campaigns/FunnelPages'
import LandingPages from './pages/campaigns/LandingPages'
import BookLaunch from './pages/campaigns/BookLaunch'
import Partners from './pages/Partners'

function Home() {
  const [selectedTier, setSelectedTier] = useState(null)

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Philosophy />
        <Transformations />
        <Credibility />
        <Process />
        <WhyUs />
        <AboutFounder />
        <Testimonials />
        <Pricing onSelect={setSelectedTier} />
        <InquiryForm selectedTier={selectedTier} onSelectTier={setSelectedTier} />
        {/* <Resources /> re-enable once real articles are written */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-bee" element={<MeetBee />} />
          <Route path="/campaigns/websites-that-sell" element={<WebsitesThatSell />} />
          <Route path="/campaigns/business-websites" element={<BusinessWebsites />} />
          <Route path="/campaigns/event-websites" element={<EventWebsites />} />
          <Route path="/campaigns/website-redesign" element={<WebsiteRedesign />} />
          <Route path="/campaigns/funnel-pages" element={<FunnelPages />} />
          <Route path="/campaigns/landing-pages" element={<LandingPages />} />
          <Route path="/campaigns/book-launch" element={<BookLaunch />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
