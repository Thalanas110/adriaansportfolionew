export type Tab = 'SE' | 'QA' | 'AVIATION'

export type PortfolioProject = {
  id: number
  featured: boolean
  name: string
  subtitle: string
  description: string
  tech: string[]
  highlights: string[]
  github: string
  demo: string
}


export const ALL_PROJECTS_URL = '/all-projects'

export const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'SE', label: 'SOFTWARE ENG.', icon: '⬡' },
  { id: 'QA', label: 'QA TESTING', icon: '◈' },
  { id: 'AVIATION', label: 'AVIATION', icon: '✈' },
]