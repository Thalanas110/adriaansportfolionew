'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  Download,
  GraduationCap,
  MapPin,
  Facebook,
} from 'lucide-react'
import resumePdf from '@/assets/adriaan resume new edit (1).pdf?url'
import {
  TECH_STACK_GROUPS,
  EDUCATION,
  TRAITS,
  HOBBIES,
  CARD_BASE,
} from './portfolio-constants/bio-constants'

function Dot() {
  return (
    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#39FF14]/20" />
  )
}

function getStackMark(label: string) {
  const parts = label
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (parts.length === 0) return '•'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return parts
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

export function Bio() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const connectLinks = [
    {
      icon: Github,
      href: 'https://github.com/',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/',
      label: 'Facebook',
    },
    {
      icon: Mail,
      href: 'mailto:your@email.com',
      label: 'Email',
    },
  ]

  return (
    <section
      id="bio"
      ref={ref}
      className="relative py-24 overflow-hidden bg-[#07070A]/55 md:bg-[#07070A]/76"
    >
      {/* Warning stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background:
            'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 20px, #070709 20px, #070709 40px)',
          opacity: 0.18,
        }}
      />

      {/* Dot grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #39FF14 1px, transparent 1px)',
          backgroundSize: '40px 40px',
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
            className="h-px flex-1 max-w-[60px]"
            style={{ background: '#39FF14', boxShadow: '0 0 8px #39FF14' }}
          />
          <span
            className="text-[#39FF14]/65 text-xs tracking-[0.18em] sm:tracking-[0.35em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            FILE://
          </span>
          <h2
            className="text-xl md:text-3xl font-black tracking-tight md:tracking-[0.15em] text-[#39FF14]"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 20px rgba(57,255,20,0.4)',
            }}
          >
            PERSONNEL DOSSIER
          </h2>
          <span
            className="hidden md:inline text-[#39FF14]/65 text-xs tracking-[0.35em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            //CLEARANCE-MAX
          </span>
          <div
            className="h-px flex-1"
            style={{
              background: 'linear-gradient(90deg, #39FF14, transparent)',
              boxShadow: '0 0 8px #39FF14',
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LEFT: WHO I AM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className={`${CARD_BASE} flex flex-col gap-4`}
          >
            <Dot />
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#CAFF00]" />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Who I Am
              </span>
            </div>

            <div
              className="text-[#39FF14]/80 text-base leading-7 space-y-3"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              <p>
                I'm an autistic developer with a dual passion: creating
                beautiful digital experiences and conquering the skies. Merging
                the precision of aviation with the creativity of software
                engineering.
              </p>
              <p>
                Currently pursuing Computer Science while laying the groundwork
                for my commercial pilot license. When I'm not coding, you'll
                find me studying flight charts or exploring new tech stacks.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 mt-auto pt-2">
              {TRAITS.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 border border-[#39FF14]/10 bg-[#39FF14]/[0.03] rounded-lg p-3"
                >
                  <t.icon
                    size={16}
                    className="text-[#CAFF00] mt-0.5 shrink-0"
                  />
                  <div>
                    <div
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      {t.label}
                    </div>
                    <div
                      className="text-[#39FF14]/65 text-xs mt-0.5 leading-relaxed"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {t.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* MIDDLE: EDUCATION + WHAT I LOVE + CONNECT */}
          <div className="grid gap-4 md:grid-rows-[auto_1fr_auto_auto] md:min-h-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 }}
              className={CARD_BASE}
            >
              <Dot />
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-[#CAFF00]" />
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  Education
                </span>
              </div>

              <div className="space-y-3">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="border border-[#39FF14]/16 bg-[#39FF14]/[0.03] rounded-lg px-3 py-2"
                  >
                    <div
                      className="text-white text-sm font-semibold"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      className="text-[#39FF14]/70 text-xs mt-0.5"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {edu.school}
                    </div>
                      <div
                        className="text-[#CAFF00] text-[11px] mt-1 tracking-wide"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        {edu.period}
                      </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={CARD_BASE}
            >
              <Dot />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-red-400 text-sm">♥</span>
                <span
                  className="text-white font-bold text-base"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  What I Love
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {HOBBIES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 border border-[#39FF14]/10 rounded-lg bg-[#39FF14]/[0.03] px-3 py-2"
                  >
                    <Icon size={16} className="text-[#39FF14]/75" />
                    <span
                      className="text-[#39FF14]/75 text-sm"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
                {Array.from({ length: Math.max(0, 8 - HOBBIES.length) }).map(
                  (_, i) => (
                    <div
                      key={`hobby-placeholder-${i}`}
                      aria-hidden="true"
                      className="h-[44px] border border-[#39FF14]/10 rounded-lg bg-[#39FF14]/[0.015]"
                    />
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className={CARD_BASE}
            >
              <Dot />
              <div
                className="text-white font-bold text-base mb-4"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Connect
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {connectLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 border border-[#39FF14]/20 bg-[#39FF14]/5 rounded-lg text-[#39FF14]/80 hover:border-[#39FF14]/50 hover:text-[#39FF14] hover:bg-[#39FF14]/10 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
                {Array.from({ length: Math.max(0, 6 - connectLinks.length) }).map(
                  (_, i) => (
                    <div
                      key={`connect-placeholder-${i}`}
                      aria-hidden="true"
                      className="w-9 h-9 border border-[#39FF14]/18 rounded-lg bg-[#39FF14]/[0.02]"
                    />
                  ),
                )}
              </div>
            </motion.div>

            <motion.button
              type="button"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
              className={`${CARD_BASE} cursor-pointer group flex flex-col items-center justify-center gap-2 text-center`}
              style={{ background: '#141208' }}
              onClick={() => {
                const a = document.createElement('a')
                a.href = resumePdf
                a.download = 'Adriaan_Dimate_Resume.pdf'
                a.click()
              }}
            >
              <div className="w-10 h-10 rounded-lg border border-[#39FF14]/20 bg-[#39FF14]/5 flex items-center justify-center group-hover:border-[#39FF14]/50 group-hover:bg-[#39FF14]/10 transition-all">
                <Download
                  size={18}
                  className="text-[#39FF14]/70 group-hover:text-[#39FF14] transition-colors"
                />
              </div>
              <div
                className="text-white font-bold text-base tracking-wide group-hover:text-[#39FF14] transition-colors"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Download Resume
              </div>
            </motion.button>
          </div>

          {/* RIGHT: TECH STACK */}
          <div className="md:min-h-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className={`${CARD_BASE} h-full`}
            >
              <Dot />
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={18} className="text-[#CAFF00]" />
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  Tech Stack
                </span>
              </div>

              <div className="space-y-6">
                {TECH_STACK_GROUPS.map((group) => (
                  <div key={group.title}>
                    <div
                      className="text-[#39FF14]/65 text-xs tracking-[0.2em] mb-2"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {group.title.toUpperCase()}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="group flex items-center gap-2 border border-[#39FF14]/15 bg-[#39FF14]/[0.03] rounded-md px-2 py-1.5"
                        >
                          <span
                            className="relative inline-flex items-center justify-center w-6 h-6 rounded-sm border border-[#39FF14]/25 bg-[#39FF14]/[0.06] text-[#CAFF00] text-[9px] leading-none tracking-wide"
                            style={{ fontFamily: 'Share Tech Mono, monospace' }}
                          >
                            {getStackMark(item)}
                            <span className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#39FF14]/70" />
                          </span>
                          <span
                            className="text-[#39FF14]/85 text-xs"
                            style={{ fontFamily: 'Share Tech Mono, monospace' }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
