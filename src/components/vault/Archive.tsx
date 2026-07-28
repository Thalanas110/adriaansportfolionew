import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./primitives";
import { ProjectCard } from "./ProjectCard";

const FILTERS = ["QA TESTING", "SOFTWARE ENG."] as const;

export function Archive() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("QA TESTING");
  const list = projects.filter((p) => p.category === filter);

  return (
    <section id="archive" className="relative scroll-mt-20 px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader code="DB://" title="FLIGHT LOG" tag="//PROJECT-INDEX" />

        <Reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-px bg-border">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  data-active={filter === f}
                  className="bg-card px-5 py-2.5 text-[0.68rem] tracking-[0.2em] text-muted-foreground transition-colors hover:text-rad data-[active=true]:bg-rad/15 data-[active=true]:text-rad data-[active=true]:text-glow"
                >
                  ⬡ {f}
                </button>
              ))}
            </div>
            <Link
              to="/projects"
              className="border border-border px-5 py-2.5 text-[0.68rem] tracking-[0.2em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
            >
              ▶ FULL DECLASSIFIED INDEX
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {list.map((p, i) => (
            <ProjectCard key={`${p.category}-${p.id}`} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
