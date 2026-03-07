export const SERVICE_ID = import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID ?? ''
export const TEMPLATE_ID = import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
export const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

export type FormState = 'idle' | 'sending' | 'success' | 'error'

export const CONTACT_LINKS = [
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
