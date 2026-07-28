import { profile, stack, STACK_LOGOS, STACK_LOGO_IMAGES } from "@/data/portfolio";
import { Reveal, SectionHeader, Tilt } from "./primitives";

function StackLogo({ item }: { item: string }) {
  const image = STACK_LOGO_IMAGES[item];
  const icon = STACK_LOGOS[item];

  if (image) {
    return (
      <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-background/40 p-0.5">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="size-3.5 object-contain"
        />
      </span>
    );
  }

  if (icon) {
    return (
      <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-background/40">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-3.5"
          fill="currentColor"
          style={{ color: `#${icon.hex}` }}
        >
          <path d={icon.path} />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-background/40">
      <span className="size-1.5 bg-signal/80" />
    </span>
  );
}

export function Dossier() {
  return (
    <section id="dossier" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader code="FILE://" title="PILOT DOSSIER" tag="//CLEARANCE-MAX" />

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <Tilt className="h-full" max={5}>
              <article className="panel corner-marks scanlines h-full p-6 sm:p-8">
                <h3 className="font-display text-2xl tracking-wide text-rad">Flight Profile</h3>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {profile.bio.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
                  {profile.traits.map((t) => (
                    <div key={t.title} className="bg-card p-4">
                      <p className="text-xs tracking-[0.2em] text-signal">{t.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Tilt>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={100}>
              <div className="panel corner-marks p-6">
                <span className="tick-label text-rad">Education</span>
                <div className="mt-4 space-y-4">
                  {profile.education.map((e) => (
                    <div key={e.degree} className="border-l border-rad/50 pl-4">
                      <p className="text-sm text-foreground">{e.degree}</p>
                      <p className="text-xs text-muted-foreground">{e.school}</p>
                      <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-signal">{e.years}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="panel corner-marks p-6">
                <span className="tick-label text-rad">♥ What I Love</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.loves.map((l) => (
                    <span
                      key={l}
                      className="border border-border px-3 py-1 text-[0.68rem] tracking-[0.16em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="panel corner-marks p-6">
                <span className="tick-label text-rad">Connect</span>
                <div className="mt-4 grid grid-cols-2 gap-px bg-border">
                  {[
                    { label: "GitHub", href: profile.github },
                    { label: "LinkedIn", href: profile.linkedin },
                    { label: "Facebook", href: profile.facebook },
                    { label: "Email", href: `mailto:${profile.email}` },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-card px-4 py-3 text-xs tracking-[0.18em] text-muted-foreground transition-colors hover:bg-rad/10 hover:text-rad"
                    >
                      {s.label} →
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Tech stack */}
        <div id="stack" className="mt-24 scroll-mt-24">
          <Reveal>
            <div className="mb-8 flex items-end justify-between border-b border-border pb-3">
              <h3 className="font-display text-3xl tracking-wide text-signal text-glow-signal">
                TECH STACK
              </h3>
              <span className="tick-label">//LOADOUT</span>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stack.map((group, i) => (
              <Reveal key={group.group} delay={i * 70}>
                <Tilt max={8}>
                  <div className="panel h-full p-5 transition-shadow hover:box-glow">
                    <p className="tick-label text-rad">{group.group}</p>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <StackLogo item={item} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
