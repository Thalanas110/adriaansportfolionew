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
  FRAMEWORKS,
  LANGUAGES,
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

export function Bio() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="bio"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: '#07070A' }}
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
            className="text-[#39FF14]/40 text-xs tracking-[0.4em]"
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
            className="hidden md:inline text-[#39FF14]/40 text-xs tracking-[0.4em]"
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

        {/* ══ BENTO GRID ══
            Desktop layout (3 cols):
            Row 1: [Who I Am (rowspan 2)] [Tech Stack] [Education]
            Row 2:                        [What I Love (colspan 1)] [Connect + Resume split]
            Actually we'll do:
            [WHO I AM — tall]  [TECH STACK]   [EDUCATION]
                               [WHAT I LOVE]  [CONNECT | RESUME]
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {/* ── WHO I AM — row-span-2 on md ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className={`${CARD_BASE} flex flex-col gap-4 md:row-span-2`}
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
              className="text-[#39FF14]/60 text-sm leading-relaxed space-y-3"
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

            {/* Trait cards */}
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
                      className="text-white text-xs font-bold"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      {t.label}
                    </div>
                    <div
                      className="text-[#39FF14]/40 text-[11px] mt-0.5"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {t.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── TECH STACK ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className={CARD_BASE}
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

            <div
              className="text-[#39FF14]/40 text-[10px] tracking-[0.3em] mb-2"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              FRAMEWORKS
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {FRAMEWORKS.map((f) => (
                <span
                  key={f}
                  className="border border-[#39FF14]/20 text-[#39FF14]/70 text-xs px-3 py-1 rounded-md hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all cursor-default"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  {f}
                </span>
              ))}
            </div>

            <div
              className="text-[#39FF14]/40 text-[10px] tracking-[0.3em] mb-2"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              LANGUAGES & DB
            </div>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span
                  key={l}
                  className="border border-[#39FF14]/20 text-[#39FF14]/70 text-xs px-3 py-1 rounded-md hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-all cursor-default"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── EDUCATION ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.19 }}
            className={CARD_BASE}
          >
            <Dot />
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={18} className="text-[#CAFF00]" />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Education
              </span>
            </div>

            <div className="space-y-5">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex flex-col items-center mt-1 shrink-0">
                    <div
                      className="w-3 h-3 rounded-full border-2"
                      style={{
                        borderColor: edu.active ? '#CAFF00' : '#39FF14',
                        background: edu.active
                          ? 'rgba(202,255,0,0.2)'
                          : 'transparent',
                        boxShadow: edu.active
                          ? '0 0 8px rgba(202,255,0,0.4)'
                          : 'none',
                      }}
                    />
                    {i < EDUCATION.length - 1 && (
                      <div className="w-px h-8 bg-[#39FF14]/15 mt-1" />
                    )}
                  </div>
                  <div>
                    <div
                      className="text-white text-sm font-semibold"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      {edu.degree}
                    </div>
                    <div
                      className="text-[#39FF14]/50 text-xs mt-0.5"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {edu.school}
                    </div>
                    <div
                      className="text-[#CAFF00] text-[10px] mt-1 tracking-widest"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── ROW 2 cols 2+3: What I Love | [Connect + Resume] ── */}
          {/* WHAT I LOVE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.26 }}
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
            <div className="grid grid-cols-3 gap-3">
              {HOBBIES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-3 py-6 border border-[#39FF14]/10 rounded-lg bg-[#39FF14]/[0.03] hover:border-[#39FF14]/30 transition-all cursor-default"
                >
                  <Icon size={24} className="text-[#39FF14]/60" />
                  <span
                    className="text-[#39FF14]/50 text-xs"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONNECT + GET RESUME — stacked in same grid cell via inner grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.33 }}
            className="grid grid-rows-2 gap-4"
          >
            {/* CONNECT */}
            <div className={`${CARD_BASE}`}>
              <Dot />
              <div
                className="text-white font-bold text-base mb-4"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Connect
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {[
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
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 border border-[#39FF14]/20 bg-[#39FF14]/5 rounded-lg text-[#39FF14]/60 hover:border-[#39FF14]/50 hover:text-[#39FF14] hover:bg-[#39FF14]/10 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* GET RESUME */}
            <div
              className={`${CARD_BASE} flex flex-col items-center justify-center gap-2 cursor-pointer group`}
              style={{ background: '#141208' }}
              onClick={() => {
                const a = document.createElement('a')
                a.href = resumePdf
                a.download = 'Adriaan_Dimate_Resume.pdf'
                a.click()
              }}
            >
              <div
                className="w-12 h-12 rounded-xl border border-[#39FF14]/20 bg-[#39FF14]/5 flex items-center justify-center group-hover:border-[#39FF14]/50 group-hover:bg-[#39FF14]/10 transition-all"
                style={{ boxShadow: '0 0 20px rgba(57,255,20,0.06)' }}
              >
                <Download
                  size={20}
                  className="text-[#39FF14]/70 group-hover:text-[#39FF14] transition-colors"
                />
              </div>
              <span
                className="text-white font-bold text-sm tracking-wide group-hover:text-[#39FF14] transition-colors"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Get Resume
              </span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(57,255,20,0.05)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
