import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center px-4 pt-24 pb-20 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <span className="tick-label block">SCROLL TO DESCEND</span>
        <span className="mt-2 block animate-bounce text-rad">▼</span>
      </div>
    </section>
  );
}
