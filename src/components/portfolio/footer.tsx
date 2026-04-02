'use client'

import { motion } from 'motion/react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'rgba(3, 3, 3, 0.85)' }}
    >
      {/* Warning stripe */}
      <div
        className="h-3"
        style={{
          background:
            'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 24px, #111400 24px, #111400 48px)',
          opacity: 0.35,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 36 36"
                className="animate-[spin_25s_linear_infinite] opacity-60"
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
            </div>
            <div>
              <div
                className="text-[#39FF14]/70 font-bold tracking-[0.14em] sm:tracking-[0.3em] text-xs sm:text-sm"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                ADRIAAN M. DIMATE
              </div>
              <div
                className="text-[#39FF14]/55 text-xs tracking-wide"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
              >
                BUILT IN THE RUINS
              </div>
            </div>
          </div>

          {/* Center: quick links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { label: 'HOME', href: '#home' },
              { label: 'DOSSIER', href: '#bio' },
              { label: 'PROJECTS', href: '#projects' },
              { label: 'TRANSMIT', href: '#contact' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() =>
                  document
                    .getElementById(link.href.replace('#', ''))
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-[#39FF14]/70 hover:text-[#39FF14] text-xs tracking-[0.12em] sm:tracking-[0.2em] transition-colors"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: copyright */}
          <div
            className="text-[#39FF14]/55 text-xs tracking-wide"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            © {year} // ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Bottom radiation warning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 border-t border-[#39FF14]/8 pt-6 flex items-center justify-center gap-2 sm:gap-3"
        >
          <span className="text-[#39FF14]/40 text-lg">☢</span>
          <span
            className="text-[#39FF14]/45 text-[11px] sm:text-xs tracking-[0.08em] sm:tracking-[0.25em] text-center leading-relaxed"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            CAUTION: HIGH RADIATION ZONE — CERTIFIED NUCLEAR-GRADE PORTFOLIO
          </span>
          <span className="text-[#39FF14]/40 text-lg">☢</span>
        </motion.div>
      </div>
    </footer>
  )
}
