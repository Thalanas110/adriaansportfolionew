'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

interface WorkItem {
  role: string
  company: string
  type: string
  location: string
  period: string
  current: boolean
  description: string
  highlights: string[]
  tags: string[]
}

const WORK: WorkItem[] = [
  {
    role: 'Volunteer Software Developer',
    company: 'I Care Center',
    type: 'Volunteer',
    location: 'Olongapo City, Philippines',
    period: 'Jun 2025 - Present',
    current: true,
    description:
      'Improved OBS Remote for livestreams, built a scalable church site and app, and managed agile workflows with ministry teams',
    highlights: [
      'A new, improved church website',
    ],
    tags: ['React', 'TypeScript', 'OBS', 'Web Development']
  },
  {
    role: 'Volunteer Production Staff & QA Assistant',
    company: 'I Care Center',
    type: 'Volunteer',
    location: 'Olongapo City, Philippines',
    period: 'Jan 2024 - Present',
    current: true,
    description:
      'Operated and QA`d ProPresenter for live and online services, syncing media in real time and resolving tech issues with worship and media teams.',
    highlights: [
      'ProPresenter setup and operation for 100+ live and online services',
      'OBS Remote configuration and troubleshooting for livestreams',
      'Collaborated with worship and other nteams to resolve tech issues and ensure smooth service flow',
    ],
    tags: ['ProPresenter', 'OBS', 'Tech Support'],
  },
  {
    role: 'Data Encoder & Macro Programmer',
    company: 'ACE Medical Centre - Baypointe Hospital',
    type: 'Internship',
    location: 'Lot 1A-1B Dewey Avenue, Subic Bay Freeport Zone, Philippines',
    period: 'Jul 2025 - Aug 2025',
    current: false,
    description:
      'Interned about encoding patient data and created macros to improve encoding efficiency.',
    highlights: [
      'Fast and accurate encoding of patient data, ensuring data integrity and confidentiality',
    ],
    tags: ['Data Encoding', 'Macro Programming'],
  },
  {
    role: 'Data Encoder & Bookkeeper',
    company: 'TDA Car Rental',
    type: 'Part-time',
    location: 'Olongapo City, Philippines',
    period: 'April 2023 - Present',
    current: true,
    description:
      'Part-time role involving data encoding and bookkeeping tasks, ensuring accurate record-keeping and financial management for the car rental business.',
    highlights: [
      'Efficiently encoded rental transactions and customer data, maintaining organized records for easy retrieval and analysis',
      'Managed bookkeeping tasks, including tracking expenses, generating financial reports, and assisting with budgeting to support the financial health of the business'
    ],
    tags: ['Data Encoding', 'Bookkeeping'],
  },
]

const TYPE_COLOR: Record<string, string> = {
  'Full-time': '#39FF14',
  'Part-time': '#CAFF00',
  Internship: '#00FFFF',
  Contract: '#FF9500',
}

