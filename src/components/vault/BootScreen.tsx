import { useEffect, useState } from "react";

const BOOT = [
  "> SYSTEM BOOT... OK",
  "> RADAR ONLINE... OK",
  "> CLEARANCE LEVEL: MAXIMUM",
  "> FLIGHT PLAN DECRYPTED. DISPLAYING...",
];

const STEP_MS = 520;

/** Full-screen vault terminal boot sequence shown before the site reveals. */
export function BootScreen() {
  const [shown, setShown] = useState(0);
  const [closing, setClosing] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT.forEach((_, i) => {
      timers.push(setTimeout(() => setShown(i + 1), STEP_MS * (i + 1)));
    });
    timers.push(setTimeout(() => setClosing(true), STEP_MS * (BOOT.length + 1)));
    timers.push(setTimeout(() => setDone(true), STEP_MS * (BOOT.length + 1) + 700));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  if (done) return null;

  const progress = Math.round((shown / BOOT.length) * 100);

  return (
    <div
      role="status"
      aria-live="polite"
      data-closing={closing}
      className="scanlines fixed inset-0 z-[100] flex items-center justify-center bg-background px-6 transition-opacity duration-700 data-[closing=true]:pointer-events-none data-[closing=true]:opacity-0"
    >
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-3">
          <span className="animate-rad-pulse text-2xl text-rad">☢</span>
          <span className="font-display text-sm tracking-[0.3em] text-rad text-glow">
            VAULT-TERMINAL
          </span>
        </div>

        <div className="mt-8 min-h-[6.5rem] space-y-1 font-mono text-[0.7rem] tracking-[0.14em] text-signal sm:text-xs">
          {BOOT.slice(0, shown).map((line) => (
            <p key={line} className="text-glow-signal">
              {line}
            </p>
          ))}
          <span className="animate-caret text-signal">█</span>
        </div>

        <div className="mt-8 h-px w-full bg-border">
          <div
            className="h-px bg-rad shadow-[0_0_10px_var(--rad)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between">
          <span className="tick-label">DECRYPTING ARCHIVE</span>
          <span className="tick-label text-warn">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
