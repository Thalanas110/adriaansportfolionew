import type { Project } from "@/data/featured-qa";
import { Reveal, Tilt } from "./primitives";

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const classified = !p.demo;
  return (
    <Reveal delay={(index % 2) * 90}>
      <Tilt max={7} className="h-full">
        <article className="panel scanlines group relative h-full overflow-hidden p-6 transition-shadow duration-300 hover:box-glow">
          <div className="flex items-start justify-between gap-3">
            <span className="font-display text-5xl leading-none text-rad/25 transition-colors group-hover:text-rad/60">
              {p.id}
            </span>
            <div className="flex flex-col items-end gap-1.5">
              <span
                data-classified={classified}
                className="border border-signal/60 px-2 py-0.5 text-[0.58rem] tracking-[0.2em] text-signal data-[classified=true]:border-warn/60 data-[classified=true]:text-warn"
              >
                {classified ? "CLASSIFIED" : "DEPLOYED"}
              </span>
              <span className="border border-border px-2 py-0.5 text-[0.55rem] tracking-[0.2em] text-muted-foreground">
                {p.category}
              </span>
            </div>
          </div>

          <h3 className="mt-4 font-display text-2xl leading-tight tracking-wide text-foreground transition-colors group-hover:text-rad">
            {p.title}
          </h3>
          <p className="tick-label mt-1 normal-case">{p.subtitle}</p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

          {p.highlights.length > 0 && (
            <>
              <p className="tick-label mt-6 text-rad">Highlights</p>
              <ul className="mt-2 space-y-1">
                {p.highlights.map((h) => (
                  <li key={h} className="text-xs text-muted-foreground">
                    — {h}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className="border border-border px-2 py-0.5 text-[0.6rem] tracking-[0.12em] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-4 border-t border-border pt-4">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-[0.68rem] tracking-[0.2em] text-rad transition-colors hover:text-signal"
              >
                GITHUB →
              </a>
            )}
            {p.demo ? (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="text-[0.68rem] tracking-[0.2em] text-rad transition-colors hover:text-signal"
              >
                DEMO →
              </a>
            ) : (
              <span className="text-[0.68rem] tracking-[0.2em] text-muted-foreground">
                NO PUBLIC DEMO
              </span>
            )}
          </div>
        </article>
      </Tilt>
    </Reveal>
  );
}
