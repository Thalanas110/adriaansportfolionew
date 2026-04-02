import { Link } from '@tanstack/react-router'
import {
  type PortfolioProject,
  QA_PROJECTS,
  SE_PROJECTS,
} from './portfolio-constants/projects-constants'
import { SOME_MORE_PROJECTS } from './portfolio-constants/somemore-constants'

type ProjectSource = 'SE' | 'QA' | 'DUMP'

type ListedProject = PortfolioProject & {
  source: ProjectSource
}

type ProjectSectionData = {
  title: string
  projects: ListedProject[]
  comingSoon?: boolean
}

const seEntries: ListedProject[] = SE_PROJECTS.map((project) => ({
  ...project,
  source: 'SE',
}))

const qaEntries: ListedProject[] = QA_PROJECTS.map((project) => ({
  ...project,
  source: 'QA',
}))

const moreEntries: ListedProject[] = SOME_MORE_PROJECTS.map((project) => ({
  ...project,
  source: 'DUMP',
}))

const normalizeName = (value: string) => value.trim().toLowerCase()

const canonicalName = (value: string) => {
  const normalized = normalizeName(value)

  if (normalized === 'i care center church website') {
    return 'i care center website'
  }

  return normalized
}

const mergedEntries: ListedProject[] = [...seEntries, ...moreEntries, ...qaEntries]

const dedupedEntries = mergedEntries.filter((project, index, allProjects) => {
  return (
    allProjects.findIndex(
      (candidate) => canonicalName(candidate.name) === canonicalName(project.name),
    ) === index
  )
})

const pickByNames = (names: string[]) => {
  const nameSet = new Set(names.map(canonicalName))
  return dedupedEntries.filter((project) => nameSet.has(canonicalName(project.name)))
}

const seriousEntries = pickByNames([
  'Media Remote Tool',
  'Botcha Buster',
  'JFLAP but for Web',
  'Exam Management System',
  'E-commerce Platform',
])

const minorEntries = pickByNames([
  'Devotion Blogsite',
  'Portfolio Website',
  'Personal homepage',
  'Weather App',
  'Practicum vlogsite',
  'Poem Blogsite',
])

const qualityAssuranceEntries: ListedProject[] = [...qaEntries]

const clientEntries = pickByNames([
  'I Care Center Website',
  'church website',
  'Arcanum Corkboard',
  'War of Dots',
]).filter((project) => project.source !== 'QA')

const backendApiEntries = pickByNames([
  'blogsite api',
  'Car Rental API v2',
  'Cookbook API',
])

const categorizedNames = new Set(
  [
    ...seriousEntries,
    ...minorEntries,
    ...qualityAssuranceEntries,
    ...clientEntries,
    ...backendApiEntries,
  ].map((project) => canonicalName(project.name)),
)

const playgroundEntries = dedupedEntries.filter(
  (project) => !categorizedNames.has(canonicalName(project.name)),
)

const SECTIONS: ProjectSectionData[] = [
  { title: 'Serious Projects', projects: seriousEntries },
  { title: 'Quality Assurance', projects: qualityAssuranceEntries },
  { title: 'Minor Projects', projects: minorEntries },
  { title: 'Used by Clients', projects: clientEntries },
  { title: 'Backend & APIs', projects: backendApiEntries },
  { title: 'Aviation (Coming Soon)', projects: [], comingSoon: true },
  { title: 'Playground', projects: playgroundEntries },
]

function ProjectListItem({ project }: { project: ListedProject }) {
  return (
    <li className="border border-[#39FF14]/20 bg-[#39FF14]/[0.03] p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
        <span
          className="text-[10px] px-2 py-1 border border-[#39FF14]/35 text-[#39FF14]/80 tracking-[0.15em]"
          style={{ fontFamily: 'Share Tech Mono, monospace' }}
        >
          {project.source}
        </span>
        <h3
          className="text-[#39FF14] text-base sm:text-lg tracking-[0.06em] font-bold"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          {project.name}
        </h3>
      </div>

      <p
        className="text-[#39FF14]/75 text-sm leading-relaxed"
        style={{ fontFamily: 'Share Tech Mono, monospace' }}
      >
        {project.subtitle}
      </p>

      <p
        className="mt-2 text-[#39FF14]/70 text-sm leading-relaxed"
        style={{ fontFamily: 'Share Tech Mono, monospace' }}
      >
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.slice(0, 6).map((tech) => (
          <span
            key={`${project.source}-${project.id}-${tech}`}
            className="text-[11px] px-2 py-0.5 border border-[#39FF14]/20 text-[#39FF14]/70"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-4">
        {project.github && project.github !== '#' && !project.github.startsWith('#') ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#39FF14]/80 hover:text-[#39FF14] tracking-[0.12em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            GITHUB
          </a>
        ) : (
          <span
            className="text-xs text-[#39FF14]/50 tracking-[0.12em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            NO PUBLIC REPO
          </span>
        )}

        {project.demo && project.demo !== '#' ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#CAFF00]/80 hover:text-[#CAFF00] tracking-[0.12em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            LIVE
          </a>
        ) : (
          <span
            className="text-xs text-[#CAFF00]/55 tracking-[0.12em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            DEPLOYMENT PENDING
          </span>
        )}
      </div>
    </li>
  )
}

function ProjectSection({
  title,
  projects,
  comingSoon,
}: {
  title: string
  projects: ListedProject[]
  comingSoon?: boolean
}) {
  return (
    <section className="relative border border-[#39FF14]/15 bg-black/20 p-5 sm:p-6">
      <h2
        className="text-[#39FF14] text-lg sm:text-xl tracking-[0.1em] font-bold"
        style={{ fontFamily: 'Orbitron, monospace' }}
      >
        {title}
      </h2>

      <div
        className="h-px mt-3 mb-4"
        style={{
          background: 'linear-gradient(90deg, #39FF14, transparent)',
          boxShadow: '0 0 8px #39FF14',
        }}
      />

      {comingSoon ? (
        <div
          className="text-[#CAFF00]/80 text-sm tracking-[0.1em]"
          style={{ fontFamily: 'Share Tech Mono, monospace' }}
        >
          Flight projects are not published yet.
        </div>
      ) : (
        <ul className="space-y-3">
          {projects.map((project) => (
            <ProjectListItem
              key={`${project.source}-${project.id}-${project.name}`}
              project={project}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export function AllProjectsPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#060604',
        fontFamily: 'Share Tech Mono, monospace',
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)',
        }}
      />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-8 sm:mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-[#39FF14]/30 px-3 py-2 text-[#39FF14]/80 hover:text-[#39FF14] hover:border-[#39FF14]/60 transition-colors text-xs tracking-[0.12em]"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            BACK TO PORTFOLIO
          </Link>

          <h1
            className="mt-5 text-3xl sm:text-4xl text-[#39FF14] font-black tracking-[0.08em]"
            style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 20px rgba(57,255,20,0.35)',
            }}
          >
            PROJECT DUMP
          </h1>

          <p
            className="mt-3 text-[#39FF14]/75 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
          >
            Single-page list view with your exact groups, plus Playground for the rest.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {SECTIONS.map((section) => (
            <ProjectSection
              key={section.title}
              title={section.title}
              projects={section.projects}
              comingSoon={section.comingSoon}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
