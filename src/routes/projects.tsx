import { createFileRoute, Link } from "@tanstack/react-router";
import { ClientOnly } from "@/components/ClientOnly";
import { projectDumpQAProjects } from "@/data/project-dump-qa";
import { projectDumpSEProjects } from "@/data/project-dump-se";
import { BootScreen } from "@/components/vault/BootScreen";
import { SceneBackdrop } from "@/components/vault/SceneBackdrop";
import { SectionHeader } from "@/components/vault/primitives";
import { ProjectCard } from "@/components/vault/ProjectCard";
import { Footer } from "@/components/vault/Footer";

const TITLE = "All Projects — Adriaan M. Dimate";
const DESC =
  "Full declassified flight log of every software engineering and QA build by Adriaan M. Dimate: APIs, web apps, tools and experiments.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AllProjects,
});

function AllProjects() {
  const totalProjects = projectDumpQAProjects.length + projectDumpSEProjects.length;

  return (
    <main className="relative min-h-screen">
      <ClientOnly>
        <BootScreen />
      </ClientOnly>
      <SceneBackdrop />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="animate-rad-pulse text-rad">☢</span>
            <span className="font-display text-sm tracking-[0.28em] text-rad text-glow">
              VAULT-TERMINAL
            </span>
          </Link>
          <Link
            to="/"
            hash="archive"
            className="text-[0.7rem] tracking-[0.2em] text-muted-foreground transition-colors hover:text-rad"
          >
            ◀ RETURN TO BASE
          </Link>
        </div>
      </header>

      <div className="relative z-10 px-4 pt-32 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader code="DB://FULL" title="ALL PROJECTS" tag="//DECLASSIFIED-INDEX" />
          <p className="-mt-8 mb-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Everything in the complete project dump — {totalProjects} logged builds, experiments and
            APIs. QA and software engineering records are separated below.
          </p>

          <div className="space-y-24">
            <section aria-label="QA projects">
              <SectionHeader code="DB://QA" title="QA OPERATIONS" tag="//QUALITY-ASSURANCE" />
              <div className="grid gap-6 lg:grid-cols-2">
                {projectDumpQAProjects.map((p, i) => (
                  <ProjectCard key={`${p.category}-${p.id}`} p={p} index={i} />
                ))}
              </div>
            </section>

            <section aria-label="Software engineering projects">
              <SectionHeader code="DB://SE" title="SOFTWARE ENGINEERING" tag="//BUILD-ARCHIVE" />
              <div className="grid gap-6 lg:grid-cols-2">
                {projectDumpSEProjects.map((p, i) => (
                  <ProjectCard key={`${p.category}-${p.id}`} p={p} index={i} />
                ))}
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
