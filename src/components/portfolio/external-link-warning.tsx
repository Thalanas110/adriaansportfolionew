'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface LinkWarningState {
  open: boolean
  href: string
}

export function ExternalLinkWarning() {
  const [state, setState] = useState<LinkWarningState>({ open: false, href: '' })
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

  const handleClick = useCallback((e: MouseEvent) => {
    if (typeof window === 'undefined') return

    const anchor = (e.target as HTMLElement).closest('a')
    if (!anchor) return

    const href = anchor.getAttribute('href') ?? ''
    if (!href.startsWith('http://') && !href.startsWith('https://')) return

    try {
      if (new URL(href).origin === window.location.origin) return
    } catch {
      return
    }

    e.preventDefault()
    e.stopPropagation()
    setState({ open: true, href })
  }, [])

  useEffect(() => {
    if (!isBrowser) return

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [handleClick, isBrowser])

  const handleProceed = () => {
    if (typeof window === 'undefined') return

    window.open(state.href, '_blank', 'noopener,noreferrer')
    setState({ open: false, href: '' })
  }

  const handleAbort = () => setState({ open: false, href: '' })

  let displayHost = ''
  try {
    displayHost = new URL(state.href).hostname
  } catch {}

  return (
    <AnimatePresence>
      {state.open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80"
            onClick={handleAbort}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[90vw] max-w-md"
            style={{
              fontFamily: 'Share Tech Mono, monospace',
              background: '#060604',
              border: '1px solid #39FF14',
              boxShadow:
                '0 0 40px rgba(57,255,20,0.18), inset 0 0 20px rgba(57,255,20,0.03)',
            }}
          >
            {/* Top stripe */}
            <div
              className="h-2"
              style={{
                background:
                  'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 20px, #111400 20px, #111400 40px)',
                opacity: 0.5,
              }}
            />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[#39FF14] text-3xl"
                  style={{ animation: 'pulse 1.5s ease-in-out infinite' }}
                >
                  ⚠
                </span>
                <div>
                  <div className="text-[#39FF14]/70 text-xs tracking-[0.14em] sm:tracking-[0.28em] mb-0.5">
                    SYSTEM ALERT
                  </div>
                  <div
                    className="text-[#39FF14] text-base tracking-[0.08em] sm:tracking-[0.12em]"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    EXTERNAL LINK DETECTED
                  </div>
                </div>
              </div>

              <div className="border-t border-[#39FF14]/15 mb-4" />

              {/* Body */}
              <p className="text-[#39FF14]/80 text-sm tracking-wide leading-relaxed mb-3">
                YOU ARE ABOUT TO LEAVE THE SECURE PERIMETER AND BE REDIRECTED TO
                AN EXTERNAL WEBSITE:
              </p>

              <div
                className="text-[#39FF14] text-sm tracking-wide px-3 py-2 mb-4 break-all"
                style={{
                  background: 'rgba(57,255,20,0.05)',
                  border: '1px solid rgba(57,255,20,0.25)',
                }}
              >
                ◈ {displayHost}
              </div>

              <p className="text-[#39FF14]/60 text-xs tracking-[0.08em] sm:tracking-wide mb-5">
                ☢ THIS ZONE IS BEYOND PERIMETER CONTROL. PROCEED WITH CAUTION.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <ExternalLinkButton
                  onClick={handleProceed}
                  variant="confirm"
                >
                  ▶ PROCEED
                </ExternalLinkButton>
                <ExternalLinkButton
                  onClick={handleAbort}
                  variant="cancel"
                >
                  ✕ ABORT
                </ExternalLinkButton>
              </div>
            </div>

            {/* Bottom stripe */}
            <div
              className="h-2"
              style={{
                background:
                  'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 20px, #111400 20px, #111400 40px)',
                opacity: 0.5,
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function ExternalLinkButton({
  onClick,
  variant,
  children,
}: {
  onClick: () => void
  variant: 'confirm' | 'cancel'
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)

  const baseStyle: React.CSSProperties = {
    fontFamily: 'Share Tech Mono, monospace',
    transition: 'all 0.15s ease',
    cursor: 'pointer',
  }

  const style: React.CSSProperties =
    variant === 'confirm'
      ? {
          ...baseStyle,
          background: hovered ? 'rgba(57,255,20,0.22)' : 'rgba(57,255,20,0.08)',
          border: '1px solid #39FF14',
          color: '#39FF14',
          boxShadow: hovered ? '0 0 14px rgba(57,255,20,0.35)' : 'none',
        }
      : {
          ...baseStyle,
          background: 'transparent',
          border: `1px solid ${hovered ? 'rgba(57,255,20,0.55)' : 'rgba(57,255,20,0.25)'}`,
          color: hovered ? 'rgba(57,255,20,0.75)' : 'rgba(57,255,20,0.45)',
        }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-1 py-2 text-xs tracking-[0.12em] sm:tracking-[0.2em]"
      style={style}
    >
      {children}
    </button>
  )
}
