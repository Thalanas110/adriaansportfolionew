import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '@/components/portfolio/nav'
import { Hero } from '@/components/portfolio/hero'
import { Bio } from '@/components/portfolio/bio'
import { WorkExperience } from '@/components/portfolio/work-experience'
import { Projects } from '@/components/portfolio/projects'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

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
      }}
    >
      <Nav />
      <main>
        <Hero />
        <Bio />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