export function WorkExperience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: '#060604' }}
    >
      {/* Warning stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background:
            'repeating-linear-gradient(90deg, #FF9500 0px, #FF9500 20px, #060604 20px, #060604 40px)',
          opacity: 0.18,
        }}
      />

      {/* Dot-grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #39FF14 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Faint vertical timeline rail */}
      <div
        className="absolute left-1/2 top-40 bottom-20 w-px hidden md:block pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #39FF14 10%, #39FF14 90%, transparent)',
          opacity: 0.08,
          transform: 'translateX(-50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 md:gap-4 mb-8 md:mb-16"
        >
          <div
            className="h-px flex-1 max-w-[60px]"
            style={{ background: '#FF9500', boxShadow: '0 0 8px #FF9500' }}
          />
          <span
            className="text-[#FF9500]/50 text-xs tracking-[0.4em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            LOG://
          </span>
          <h2
            className="text-xl md:text-3xl font-black tracking-tight md:tracking-[0.15em] text-[#FF9500]"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 20px rgba(255,149,0,0.4)',
            }}
          >
            FIELD OPERATIONS
          </h2>
          <span
            className="hidden md:inline text-[#FF9500]/50 text-xs tracking-[0.4em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            //WORK-HISTORY
          </span>
          <div
            className="h-px flex-1"
            style={{
              background: 'linear-gradient(90deg, #FF9500, transparent)',
              boxShadow: '0 0 8px #FF9500',
            }}
          />
        </motion.div>

        {/* ── Timeline cards ── */}
        <div className="relative space-y-6">
          {WORK.map((job, i) => {
            const accentColor = TYPE_COLOR[job.type] ?? '#39FF14'
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="relative group"
              >
                {/* Timeline connector dot — visible on md+ */}
                <div
                  className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center z-10"
                  style={{
                    borderColor: accentColor,
                    background: '#060604',
                    boxShadow: `0 0 12px ${accentColor}60`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: accentColor }}
                  />
                </div>

                {/* Card */}
                <div
                  className="border rounded-xl p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(57,255,20,0.08)] relative overflow-hidden"
                  style={{
                    borderColor: `${accentColor}20`,
                    background: '#0a0a07',
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)`,
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top left, ${accentColor}12, transparent 70%)`,
                    }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon badge */}
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center"
                      style={{
                        borderColor: `${accentColor}30`,
                        background: `${accentColor}08`,
                      }}
                    >
                      <Briefcase size={20} style={{ color: accentColor }} />
                    </div>

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                      {/* Role + type badge */}
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3
                          className="text-white font-bold text-lg leading-tight"
                          style={{ fontFamily: 'Orbitron, monospace' }}
                        >
                          {job.role}
                        </h3>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-sm border tracking-widest font-semibold"
                          style={{
                            color: accentColor,
                            borderColor: `${accentColor}40`,
                            background: `${accentColor}10`,
                            fontFamily: 'Share Tech Mono, monospace',
                          }}
                        >
                          {job.type}
                        </span>
                        {job.current && (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-sm border tracking-widest font-semibold animate-pulse"
                            style={{
                              color: '#39FF14',
                              borderColor: '#39FF1440',
                              background: '#39FF1410',
                              fontFamily: 'Share Tech Mono, monospace',
                            }}
                          >
                            ● ACTIVE
                          </span>
                        )}
                      </div>

                      {/* Company */}
                      <div
                        className="text-base font-semibold mb-2"
                        style={{
                          color: accentColor,
                          fontFamily: 'Share Tech Mono, monospace',
                        }}
                      >
                        {job.company}
                      </div>

                      {/* Meta: period + location */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-[#39FF14]/40" />
                          <span
                            className="text-[#39FF14]/50 text-xs tracking-wide"
                            style={{ fontFamily: 'Share Tech Mono, monospace' }}
                          >
                            {job.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-[#39FF14]/40" />
                          <span
                            className="text-[#39FF14]/50 text-xs tracking-wide"
                            style={{ fontFamily: 'Share Tech Mono, monospace' }}
                          >
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[#39FF14]/55 text-sm leading-relaxed mb-4"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        {job.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 mb-4">
                        {job.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="flex items-start gap-2 text-[#39FF14]/60 text-xs"
                            style={{ fontFamily: 'Share Tech Mono, monospace' }}
                          >
                            <ChevronRight
                              size={12}
                              className="shrink-0 mt-0.5"
                              style={{ color: accentColor }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2.5 py-1 rounded-md border tracking-wide"
                            style={{
                              color: '#39FF14',
                              borderColor: '#39FF1420',
                              background: '#39FF1408',
                              fontFamily: 'Share Tech Mono, monospace',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom classified stamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-12"
        >
          <div
            className="border-2 border-[#FF9500]/20 px-6 py-2 rounded text-[#FF9500]/30 text-xs tracking-[0.5em] rotate-[-1deg]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            END OF FIELD LOG — {WORK.length} OPERATIONS RECORDED
          </div>
        </motion.div>
      </div>
    </section>
  )
}
