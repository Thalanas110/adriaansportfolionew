export type Tab = 'SE' | 'QA' | 'AVIATION'

export const SE_PROJECTS = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    subtitle: 'Group Project - CSP312A/L, CSP322A/L, CSE316A/L, CSP225A/L, CSC221A/L',
    description:
      'Full-stack e-commerce app for a flea market application. Currently deactivated but the whole codebase is here.',
    tech: ['Vanilla', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Core Vanilla JS', 'User Authentication', 'Role-based access'],
    github: 'https://github.com/Thalanas110/camflea-new',
    demo: 'https://camflea-newer2.vercel.app/',
  },
  {
    id: 2,
    name: 'I Care Center Website',
    subtitle: '',
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
    subtitle: '',
    description:
      'Original website by Tjdog19 & CuriousAnt, remade by me using React with permission from Tea and Python. All credits goes to the original creators.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    highlights: ['Responsive design', 'Interactive UI', 'Performance and UI beautification'],
    github: '#',
    demo: 'https://warofdots.net/',
  },
  {
    id: 4,
    name: 'JFLAP but for Web',
    subtitle: '',
    description:
      'JFLAP replacement for testing with formal languages and automatons. Also allows editing on mobile--probs the first ever one done to date.',
    tech: ['React', 'Tanstack Start', 'Vite', 'GroqAI', 'Tailwind CSS'],
    highlights: ['AI Assistance', 'Formal Languages', 'Automatons', 'Interactive UI'],
    github: 'https://github.com/Thalanas110/automata',
    demo: 'https://automatastudio.vercel.app/',
  },
  {
    id: 5,
    name: 'Practicum Vlogsite',
    subtitle: '',
    description:
      'Practicum vlogsite which I used to display the vlogs as required by Prof. Loudel M. Manaloto, MSCS. The vlogsite isn\'t required, but overkill is always better.',
    tech: ['Vanilla', 'Vite', 'Node.js', 'Supabase', 'PostgreSQL'],
    highlights: ['CRUD operations', 'User authentication', 'Responsive design', 'Video playback', 'Core Vanilla JS'],
    github: 'https://github.com/zionren/OJTblogsite',
    demo: 'https://practicumoneblogsite.vercel.app/',
  },
  {
    id: 6,
    name: 'Devotion Blogsite',
    subtitle: '',
    description:
      'Devotion website I did with full admin dashboard so I could just use this instead of randomizing in my notes app on my phone & track devotions better.',
    tech: ['React', 'Vite', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Simple responsive design', 'CRUD operations', 'User authentication', 'Responsive design'],
    github: 'https://github.com/Thalanas110/DevotionPage',
    demo: 'https://adriaansdevotions.netlify.app/',
  },
]

export const ALL_PROJECTS_URL = 'https://allofadriaansprojects.netlify.app/'

export const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'SE', label: 'SOFTWARE ENG.', icon: '⬡' },
  { id: 'QA', label: 'QA TESTING', icon: '◈' },
  { id: 'AVIATION', label: 'AVIATION', icon: '✈' },
]