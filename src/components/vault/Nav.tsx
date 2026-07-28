import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/use-reveal";

const LINKS = [
  { id: "dossier", label: "DOSSIER" },
  { id: "stack", label: "STACK" },
  { id: "operations", label: "OPS" },
  { id: "archive", label: "ARCHIVE" },
  { id: "transmission", label: "TX" },
];

export function Nav() {
  const progress = useScrollProgress();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="animate-rad-pulse text-rad">☢</span>
            <span className="font-display text-sm tracking-[0.28em] text-rad text-glow">
              VAULT-TERMINAL
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-active={active === l.id}
                className="px-3 py-1.5 text-[0.7rem] tracking-[0.2em] text-muted-foreground transition-colors hover:text-rad data-[active=true]:text-rad data-[active=true]:text-glow"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <span className="tick-label hidden sm:block">
            RAD <span className="text-warn">{Math.round(progress * 100)}%</span>
          </span>
        </div>
        <div className="h-px w-full bg-border">
          <div
            className="h-px bg-rad shadow-[0_0_10px_var(--rad)]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </header>
  );
}
