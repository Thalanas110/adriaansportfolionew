import { operations } from "@/data/portfolio";
import { Reveal, SectionHeader } from "./primitives";

export function FieldOps() {
  return (
    <section id="operations" className="relative scroll-mt-20 px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader code="LOG://" title="FLIGHT OPERATIONS" tag="//WORK-HISTORY" />

        <div className="relative border-l border-border pl-6 sm:pl-10">
          {operations.map((op, i) => (
            <Reveal key={op.role + op.org} delay={i * 80}>
              <div className="group relative mb-10">
                <span className="absolute -left-[1.72rem] top-2 h-2.5 w-2.5 rotate-45 border border-rad bg-background transition-all group-hover:bg-rad sm:-left-[2.72rem]" />
                <div className="panel corner-marks p-6 transition-transform duration-300 group-hover:translate-x-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl tracking-wide text-rad">{op.role}</h3>
                    <span className="border border-border px-2 py-0.5 text-[0.6rem] tracking-[0.2em] text-muted-foreground">
                      {op.type.toUpperCase()}
                    </span>
                    {op.active && (
                      <span className="flex items-center gap-1.5 text-[0.6rem] tracking-[0.2em] text-signal">
                        <span className="h-1.5 w-1.5 animate-rad-pulse rounded-full bg-signal" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-foreground">{op.org}</p>
                  <p className="tick-label mt-1">
                    {op.period} · {op.place}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{op.summary}</p>

                  <ul className="mt-4 space-y-1.5">
                    {op.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="text-rad">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {op.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-muted px-2.5 py-1 text-[0.62rem] tracking-[0.16em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <p className="tick-label">END OF FIELD LOG — {operations.length} OPERATIONS RECORDED</p>
        </div>
      </div>
    </section>
  );
}
