'use client'

import { useEffect } from 'react'

// ─── CSS keyframes injected once into the DOM ────────────────────────────────
// GPU-composited only (transform + opacity) — safe on mobile
const EMP_STYLES = `
@keyframes emp-ring {
  0%   { transform: scale(0.15); opacity: 1; }
  100% { transform: scale(10);   opacity: 0; }
}
@keyframes emp-flash {
  0%   { opacity: 0;    }
  6%   { opacity: 0.92; }
  22%  { opacity: 0.45; }
  55%  { opacity: 0.12; }
  100% { opacity: 0;    }
}
@keyframes emp-shake {
  0%, 100% { transform: translateX(0); }
  12%  { transform: translateX(-8px); }
  25%  { transform: translateX(8px);  }
  37%  { transform: translateX(-5px); }
  50%  { transform: translateX(5px);  }
  62%  { transform: translateX(-3px); }
  75%  { transform: translateX(3px);  }
  87%  { transform: translateX(-1px); }
}
@keyframes emp-dot-pulse {
  0%, 100% { opacity: 0.65; }
  50%       { opacity: 1;    }
}
`

let _empStylesInjected = false
function injectEmpStyles() {
  if (_empStylesInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.textContent = EMP_STYLES
  document.head.appendChild(el)
  _empStylesInjected = true
}

// ─── EmpExplosion ─────────────────────────────────────────────────────────────
export interface EmpExplosionProps {
  active: boolean
  onComplete: () => void
}

const RINGS = [
  { delay: '0ms',   color: '#39FF14', glow: 'rgba(57,255,20,0.9)'  },
  { delay: '110ms', color: '#CAFF00', glow: 'rgba(202,255,0,0.85)' },
  { delay: '230ms', color: '#39FF14', glow: 'rgba(57,255,20,0.7)'  },
  { delay: '360ms', color: '#CAFF00', glow: 'rgba(202,255,0,0.55)' },
]

export function EmpExplosion({ active, onComplete }: EmpExplosionProps) {
  useEffect(() => { injectEmpStyles() }, [])

  useEffect(() => {
    if (!active) return
    const t = setTimeout(onComplete, 1500)
    return () => clearTimeout(t)
  }, [active, onComplete])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden">
      {/* Radial flash — no blur, GPU-friendly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(57,255,20,0.88) 0%, rgba(57,255,20,0.28) 38%, transparent 68%)',
          animation: 'emp-flash 1.4s ease-out forwards',
          willChange: 'opacity',
        }}
      />

      {/* Expanding rings */}
      {RINGS.map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full border-2"
          style={{
            left: '50%',
            top: '50%',
            width: '120px',
            height: '120px',
            marginLeft: '-60px',
            marginTop: '-60px',
            borderColor: r.color,
            boxShadow: `0 0 10px ${r.glow}`,
            transformOrigin: 'center',
            animation: `emp-ring 0.95s ${r.delay} ease-out forwards`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Centre ☢ symbol */}
      <div
        className="absolute text-5xl select-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#39FF14',
          filter: 'drop-shadow(0 0 18px rgba(57,255,20,1))',
          animation: 'emp-flash 1.1s ease-out forwards',
          willChange: 'opacity',
        }}
      >
        ☢
      </div>

      {/* Scanline burst — thin so it doesn't hurt perf */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.07) 2px, rgba(57,255,20,0.07) 4px)',
          animation: 'emp-flash 0.9s ease-out forwards',
          willChange: 'opacity',
        }}
      />
    </div>
  )
}

// ─── EmpCounter ───────────────────────────────────────────────────────────────
export interface EmpCounterProps {
  count: number
  maxCount: number
  onClick: () => void
  disabled: boolean
}

export function EmpCounter({ count, maxCount, onClick, disabled }: EmpCounterProps) {
  useEffect(() => { injectEmpStyles() }, [])

  const isMaxed = count >= maxCount

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] border border-[#39FF14]/15 p-2 md:p-3 bg-[#39FF14]/[0.02] text-left group transition-all duration-200 hover:border-[#39FF14]/40 hover:bg-[#39FF14]/[0.05] disabled:cursor-not-allowed focus:outline-none"
      title={isMaxed ? 'FIRE THE EMP' : 'Click to charge the EMP capacitor'}
    >
      {/* Label */}
      <div
        className="text-[#39FF14]/65 text-xs tracking-[0.2em] mb-2 group-hover:text-[#39FF14]/85 transition-colors"
        style={{ fontFamily: 'Share Tech Mono, monospace' }}
      >
        {isMaxed ? '⚡ CHARGE FULL — DETONATE?' : 'EMP CAPACITOR'}
      </div>

      {/* Dot bar */}
      <div className="flex gap-[3px] mb-1">
        {Array.from({ length: maxCount }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1.5 rounded-full"
            style={{
              background:
                i < count
                  ? isMaxed
                    ? '#CAFF00'
                    : '#39FF14'
                  : 'rgba(57,255,20,0.12)',
              boxShadow:
                i < count
                  ? `0 0 5px ${isMaxed ? 'rgba(202,255,0,0.7)' : 'rgba(57,255,20,0.5)'}`
                  : 'none',
              transition: 'background 0.18s, box-shadow 0.18s',
              animation:
                isMaxed && i < count
                  ? 'emp-dot-pulse 0.5s ease-in-out infinite'
                  : 'none',
              willChange: isMaxed ? 'opacity' : 'auto',
            }}
          />
        ))}
      </div>

      {/* Count / CTA */}
      <div
        className="text-[#39FF14]/60 text-xs mt-1 tracking-wide text-right group-hover:text-[#39FF14]/75 transition-colors"
        style={{ fontFamily: 'Share Tech Mono, monospace' }}
      >
        {isMaxed ? '>>> FIRE <<<' : `${count} / ${maxCount}`}
      </div>
    </button>
  )
}
