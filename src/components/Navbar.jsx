import { useEffect, useState } from "react"
import navLinks from "../data/nav.json"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#inicio")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl shadow-[0_0_40px_-15px_rgba(0,245,212,0.1)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <a href="#inicio" className="text-xl font-bold tracking-tighter text-[#00F5D4] font-headline">
          ARCHITECT.IO
        </a>

        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors pb-1 ${
                activeSection === link.href
                  ? "text-[#00F5D4] border-b-2 border-[#00F5D4]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-primary text-on-primary px-6 py-2 rounded-md font-medium hover:opacity-90 transition-all duration-300 scale-95 active:scale-90 hidden md:inline-block"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#00F5D4]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-t border-outline-variant/20 px-8 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block transition-colors pb-1 ${
                activeSection === link.href
                  ? "text-[#00F5D4] border-b-2 border-[#00F5D4]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="block bg-primary text-on-primary px-6 py-2 rounded-md font-medium text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
