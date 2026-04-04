import type { PortfolioProject } from './projects-constants'

export const SOME_MORE_PROJECTS: PortfolioProject[] = [
  // Serious Projects
  {
    id: 1,
    name: 'Exam Management System',
    subtitle: 'React + Vanilla PHP + MySQL',
    description:
      'Exam management platform for creating, scheduling, and tracking assessment records.',
    tech: ['React', 'Vanilla PHP', 'MySQL'],
    highlights: ['Full-Stack Development', 'Database Integration', 'User Authentication'],
    github: '#',
    demo: '#',
  },
  {
    // CSP312A/L, CSP322A/L, CSE316A/L, CSP225A/L, CSC221A/L, completed 17 December 2025
    id: 2,
    name: 'E-commerce Platform',
    subtitle: 'Old AppDev and Software Engineering project',
    description:
      'Old AppDev project that bled into Software Engineering 2. Deactivated already, not really my style of projects.',
    tech: ['Vanilla', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Full-Stack Development', 'Database Integration', 'User Authentication'],
    github: 'https://github.com/Thalanas110/camflea-new',
    demo: 'https://camflea-newer2.vercel.app/',
  },

  // Minor Projects
  {
    // portfolio website with the snow ones, completed 03 October 2025
    id: 3,
    name: 'Portfolio Website',
    subtitle: 'Nuke-themed portfolio',
    description: 'Nuke themed portfolio website lol e.g. this',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Tanstack Start', 'EmailJS'],
    highlights: [],
    github: '#',
    demo: 'https://adriaansportfolio.vercel.app/',
  },
  {
    // random personal homepage I could send to everyone, completed 20 September 2025
    id: 4,
    name: 'Personal homepage',
    subtitle: 'Simple personal homepage',
    description: 'basically just an entire about me page hahaha',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    highlights: [],
    github: 'https://github.com/Thalanas110/personalpage',
    demo: 'https://adriaanmdimate.netlify.app/',
  },
  {
    // sir loudel's OJT vlogsite, completed 26 Jul 2025, rewrote this 2026 in under 4 hours
    id: 5,
    name: 'Practicum vlogsite',
    subtitle: 'Practicum vlogsite with dashboard visuals',
    description:
      'Practicum vlogsite with data visualization dashboard, containing interactive charts and reports. Also made sir loudel cry.',
    tech: ['Vanilla', 'Node.js', 'Supabase', 'PostgreSQL'],
    highlights: ['Data Visualization', 'Interactive Charts', 'Comprehensive Reporting'],
    github: 'https://github.com/zionren/OJTblogsite',
    demo: 'https://practicumoneblogsite.vercel.app',
  },
  {
    // Weather Application via OWM, completed 22 September 2025
    id: 6,
    name: 'Weather App',
    subtitle: 'Direct, no-nonsense weather app',
    description: "No-nonsense weather app that basically gives 'direct-to-the-point' information",
    tech: ['React', 'Tailwind CSS', 'Node.js', 'OpenWeatherMap'],
    highlights: ['Simplicity', 'Direct Information', 'Responsive Design'],
    github: 'https://github.com/Thalanas110/NewWeatherPWA',
    demo: 'https://quicksky.netlify.app/',
  },
  {
    id: 7,
    name: 'Poem Blogsite',
    subtitle: 'Separate poem-focused blogsite project',
    description: 'main blogsite, but the challenge is, use poems instead of normal paragraphs.',
    tech: ['React', 'Tanstack Start', 'Tailwind CSS', 'Node.js', 'Supabase', 'PostgreSQL'],
    highlights: ['Poem Formatting', 'Responsive Design', 'CRUD Operations', 'User Authentication'],
    github: 'https://github.com/Thalanas110/poemblog',
    demo: 'https://adriaanspoems.netlify.app/',
  },

  // Used by Clients
  {
    // rp corkboard proof of concept for anonymous custom corkboards
    id: 8,
    name: 'Arcanum Corkboard',
    subtitle: 'Anonymous corkboard for Arcanum Academy',
    description: '4th monthsary anonymous corkboard system for Arcanum Academy, an rp hood',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'],
    highlights: ['Anonymous Posting', 'Custom Corkboards', 'User Management'],
    github: 'https://github.com/Thalanas110/arcanumcorkboard2',
    demo: 'https://arcanumcorkboard.netlify.app/',
  },

  // Backend and APIs
  {
    id: 9,
    name: 'blogsite api',
    subtitle: 'Backend-only API using PHP + MySQL',
    description:
      'Backend-only API using Vanilla PHP and MySQL inside XAMPP, currently still being fixed.',
    tech: ['PHP', 'MySQL'],
    highlights: [],
    github: '#',
    demo: '#',
  },
  {
    id: 10,
    name: 'Car Rental API v2',
    subtitle: 'Vanilla PHP + MySQL',
    description:
      'Vanilla PHP and MySQL API for managing car rental listings, bookings, and availability.',
    tech: ['Vanilla PHP', 'MySQL'],
    highlights: [],
    github: '#',
    demo: '#',
  },
  {
    id: 11,
    name: 'Cookbook API',
    subtitle: 'Vanilla PHP + MySQL',
    description:
      'Vanilla PHP and MySQL API for recipes, ingredients, and cookbook entries.',
    tech: ['Vanilla PHP', 'MySQL'],
    highlights: [],
    github: '#',
    demo: '#',
  },
    {
    id: 18,
    name: 'RService API',
    subtitle: 'Vanilla PHP + MySQL',
    description:
      'My take on sir loude`s API for RService, my SHS Capstone back in 2023. ',
    tech: ['Vanilla PHP', 'MySQL'],
    highlights: [],
    github: '#',
    demo: '#',
  },

  // Playground / Everything Else
  {
    // my bucketlist, still to be updated, mvp completed 12 December 2023
    id: 12,
    name: 'bucketlist',
    subtitle: 'Simple personal bucketlist app',
    description:
      'Simple bucketlist for me. Well, basically, my 2nd ever project upon return to coding, back in 2023.',
    tech: ['Vanilla'],
    highlights: [],
    github: 'https://github.com/Thalanas110/Easter_egg',
    demo: 'https://moralesbucketlist.netlify.app/',
  },
  {
    // Mary Chan Soberano, completed 25 August 2025
    id: 13,
    name: 'poem selectors',
    subtitle: 'Poem selection interface project',
    description:
      'Poem selection panes that I did for my now ex-girlfriend. Under maintenance to remove all names and only the UI plus poems will remain.',
    tech: ['Vanilla'],
    highlights: [],
    github: 'https://github.com/Thalanas110/poemselectors/',
    demo: 'https://poemselections.netlify.app/',
  },
  {
    id: 14,
    name: 'rpw hood attendance system',
    subtitle: 'Attendance tracking system for RP hood',
    description:
      "Attendance system for the now-dissolved Gazelvouer hood in RPW. Database dissolved, so don't expect this to work.",
    tech: ['Vanilla', 'Node.js', 'PostgreSQL', 'Supabase'],
    highlights: [],
    github: '#update-with-your-github-url',
    demo: 'https://attendance-tracking-self.vercel.app/',
  },
  {
    id: 15,
    name: 'anon corkboard',
    subtitle: 'Anonymous monthsary corkboard system',
    description: 'Simple anonymous corkboard system that I used for Gazelvouer Monthsary 2',
    tech: ['Vanilla', 'PostgreSQL', 'Node.js', 'Supabase'],
    highlights: [],
    github: 'https://github.com/zionren/corkboard',
    demo: 'https://corkboardnew.vercel.app/',
  },
  {
    id: 16,
    name: 'rp log out system',
    subtitle: 'Logout workflow for RP hood council',
    description:
      'Logout system for RP hood council members of a specific hood that needs more fixing and is barely working.',
    tech: ['Vanilla', 'Node.js', 'PostgreSQL', 'Supabase'],
    highlights: [],
    github: 'https://github.com/Thalanas110/arcanumlogout/',
    demo: 'https://arcanumlogout.vercel.app/',
  },
  {
    // first ever project
    id: 17,
    name: 'ITC Final Project',
    subtitle: 'First publicly shipped coding project',
    description:
      "Now-disabled final project for intro to computing back in 2023. My first ever coding project that's actually publicized.",
    tech: ['Vanilla'],
    highlights: [],
    github: 'https://github.com/Thalanas110/DIMATE_FinalProject.github.io',
    demo: 'https://dimatefinal.netlify.app/',
  },
]
