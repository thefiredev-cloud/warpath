export default function Features() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      title: 'Signal Correlation',
      desc: 'Cross-reference geopolitical events, options flow, and congressional filings in milliseconds to surface hidden patterns.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      title: 'Threat Detection',
      desc: 'AI-powered anomaly detection flags emerging risks before they materialize in asset prices.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: 'Trade Signals',
      desc: 'Actionable trade signals derived from congressional disclosure patterns and institutional order flow.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      title: 'Geopolitical Mapping',
      desc: 'Real-time risk mapping across 195 countries, updated as events unfold from 147 verified intelligence sources.',
    },
  ]

  return (
    <section id="features" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for asymmetric edge</h2>
        <p className="text-[#94a3b8] max-w-xl mx-auto">Four intelligence layers that institutional traders wish didn't exist.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-[#dc2626]/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 text-[#dc2626] flex items-center justify-center mb-4 group-hover:bg-[#dc2626]/20 transition-colors">
              {f.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
