'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  speed: number
  drift: number
  opacity: number
  swaySpeed: number
  swayOffset: number
}

function isMobile() {
  return (
    typeof window !== 'undefined' &&
    (window.innerWidth <= 768 ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
  )
}

function makeParticle(w: number, h: number, scatter = false): Particle {
  return {
    x: Math.random() * w,
    y: scatter ? Math.random() * h : -(Math.random() * h * 0.5),
    radius: Math.random() * 2.2 + 0.4,
    speed: Math.random() * 0.7 + 0.25,
    drift: Math.random() * 0.3 - 0.15,
    opacity: Math.random() * 0.45 + 0.08,
    swaySpeed: Math.random() * 0.018 + 0.004,
    swayOffset: Math.random() * Math.PI * 2,
  }
}

const PARTICLE_COUNT_DESKTOP = 200
const PARTICLE_COUNT_MOBILE = 60
// Mobile: skip a frame every other tick to halve GPU load
const MOBILE_FRAME_SKIP = 2

export function NuclearSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let frameCount = 0
    let mobile = isMobile()
    let particleCount = mobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP

    const resize = () => {
      mobile = isMobile()
      particleCount = mobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Rebuild particles on resize so count stays correct
      particles = Array.from({ length: particleCount }, () =>
        makeParticle(canvas.width, canvas.height, true),
      )
    }

    resize()

    const draw = () => {
      animId = requestAnimationFrame(draw)

      // On mobile, only paint every MOBILE_FRAME_SKIP frames (~30 fps)
      if (mobile) {
        frameCount++
        if (frameCount % MOBILE_FRAME_SKIP !== 0) return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = Date.now()
      for (const p of particles) {
        // Skip sway calculation on mobile to save CPU
        const sway = mobile ? 0 : Math.sin(now * p.swaySpeed + p.swayOffset) * 0.6
        p.x += p.drift + sway
        p.y += p.speed

        if (p.y > canvas.height + 6) {
          Object.assign(p, makeParticle(canvas.width, canvas.height))
        }
        if (p.x > canvas.width + 6) p.x = -6
        if (p.x < -6) p.x = canvas.width + 6

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        // Nuclear ash palette: grey-white with a very faint radioactive green cast
        ctx.fillStyle = `rgba(195, 215, 185, ${p.opacity})`
        ctx.fill()
      }
    }

    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
    />
  )
}
