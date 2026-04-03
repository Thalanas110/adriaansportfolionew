'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useRouter } from '@tanstack/react-router'
import { AllProjectsPage } from './all-projects'

const GLITCH_CHARS = '!@#$%^&*<>?/\\|[]{}~RADIOACTIVE☢☣'

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

const TERMINAL_LINES = [
  '> SCANNING SECTOR COORDINATES...',
  '> ERROR: ROUTE DOES NOT EXIST',
  '> CONTAMINATION LEVEL: FATAL',
  '> ALL PERSONNEL EVACUATED',
  '> SECTOR CLASSIFIED: ██████████',
  '> RECOMMEND IMMEDIATE EXTRACTION',
]

export function NotFound() {
  const router = useRouter()
  const pathname = router.state.location.pathname

  if (pathname === '/all-projects' || pathname === '/all-projects/') {
    return <AllProjectsPage />
  }

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [glitchActive, setGlitchActive] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const headingText = 'SECTOR 404'
  const glitchedHeading = useGlitch(headingText, glitchActive)

  // Terminal boot sequence
  useEffect(() => {
    let idx = 0
    const addLine = () => {
      if (idx < TERMINAL_LINES.length) {
        setTerminalLines((prev) => [...prev, TERMINAL_LINES[idx]])
        idx++
        setTimeout(addLine, 280)
      } else {
        setTimeout(() => {
          setGlitchActive(true)
          setTimeout(() => {
            setGlitchActive(false)
            setShowContent(true)
          }, 900)
        }, 200)
      }
    }
    setTimeout(addLine, 300)
  }, [])

  // Floating particle canvas
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

    const symbols = ['☢', '☣', '⚠', '◉', '◎', '●', '○', '✕', '⊗']
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 12 + 6,
        opacity: Math.random() * 0.18 + 0.04,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        ctx.font = `${p.size}px monospace`
        ctx.fillStyle = `rgba(57, 255, 20, ${p.opacity})`
        ctx.fillText(p.symbol, p.x, p.y)
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#060604', fontFamily: 'Share Tech Mono, monospace' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(57,255,20,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Warning stripe — top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{
          background:
            'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 20px, #000 20px, #000 40px)',
          opacity: 0.7,
        }}
      />

      {/* Warning stripe — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-10"
        style={{
          background:
            'repeating-linear-gradient(90deg, #000 0px, #000 20px, #39FF14 20px, #39FF14 40px)',
          opacity: 0.7,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full">

        {/* Terminal loading screen */}
        <AnimatePresence>
        {!showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative border border-[#39FF14]/30 w-full mb-10 text-left"
          style={{ background: 'rgba(57,255,20,0.03)' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14]/70" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#39FF14]/70" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#39FF14]/70" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14]/70" />

          {/* Terminal title bar */}
          <div className="border-b border-[#39FF14]/20 px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#39FF14]/40" />
            <div className="w-2 h-2 rounded-full bg-[#39FF14]/25" />
            <div className="w-2 h-2 rounded-full bg-[#39FF14]/15" />
            <span
              className="ml-2 text-[#39FF14]/70 text-sm tracking-wide"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              WASTELAND OS v4.0.4 — NAVIGATION SUBSYSTEM
            </span>
          </div>

          {/* Terminal output */}
          <div className="px-5 py-4 space-y-1.5 min-h-[140px]">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-sm"
                style={{
                  color:
                    i === 1
                      ? '#FF4444'
                      : i === 2
                        ? '#FF8800'
                        : 'rgba(57,255,20,0.75)',
                }}
              >
                {line}
                {i === terminalLines.length - 1 &&
                  terminalLines.length < TERMINAL_LINES.length && (
                    <span className="inline-block w-2 h-3 bg-[#39FF14]/70 ml-1 animate-pulse" />
                  )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}
        </AnimatePresence>

        {/* 404 display */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6 w-full"
            >
              {/* Biohazard + heading row */}
              <div className="flex items-center gap-4">
                <span
                  className="text-4xl"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(57,255,20,0.9))',
                    animation: 'spin 6s linear infinite',
                    display: 'inline-block',
                  }}
                >
                  ☢
                </span>
                <h1
                  className="text-5xl sm:text-7xl font-black tracking-widest"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    color: '#39FF14',
                    textShadow:
                      '0 0 20px rgba(57,255,20,0.8), 0 0 40px rgba(57,255,20,0.4), 0 0 80px rgba(57,255,20,0.2)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {glitchedHeading}
                </h1>
                <span
                  className="text-4xl"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(57,255,20,0.9))',
                    animation: 'spin 6s linear infinite reverse',
                    display: 'inline-block',
                  }}
                >
                  ☢
                </span>
              </div>

              {/* Subtitle */}
              <div className="space-y-1">
                <p
                  className="text-[#39FF14]/80 text-sm sm:text-base tracking-[0.14em] sm:tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  Zone Contaminated — Entry Forbidden
                </p>
                <p className="text-[#39FF14]/65 text-sm tracking-wide">
                  The sector you requested has been wiped from the wasteland maps.
                </p>
              </div>

              {/* Divider */}
              <div className="w-full flex items-center gap-3">
                <div className="flex-1 h-px bg-[#39FF14]/20" />
                <span className="text-[#39FF14]/60 text-sm tracking-wide">⚠ RESTRICTED ⚠</span>
                <div className="flex-1 h-px bg-[#39FF14]/20" />
              </div>

              {/* Return button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.navigate({ to: '/' })}
                className="relative group px-6 sm:px-8 py-3 border border-[#39FF14]/60 text-[#39FF14] text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.25em] uppercase transition-all duration-200"
                style={{
                  fontFamily: 'Orbitron, monospace',
                  background: 'rgba(57,255,20,0.05)',
                  boxShadow: '0 0 20px rgba(57,255,20,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(57,255,20,0.12)'
                  e.currentTarget.style.boxShadow =
                    '0 0 30px rgba(57,255,20,0.25)'
                  e.currentTarget.style.borderColor = 'rgba(57,255,20,0.9)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(57,255,20,0.05)'
                  e.currentTarget.style.boxShadow =
                    '0 0 20px rgba(57,255,20,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(57,255,20,0.6)'
                }}
              >
                {/* Corner accents on button */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#39FF14]/80" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#39FF14]/80" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#39FF14]/80" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#39FF14]/80" />
                &#62; RETURN TO BASE
              </motion.button>

              {/* Radiation meter */}
              <div className="w-full space-y-1">
                <div className="flex justify-between text-[#39FF14]/60 text-sm">
                  <span>RADIATION LEVEL</span>
                  <span>CRITICAL</span>
                </div>
                <div className="w-full h-1 bg-[#39FF14]/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                    className="h-full"
                    style={{
                      background: 'linear-gradient(90deg, #39FF14, #FF4444)',
                      boxShadow: '0 0 8px rgba(255,68,68,0.6)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
