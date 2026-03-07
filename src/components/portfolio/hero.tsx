'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GLITCH_CHARS, TERMINAL_LINES } from './portfolio-constants/hero-constants'

function useGlitch(text: string, active: boolean) {
  const [display, setDisplay] = useState(text)
  useEffect(() => {
    if (!active) {
      setDisplay(text)
      return
    }
    let iterations = 0
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iterations) return text[i]
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          })
          .join(''),
      )
      if (iterations >= text.length) clearInterval(interval)
      iterations += 0.5
    }, 40)
    return () => clearInterval(interval)
  }, [text, active])
  return display
}

function LoadingScreen({ lines }: { lines: string[] }) {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#060604' }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,255,20,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Terminal box */}
      <div
        className="relative border border-[#39FF14]/30 px-8 py-6 min-w-[340px]"
        style={{ background: 'rgba(57,255,20,0.03)' }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14]/70" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#39FF14]/70" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#39FF14]/70" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14]/70" />

        {/* Biohazard header */}
        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#39FF14]/15">
          <span
            className="text-2xl"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(57,255,20,0.8))',
              animation: 'spin 4s linear infinite',
            }}
          >
            ☢
          </span>
          <span
            className="text-[#39FF14] text-lg font-bold tracking-[0.3em]"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 12px rgba(57,255,20,0.6)',
            }}
          >
            ADRIAAN M. DIMATE
          </span>
        </div>

        {/* Terminal lines */}
        <div className="space-y-1.5">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#39FF14]/70 text-xs"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              {line}
              {i === lines.length - 1 && (
                <span className="inline-block w-2 h-3 bg-[#39FF14]/70 ml-1 animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 w-[340px] h-0.5 bg-[#39FF14]/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, #39FF14, #CAFF00)',
            boxShadow: '0 0 8px rgba(57,255,20,0.8)',
          }}
        />
      </div>
    </motion.div>
  )
}

