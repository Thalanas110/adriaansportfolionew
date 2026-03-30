export interface WorkItem {
  role: string
  company: string
  type: string
  location: string
  period: string
  current: boolean
  description: string
  highlights: string[]
  tags: string[]
}

export const WORK: WorkItem[] = [
  {
    role: 'Volunteer Software Developer',
    company: 'I Care Center',
    type: 'Volunteer',
    location: 'Olongapo City, Philippines',
    period: 'Jun 2025 - Present',
    current: true,
    description:
      'Improved OBS Remote for livestreams, built a scalable church site and app, and managed agile workflows with ministry teams',
    highlights: [
      'A new, improved church website',
      'A unified OBS-ProPresenter remote control system',
    ],
    tags: ['React', 'TypeScript', 'OBS', 'Web Development']
  },
  {
    role: 'Volunteer Production Staff & QA Assistant',
    company: 'I Care Center',
    type: 'Volunteer',
    location: 'Olongapo City, Philippines',
    period: 'Jan 2024 - Present',
    current: true,
    description:
      'Operated and QA`d ProPresenter for live and online services, syncing media in real time and resolving tech issues with worship and media teams.',
    highlights: [
      'ProPresenter and OBS setup and operation for 100+ live and online services',
      'OBS Remote configuration and troubleshooting for livestreams',
      'Collaborated with worship and other nteams to resolve tech issues and ensure smooth service flow',
    ],
    tags: ['ProPresenter', 'OBS', 'Tech Support'],
  },
  {
    role: 'Data Encoder & Macro Programmer',
    company: 'ACE Medical Centre - Baypointe Hospital',
    type: 'Internship',
    location: 'Lot 1A-1B Dewey Avenue, Subic Bay Freeport Zone, Philippines',
    period: 'Jul 2025 - Aug 2025',
    current: false,
    description:
      'Interned about encoding patient data and created macros to improve encoding efficiency.',
    highlights: [
      'Fast and accurate encoding of patient data, ensuring data integrity and confidentiality',
    ],
    tags: ['Data Encoding', 'Macro Programming'],
  },
  {
    role: 'Data Encoder & Bookkeeper',
    company: 'TDA Car Rental',
    type: 'Part-time',
    location: 'Olongapo City, Philippines',
    period: 'April 2023 - Present',
    current: true,
    description:
      'Part-time role involving data encoding and bookkeeping tasks, ensuring accurate record-keeping and financial management for the car rental business.',
    highlights: [
      'Efficiently encoded rental transactions and customer data, maintaining organized records for easy retrieval and analysis',
      'Managed bookkeeping tasks, including tracking expenses, generating financial reports, and assisting with budgeting to support the financial health of the business'
    ],
    tags: ['Data Encoding', 'Bookkeeping'],
  },
]

export const TYPE_COLOR: Record<string, string> = {
  'Full-time': '#39FF14',
  'Part-time': '#CAFF00',
  Internship: '#00FFFF',
  Contract: '#FF9500',
}