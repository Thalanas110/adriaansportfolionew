import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-4 pt-24 pb-20 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-signal text-glow-signal sm:text-xs">
            &gt; FLIGHT PLAN DECRYPTED. DISPLAYING...
          </p>

          <h1 className="animate-flicker mt-8 font-display text-[13vw] leading-[0.85] tracking-tight text-rad text-glow sm:text-[9vw] lg:text-[7.5rem]">
            <span className="mr-3 inline-block animate-rad-pulse align-top text-[0.45em]">✈</span>
            ADRIAAN M.
            <br />
            DIMATE
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
            <p className="font-display text-lg tracking-[0.22em] text-signal text-glow-signal sm:text-2xl">
              {profile.callsign}
            </p>
            <span className="tick-label">{profile.location}</span>
            <span className="flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-warn">
              <span className="h-1.5 w-1.5 animate-rad-pulse rounded-full bg-warn" />
              STATUS: CLEARED FOR TAKEOFF
            </span>
          </div>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
            An autistic developer building beautiful digital experiences and conquering the skies.
            Code meets cockpit — precision in every line, every test case, and every flight chart.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#archive"
              className="corner-marks group border border-rad bg-rad/10 px-6 py-3 text-xs tracking-[0.24em] text-rad transition-all hover:bg-rad hover:text-primary-foreground hover:shadow-[0_0_28px_-6px_var(--rad)]"
            >
              ◈ OPEN FLIGHT LOG
            </a>
            <a
              href="#transmission"
              className="border border-border px-6 py-3 text-xs tracking-[0.24em] text-muted-foreground transition-colors hover:border-signal hover:text-signal"
            >
              ▶ OPEN TRANSMISSION
            </a>
          </div>
        </div>

        <div className="lg:pl-6">
          <figure className="corner-marks panel box-glow scanlines relative mx-auto w-full max-w-md overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--signal)_16%,transparent)_0%,transparent_55%)]" />
            <div className="relative border-b border-border px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="tick-label text-[0.55rem]">VISUAL IDENT</p>
                  <p className="mt-1 font-display text-sm tracking-[0.22em] text-rad">PILOT PHOTO BAY</p>
                </div>
                <span className="tick-label text-[0.55rem]">READY</span>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden border-b border-border bg-[linear-gradient(180deg,color-mix(in_oklab,var(--panel)_90%,black)_0%,var(--background)_100%)]">
              <img
                src={profile.portrait}
                alt={`${profile.name} portrait`}
                className="h-full w-full object-cover object-center grayscale-[0.2] contrast-110 saturate-[0.8]"
                loading="eager"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.src =
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(`
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
                        <defs>
                          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#231f17"/>
                            <stop offset="100%" stop-color="#11100d"/>
                          </linearGradient>
                          <radialGradient id="glow" cx="50%" cy="20%" r="70%">
                            <stop offset="0%" stop-color="#b8ffb2" stop-opacity="0.18"/>
                            <stop offset="100%" stop-color="#b8ffb2" stop-opacity="0"/>
                          </radialGradient>
                        </defs>
                        <rect width="800" height="1000" fill="url(#bg)"/>
                        <rect width="800" height="1000" fill="url(#glow)"/>
                        <g fill="none" stroke="#b0a58a" stroke-opacity="0.28">
                          <path d="M0 140H800M0 280H800M0 420H800M0 560H800M0 700H800M0 840H800"/>
                          <path d="M140 0V1000M280 0V1000M420 0V1000M560 0V1000M700 0V1000"/>
                        </g>
                        <circle cx="400" cy="320" r="110" fill="#d8c38d" fill-opacity="0.2"/>
                        <path d="M250 860c18-130 94-220 150-220s132 90 150 220" fill="#d8c38d" fill-opacity="0.2"/>
                        <path d="M320 450c0-44 35-80 80-80s80 36 80 80-35 80-80 80-80-36-80-80Zm-55 390c8-96 70-164 135-164s127 68 135 164" fill="#d8c38d" fill-opacity="0.3"/>
                        <text x="50%" y="930" text-anchor="middle" fill="#b0a58a" fill-opacity="0.7" font-family="monospace" font-size="34" letter-spacing="6">ADD /profile.jpg</text>
                      </svg>
                    `);
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/55 to-transparent px-4 py-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="tick-label text-[0.55rem]">SUBJECT</p>
                    <p className="mt-1 font-display text-base tracking-[0.22em] text-signal">
                      CODE / QA / AVIATION
                    </p>
                  </div>
                  <span className="text-[0.65rem] tracking-[0.22em] text-muted-foreground">
                    FILE: PORTRAIT SLOT
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="flex items-center justify-between gap-4 px-4 py-3 text-[0.65rem] tracking-[0.22em] text-muted-foreground">
              <span>DROP A PHOTO AT /public/profile.jpg</span>
              <span className="text-signal">{profile.location}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <span className="tick-label block">SCROLL TO DESCEND</span>
        <span className="mt-2 block animate-bounce text-rad">▼</span>
      </div>
    </section>
  );
}
