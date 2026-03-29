export type Tab = 'SE' | 'QA' | 'AVIATION'

export const SE_PROJECTS = [
  {
    id: 1,
    name: 'Media Remote Tool',
    subtitle: 'Unified OBS + ProPresenter Remote Control System',
    description:
      'A real-time web-based production control dashboard that unifies OBS scene switching and ProPresenter slide control into a single operator interface, designed for live church livestream environments.',
    tech: ['React', 'Tanstack Start', 'Node.js', 'WebSockets', 'ProPresenter API', 'OBS WebSocket', 'Tailwind CSS'],
    highlights: ['Real-time synchronization', 'Cross-platform compatibility', 'User-friendly interface', 'Performance optimization'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
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
    id: 3,
    name: 'War of Dots',
    subtitle: 'Game landing page for someonne`s game',
    description:
      'Original website by Tjdog19 & CuriosAnt, remade by me using React with permission from Tea and Python. All credits goes to the original creators.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    highlights: ['Responsive design', 'Interactive UI', 'Performance and UI beautification'],
    github: '#',
    demo: 'https://warofdots.net/',
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

export const ALL_PROJECTS_URL = 'https://allofadriaansprojects.netlify.app/'

export const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'SE', label: 'SOFTWARE ENG.', icon: '⬡' },
  { id: 'QA', label: 'QA TESTING', icon: '◈' },
  { id: 'AVIATION', label: 'AVIATION', icon: '✈' },
]