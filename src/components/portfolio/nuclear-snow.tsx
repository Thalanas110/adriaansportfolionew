'use client'

import { useEffect, useRef, useState } from 'react'
import {
  DESKTOP_TARGET_FPS,
  PARTICLE_COUNT_DESKTOP,
  PARTICLE_COUNT_LOW_POWER,
  PARTICLE_COUNT_MOBILE,
  MOBILE_TARGET_FPS,
  SNOW_STARTUP_DELAY_MS,
} from './portfolio-constants/nuclear-snow-constants'

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

type NavigatorConnection = {
  saveData?: boolean
}

type NavigatorWithPerfHints = Navigator & {
  connection?: NavigatorConnection
  deviceMemory?: number
}

function isMobile() {
  return (
    typeof window !== 'undefined' &&
    (window.innerWidth <= 768 ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
  )
}

function isLowPowerDevice(nav: NavigatorWithPerfHints) {
  const lowCpu = nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 6
  const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 8
  return lowCpu || lowMemory
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

export function NuclearSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const nav = navigator as NavigatorWithPerfHints
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      nav.connection?.saveData
    ) {
      return
    }

    const timerId = window.setTimeout(() => {
      setEnabled(true)
    }, SNOW_STARTUP_DELAY_MS)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const nav = navigator as NavigatorWithPerfHints
    const lowPower = isLowPowerDevice(nav)

    let animId: number
    let particles: Particle[] = []
    let lastFrameTime = 0
    let isVisible = document.visibilityState === 'visible'
    let suspendForHero = false
    let mobile = isMobile()

    const getParticleCount = () => {
      if (mobile) return PARTICLE_COUNT_MOBILE
      if (lowPower) return PARTICLE_COUNT_LOW_POWER
      return PARTICLE_COUNT_DESKTOP
    }

    const getFrameInterval = () =>
      1000 / (mobile ? MOBILE_TARGET_FPS : DESKTOP_TARGET_FPS)

    let frameInterval = getFrameInterval()

    const rebuildParticles = () => {
      particles = Array.from({ length: getParticleCount() }, () =>
        makeParticle(canvas.width, canvas.height, true),
      )
    }

    const resize = () => {
      mobile = isMobile()
      frameInterval = getFrameInterval()
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      rebuildParticles()
    }

    const updateHeroSuspension = () => {
      suspendForHero = window.scrollY < window.innerHeight * 0.8
      if (suspendForHero) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    const onVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
      if (!isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    resize()
    updateHeroSuspension()

    const draw = (timestamp: number) => {
      animId = requestAnimationFrame(draw)

      if (!isVisible || suspendForHero) {
        return
      }

      if (lastFrameTime && timestamp - lastFrameTime < frameInterval) {
        return
      }

      lastFrameTime = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = timestamp
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
    window.addEventListener('scroll', updateHeroSuspension, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', updateHeroSuspension)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

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
