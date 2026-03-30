export type Tab = 'SE' | 'QA' | 'AVIATION'

export type PortfolioProject = {
  id: number
  name: string
  subtitle: string
  description: string
  tech: string[]
  highlights: string[]
  github: string
  demo: string
}

export const SE_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    name: 'Media Remote Tool',
    subtitle: 'Unified OBS + ProPresenter Remote Control System',
    description:
      'A real-time web-based production control dashboard that unifies OBS scene switching and ProPresenter slide control into a single operator interface, designed for live church livestream environments.',
    tech: ['React', 'Tanstack Start', 'Node.js', 'WebSockets', 'ProPresenter API', 'OBS WebSocket', 'Tailwind CSS'],
    highlights: ['Real-time synchronization', 'Cross-platform compatibility', 'User-friendly interface', 'Performance optimization'],
    github: 'https://github.com/Thalanas110/obs-propres-remote-icc',
    demo: '#',
  },
  {
    id: 2,
    name: 'Botcha Buster',
    subtitle: 'thesis writing - proprietary project for DTI and NMIS',
    description:
      'Thesis project for my thesis writing, using PWA tech for DTI and NMIS meat inspectors',
    tech: ['ReactJS', 'Tanstack Router', 'Vite', 'Node.js', 'Supabase', 'PostgreSQL'],
    highlights: ['OpenCV', 'Color Extraction', 'PWA features', 'Performance optimization'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    name: 'I Care Center Website',
    subtitle: 'Media Team thing, my main ministry now',
    description:
      'Website for my church where I am a part of the media team.',
    tech: ['React', 'Node.js', 'Supabase', 'PostgreSQL', 'LeafletJS', 'Tailwind CSS'],
    highlights: ['RBAC operations', 'User authentication', 'Responsive design', 'Video playback', 'God-oriented'],
    github: '#',
    demo: 'https://icarecenter.netlify.app/',
  },
  {
    id: 4,
    name: 'JFLAP but for Web',
    subtitle: 'jflap replacement',
    description:
      'JFLAP replacement for testing with formal languages and automatons. Also allows editing on mobile--probs the first ever one done to date.',
    tech: ['React', 'Tanstack Start', 'Vite', 'GroqAI', 'Tailwind CSS'],
    highlights: ['AI Assistance', 'Formal Languages', 'Automatons', 'Interactive UI'],
    github: 'https://github.com/Thalanas110/automata',
    demo: 'https://automatastudio.vercel.app/',
  },
  {
    id: 5,
    name: 'War of Dots',
    subtitle: 'Game landing page for someonne`s game',
    description:
      'Credited in-game as website designer for War of Dots. Rebuilt the official site in React with permission from the original creators, improving UI and performance.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    highlights: ['Responsive design', 'Interactive UI', 'Performance and UI beautification'],
    github: '#',
    demo: 'https://warofdots.net/',
  },
  {
    id: 6,
    name: 'Devotion Blogsite',
    subtitle: 'My main devotion',
    description:
      'Devotion website I did with full admin dashboard so I could just use this instead of randomizing in my notes app on my phone & track devotions better.',
    tech: ['React', 'Vite', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Simple responsive design', 'CRUD operations', 'User authentication', 'Responsive design'],
    github: '#',
    demo: 'https://adriaansdevotions.netlify.app/',
  },
]

export const QA_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    name: 'I Care Center Church Website',
    subtitle: 'QA Testing for Full-Stack Church Web Platform',
    description:
      'Performed end-to-end testing on a production church website focusing on authentication, admin workflows, and content management reliability.',
    tech: ['Cypress', 'PostgreSQL', 'Authentication', 'RBAC', 'SEO Validation'],
    highlights: [
      'Validated authentication flows (session, token handling, edge cases)',
      'Identified and resolved image upload failure (edge function fix)',
      'Tested role-based access control (RLS) across user types',
      'Performed cross-device and SEO indexing validation',
    ],
    github: '#',
    demo: 'https://icarecenter.netlify.app/',
  },
  {
    id: 2,
    name: 'War of Dots',
    subtitle: 'Beta Testing - Multiplayer Strategy Game',
    description:
      'Conducted live beta testing in a real player environment, focusing on gameplay stability, bug detection, and user experience consistency.',
    tech: ['Beta Testing', 'Gameplay QA', 'Bug Reporting', 'UX Validation'],
    highlights: [
      'Tested gameplay under 200-400 concurrent players',
      'Reported reproducible bugs with structured feedback',
      'Identified UI/UX inconsistencies and edge-case failures',
      'Assisted in validating game stability across updates',
    ],
    github: '#',
    demo: 'https://warofdots.net/',
  },
  {
    id: 3,
    name: 'Media Remote Tool',
    subtitle: 'QA Testing for Real-Time Production Control System',
    description:
      'Tested a real-time web-based remote system integrating OBS and ProPresenter, ensuring reliability in live streaming environments.',
    tech: ['OBS WebSocket', 'ProPresenter API', 'WebSockets', 'Integration Testing'],
    highlights: [
      'Validated real-time synchronization via WebSockets',
      'Performed integration testing (OBS WebSocket + ProPresenter API)',
      'Simulated live production scenarios for stress testing',
      'Detected and resolved state desynchronization issues',
    ],
    github: 'https://github.com/Thalanas110/obs-propres-remote-icc',
    demo: '#',
  },
]

export const ALL_PROJECTS_URL = 'https://allofadriaansprojects.netlify.app/'

export const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'SE', label: 'SOFTWARE ENG.', icon: '⬡' },
  { id: 'QA', label: 'QA TESTING', icon: '◈' },
  { id: 'AVIATION', label: 'AVIATION', icon: '✈' },
]