import { createFileRoute } from '@tanstack/react-router'
import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Nav } from '@/components/portfolio/nav'
import { Hero } from '@/components/portfolio/hero'

const Bio = lazy(() =>
  import('@/components/portfolio/bio').then((module) => ({ default: module.Bio })),
)
const WorkExperience = lazy(() =>
  import('@/components/portfolio/work-experience').then((module) => ({
    default: module.WorkExperience,
  })),
)
const Projects = lazy(() =>
  import('@/components/portfolio/projects').then((module) => ({
    default: module.Projects,
  })),
)
const Contact = lazy(() =>
  import('@/components/portfolio/contact').then((module) => ({
    default: module.Contact,
  })),
)
const Footer = lazy(() =>
  import('@/components/portfolio/footer').then((module) => ({
    default: module.Footer,
  })),
)

function DeferredSection({
  children,
  minHeight,
  anchorId,
}: {
  children: ReactNode
  minHeight: number
  anchorId?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || isVisible) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '420px 0px' },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  return (
    <div
      ref={ref}
      id={isVisible ? undefined : anchorId}
      style={isVisible ? undefined : { minHeight }}
    >
      {isVisible ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  )
}

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#060604',
        fontFamily: 'Share Tech Mono, monospace',
        lineHeight: 1.6,
      }}
    >
      <Nav />
      <main>
        <Hero />
        <DeferredSection minHeight={860} anchorId="bio">
          <Bio />
        </DeferredSection>
        <DeferredSection minHeight={820} anchorId="experience">
          <WorkExperience />
        </DeferredSection>
        <DeferredSection minHeight={920} anchorId="projects">
          <Projects />
        </DeferredSection>
        <DeferredSection minHeight={820} anchorId="contact">
          <Contact />
        </DeferredSection>
      </main>
      <DeferredSection minHeight={200}>
        <Footer />
      </DeferredSection>
    </div>
  )
}
