'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const TEMPLATE_ID = import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

type FormState = 'idle' | 'sending' | 'success' | 'error'

const CONTACT_LINKS = [
  {
    label: 'COMMS: PHONE',
    value: 'Philippines',
    href: '+63 945 394 5299',
    icon: '📡',
    desc: 'Direct line — no encryptions needed',
  },
  {
    label: 'NETWORK: LINKEDIN',
    value: 'Linkedin Profile',
    href: 'https://www.linkedin.com/in/adriaan-dimate-390039260',
    icon: '🔗',
    desc: 'Professional bunker network',
  },
  {
    label: 'UPLINK: EMAIL',
    value: 'My main email address',
    href: 'aadimate55@gmail.com',
    icon: '◈',
    desc: 'Encrypted transmission channel',
  },
  {
    label: 'SIGNAL: FACEBOOK',
    value: 'Add me before messaging when using this',
    href: 'https://facebook.com/philippine8129heavy',
    icon: '⬢',
    desc: 'Social frequency channel',
  },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [charCount, setCharCount] = useState(0)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'message') setCharCount(value.length)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFormState('error')
      return
    }
    setFormState('sending')
    try {
      const now = new Date()
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString(),
        },
        PUBLIC_KEY,
      )
      setFormState('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setCharCount(0)
    } catch {
      setFormState('error')
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: '#07070A' }}
    >
      {/* Warning stripe top */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background:
            'repeating-linear-gradient(90deg, #39FF14 0px, #39FF14 20px, #07070A 20px, #07070A 40px)',
          opacity: 0.2,
        }}
      />

      {/* Corner radial glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(57,255,20,0.05), transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 md:gap-4 mb-8 md:mb-16"
        >
          <div
            className="h-px w-16"
            style={{ background: '#39FF14', boxShadow: '0 0 8px #39FF14' }}
          />
          <span
            className="text-[#39FF14]/40 text-xs tracking-[0.4em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            TX://
          </span>
          <h2
            className="text-xl md:text-3xl font-black tracking-tight md:tracking-[0.15em] text-[#39FF14]"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 20px rgba(57,255,20,0.4)',
            }}
          >
            OPEN TRANSMISSION
          </h2>
          <div
            className="h-px flex-1"
            style={{
              background: 'linear-gradient(90deg, #39FF14, transparent)',
              boxShadow: '0 0 8px #39FF14',
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-10 w-full overflow-hidden">
          {/* Left: Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-4 min-w-0"
          >
            <div
              className="text-[#39FF14]/40 text-xs tracking-[0.15em] md:tracking-[0.3em] mb-6"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              ☢ AVAILABLE CHANNELS
            </div>

            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex items-start gap-3 border border-[#39FF14]/10 bg-[#39FF14]/2 p-3 md:p-4 hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5 transition-all duration-200 overflow-hidden"
              >
                <div className="text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <div
                    className="text-[#39FF14]/40 text-[10px] tracking-[0.15em] md:tracking-[0.3em] mb-1 truncate"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    {link.label}
                  </div>
                  <div
                    className="text-[#39FF14] text-sm font-medium truncate group-hover:text-[#CAFF00] transition-colors"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    {link.value}
                  </div>
                  <div
                    className="text-[#39FF14]/30 text-[10px] mt-0.5 truncate"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                  >
                    {link.desc}
                  </div>
                </div>
                <div className="ml-auto self-center text-[#39FF14]/20 group-hover:text-[#39FF14]/60 text-sm transition-colors shrink-0">
                  →
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Email form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 min-w-0"
          >
            <div className="border border-[#39FF14]/15 bg-[#060604] relative overflow-hidden">
              {/* Terminal header bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-[#39FF14]/10 bg-[#39FF14]/3 min-w-0">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF4500]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#CAFF00]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#39FF14]/60" />
                </div>
                <span
                  className="text-[#39FF14]/40 text-[10px] md:text-xs tracking-tight md:tracking-[0.3em] flex-1 text-center truncate"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  TRANSMISSION_TERMINAL_v2.4
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse shadow-[0_0_6px_#39FF14] shrink-0" />
              </div>

              <div className="p-6">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 gap-4"
                  >
                    <div className="text-5xl text-[#39FF14] animate-bounce">
                      ✓
                    </div>
                    <div
                      className="text-[#39FF14] text-xl font-bold tracking-widest"
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      TRANSMISSION SENT
                    </div>
                    <div
                      className="text-[#39FF14]/50 text-xs tracking-wider text-center"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      Signal acquired. Response incoming within 24–48 hours.
                    </div>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-4 border border-[#39FF14]/30 text-[#39FF14]/60 hover:text-[#39FF14] px-6 py-2 text-xs tracking-widest transition-colors"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      NEW TRANSMISSION
                    </button>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Prompt line */}
                    <div
                      className="text-[#39FF14]/30 text-xs mb-4"
                      style={{ fontFamily: 'Share Tech Mono, monospace' }}
                    >
                      {'>'} Compose encrypted message. All fields required.
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label
                          className="block text-[#39FF14]/50 text-[10px] tracking-[0.15em] md:tracking-[0.3em] mb-1.5"
                          style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        >
                          IDENTIFIER [NAME]
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-[#39FF14]/3 border border-[#39FF14]/15 text-[#39FF14] text-sm px-3 py-2.5 outline-none focus:border-[#39FF14]/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.1)] transition-all placeholder:text-[#39FF14]/20"
                          style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          className="block text-[#39FF14]/50 text-[10px] tracking-[0.15em] md:tracking-[0.3em] mb-1.5"
                          style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        >
                          UPLINK [EMAIL]
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@domain.com"
                          className="w-full bg-[#39FF14]/3 border border-[#39FF14]/15 text-[#39FF14] text-sm px-3 py-2.5 outline-none focus:border-[#39FF14]/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.1)] transition-all placeholder:text-[#39FF14]/20"
                          style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        className="block text-[#39FF14]/50 text-[10px] tracking-[0.15em] md:tracking-[0.3em] mb-1.5"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        FREQUENCY [SUBJECT]
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Mission briefing"
                        className="w-full bg-[#39FF14]/3 border border-[#39FF14]/15 text-[#39FF14] text-sm px-3 py-2.5 outline-none focus:border-[#39FF14]/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.1)] transition-all placeholder:text-[#39FF14]/20"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-[#39FF14]/50 text-[10px] tracking-[0.15em] md:tracking-[0.3em] mb-1.5"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        MESSAGE BODY
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Enter your transmission here..."
                        className="w-full bg-[#39FF14]/3 border border-[#39FF14]/15 text-[#39FF14] text-sm px-3 py-2.5 outline-none focus:border-[#39FF14]/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.1)] transition-all placeholder:text-[#39FF14]/20 resize-none"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      />
                      <div
                        className="text-[#39FF14]/25 text-[10px] text-right mt-1"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        {charCount} CHARS
                      </div>
                    </div>

                    {/* Error state */}
                    {formState === 'error' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border border-[#FF4500]/30 bg-[#FF4500]/5 px-4 py-3 text-[#FF4500] text-xs tracking-wide"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                      >
                        ⚠ TRANSMISSION FAILED — Check EmailJS configuration or
                        try again.
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="relative group w-full py-3.5 border border-[#39FF14] bg-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 bg-[#39FF14] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                      <span
                        className="relative text-[#39FF14] group-hover:text-[#060604] font-bold tracking-[0.15em] md:tracking-[0.3em] text-sm transition-colors duration-300"
                        style={{ fontFamily: 'Orbitron, monospace' }}
                      >
                        {formState === 'sending'
                          ? '◉ TRANSMITTING...'
                          : '▶ SEND TRANSMISSION'}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom note */}
            <div
              className="mt-4 text-[#39FF14]/25 text-[10px] tracking-wide md:tracking-widest text-center break-words"
              style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
              ☢ ENCRYPTED VIA EMAILJS — SIGNAL MONITORED
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
