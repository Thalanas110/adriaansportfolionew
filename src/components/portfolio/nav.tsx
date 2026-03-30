'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'DOSSIER', href: '#bio' },
  { label: 'FIELD OPS', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'TRANSMIT', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('HOME')
  const [menuOpen, setMenuOpen] = useState(false)
  const [hideOnMobile, setHideOnMobile] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Hide nav on mobile when in hero section
      const heroEl = document.getElementById('home')
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight
        setHideOnMobile(window.scrollY < heroBottom - 100)
      }

      const sections = ['home', 'bio', 'experience', 'projects', 'contact']
      const labels: Record<string, string> = {
        home: 'HOME',
        bio: 'DOSSIER',
        experience: 'FIELD OPS',
        projects: 'PROJECTS',
        contact: 'TRANSMIT',
      }
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(labels[id])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060604]/95 backdrop-blur-md border-b border-[#39FF14]/20 shadow-[0_0_30px_rgba(57,255,20,0.1)]'
          : 'bg-transparent'
      } ${hideOnMobile ? 'max-md:opacity-0 max-md:pointer-events-none max-md:-translate-y-full' : 'max-md:opacity-100 max-md:translate-y-0'}`}
    >
      {/* Warning stripes top bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 20px, #000 20px, #000 40px)',
          opacity: 0.7,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="animate-[spin_20s_linear_infinite]"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#39FF14"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <g fill="#39FF14">
                <path d="M18 8 C15 8 12.5 9.5 11 12 C13.5 12 15.5 13 17 15 C17.5 13 17.8 11 18 8Z" />
                <path d="M18 8 C21 8 23.5 9.5 25 12 C22.5 12 20.5 13 19 15 C18.5 13 18.2 11 18 8Z" />
                <path d="M11 12 C9 15 9 19 11 22 C12.5 20 14.5 19 17 19.5 C15.5 17.5 13.5 15 11 12Z" />
                <path d="M25 12 C27 15 27 19 25 22 C23.5 20 21.5 19 19 19.5 C20.5 17.5 22.5 15 25 12Z" />
                <path d="M11 22 C13 25 15.5 26.5 18 27 C18 24.5 16.5 22.5 15 21 C13.5 21.5 12 21.8 11 22Z" />
                <path d="M25 22 C23 25 20.5 26.5 18 27 C18 24.5 19.5 22.5 21 21 C22.5 21.5 24 21.8 25 22Z" />
                <circle cx="18" cy="18" r="2.5" />
              </g>
            </svg>
            <div className="absolute inset-0 rounded-full animate-ping bg-[#39FF14]/10" />
          </div>
          <span
            className="text-[#39FF14] font-bold tracking-[0.3em] text-sm group-hover:text-[#CAFF00] transition-colors"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            ADRIAAN M. DIMATE
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="relative px-4 py-2 group"
            >
              <span
                className={`text-sm tracking-[0.15em] transition-colors duration-200 ${
                  active === item.label
                    ? 'text-[#39FF14]'
                    : 'text-[#39FF14]/70 group-hover:text-[#39FF14]/90'
                }`}
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
              >
                {active === item.label && (
                  <span className="mr-1 text-[#CAFF00]">▶</span>
                )}
                {item.label}
              </span>
              {active === item.label && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#39FF14] shadow-[0_0_8px_#39FF14]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Radiation level indicator */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-4 rounded-sm ${
                  i <= 3 ? 'bg-[#39FF14]' : 'bg-[#39FF14]/20'
                }`}
                style={{
                  boxShadow: i <= 3 ? '0 0 6px #39FF14' : 'none',
                }}
              />
            ))}
          </div>
          <span
            className="text-[#39FF14]/80 text-xs tracking-wide"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            RAD:LVL-3
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#39FF14] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 bg-[#39FF14] transition-all duration-300 shadow-[0_0_6px_#39FF14] ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}
            />
            <span
              className={`block h-0.5 bg-[#39FF14] transition-all duration-300 shadow-[0_0_6px_#39FF14] ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`}
            />
            <span
              className={`block h-0.5 bg-[#39FF14] transition-all duration-300 shadow-[0_0_6px_#39FF14] ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#060604]/98 border-t border-[#39FF14]/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left text-sm tracking-[0.3em] transition-colors py-2 border-b border-[#39FF14]/10 ${
                    active === item.label
                      ? 'text-[#39FF14]'
                      : 'text-[#39FF14]/75'
                  }`}
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  {active === item.label && '▶ '}
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