export function Hero() {
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [glitchActive, setGlitchActive] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const nameText = 'ADRIAAN M. DIMATE'
  const glitchedName = useGlitch(nameText, glitchActive)

  // Terminal boot sequence
  useEffect(() => {
    let lineIdx = 0
    const addLine = () => {
      if (lineIdx < TERMINAL_LINES.length) {
        setTerminalLines((prev) => [...prev, TERMINAL_LINES[lineIdx]])
        lineIdx++
        setTimeout(addLine, 420)
      } else {
        setTimeout(() => {
          setGlitchActive(true)
          setTimeout(() => {
            setGlitchActive(false)
            setLoadingDone(true)
            setTimeout(() => setShowContent(true), 500)
          }, 1000)
        }, 300)
      }
    }
    setTimeout(addLine, 400)
  }, [])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      symbol: string
    }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const symbols = ['☢', '☣', '⚠', '◉', '◎', '●', '○']
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.1,
        size: Math.random() * 14 + 8,
        opacity: Math.random() * 0.25 + 0.05,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = '#39FF14'
        ctx.font = `${p.size}px monospace`
        ctx.fillText(p.symbol, p.x, p.y)
        ctx.restore()
        p.x += p.vx
        p.y += p.vy
        if (p.y < -20) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
        }
        if (p.x < -20 || p.x > canvas.width + 20) {
          p.x = Math.random() * canvas.width
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Loading screen — completely unmounts after done */}
      <AnimatePresence>
        {!loadingDone && <LoadingScreen lines={terminalLines} />}
      </AnimatePresence>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:py-0"
        style={{ background: '#060604' }}
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
          }}
        />

        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(57,255,20,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Horizontal glow lines */}
        <div
          className="absolute left-0 right-0 h-px z-0"
          style={{
            top: '30%',
            background:
              'linear-gradient(90deg, transparent, rgba(57,255,20,0.15), transparent)',
          }}
        />
        <div
          className="absolute left-0 right-0 h-px z-0"
          style={{
            top: '70%',
            background:
              'linear-gradient(90deg, transparent, rgba(57,255,20,0.1), transparent)',
          }}
        />

        {/* Corner warning brackets */}
        {[
          'top-8 left-8',
          'top-8 right-8',
          'bottom-8 left-8',
          'bottom-8 right-8',
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-12 h-12 pointer-events-none z-20`}
          >
            <div
              className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-full h-full`}
            >
              <div
                className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-6 h-0.5 bg-[#39FF14]/40`}
              />
              <div
                className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${i % 2 === 0 ? 'left-0' : 'right-0'} w-0.5 h-6 bg-[#39FF14]/40`}
              />
            </div>
          </div>
        ))}

        {/* Main content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
          <AnimatePresence>
            {showContent && (
              <motion.div
                key="hero-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10 lg:gap-16"
              >
                {/* ── LEFT: Text content ── */}
                <div className="flex-1 min-w-0">
                  {/* Greeting line */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <span
                      className="text-[#39FF14]/50 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em]"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      ☢ HI THERE — WELCOME TO MY WONDERLAND
                    </span>
                  </motion.div>

                  {/* Big Name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-black leading-[0.9] mb-4"
                    style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
                      color: '#39FF14',
                      textShadow:
                        '0 0 30px rgba(57,255,20,0.45), 0 0 70px rgba(57,255,20,0.15)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {glitchedName}
                  </motion.h1>

                  {/* Autistic badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="mb-5"
                  >
                    <span
                      className="text-[#39FF14]/35 text-[11px] tracking-[0.25em]"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      AUTISTIC (ASD)
                    </span>
                  </motion.div>

                  {/* Role lines */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-1"
                  >
                    <span
                      className="text-[#CAFF00] font-semibold"
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                        textShadow: '0 0 15px rgba(202,255,0,0.4)',
                      }}
                    >
                      Aspiring Airline Pilot
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.38 }}
                    className="mb-2"
                  >
                    <span
                      className="text-[#39FF14]/80 font-medium"
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
                      }}
                    >
                      Software Developer
                    </span>
                    <span
                      className="text-[#39FF14]/40 mx-2"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      •
                    </span>
                    <span
                      className="text-[#39FF14]/80 font-medium"
                      style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: 'clamp(0.85rem, 2vw, 1.15rem)',
                      }}
                    >
                      QA Analyst
                    </span>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="h-px w-20 mb-5 origin-left"
                    style={{
                      background: '#CAFF00',
                      boxShadow: '0 0 8px rgba(202,255,0,0.5)',
                    }}
                  />

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-[#39FF14]/55 text-sm leading-relaxed mb-8 max-w-md"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    Navigating the skies and code with precision, dedication,
                    <br />
                    and unwavering commitment to excellence.
                  </motion.p>

                  {/* Domain tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.58 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {['Aviation', 'Development', 'Quality Assurance'].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="border border-[#39FF14]/30 text-[#39FF14]/70 text-xs px-4 py-1.5 hover:border-[#39FF14]/60 hover:text-[#39FF14] transition-all cursor-default"
                          style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.66 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button
                      onClick={() => scrollTo('projects')}
                      className="relative group px-8 py-3 border border-[#39FF14] bg-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      <span className="absolute inset-0 bg-[#39FF14] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                      <span className="relative text-[#39FF14] group-hover:text-[#060604] text-sm font-bold tracking-[0.2em] transition-colors duration-300">
                        ▶ EXPLORE MY WORK
                      </span>
                    </button>

                    <button
                      onClick={() => scrollTo('contact')}
                      className="relative group px-8 py-3 border border-[#CAFF00]/40 bg-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(202,255,0,0.2)]"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      <span className="absolute inset-0 bg-[#CAFF00]/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                      <span className="relative text-[#CAFF00]/70 group-hover:text-[#CAFF00] text-sm font-bold tracking-[0.2em] transition-colors duration-300">
                        ◈ OPEN CHANNEL
                      </span>
                    </button>
                  </motion.div>
                </div>

                {/* ── RIGHT: Photo ── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="flex flex-col items-center gap-3 md:gap-5 shrink-0"
                >
                  {/* Outer ring + photo */}
                  <div className="relative">
                    {/* Outer spinning ring */}
                    <div
                      className="absolute -inset-3 rounded-full border border-dashed border-[#39FF14]/20"
                      style={{ animation: 'spin 20s linear infinite' }}
                    />
                    {/* Inner ring */}
                    <div
                      className="absolute -inset-1 rounded-full border border-[#39FF14]/30"
                      style={{
                        boxShadow:
                          '0 0 24px rgba(57,255,20,0.18), inset 0 0 24px rgba(57,255,20,0.04)',
                      }}
                    />

                    {/* Glow backdrop */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(57,255,20,0.12) 0%, transparent 70%)',
                        filter: 'blur(12px)',
                        transform: 'scale(1.2)',
                      }}
                    />

                    {/* Photo */}
                    <div
                      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                      style={{
                        border: '3px solid rgba(57,255,20,0.35)',
                        boxShadow:
                          '0 0 40px rgba(57,255,20,0.2), 0 0 80px rgba(57,255,20,0.08)',
                      }}
                    >
                      <img
                        src="/images/profile.jpg"
                        alt="Adriaan M. Dimate"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '35% 45%' }}
                      />
                      {/* Scanline overlay on photo */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
                          mixBlendMode: 'overlay',
                        }}
                      />
                      {/* Tint overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle at bottom, rgba(57,255,20,0.08) 0%, transparent 60%)',
                        }}
                      />
                    </div>

                    {/* Biohazard badge — bottom right of photo */}
                    <div
                      className="absolute bottom-1 right-0 w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-[#39FF14]/40"
                      style={{
                        background: 'rgba(6,6,4,0.9)',
                        boxShadow: '0 0 12px rgba(57,255,20,0.3)',
                      }}
                    >
                      <span
                        className="text-xs sm:text-sm md:text-base"
                        style={{
                          filter: 'drop-shadow(0 0 4px rgba(57,255,20,0.8))',
                        }}
                      >
                        ☢
                      </span>
                    </div>
                  </div>

                  {/* Classified label */}
                  <div className="border border-[#CAFF00]/20 bg-[#CAFF00]/5 px-5 py-1.5 text-center">
                    <div
                      className="text-[#CAFF00] text-[10px] tracking-[0.4em]"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      ☢ CLASSIFIED DOSSIER ☢
                    </div>
                  </div>

                  {/* Rad level */}
                  <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] border border-[#39FF14]/15 p-2 md:p-3 bg-[#39FF14]/[0.02]">
                    <div
                      className="text-[#39FF14]/40 text-[10px] tracking-[0.25em] mb-2"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      RAD LEVEL
                    </div>
                    <div className="h-1.5 bg-[#39FF14]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{
                          duration: 1.5,
                          delay: 1,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            'linear-gradient(90deg, #39FF14, #CAFF00)',
                          boxShadow: '0 0 8px rgba(57,255,20,0.7)',
                        }}
                      />
                    </div>
                    <div
                      className="text-[#39FF14]/30 text-[10px] mt-1 tracking-widest text-right"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      CRITICAL
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll indicator */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          >
            <span
              className="text-[#39FF14]/30 text-[10px] tracking-[0.4em]"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              SCROLL
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#39FF14]/30 to-transparent animate-pulse" />
          </motion.div>
        )}
      </section>
    </>
  )
}
