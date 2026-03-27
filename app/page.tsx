import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '147', label: 'Signal Sources' },
            { value: '2.3ms', label: 'Correlation Latency' },
            { value: '94%', label: 'Prediction Accuracy' },
            { value: '$2.1B', label: 'Trades Analyzed' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-[#dc2626]">{s.value}</div>
              <div className="text-sm text-[#94a3b8] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
