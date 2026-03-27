export default function HowItWorks() {
  const steps = [
    { n: '01', title: 'Connect your sources', desc: 'Point Warpath at your brokerage data and preferred intelligence feeds. Setup takes 90 seconds.' },
    { n: '02', title: 'Correlate in real-time', desc: 'Our engine cross-references 147 signal sources against congressional disclosures and options flow as events happen.' },
    { n: '03', title: 'Act with conviction', desc: 'Receive structured intelligence briefs with confidence scores, context, and suggested positioning — before the crowd reacts.' },
  ]

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-6xl font-black text-[#dc2626]/10 mb-4">{s.n}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
