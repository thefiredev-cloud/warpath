export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#94a3b8]">
        <span>Built by <a href="https://thefiredev.com" className="text-white hover:text-[#dc2626] transition-colors">The Fire Dev LLC</a></span>
        <a href="https://github.com/thefiredev-cloud/warpath" className="hover:text-white transition-colors">GitHub →</a>
      </div>
    </footer>
  )
}
