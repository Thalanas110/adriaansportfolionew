import { useRef, type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal-up", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  code,
  title,
  tag,
}: {
  code: string;
  title: string;
  tag: string;
}) {
  return (
    <Reveal className="mb-14">
      <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
        <div>
          <span className="tick-label text-rad">{code}</span>
          <h2 className="font-display text-4xl leading-none tracking-tight text-glow text-rad sm:text-6xl">
            {title}
          </h2>
        </div>
        <span className="tick-label hidden shrink-0 pb-1 sm:block">{tag}</span>
      </div>
    </Reveal>
  );
}

/** Cursor-tracked 3D tilt wrapper. */
export function Tilt({
  children,
  className,
  max = 9,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateX(${-py * max}deg) rotateY(${px * max}deg) translateZ(14px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1100px) rotateX(0) rotateY(0) translateZ(0)";
  };

  return (
    <div style={{ perspective: "1100px" }} className={className}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="h-full transition-transform duration-300 ease-out will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
