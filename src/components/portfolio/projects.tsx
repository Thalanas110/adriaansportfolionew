'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import {
  type PortfolioProject,
  type Tab,
  QA_PROJECTS,
  SE_PROJECTS,
  ALL_PROJECTS_URL,
  TABS,
} from './portfolio-constants/projects-constants'

function ProjectGrid({
  projects,
  statusLabel,
}: {
  projects: PortfolioProject[]
  statusLabel: string
}) {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative border border-[#39FF14]/15 bg-[#39FF14]/2 p-5 hover:border-[#39FF14]/40 transition-all duration-300 overflow-hidden"
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(57,255,20,0.06), transparent)',
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: '#39FF14', boxShadow: '0 0 8px #39FF14' }}
            />

            {/* Project number */}
            <div className="flex items-start justify-between mb-3">
              <span
                className="text-[#39FF14]/20 text-4xl font-black"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                {String(proj.id).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{
                    background: '#39FF14',
                    boxShadow: '0 0 6px #39FF14',
                  }}
                />
                <span
                  className="text-xs tracking-[0.12em]"
                  style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    color: '#39FF14',
                  }}
                >
                  {statusLabel}
                </span>
              </div>
            </div>

            {/* Name */}
            <h3
              className="text-[#39FF14] font-bold text-base mb-1 tracking-wide group-hover:text-[#CAFF00] transition-colors"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              {proj.name}
            </h3>

            {/* Subtitle */}
            {proj.subtitle && (
              <p
                className="text-[#39FF14]/70 text-xs leading-relaxed mb-2"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
              >
                {proj.subtitle}
              </p>
            )}

            {/* Description */}
            <p
              className="text-[#39FF14]/80 text-sm leading-7 mb-4"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              {proj.description}
            </p>

            {/* Highlights */}
            {proj.highlights.length > 0 && (
              <div className="mb-4">
                <div
                  className="text-[#39FF14]/70 text-xs tracking-[0.1em] mb-2"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  HIGHLIGHTS
                </div>
                <div className="space-y-1">
                  {proj.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="text-[#39FF14]/75 text-xs leading-relaxed"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      - {highlight}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-[#39FF14]/20 text-[#39FF14]/75 px-2 py-0.5"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center justify-between">
              {proj.github !== '#' ? (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#39FF14]/75 hover:text-[#39FF14] transition-colors tracking-wide"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  GITHUB →
                </a>
              ) : (
                <span
                  className="text-sm text-[#39FF14]/55 tracking-wide"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  PRIVATE
                </span>
              )}
              {proj.demo.includes('#') ? (
                <span
                  className="text-sm text-[#CAFF00]/60 tracking-wide"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  COMING SOON
                </span>
              ) : (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#CAFF00]/75 hover:text-[#CAFF00] transition-colors tracking-wide"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  DEMO →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <a
          href={ALL_PROJECTS_URL}
          className="relative group flex items-center gap-2 sm:gap-3 border border-[#CAFF00]/30 bg-transparent px-5 sm:px-8 py-3 overflow-hidden hover:shadow-[0_0_30px_rgba(202,255,0,0.2)] transition-all duration-300"
        >
          <span className="absolute inset-0 bg-[#CAFF00]/5 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
          <span
            className="relative text-[#CAFF00]/70 group-hover:text-[#CAFF00] text-xs sm:text-sm font-bold tracking-[0.12em] sm:tracking-[0.25em] text-center transition-colors"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            ◈ ACCESS FULL ARCHIVE
          </span>
          <svg
            className="relative w-4 h-4 text-[#CAFF00]/50 group-hover:text-[#CAFF00] transition-colors group-hover:translate-x-1 duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  )
}

function ComingSoon({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative border border-dashed border-[#39FF14]/20 bg-[#39FF14]/2 min-h-[400px] flex flex-col items-center justify-center gap-6 overflow-hidden"
    >
      {/* Animated warning stripes */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background:
            'repeating-linear-gradient(90deg, #FF4500 0px, #FF4500 20px, #1a0a00 20px, #1a0a00 40px)',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{
          background:
            'repeating-linear-gradient(90deg, #FF4500 0px, #FF4500 20px, #1a0a00 20px, #1a0a00 40px)',
          opacity: 0.5,
        }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Spinning radiation symbol */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="text-8xl text-[#FF4500]/30"
      >
        ☢
      </motion.div>

      <div className="text-center z-10">
        <div
          className="text-[#FF4500] text-xs tracking-[0.16em] sm:tracking-[0.4em] mb-3 animate-pulse"
          style={{ fontFamily: 'Share Tech Mono, monospace' }}
        >
          ⚠ SECTOR UNDER RECONSTRUCTION ⚠
        </div>
        <h3
          className="text-3xl font-black text-[#FF4500]/60 tracking-widest"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          {label}
        </h3>
        <div
          className="text-[#FF4500]/40 text-sm mt-3 tracking-wider"
          style={{ fontFamily: 'Share Tech Mono, monospace' }}
        >
          TRANSMISSION INCOMING...
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#FF4500]/50"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('SE')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden bg-[#060604]/56 md:bg-[#060604]/78"
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12"
        >
          <div
            className="h-px w-16"
            style={{ background: '#39FF14', boxShadow: '0 0 8px #39FF14' }}
          />
          <span
            className="text-[#39FF14]/65 text-xs tracking-[0.18em] sm:tracking-[0.35em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            DB://
          </span>
          <h2
            className="text-2xl md:text-3xl font-black tracking-[0.08em] md:tracking-[0.15em] text-[#39FF14]"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 20px rgba(57,255,20,0.4)',
            }}
          >
            MISSION ARCHIVE
          </h2>
          <div
            className="h-px flex-1"
            style={{
              background: 'linear-gradient(90deg, #39FF14, transparent)',
              boxShadow: '0 0 8px #39FF14',
            }}
          />
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          {/* Mobile dropdown (< md ~768px) */}
          <div className="relative md:hidden" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="w-full flex items-center justify-between border border-[#39FF14]/20 bg-[#39FF14]/[0.02] px-4 py-3 text-[#39FF14] text-sm tracking-[0.1em] transition-colors hover:border-[#39FF14]/40"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span>
                <span className="mr-2">{TABS.find((t) => t.id === activeTab)?.icon}</span>
                {TABS.find((t) => t.id === activeTab)?.label}
              </span>
              <span
                className={`text-[#39FF14]/65 text-xs transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-20 border border-t-0 border-[#39FF14]/15 bg-[#060604]">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      setDropdownOpen(false)
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm tracking-[0.1em] transition-colors border-b border-[#39FF14]/10 last:border-b-0 ${
                      activeTab === tab.id
                        ? 'bg-[#39FF14] text-[#060604]'
                        : 'text-[#39FF14]/50 hover:text-[#39FF14]/80 hover:bg-[#39FF14]/5'
                    }`}
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    <span>
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </span>
                    {tab.id === 'AVIATION' && activeTab !== tab.id && (
                      <span
                        className="text-[10px] border border-current px-1 py-0.5 tracking-wide"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        SOON
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop tab bar (>= md ~768px) */}
          <div className="hidden md:flex gap-0 border border-[#39FF14]/15 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 text-sm tracking-[0.15em] transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#39FF14] text-[#060604]'
                    : 'text-[#39FF14]/50 hover:text-[#39FF14]/80 hover:bg-[#39FF14]/5'
                }`}
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
                {tab.id === 'AVIATION' && activeTab !== tab.id && (
                  <span
                    className="ml-2 text-[10px] border border-current px-1 py-0.5 tracking-wide"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    SOON
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 'SE' && <ProjectGrid projects={SE_PROJECTS} statusLabel="DEPLOYED" />}
            {activeTab === 'QA' && <ProjectGrid projects={QA_PROJECTS} statusLabel="TESTED" />}
            {activeTab === 'AVIATION' && <ComingSoon label="FLIGHT LOG" />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
