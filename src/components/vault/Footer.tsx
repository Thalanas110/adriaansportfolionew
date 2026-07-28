import { profile } from "@/data/portfolio";

const TICKER = [
  "SOFTWARE ENGINEERING",
  "QUALITY ASSURANCE",
  "AVIATION",
  "TEST AUTOMATION",
  "REGRESSION SWEEPS",
  "EDGE CASE HUNTING",
  "CI/CD PIPELINES",
  "FLIGHT CHARTS",
];

export function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-10 text-[0.7rem] tracking-[0.3em] text-rad/70"
          >
            {t} <span className="text-signal">✈</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <span className="tick-label">
          © {new Date().getFullYear()} {profile.name} — VAULT TERMINAL
        </span>
        <span className="tick-label text-rad">RADAR STABLE · END OF FLIGHT PLAN</span>
      </div>
    </footer>
  );
}
