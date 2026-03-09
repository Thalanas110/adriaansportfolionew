import {
  Target,
  Crosshair,
  Zap,
  Code2,
  Plane,
  Camera,
  Music,
  BookOpen,
  Moon,
} from 'lucide-react'

export const FRAMEWORKS = [
  'Vanilla React', 
  'Vite', 
  'Tanstack Start', 
  'Angular', 
  'VanillaJS', 
  'Tailwind CSS'
]

export const LANGUAGES = [
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'MySQL',
  'PostgreSQL',
  'PHP',
  'AppwriteDB',
]

export const EDUCATION = [
  {
    degree: 'BS Computer Science',
    school: 'Gordon College',
    period: '2023–PRESENT',
    active: true,
  },
  {
    degree: 'BS Air Transportation',
    school: '(Future Goal)',
    period: '?-?', // planned, may change, dependent
    active: false,
  },
]

export const TRAITS = [
  {
    icon: Target,
    label: 'Mission-Driven',
    desc: 'Excellence from cockpit to codebase',
  },
  {
    icon: Crosshair,
    label: 'Detail-Oriented',
    desc: 'Precision in every pixel and pilot log',
  },
  {
    icon: Zap,
    label: 'Quick Learner',
    desc: 'Adapting at mach speed',
  },
]

export const HOBBIES = [
  { icon: Code2, label: 'Coding' },
  { icon: Plane, label: 'Aviation' },
  { icon: Camera, label: 'Photo' },
  { icon: Music, label: 'Music' },
  { icon: BookOpen, label: 'Reading' },
  { icon: Moon, label: 'Sleep' },
]

export const CARD_BASE =
  'border border-[#39FF14]/12 bg-[#0d0d0a] rounded-xl p-5 relative overflow-hidden';
